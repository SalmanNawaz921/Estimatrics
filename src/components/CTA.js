"use client"
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/utils/motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={fadeIn("up", "tween", 0.2, 1)}
      viewport={{ once: true }}
      className="relative py-24 bg-gradient-to-r from-dark-800 to-dark-900 text-white overflow-hidden"
    >
      {/* Gold decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-gold-500 filter blur-3xl"></div>
        <div className="absolute bottom-10 -right-10 w-80 h-80 rounded-full bg-gold-500 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 variants={textVariant(0.3)} className="text-3xl md:text-4xl font-bold mb-6 font-serif">
          Ready to Get an <span className="text-gold-500">Accurate Estimate</span>?
        </motion.h2>
        <motion.p variants={textVariant(0.5)} className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
          Contact us today for a free consultation and see how we can help with your project.
        </motion.p>
        <motion.div variants={textVariant(0.7)} className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/contact" 
            className="bg-gold-500 hover:bg-gold-600 text-dark-900 font-bold py-3 px-8 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30"
          >
            Get a Free Quote
          </Link>
          <Link 
            href="tel:+12125551234" 
            className="border-2 border-white text-white hover:bg-white hover:text-dark-900 font-bold py-3 px-8 rounded-md transition-all duration-300 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            Call Now
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}