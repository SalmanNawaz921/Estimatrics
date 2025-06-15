"use client"
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import Link from 'next/link'

export default function TradeCategory({ title, description, trades, index }) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1 + 0.3, 1)}
      className="bg-gray-50 rounded-xl p-8 border border-gray-200"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-dark-900 mb-2 font-serif">
          <span className="text-gold-500">{title.split(' ')[0]}</span> {title.split(' ').slice(1).join(' ')}
        </h2>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trades.map((trade, i) => (
          <Link 
            key={i}
            href={`/construction-trades/${trade.slug}`}
            className="group block"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-gold-300/50 transition-all duration-300 h-full"
            >
              <div className="bg-gold-100 text-gold-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                <TradeIcon trade={trade.slug} />
              </div>
              <h3 className="text-lg font-bold text-dark-900 mb-2 group-hover:text-gold-600 transition-colors duration-300">
                {trade.name}
              </h3>
              <p className="text-sm text-gray-600">
                <span className="inline-block mr-2 text-gold-500 group-hover:text-gold-600 transition-colors duration-300">
                  →
                </span>
                View estimation details
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

function TradeIcon({ trade }) {
  const icons = {
    carpentry: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    concrete: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    // Add icons for all trades...
    default: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  }

  return icons[trade] || icons.default
}