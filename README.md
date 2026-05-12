# 🌶️ Divaas Spices House - Export Business Website

A modern e-commerce platform for spice exports with WhatsApp integration, inquiry system, and multi-channel ordering.

## 📋 Project Overview

**Timeline**: 8 Days to MVP  
**Stack**: React + Express.js + JSON (MongoDB later)  
**Deployment**: Vercel (Frontend) + Render (Backend)  
**Payment**: WhatsApp Order System + Inquiry Forms

---

## 🎯 MVP Features (Launch Phase)

✅ **Homepage** - Eye-catching landing page  
✅ **Product Listing** - Display all spice products  
✅ **Product Details** - Individual product pages  
✅ **WhatsApp Button** - Direct messaging to sales team  
✅ **Inquiry Form** - Bulk order requests  
✅ **Backend APIs** - Product management & inquiries  
✅ **Responsive UI** - Mobile-first design  
✅ **JSON Storage** - Simple database for MVP  

---

## 📅 Development Timeline

### **DAY 1–2: Project Setup**
- [ ] Initialize React project with Vite
- [ ] Setup Express.js backend
- [ ] Install Tailwind CSS
- [ ] Create folder structure
- [ ] Setup GitHub & environment variables

### **DAY 3–4: Frontend - Homepage & Products**
- [ ] Build responsive Homepage
- [ ] Create Product Card component
- [ ] Build Product Listing page
- [ ] Add Product Detail page
- [ ] Implement responsive navigation

### **DAY 5–6: Backend & Database**
- [ ] Create Express APIs
- [ ] Setup JSON storage (products.json, inquiries.json)
- [ ] Build inquiry submission endpoint
- [ ] Create product fetch endpoints
- [ ] Test all APIs

### **DAY 7: WhatsApp & Inquiry System**
- [ ] Integrate WhatsApp button
- [ ] Setup inquiry form submission
- [ ] Email notifications for inquiries
- [ ] Confirmation messages

### **DAY 8: Deployment**
- [ ] Deploy frontend to Vercel
- [ ] Deploy backend to Render
- [ ] Setup environment variables
- [ ] SSL certificates & security
- [ ] Final testing

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- Git
- Vercel account (for frontend)
- Render account (for backend)

### Project Structure
```
Divaas_Spices_house/
├── frontend/                 # React app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Express server
│   ├── routes/
│   ├── controllers/
│   ├── data/
│   │   ├── products.json
│   │   └── inquiries.json
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── docs/                     # Documentation
    ├── SETUP.md
    ├── DEPLOYMENT.md
    └── WHATSAPP.md
```

---

## 🎨 Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React + Vite | Fast, modern UI |
| Styling | Tailwind CSS | Responsive design |
| Backend | Express.js | REST APIs |
| Database | JSON (→ MongoDB) | Data storage |
| Hosting | Vercel | Frontend deployment |
| Backend Host | Render | Backend deployment |
| Communication | WhatsApp API | Order inquiries |

---

## 💬 WhatsApp Integration

**How it works:**
1. Customer clicks "Order via WhatsApp" button
2. Opens WhatsApp with pre-filled message to your business number
3. Customer sends inquiry details
4. You can process manually or via webhook

**Setup:**
- Business WhatsApp Number: `[YOUR_NUMBER]`
- Message Template: "Hi, I'm interested in ordering..."
- Inquiry Form: Stores bulk order details in JSON

---

## 📊 Future Upgrades (Post-MVP)

- 🗄️ MongoDB integration (scalable database)
- 👤 Admin Panel (product management)
- 🔐 Authentication (user accounts)
- 💳 Payment Gateway (Stripe/Razorpay)
- 📦 Order Tracking System
- 🖼️ Cloudinary (image management)
- 📧 Email Automation
- 📱 Mobile App

---

## 📝 Documentation

- **[SETUP.md](./docs/SETUP.md)** - Complete setup instructions
- **[DEPLOYMENT.md](./docs/DEPLOYMENT.md)** - How to deploy to Vercel & Render
- **[WHATSAPP.md](./docs/WHATSAPP.md)** - WhatsApp integration guide
- **[API.md](./docs/API.md)** - Backend API documentation

---

## 🔗 Links

- 🌐 Frontend: `https://your-domain.vercel.app` (coming soon)
- 🔧 Backend: `https://your-backend.onrender.com` (coming soon)
- 📱 WhatsApp: `https://wa.me/your_number`

---

## 📞 Support

For questions about setup or development, check the docs folder or create an issue.

---

**Status**: 🟡 In Development (Starting Phase)  
**Last Updated**: 2026-05-12
