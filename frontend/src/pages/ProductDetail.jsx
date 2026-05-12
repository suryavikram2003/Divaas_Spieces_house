import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, MessageCircle, Star } from 'lucide-react'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProduct()
  }, [id])

  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`)
      const data = await response.json()
      setProduct(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching product:', error)
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="text-center py-12">Loading product...</div>
  }

  if (!product) {
    return <div className="text-center py-12">Product not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/products')}
            className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold"
          >
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </button>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="bg-gradient-to-b from-orange-100 to-orange-50 rounded-lg p-8 flex items-center justify-center h-96">
            <div className="text-9xl">{product.emoji}</div>
          </div>

          {/* Details */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                />
              ))}
              <span className="text-gray-600">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6 pb-6 border-b-2">
              <p className="text-3xl font-bold text-orange-600 mb-2">₹{product.price}/kg</p>
              <p className="text-gray-600">Minimum Order: {product.minOrder}kg</p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">Description</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
            </div>

            {/* Benefits */}
            {product.benefits && product.benefits.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">Benefits</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <a
                href={`https://wa.me/917448361008?text=Hi%20Divaas%20Spices,%20I%20want%20to%20order%20${product.name}.%20Please%20provide%20quotation%20for%20${product.minOrder}kg`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition flex items-center justify-center space-x-2 font-bold text-lg"
              >
                <MessageCircle size={24} />
                <span>Order via WhatsApp</span>
              </a>
              <a
                href="/inquiry"
                className="flex-1 bg-orange-600 text-white py-4 rounded-lg hover:bg-orange-700 transition font-bold text-lg"
              >
                Get Bulk Quote
              </a>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8">
              <p className="text-blue-900">
                💡 <strong>Bulk Discounts Available!</strong> Contact us for special pricing on large orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
