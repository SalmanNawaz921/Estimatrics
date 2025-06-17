"use client";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "@/utils/motion";
import CTA from "@/components/CTA";
import { FiAward, FiUsers, FiCheckCircle, FiBarChart2 } from "react-icons/fi";
import OtherHero from "@/components/OtherHero";

export default function About() {
  const stats = [
    {
      value: "20+",
      label: "Years in Business",
      icon: <FiAward className="w-6 h-6" />,
    },
    {
      value: "500+",
      label: "Projects Completed",
      icon: <FiCheckCircle className="w-6 h-6" />,
    },
    {
      value: "50+",
      label: "Expert Estimators",
      icon: <FiUsers className="w-6 h-6" />,
    },
    {
      value: "$2B+",
      label: "Total Project Value",
      icon: <FiBarChart2 className="w-6 h-6" />,
    },
  ];

  const coreValues = [
    {
      title: "Precision",
      description:
        "We deliver estimates with 98% accuracy through rigorous quality checks and advanced estimation software.",
      icon: "🔍",
    },
    {
      title: "Integrity",
      description:
        "Honest, transparent pricing with no hidden fees or unexpected cost adjustments.",
      icon: "🤝",
    },
    {
      title: "Innovation",
      description:
        "Continually adopting the latest estimation technologies and methodologies.",
      icon: "💡",
    },
    {
      title: "Partnership",
      description:
        "We view every client relationship as a long-term partnership, not just a transaction.",
      icon: "👥",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}

      <OtherHero />
      {/* Main Content */}
      <motion.section
        initial="hidden"
        whileInView="show"
        variants={fadeIn("up", "tween", 0.2, 1)}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Our Story */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <motion.div variants={fadeIn("right", "tween", 0.4, 1)}>
                <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                    alt="Our team at work"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gold-500 text-dark-900 p-4 rounded-lg shadow-lg">
                    <span className="block text-2xl font-bold">Since 2003</span>
                    <span className="text-sm">Trusted in the industry</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn("left", "tween", 0.6, 1)}>
                <h2 className="text-3xl font-bold text-dark-900 mb-6 font-serif">
                  Our Founding Vision
                </h2>
                <p className="text-gray-600 mb-4">
                  Estimatrics was founded by John Richardson, a veteran
                  construction estimator who recognized the need for more
                  transparent and accurate cost estimation in the industry. What
                  began as a small team of three in New York City has grown into
                  a nationally recognized firm serving clients across North
                  America.
                </p>
                <p className="text-gray-600 mb-6">
                  Our mission remains unchanged: to empower construction
                  professionals with data-driven estimates that eliminate costly
                  surprises and build confidence in every project bid.
                </p>

                <div className="bg-gold-50 border-l-4 border-gold-500 p-4 mb-6">
                  <p className="italic text-gray-700">
                    "Precision in estimation isn't just about numbers—it's about
                    building trust with every client and laying the foundation
                    for successful projects."
                  </p>
                  <p className="font-semibold text-dark-900 mt-2">
                    — John Richardson, Founder
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              variants={staggerContainer()}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "tween", index * 0.1, 1)}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
                >
                  <div className="text-gold-500 flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-dark-900 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Core Values */}
            <div className="mb-20">
              <motion.div
                variants={textVariant(0.2)}
                className="text-center mb-16"
              >
                <h2 className="text-3xl font-bold text-dark-900 mb-4 font-serif">
                  Our <span className="text-gold-500">Core Values</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  These principles guide every estimate we produce and every
                  relationship we build.
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer()}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn("up", "tween", index * 0.1, 1)}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="text-3xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-dark-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Methodology */}
            <div className="bg-dark-900 text-white rounded-xl p-8 md:p-12 shadow-xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gold-400 mb-6 font-serif">
                    Our Methodology
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Estimatrics employs a proprietary 5-phase estimation process
                    developed through decades of industry experience:
                  </p>
                  <ol className="space-y-4">
                    {[
                      "Comprehensive Project Analysis",
                      "Material & Labor Cost Database Matching",
                      "Market Condition Adjustments",
                      "Three-Point Estimation Technique",
                      "Quality Assurance Review",
                    ].map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-gold-500 text-dark-900 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-gray-300">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e"
                    alt="Our estimation process"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <CTA />
    </Layout>
  );
}
