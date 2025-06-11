"use client"
import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/utils/motion'

export default function About() {
  return (
    <Layout>
      <motion.section
        initial="hidden"
        whileInView="show"
        variants={fadeIn("up", "tween", 0.2, 1)}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 variants={textVariant(0.2)} className="text-3xl md:text-4xl font-bold text-dark-900 mb-6 font-serif">
              About <span className="text-gold-500">Estimatrics</span>
            </motion.h2>
            <motion.p variants={textVariant(0.4)} className="text-lg text-gray-600">
              We are a team of experienced construction estimators dedicated to providing accurate, reliable cost estimates for projects of all sizes.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn("right", "tween", 0.4, 1)}>
              <div className="bg-dark-900 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/images/about-team.jpg" 
                  alt="Our team" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn("left", "tween", 0.6, 1)}>
              <h3 className="text-2xl font-bold text-dark-900 mb-4 font-serif">Our Story</h3>
              <p className="text-gray-600 mb-4">
                Founded in 2003, Estimatrics began as a small team of construction professionals who saw a need for more accurate and transparent estimation services in the industry.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we serve clients across North America with a team of 50+ estimators specializing in all construction sectors.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gold-100 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-900">20+ Years Experience</h4>
                    <p className="text-gray-600">Industry veterans leading every project</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gold-100 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-900">500+ Projects Completed</h4>
                    <p className="text-gray-600">Across all construction sectors</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Layout>
  )
}