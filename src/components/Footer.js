"use client"
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Construction Takeoffs", href: "/services/takeoffs" },
      { name: "Cost Estimation", href: "/services/estimation" },
      { name: "Bid Preparation", href: "/services/bid-preparation" },
      { name: "Value Engineering", href: "/services/value-engineering" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Process", href: "/process" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "FAQ", href: "/faq" },
      { name: "Support", href: "/support" },
    ],
  },
];

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      variants={fadeIn("up", "tween", 0.2, 1)}
      viewport={{ once: true }}
      className="bg-dark-900 text-white pt-20 pb-12"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold text-gold-500 font-serif hover:text-gold-400 transition-colors"
            >
              <Image
                src="/images/logo_header.png"
                alt="Logo"
                width={250}
                height={50}
              />
            </Link>
            <p className="text-gray-400 mt-4 mb-6">
              Professional construction estimation services with unmatched
              accuracy and speed.
            </p>
            <div className="flex space-x-4">
              {["twitter", "linkedin", "facebook"].map((social) => (
                <Link
                  key={social}
                  href={`https://${social}.com/1stestimator`}
                  className="bg-dark-800 hover:bg-gold-600 text-gray-400 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social}
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d={`M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z`}
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "tween", index * 0.1 + 0.3, 1)}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white mb-4 font-serif">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-gold-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Column */}
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 1)}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-4 font-serif">
              Contact Us
            </h3>
            <address className="text-gray-400 not-italic space-y-3">
              <div className="flex items-start">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span>123 Estimation Way, New York, NY 10001</span>
              </div>

              <div className="flex items-start">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <Link
                  href="tel:+12125551234"
                  className="hover:text-gold-400 transition-colors"
                >
                  (212) 555-1234
                </Link>
              </div>

              <div className="flex items-start">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <Link
                  href="mailto:info@1stestimator.com"
                  className="hover:text-gold-400 transition-colors"
                >
                  info@1stestimator.com
                </Link>
              </div>
            </address>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeIn("up", "tween", 0.8, 1)}
          className="border-t border-dark-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Estimatrics. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-gold-400 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-gold-400 text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-500 hover:text-gold-400 text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
