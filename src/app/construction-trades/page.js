"use client";
import Layout from "@/components/Layout";
import TradeCategory from "@/components/trades/TradeCategory";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";
import CTA from "@/components/CTA";
import OtherHero from "@/components/OtherHero";

export default function ConstructionTrades() {
  const tradeCategories = [
    {
      title: "Structural Trades",
      description:
        "Essential trades for building frameworks and load-bearing structures",
      trades: [
        { slug: "carpentry", name: "Carpentry" },
        { slug: "concrete", name: "Concrete" },
        { slug: "steel-erection", name: "Steel Erection" },
        { slug: "masonry", name: "Masonry" },
        { slug: "pile-driving", name: "Pile Driving" },
        { slug: "formwork", name: "Formwork" },
      ],
    },
    {
      title: "Mechanical Trades",
      description: "Specialized trades for building systems and utilities",
      trades: [
        { slug: "plumbing", name: "Plumbing" },
        { slug: "hvac", name: "HVAC" },
        { slug: "fire-protection", name: "Fire Protection" },
        { slug: "elevator", name: "Elevator" },
        { slug: "escalator", name: "Escalator" },
        { slug: "boilermaker", name: "Boilermaker" },
      ],
    },
    {
      title: "Electrical Trades",
      description: "Trades handling all electrical systems and components",
      trades: [
        { slug: "electrical", name: "Electrical" },
        { slug: "low-voltage", name: "Low Voltage" },
        { slug: "lighting", name: "Lighting" },
        { slug: "solar-installation", name: "Solar Installation" },
        { slug: "wind-turbine", name: "Wind Turbine" },
        { slug: "security-systems", name: "Security Systems" },
      ],
    },
    {
      title: "Finish Trades",
      description: "Trades responsible for final surfaces and aesthetics",
      trades: [
        { slug: "drywall", name: "Drywall" },
        { slug: "painting", name: "Painting" },
        { slug: "flooring", name: "Flooring" },
        { slug: "tile", name: "Tile" },
        { slug: "glazing", name: "Glazing" },
        { slug: "millwork", name: "Millwork" },
      ],
    },
    {
      title: "Site Work Trades",
      description:
        "Trades specializing in ground preparation and exterior work",
      trades: [
        { slug: "excavation", name: "Excavation" },
        { slug: "grading", name: "Grading" },
        { slug: "asphalt", name: "Asphalt" },
        { slug: "landscaping", name: "Landscaping" },
        { slug: "utility-installation", name: "Utility Installation" },
      ],
    },
    {
      title: "Specialty Trades",
      description: "Niche trades requiring specialized skills",
      trades: [
        { slug: "welding", name: "Welding" },
        { slug: "scaffolding", name: "Scaffolding" },
        { slug: "insulation", name: "Insulation" },
        { slug: "demolition", name: "Demolition" },
        { slug: "hazardous-material", name: "Hazardous Material" },
      ],
    },
    {
      title: "Industrial Trades",
      description: "Trades focused on industrial and heavy construction",
      trades: [
        { slug: "pipefitting", name: "Pipefitting" },
        { slug: "instrumentation", name: "Instrumentation" },
        { slug: "rigging", name: "Rigging" },
        { slug: "heavy-equipment", name: "Heavy Equipment" },
      ],
    },
    {
      title: "Green Building Trades",
      description: "Sustainable and energy-efficient construction specialties",
      trades: [
        { slug: "solar-panel", name: "Solar Panel Installation" },
        { slug: "green-roofing", name: "Green Roofing" },
        { slug: "energy-auditing", name: "Energy Auditing" },
        { slug: "rainwater-harvesting", name: "Rainwater Harvesting" },
      ],
    },
  ];

  return (
    <Layout>
      <OtherHero />
      <motion.section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div variants={textVariant(0.2)} className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4 font-serif">
              Construction <span className="text-gold-500">Trades</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive construction trade services with
              detailed cost estimation for each specialty area.
            </p>
          </motion.div>

          <div className="space-y-16">
            {tradeCategories.map((category, index) => (
              <TradeCategory
                key={index}
                title={category.title}
                description={category.description}
                trades={category.trades}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>
      <CTA />
    </Layout>
  );
}
