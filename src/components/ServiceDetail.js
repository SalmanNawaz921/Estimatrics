"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";

export default function ServiceDetail({ service }) {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={textVariant(0.2)} className="mb-12 text-center">
            <div className="bg-dark-900 text-gold-500 w-20 h-20 rounded-lg flex items-center justify-center text-4xl mx-auto mb-6">
              {service.icon}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4 font-serif">
              {service.title}
            </h1>
            <p className="text-lg text-gray-600">
              {service.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <motion.div variants={fadeIn("right", "spring", 0.2, 1)}>
                <h2 className="text-2xl font-bold text-dark-900 mb-6 font-serif border-b border-gold-100 pb-4">
                  Key Features
                </h2>
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 bg-gold-500/10 p-1 rounded-full mr-3">
                        <svg
                          className="w-5 h-5 text-gold-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div variants={fadeIn("left", "spring", 0.4, 1)}>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeIn("up", "spring", 0.6, 1)}>
              <h2 className="text-2xl font-bold text-dark-900 mb-6 font-serif border-b border-gold-100 pb-4">
                Benefits
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 bg-dark-900/10 p-1 rounded-full mr-3">
                      <svg
                        className="w-5 h-5 text-dark-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeIn("up", "spring", 0.8, 1)}>
              <h2 className="text-2xl font-bold text-dark-900 mb-6 font-serif border-b border-gold-100 pb-4">
                Our Process
              </h2>
              <ol className="space-y-4">
                {service.process.map((step, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 bg-dark-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {i + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}