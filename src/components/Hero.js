import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative bg-dark-900 text-white min-h-screen flex items-center justify-center"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home.png"
          alt="Construction site"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-dark-900/80"></div>
      </div>

      {/* Decorative elements with constrained overflow */}
      <div className="absolute inset-0 overflow-hidden opacity-10 z-1">
        <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-gold-500 filter blur-3xl"></div>
        <div className="absolute bottom-10 -right-10 w-80 h-80 rounded-full bg-gold-500 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            variants={textVariant(0.2)}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif leading-tight"
          >
            Precision{" "}
            <span className="text-gold-500">Construction Estimation</span>{" "}
            Services
          </motion.h1>

          <motion.p
            variants={textVariant(0.4)}
            className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto"
          >
           Providing reliable construction cost estimates with consistent 98% client satisfaction across thousands of projects.
          </motion.p>

          <motion.div
            variants={textVariant(0.6)}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="bg-gold-500 hover:bg-gold-400 text-dark-900 font-bold py-3 px-8 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="border-2 border-gold-500 text-gold-500 hover:bg-gold-500/10 font-bold py-3 px-8 rounded-md transition-all duration-300"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
