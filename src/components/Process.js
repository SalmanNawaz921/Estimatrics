
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion'

const steps = [
  {
    number: "01",
    title: "Project Consultation",
    description: "We discuss your project requirements and scope in detail."
  },
  {
    number: "02",
    title: "Data Collection",
    description: "Our team gathers all necessary project documents and specifications."
  },
  {
    number: "03",
    title: "Detailed Takeoff",
    description: "We perform precise quantity takeoffs using advanced software."
  },
  {
    number: "04",
    title: "Cost Analysis",
    description: "Material, labor, and equipment costs are calculated with current market rates."
  },
  {
    number: "05",
    title: "Quality Review",
    description: "Senior estimators review all calculations for accuracy."
  },
  {
    number: "06",
    title: "Final Delivery",
    description: "You receive a comprehensive, easy-to-understand estimate."
  }
]

export default function Process() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-6">
        <motion.div variants={textVariant(0.2)} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4 font-serif">
            Our <span className="text-gold-500">Estimation Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A transparent, step-by-step approach to delivering accurate construction estimates.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn(index % 2 === 0 ? "right" : "left", "tween", index * 0.1 + 0.3, 1)}
                className={`relative ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16 lg:mt-32'}`}
              >
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 relative z-10">
                  <div className="absolute -top-4 left-8 bg-gold-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 mt-4 mb-3 font-serif">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}