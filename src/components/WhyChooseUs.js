import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion'
import Link from 'next/link'

const features = [
  {
    title: "20+ Years Experience",
    description: "Our team brings decades of combined estimation expertise."
  },
  {
    title: "98% Accuracy Rate",
    description: "Precision estimates that help control project costs."
  },
  {
    title: "Quick Turnaround",
    description: "Fast delivery without compromising quality."
  },
  {
    title: "Competitive Pricing",
    description: "Affordable rates for professional services."
  }
]

export default function WhyChooseUs() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-20 bg-dark-900 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            variants={fadeIn("right", "tween", 0.4, 1)}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/why-choose-us.jpg" 
                alt="Why Choose Estimatrics" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-gold-500 text-dark-900 p-6 rounded-xl shadow-xl">
              <span className="block text-4xl font-bold font-serif">98%</span>
              <span className="block text-sm font-medium">Client Satisfaction</span>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn("left", "tween", 0.6, 1)}
            className="lg:w-1/2"
          >
            <motion.h2 variants={textVariant(0.2)} className="text-3xl md:text-4xl font-bold mb-8 font-serif">
              Why Choose <span className="text-gold-500">Estimatrics</span>
            </motion.h2>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 bg-gold-500/10 p-3 rounded-lg mr-6">
                    <div className="w-10 h-10 bg-gold-500 rounded-md flex items-center justify-center text-dark-900">
                      <span className="text-xl">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link 
                href="/about" 
                className="inline-flex items-center text-gold-400 hover:text-gold-300 group transition-colors"
              >
                Learn more about our company
                <svg 
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}