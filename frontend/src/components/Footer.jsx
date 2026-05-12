import React from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <span className="text-2xl">🌶️</span>
              <span>Divaas Spices</span>
            </h3>
            <p className="text-gray-300 text-sm">Premium quality spices for export business. Authentic Indian flavors delivered worldwide.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
              <li><Link to="/products" className="hover:text-orange-400 transition">Products</Link></li>
              <li><Link to="/inquiry" className="hover:text-orange-400 transition">Get Quote</Link></li>
              <li><a href="#" className="hover:text-orange-400 transition">About Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span>info@divaas.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>India</span>
              </li>
            </ul>
          </div>

          {/* Social & Order */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Order Now</h4>
            <a 
              href="https://wa.me/917448361008?text=Hi%20Divaas%20Spices,%20I%20want%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-600 px-4 py-3 rounded-lg hover:bg-green-700 transition font-semibold w-full"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>
            <p className="text-gray-400 text-xs mt-4 text-center">Available 24/7 for bulk orders</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-gray-400 text-sm">© 2026 Divaas Spices House. All rights reserved.</p>
            <div className="flex space-x-4 text-gray-400 text-sm md:justify-end">
              <a href="#" className="hover:text-orange-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400 transition">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
