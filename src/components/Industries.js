import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion'
import Link from 'next/link'

const industries = [
  {
    name: "Residential",
    description: "Single-family homes, multi-family units, and apartments.",
    icon: "🏠"
  },
  {
    name: "Commercial",
    description: "Office buildings, retail spaces, and mixed-use developments.",
    icon: "🏢"
  },
  {
    name: "Industrial",
    description: "Warehouses, manufacturing plants, and distribution centers.",
    icon: "🏭"
  },
  {
    name: "Healthcare",
    description: "Hospitals, clinics, and medical office buildings.",
    icon: "🏥"
  },
  {
    name: "Hospitality",
    description: "Hotels, resorts, and restaurants.",
    icon: "🍽️"
  },
  {
    name: "Institutional",
    description: "Schools, universities, and government buildings.",
    icon: "🏛️"
  }
]

export default function Industries() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6">
        <motion.div variants={textVariant(0.2)} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4 font-serif">
            Industries <span className="text-gold-500">We Serve</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide estimation services for all types of construction projects across various sectors.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.1, 1)}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:border-gold-400/30 group"
            >
              <div className="p-8">
                <div className="text-4xl mb-6 group-hover:text-gold-500 transition-colors">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-3 font-serif group-hover:text-gold-600 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
              <div className="px-8 pb-6">
                <Link 
                  href={`/industries#${industry.name.toLowerCase()}`}
                  className="inline-flex items-center text-sm font-medium text-gold-600 hover:text-gold-500 transition-colors"
                >
                  View case studies
                  <svg 
                    className="ml-1 w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}