"use client"
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data)
    // Add your form submission logic here
  }

  return (
    <motion.div 
      variants={fadeIn("left", "tween", 0.6, 1)}
      className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-gray-100"
    >
      <h3 className="text-2xl font-bold text-dark-900 mb-6 font-serif">
        Send Us a Message
      </h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            id="name"
            {...register("name", { required: "Name is required" })}
            className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all`}
            placeholder="John Smith"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              id="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input 
              type="tel" 
              id="phone"
              {...register("phone")}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all"
              placeholder="(123) 456-7890"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service Needed <span className="text-red-500">*</span>
          </label>
          <select 
            id="service"
            {...register("service", { required: "Please select a service" })}
            className={`w-full px-4 py-3 rounded-lg border ${errors.service ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all`}
          >
            <option value="">Select a service</option>
            <option value="Construction Takeoff">Construction Takeoff</option>
            <option value="Cost Estimation">Cost Estimation</option>
            <option value="Bid Preparation">Bid Preparation</option>
            <option value="Value Engineering">Value Engineering</option>
            <option value="Other">Other</option>
          </select>
          {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Project Details <span className="text-red-500">*</span>
          </label>
          <textarea 
            id="message"
            rows="5"
            {...register("message", { 
              required: "Message is required",
              minLength: {
                value: 20,
                message: "Message must be at least 20 characters"
              }
            })}
            className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all`}
            placeholder="Tell us about your project requirements, timeline, and any specific needs..."
          ></textarea>
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="consent"
            {...register("consent", { required: "You must agree to our terms" })}
            className="h-4 w-4 text-gold-500 focus:ring-gold-500 border-gray-300 rounded"
          />
          <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
            I agree to the{' '}
            <Link href="/privacy" className="text-gold-500 hover:underline">
              privacy policy
            </Link>{' '}
            and{' '}
            <Link href="/terms" className="text-gold-500 hover:underline">
              terms of service
            </Link>
          </label>
        </div>
        {errors.consent && <p className="text-sm text-red-500">{errors.consent.message}</p>}
        
        <button 
          type="submit" 
          className="w-full bg-gold-500 hover:bg-gold-600 text-dark-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
        >
          Submit Inquiry
        </button>
      </form>
    </motion.div>
  )
}