"use client"

import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion'

const serviceDetails = [
  {
    title: "Construction Takeoff Services",
    description: "Detailed quantity takeoffs for accurate material and labor estimates using the latest digital tools and software.",
    features: [
      "Material quantity calculations",
      "Labor hour estimations",
      "Equipment requirements",
      "Detailed reports"
    ],
    icon: "📐"
  },
  {
    title: "Cost Estimation",
    description: "Comprehensive cost analysis for all construction phases with breakdowns by trade and material type.",
    features: [
      "Material cost databases",
      "Labor rate analysis",
      "Location-based pricing",
      "Cost benchmarking"
    ],
    icon: "💰"
  },
  // Add other services similarly
]

export default function Services() {
  return (
    <Layout>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={textVariant(0.2)} className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4 font-serif">
              Our <span className="text-gold-500">Estimation Services</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional construction estimation services tailored to your specific project requirements.
            </p>
          </motion.div>

          <div className="space-y-20">
            {serviceDetails.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn("up", "spring", index * 0.1, 1)}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                <div className="md:w-1/2">
                  <div className="bg-dark-900 text-gold-500 w-16 h-16 rounded-lg flex items-center justify-center text-3xl mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-dark-900 mb-4 font-serif">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="flex-shrink-0 w-5 h-5 text-gold-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gradient-to-br from-dark-900 to-gold-800 rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src={`/images/service-${index+1}.jpg`} 
                      alt={service.title} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </Layout>
  )
}