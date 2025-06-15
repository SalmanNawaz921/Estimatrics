import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import TradeIcon from "./TradeIcon";

export default function TradeDetail({ trade }) {
  // Sample data - replace with your actual data structure
  const tradeData = {
    title: trade.name,
    slug: trade.slug,
    description: `Comprehensive cost estimation services for ${trade.name} projects. Our specialized estimators provide accurate takeoffs and pricing for all aspects of ${trade.name} work.`,
    services: [
      `Detailed ${trade.name} quantity takeoffs`,
      `Material cost estimation`,
      `Labor hour calculations`,
      `Equipment requirements`,
      `Value engineering options`,
    ],
    projects: [
      {
        title: `${trade.name} for Downtown Highrise`,
        image: `/images/projects/${trade.slug}-1.jpg`,
      },
      {
        title: `${trade.name} Installation - Residential Complex`,
        image: `/images/projects/${trade.slug}-2.jpg`,
      },
    ],
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-12"
    >
      <motion.div
        variants={textVariant(0.2)}
        className="flex items-center mb-8"
      >
        <div className="bg-gold-100 text-gold-600 w-16 h-16 rounded-xl flex items-center justify-center mr-6">
          <TradeIcon trade={trade.slug} className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-dark-900 font-serif">
          <span className="text-gold-500">{tradeData.title}</span> Estimation
        </h1>
      </motion.div>

      <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="mb-12">
        <p className="text-lg text-gray-600 mb-6">{tradeData.description}</p>

        <div className="bg-gold-50 border-l-4 border-gold-500 p-6 rounded-r-lg">
          <h3 className="text-xl font-bold text-dark-900 mb-4 font-serif">
            Our {tradeData.title} Services
          </h3>
          <ul className="space-y-3">
            {tradeData.services.map((service, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gold-500 mr-3 mt-0.5"
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
                <span className="text-gray-700">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="mb-12">
        <h2 className="text-2xl font-bold text-dark-900 mb-6 font-serif">
          Recent {tradeData.title} Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tradeData.projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md h-64"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-lg">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* <motion.div
        variants={fadeIn("up", "tween", 0.8, 1)}
        className="bg-dark-900 text-white p-8 rounded-xl"
      >
        <h3 className="text-xl font-bold mb-4 font-serif">
          Request a {tradeData.title} Estimate
        </h3>
        <p className="text-gray-300 mb-6">
          Get a customized estimate for your specific {tradeData.title}{" "}
          requirements.
        </p>
        <button className="bg-gold-500 hover:bg-gold-600 text-dark-900 font-bold py-3 px-6 rounded-lg transition-colors duration-300">
          Get a Free Quote
        </button>
      </motion.div> */}
    </motion.div>
  );
}
