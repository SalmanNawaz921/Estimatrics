import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NewWave Construction</h3>
            <p className="text-gray-400">
              Building excellence since 2001. Quality construction services for residential and commercial clients.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li href="#" className="text-gray-400 hover:text-white">Residential Construction</li>
              <li href="#" className="text-gray-400 hover:text-white">Commercial Construction</li>
              <li href="#" className="text-gray-400 hover:text-white">Renovations</li>
              <li href="#" className="text-gray-400 hover:text-white">Project Management</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            {/* <address className="text-gray-400 not-italic">
              123 Construction Ave<br />
              Toronto, ON M5V 2H1<br />
              <a href="tel:+14165551234" className="hover:text-white">(416) 555-1234<br />
              <a href="mailto:info@newwaveconstruction.ca" className="hover:text-white">info@newwaveconstruction.ca
            </address> */}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NewWave Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}