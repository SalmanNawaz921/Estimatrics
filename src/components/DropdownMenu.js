"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useState } from "react";

export default function DropdownMenu({ label, href, items, isOpen, onToggle }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="text-white hover:text-gold-400 font-medium transition-colors px-4 py-2 flex items-center"
      >
        <Link href={href ? href : "/"}>{label}</Link>
        <svg
          className={`ml-1 w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="visible"
            animate="visible"
            exit="hidden"
            variants={fadeIn("down", "tween", 0, 0.2)}
            className="absolute left-0 mt-2 w-56 bg-dark-800 rounded-lg shadow-xl border border-gold-800/30 z-50"
          >
            <div className="py-1">
              {items.map((item, index) => (
                <div key={index} className="relative">
                  {item.submenu ? (
                    <>
                      <button
                        className="w-full text-left px-4 py-3 text-gray-300 hover:text-gold-400 hover:bg-dark-700 transition-colors flex justify-between items-center"
                        onClick={() =>
                          setOpenSubmenu(
                            openSubmenu === item.name ? null : item.name
                          )
                        }
                      >
                        {item.name}
                        <svg
                          className={`ml-2 w-4 h-4 transition-transform ${
                            openSubmenu === item.name ? "rotate-90" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {openSubmenu === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4"
                          >
                            {item.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                className="block px-4 py-2 text-gray-300 hover:text-gold-400 hover:bg-dark-700 transition-colors text-sm"
                                onClick={onToggle}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-gray-300 hover:text-gold-400 hover:bg-dark-700 transition-colors"
                      onClick={onToggle}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
