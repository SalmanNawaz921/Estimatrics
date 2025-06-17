"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Drawer } from "vaul";
import DropdownMenu from "@/components/DropdownMenu";
import { getTradesMenuItems } from "@/data/tradesData";

// Reusable Menu Component
const MenuItems = ({ isMobile = false, closeMenu = () => {} }) => {
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

  const commonLinkProps = {
    className: `text-white hover:text-gold-400 font-medium transition-colors px-4 py-2 ${
      isMobile ? "w-full text-left" : ""
    }`,
    onClick: isMobile ? closeMenu : undefined,
  };

  return (
    <>
      <Link href="/" {...commonLinkProps}>
        Home
      </Link>
      <Link href="/about" {...commonLinkProps}>
        About
      </Link>
      <DropdownMenu
        label="Services"
        href="/services"
        items={servicesItems}
        isOpen={openDropdown === "services"}
        onToggle={() => toggleDropdown("services")}
        mobile={isMobile}
      />
      <DropdownMenu
        label="Trades"
        href="/construction-trades"
        items={tradesMenuItems}
        isOpen={openDropdown === "trades"}
        onToggle={() => toggleDropdown("trades")}
        mobile={isMobile}
      />
      <Link href="/contact" {...commonLinkProps}>
        Contact
      </Link>
    </>
  );
};

// Visually hidden component for accessibility
const VisuallyHidden = ({ children }) => {
  return <span className="sr-only">{children}</span>;
};

export default function Header() {
  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={textVariant(0.1)}
      className="bg-dark-900 text-white sticky top-0 z-50 border-b border-gold-800"
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with responsive sizing */}
          <Link
            href="/"
            className="text-2xl font-bold text-gold-500 font-serif hover:text-gold-400 transition-colors flex-shrink-0"
          >
            <Image
              src="/images/logo_header.png"
              alt="Logo"
              width={200}
              height={250}
              className="w-auto h-8 md:h-10"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            <MenuItems />
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="text-dark-900 cursor-pointer">
              <button className="hidden lg:block bg-gold-500 hover:bg-gold-400 text-dark-900 font-medium py-2 px-6 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 whitespace-nowrap cursor-pointer">
                Get a Quote
              </button>
            </Link>

            {/* Mobile menu button - Using Vaul's Drawer */}
            <Drawer.Root shouldScaleBackground>
              <Drawer.Trigger asChild>
                <button
                  type="button"
                  className="lg:hidden text-[#DBC981] focus:outline-none cursor-pointer"
                >
                  <span className="sr-only">Open menu</span>
                  <FiMenu size={24} className="text-[#DBC981]" />
                </button>
              </Drawer.Trigger>
              <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
                <Drawer.Content className="bg-dark-900 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0 z-50">
                  {/* Visually hidden title for accessibility */}
                  <VisuallyHidden>
                    <Drawer.Title>Navigation Menu</Drawer.Title>
                  </VisuallyHidden>

                  <div className="p-4 bg-dark-900 rounded-t-[10px] flex-1">
                    <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-600 mb-4" />
                    <div className="flex justify-between items-center mb-6">
                      <Link
                        href="/"
                        className="-m-1.5 p-1.5"
                        onClick={() => Drawer.close()}
                      >
                        <Image
                          src="/images/logo_header.png"
                          alt="Logo"
                          width={160}
                          height={40}
                          className="w-auto h-8"
                        />
                      </Link>
                      <Drawer.Close className="p-1 rounded-md text-white hover:bg-gray-800">
                        <FiX size={24} className="text-[#DBC981]" />
                      </Drawer.Close>
                    </div>

                    <div className="flex flex-col space-y-4">
                      <MenuItems isMobile closeMenu={() => Drawer.close()} />
                    </div>

                    <div className="mt-6">
                      <button className="w-full bg-gold-500 hover:bg-gold-400 text-dark-900 font-medium py-2 px-6 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20">
                        Get a Quote
                      </button>
                    </div>
                  </div>
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
