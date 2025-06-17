"use client"
import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import { staggerContainer, textVariant, fadeIn } from '@/utils/motion'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import ContactForm from '@/components/ContactForm'
import OtherHero from '@/components/OtherHero'

export default function Contact() {
  return (
    <Layout>
      <OtherHero/>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              variants={textVariant(0.2)} 
              className="text-center mb-16 px-4"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4 font-serif leading-tight">
                Connect With <span className="text-gold-500">Our Experts</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Reach out for a complimentary consultation or to discuss how we can bring precision and value to your construction projects.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Information Card */}
              <motion.div 
                variants={fadeIn("right", "tween", 0.4, 1)}
                className="h-full"
              >
                <div className="bg-dark-900 text-white p-8 rounded-xl shadow-xl h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-6 font-serif text-gold-400 border-b border-gold-800 pb-4">
                    How Can We Help You?
                  </h3>
                  
                  <div className="space-y-6 flex-grow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-gold-500/20 p-3 rounded-lg mr-4">
                        <FiPhone className="w-5 h-5 text-gold-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gold-300 text-lg">Phone Support</h4>
                        <p className="text-gray-300 mt-1">(212) 555-1234</p>
                        <p className="text-gray-400 text-sm mt-2">Mon-Fri: 8:00 AM - 6:00 PM EST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-gold-500/20 p-3 rounded-lg mr-4">
                        <FiMail className="w-5 h-5 text-gold-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gold-300 text-lg">Email Us</h4>
                        <p className="text-gray-300 mt-1">info@1stestimator.com</p>
                        <p className="text-gray-400 text-sm mt-2">Typically respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-gold-500/20 p-3 rounded-lg mr-4">
                        <FiMapPin className="w-5 h-5 text-gold-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gold-300 text-lg">Our Headquarters</h4>
                        <p className="text-gray-300 mt-1">123 Estimation Way</p>
                        <p className="text-gray-300">New York, NY 10001</p>
                        <p className="text-gray-400 text-sm mt-2">By appointment only</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gold-800">
                    <h4 className="font-semibold text-gold-300 mb-3">Emergency Service?</h4>
                    <p className="text-gray-400 text-sm">
                      For urgent construction estimation needs outside business hours, please call our 24/7 emergency line at <span className="text-gold-400">(212) 555-5678</span>
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form Component */}
              <ContactForm />
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  )
}