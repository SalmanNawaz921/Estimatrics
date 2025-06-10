import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              NewWave Construction
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-800 hover:text-blue-600">
              Home{" "}
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-600">
              About{" "}
            </Link>
            <Link
              href="/services"
              className="text-gray-800 hover:text-blue-600"
            >
              Services{" "}
            </Link>
            <Link
              href="/projects"
              className="text-gray-800 hover:text-blue-600"
            >
              Projects{" "}
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600">
              Contact{" "}
            </Link>
          </nav>
          <button className="md:hidden focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
