export default function Services() {
  const services = [
    {
      title: "Residential Construction",
      description: "Custom home building, renovations, and additions tailored to your lifestyle.",
      icon: "🏠"
    },
    {
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and other commercial properties built to code.",
      icon: "🏢"
    },
    {
      title: "Project Management",
      description: "Comprehensive oversight from planning to completion for stress-free construction.",
      icon: "📋"
    },
    {
      title: "Design & Build",
      description: "Integrated architectural design and construction services for seamless execution.",
      icon: "✏️"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to meet your specific needs and budget requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}