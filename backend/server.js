import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Email Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'your-app-password'
  }
})

// Data Files
const PRODUCTS_FILE = path.join(__dirname, 'data', 'products.json')
const INQUIRIES_FILE = path.join(__dirname, 'data', 'inquiries.json')

// Ensure data directory exists
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'))
}

// Helper function to read JSON files
const readJSONFile = (filePath) => {
  if (!fs.existsSync(filePath)) {
    return []
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

// Helper function to write JSON files
const writeJSONFile = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

// Initialize products if they don't exist
const initializeProducts = () => {
  if (!fs.existsSync(PRODUCTS_FILE)) {
    const products = [
      {
        id: 1,
        name: 'Turmeric Powder',
        emoji: '🟡',
        price: 250,
        minOrder: 50,
        description: 'Pure and finest turmeric powder sourced from premium farms. Rich in curcumin and used in traditional Indian cuisine.',
        rating: 5,
        reviews: 124,
        benefits: ['Rich in antioxidants', 'Anti-inflammatory properties', 'Aids digestion', 'Improves skin health']
      },
      {
        id: 2,
        name: 'Cumin Seeds',
        emoji: '🟤',
        price: 400,
        minOrder: 50,
        description: 'High-quality whole cumin seeds with strong aroma. Perfect for tempering and seasoning dishes.',
        rating: 5,
        reviews: 98,
        benefits: ['Improves digestion', 'Rich in iron', 'Anti-microbial properties', 'Enhances flavor']
      },
      {
        id: 3,
        name: 'Red Chili Powder',
        emoji: '🌶️',
        price: 180,
        minOrder: 50,
        description: 'Freshly ground red chili powder with perfect heat level. Adds vibrant color and spice to dishes.',
        rating: 4,
        reviews: 156,
        benefits: ['Boosts metabolism', 'Rich in vitamins', 'Aids weight loss', 'Improves circulation']
      },
      {
        id: 4,
        name: 'Coriander Seeds',
        emoji: '⚪',
        price: 350,
        minOrder: 50,
        description: 'Fragrant coriander seeds with subtle sweet aroma. Essential spice for Indian curries and tempering.',
        rating: 5,
        reviews: 87,
        benefits: ['Aids digestion', 'Reduces inflammation', 'Improves bone health', 'Antioxidant-rich']
      },
      {
        id: 5,
        name: 'Black Pepper',
        emoji: '⬛',
        price: 500,
        minOrder: 50,
        description: 'Premium black peppercorns from the finest plantations. Adds sharp flavor to any dish.',
        rating: 5,
        reviews: 112,
        benefits: ['Enhances nutrient absorption', 'Anti-inflammatory', 'Rich in antioxidants', 'Aids digestion']
      },
      {
        id: 6,
        name: 'Green Cardamom',
        emoji: '💚',
        price: 1200,
        minOrder: 50,
        description: 'Whole green cardamom pods with aromatic flavor. Perfect for spiced teas and desserts.',
        rating: 5,
        reviews: 64,
        benefits: ['Freshens breath', 'Aids digestion', 'Detoxifying properties', 'Unique flavor profile']
      }
    ]
    writeJSONFile(PRODUCTS_FILE, products)
  }
}

// Initialize products on startup
initializeProducts()

// Routes

// Get all products
app.get('/api/products', (req, res) => {
  const products = readJSONFile(PRODUCTS_FILE)
  res.json(products)
})

// Get single product
app.get('/api/products/:id', (req, res) => {
  const products = readJSONFile(PRODUCTS_FILE)
  const product = products.find(p => p.id === parseInt(req.params.id))
  
  if (product) {
    res.json(product)
  } else {
    res.status(404).json({ error: 'Product not found' })
  }
})

// Submit inquiry
app.post('/api/inquiries', async (req, res) => {
  try {
    const { name, email, phone, company, products, quantity, message } = req.body

    // Validate required fields
    if (!name || !email || !phone || !products || !quantity) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Create inquiry object
    const inquiry = {
      id: Date.now(),
      ...req.body,
      date: new Date().toISOString(),
      status: 'new'
    }

    // Save to JSON
    const inquiries = readJSONFile(INQUIRIES_FILE)
    inquiries.push(inquiry)
    writeJSONFile(INQUIRIES_FILE, inquiries)

    // Send email notification to customer
    const customerEmail = {
      to: email,
      subject: 'Inquiry Received - Divaas Spices House',
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Hello ${name},</p>
        <p>We have received your bulk order inquiry:</p>
        <ul>
          <li><strong>Products:</strong> ${products}</li>
          <li><strong>Quantity:</strong> ${quantity} kg</li>
          <li><strong>Company:</strong> ${company || 'Not specified'}</li>
        </ul>
        <p>Our team will contact you within 24 hours with a customized quotation.</p>
        <p>For urgent inquiries, please reach out via WhatsApp: +91 98765 43210</p>
        <br/>
        <p>Best regards,<br/>Divaas Spices House Team</p>
      `
    }

    // Send email notification to admin
    const adminEmail = {
      to: process.env.EMAIL_USER || 'admin@divaas.com',
      subject: `New Inquiry - ${company || name}`,
      html: `
        <h2>New Bulk Order Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || 'Not specified'}</p>
        <p><strong>Products:</strong> ${products}</p>
        <p><strong>Quantity:</strong> ${quantity} kg</p>
        <p><strong>Message:</strong> ${message || 'No additional message'}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `
    }

    // Send both emails
    await transporter.sendMail(customerEmail)
    await transporter.sendMail(adminEmail)

    res.json({ success: true, message: 'Inquiry submitted successfully', inquiryId: inquiry.id })
  } catch (error) {
    console.error('Error submitting inquiry:', error)
    res.status(500).json({ error: 'Failed to submit inquiry' })
  }
})

// Get all inquiries (admin endpoint)
app.get('/api/inquiries', (req, res) => {
  const inquiries = readJSONFile(INQUIRIES_FILE)
  res.json(inquiries)
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' })
})

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`📧 Email notifications configured for: ${process.env.EMAIL_USER || 'not-set'}`)
})
