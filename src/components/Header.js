"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { useState } from "react";
import DropdownMenu from "@/components/DropdownMenu";
import { getTradesMenuItems } from "@/data/tradesData";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);


const tradesMenuItems = getTradesMenuItems();


  const servicesItems = [
    { name: "Construction Takeoffs", href: "/services/takeoffs" },
    { name: "Cost Estimation", href: "/services/estimation" },
    { name: "Bid Preparation", href: "/services/bid-preparation" },
    { name: "Value Engineering", href: "/services/value-engineering" },
  ];

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={textVariant(0.1)}
      className="bg-dark-900 text-white sticky top-0 z-50 border-b border-gold-800"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-gold-500 font-serif hover:text-gold-400 transition-colors"
          >
            <Image src="/logo.png" alt="Logo" width={200} height={50} />
          </Link>

          <nav className="hidden md:flex items-center space-x-4 relative">
            <Link
              href="/"
              className="text-white hover:text-gold-400 font-medium transition-colors px-4 py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gold-400 font-medium transition-colors px-4 py-2"
            >
              About
            </Link>

            <DropdownMenu
              label="Services"
              href="/services"
              items={servicesItems}
              isOpen={openDropdown === "services"}
              onToggle={() => toggleDropdown("services")}
            />

            <Link
              href="/industries"
              className="text-white hover:text-gold-400 font-medium transition-colors px-4 py-2"
            >
              Industries
            </Link>

            <DropdownMenu
              label="Trades"
              href="/construction-trades"
              items={tradesMenuItems}
              isOpen={openDropdown === "trades"}
              onToggle={() => toggleDropdown("trades")}
            />

            <Link
              href="/contact"
              className="text-white hover:text-gold-400 font-medium transition-colors px-4 py-2"
            >
              Contact
            </Link>
          </nav>

          <button className="bg-gold-500 hover:bg-gold-400 text-dark-900 font-medium py-2 px-6 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20">
            Get a Quote
          </button>
        </div>
      </div>
    </motion.header>
  );
}
