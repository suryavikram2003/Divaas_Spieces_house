import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ShoppingCart, MessageCircle } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
            <span className="text-2xl">🌶️</span>
            <span>Divaas Spices</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-orange-100 transition">Home</Link>
            <Link to="/products" className="hover:text-orange-100 transition">Products</Link>
            <Link to="/inquiry" className="hover:text-orange-100 transition">Get Quote</Link>
            <a 
              href="https://wa.me/917448361008?text=Hi%20Divaas%20Spices,%20I%20want%20to%20order%20bulk%20spices"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-orange-700 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block px-4 py-2 hover:bg-orange-700 rounded transition">Home</Link>
            <Link to="/products" className="block px-4 py-2 hover:bg-orange-700 rounded transition">Products</Link>
            <Link to="/inquiry" className="block px-4 py-2 hover:bg-orange-700 rounded transition">Get Quote</Link>
            <a 
              href="https://wa.me/917448361008?text=Hi%20Divaas%20Spices,%20I%20want%20to%20order%20bulk%20spices"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-green-500 rounded hover:bg-green-600 transition"
            >
              💬 WhatsApp Order
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
