"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";
import CTA from "@/components/CTA";
import Link from "next/link";
import { serviceDetails } from "@/data/services"; // We'll create this
import OtherHero from "@/components/OtherHero";

export default function Services() {
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
        <div className="container mx-auto px-6">
          <motion.div variants={textVariant(0.2)} className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4 font-serif">
              Our <span className="text-gold-500">Estimation Services</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional construction estimation services tailored to your
              specific project requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceDetails.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.1, 1)}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="p-8">
                  <div className="bg-dark-900 text-gold-500 w-16 h-16 rounded-lg flex items-center justify-center text-3xl mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-dark-900 mb-4 font-serif">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{service.shortDescription || service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-gold-500 mr-2 mt-0.5"
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
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-gold-500 font-medium hover:text-gold-600 transition-colors"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <CTA />
    </Layout>
  );
}