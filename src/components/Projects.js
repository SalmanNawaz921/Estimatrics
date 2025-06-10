export default function Projects() {
  const projects = [
    {
      title: "Modern Family Home",
      type: "Residential",
      image: "/images/project1.jpg"
    },
    {
      title: "Downtown Office Complex",
      type: "Commercial",
      image: "/images/project2.jpg"
    },
    {
      title: "Lakeside Retreat",
      type: "Residential",
      image: "/images/project3.jpg"
    },
    {
      title: "Community Center",
      type: "Commercial",
      image: "/images/project4.jpg"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent work that showcases our craftsmanship and attention to detail.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                <div>
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-300">{project.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}