export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img 
          className="w-full h-full object-cover opacity-50" 
          src="/images/hero-bg.jpg" 
          alt="Construction site" 
        />
      </div>
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Building Your Vision, One Project at a Time</h1>
          <p className="text-xl mb-8">Quality construction services with over 20 years of experience in the industry.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  )
}