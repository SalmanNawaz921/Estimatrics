"use client"
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";;

const OtherHero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerContainer()}
      viewport={{ once: true }}
      className="relative py-28 bg-gradient-to-b from-dark-900 to-dark-800 text-white"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/blueprint-pattern.png')] bg-repeat opacity-30"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            variants={textVariant(0.2)}
            className="text-4xl md:text-5xl font-bold mb-6 font-serif leading-tight"
          >
            Building <span className="text-gold-500">Trust</span> Through
            Accurate Estimates
          </motion.h1>
          <motion.p
            variants={textVariant(0.4)}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Estimatrics has been the trusted partner for construction
            professionals seeking precise, reliable cost estimates since 2003.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default OtherHero;
