import React from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingCart, MessageCircle } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      {/* Image */}
      <div className="bg-gradient-to-b from-orange-100 to-orange-50 h-48 flex items-center justify-center text-5xl relative overflow-hidden">
        <span className="group-hover:scale-110 transition-transform duration-300">{product.emoji}</span>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name */}
        <h3 className="font-bold text-lg mb-2 text-gray-800">{product.name}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

        {/* Price */}
        <div className="mb-3">
          <p className="text-2xl font-bold text-orange-600">₹{product.price}/kg</p>
          <p className="text-gray-500 text-xs">Minimum Order: {product.minOrder}kg</p>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
            />
          ))}
          <span className="text-xs text-gray-600 ml-2">({product.reviews} reviews)</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition text-center font-semibold"
          >
            View Details
          </Link>
          <a
            href={`https://wa.me/919876543210?text=Hi%20Divaas%20Spices,%20I'm%20interested%20in%20${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition flex items-center justify-center font-semibold"
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </div>
  )
}
