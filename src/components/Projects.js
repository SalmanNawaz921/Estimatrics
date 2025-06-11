import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      title: "Modern Family Home",
      type: "Residential",
      image: "/images/project1.jpg",
      location: "Austin, TX",
      size: "3,200 sq ft"
    },
    {
      title: "Downtown Office Complex",
      type: "Commercial",
      image: "/images/project2.jpg",
      location: "New York, NY",
      size: "25,000 sq ft"
    },
    {
      title: "Lakeside Retreat",
      type: "Residential",
      image: "/images/project3.jpg",
      location: "Lake Tahoe, CA",
      size: "4,500 sq ft"
    },
    {
      title: "Community Center",
      type: "Commercial",
      image: "/images/project4.jpg",
      location: "Chicago, IL",
      size: "15,000 sq ft"
    }
  ]

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-20 bg-white"
      id="projects"
    >
      <div className="container mx-auto px-6">
        <motion.div variants={textVariant(0.2)} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4 font-serif">
            Our <span className="text-gold-500">Featured Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio showcasing precision estimation for diverse construction projects.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.2, 1)}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full">
                  <div className="bg-gold-500 text-dark-900 px-4 py-2 rounded-t-lg inline-block">
                    <span className="font-bold">{project.type}</span>
                  </div>
                  <div className="bg-white p-6 rounded-b-lg shadow-lg">
                    <h3 className="text-xl font-bold text-dark-900 mb-2 font-serif">{project.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        {project.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                        </svg>
                        {project.size}
                      </span>
                    </div>
                    <Link 
                      href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-sm font-medium text-gold-600 hover:text-gold-500 transition-colors"
                    >
                      View project details
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <h3 className="text-xl font-bold text-white font-serif">{project.title}</h3>
                <p className="text-gray-300">{project.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          variants={fadeIn("up", "tween", 0.8, 1)}
          className="text-center mt-12"
        >
          <Link 
            href="/projects"
            className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-dark-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30"
          >
            View All Projects
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}