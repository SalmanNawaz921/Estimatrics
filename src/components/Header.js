import Link from 'next/link'
import { motion } from 'framer-motion'
import { textVariant } from '@/utils/motion'
import Image from 'next/image'

export default function Header() {
  return (
    <motion.header 
      initial="hidden"
      animate="show"
      variants={textVariant(0.1)}
      className="bg-dark-900 text-white sticky top-0 z-50 border-b border-gold-800"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gold-500 font-serif hover:text-gold-400 transition-colors">
           <Image src="/logo.png" alt="Logo" width={300} height={50} />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-gold-400 font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-white hover:text-gold-400 font-medium transition-colors">About</Link>
            <Link href="/services" className="text-white hover:text-gold-400 font-medium transition-colors">Services</Link>
            <Link href="/industries" className="text-white hover:text-gold-400 font-medium transition-colors">Industries</Link>
            <Link href="/blog" className="text-white hover:text-gold-400 font-medium transition-colors">Blog</Link>
            <Link href="/contact" className="text-white hover:text-gold-400 font-medium transition-colors">Contact</Link>
          </nav>
          
          <button className="bg-gold-500 hover:bg-gold-400 text-dark-900 font-medium py-2 px-6 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20">
            Get a Quote
          </button>
        </div>
      </div>
    </motion.header>
  )
}