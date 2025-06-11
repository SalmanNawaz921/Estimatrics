import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion'

const testimonials = [
  {
    name: "Michael Johnson",
    role: "Project Manager, ConstructCo",
    content: "1st Estimator has been instrumental in helping us win bids with their accurate estimates. Their attention to detail is unmatched in the industry.",
    rating: 5
  },
  {
    name: "Sarah Williams",
    role: "Development Director, UrbanBuild",
    content: "We've used their services for multiple projects and consistently receive estimates that are within 2-3% of actual costs. Highly recommended!",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Owner, Chen Construction",
    content: "The speed and accuracy of their estimates have helped us streamline our bidding process and improve our win rate significantly.",
    rating: 4
  }
]

export default function Testimonials() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-20 bg-dark-900 text-white"
    >
      <div className="container mx-auto px-6">
        <motion.div variants={textVariant(0.2)} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            What Our <span className="text-gold-500">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.2, 1)}
              className="bg-dark-800 p-8 rounded-xl border border-dark-700 hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-gold-500' : 'text-gray-600'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="bg-gold-500 text-dark-900 w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}