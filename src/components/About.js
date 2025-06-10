export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
              src="/images/about.jpg" 
              alt="About NewWave Construction" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About NewWave Construction</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2001, NewWave Construction has been delivering exceptional construction services to residential and commercial clients across the region.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experienced professionals is committed to quality craftsmanship, timely project completion, and transparent communication throughout the construction process.
            </p>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-2 px-6 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}