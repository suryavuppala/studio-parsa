'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function ProjectsSection({ isDarkMode }) {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const filters = ['All', 'Residential', 'Commercial', 'Interior', 'Sustainable']

  const projects = [
    {
      id: 1,
      title: 'Modern Villa Retreat',
      category: 'Residential',
      location: 'Beverly Hills, CA',
      year: '2024',
      description: 'A stunning contemporary villa featuring clean lines, expansive glass walls, and seamless indoor-outdoor living.',
      image: '/assets/project1.jpg',
      awards: ['Historic Preservation Award'],
      area: '45,000 sq ft'
    },
    {
      id: 2,
      title: 'Tech Campus Innovation Hub',
      category: 'Commercial',
      location: 'San Francisco, CA',
      year: '2023',
      description: 'A cutting-edge corporate campus designed to foster collaboration and innovation in the tech industry.',
      image: '/assets/project2.jpg',
      awards: ['LEED Platinum Certification'],
      area: '250,000 sq ft'
    },
    {
      id: 3,
      title: 'Luxury Penthouse Suite',
      category: 'Interior',
      location: 'Manhattan, NY',
      year: '2024',
      description: 'An elegant penthouse interior showcasing sophisticated materials and breathtaking city views.',
      image: '/assets/project3.jpg',
      awards: ['Interior Design Award 2024'],
      area: '4,200 sq ft'
    },
    {
      id: 4,
      title: 'Eco-Friendly Family Home',
      category: 'Sustainable',
      location: 'Portland, OR',
      year: '2023',
      description: 'A net-zero energy home that combines sustainable design with modern family living.',
      image: '/assets/project4.jpg',
      awards: ['Green Building Award 2023'],
      area: '3,800 sq ft'
    },
    {
      id: 5,
      title: 'Boutique Hotel Restoration',
      category: 'Commercial',
      location: 'Charleston, SC',
      year: '2023',
      description: 'Historic building transformation into a luxury boutique hotel preserving architectural heritage.',
      image: '/assets/project5.jpg',
      awards: ['AIA Design Award 2024'],
      area: '8,500 sq ft'
    },
    {
      id: 6,
      title: 'Minimalist Urban Loft',
      category: 'Interior',
      location: 'Chicago, IL',
      year: '2024',
      description: 'A sleek urban loft featuring minimalist design principles and industrial elements.',
      image: '/assets/project6.jpg',
      awards: ['Design Excellence Award'],
      area: '2,100 sq ft'
    }
  ]

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`px-4 py-16 sm:px-6 lg:px-8 transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center`}>
  <span className={isDarkMode ? 'text-white' : 'text-black'}>Our </span>
  <span className={isDarkMode ? 'text-[#D6B29D]' : 'text-[#A87E6E]'}>Projects</span>
</h2>



        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full border transition-all ${
                activeFilter === filter
                  ? 'bg-gray-900 text-white'
                  : 'bg-transparent border-gray-400 text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`relative overflow-hidden rounded-xl shadow-lg group transform transition duration-500 hover:scale-105 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover w-full h-64"
              />

              {/* Overlay */}
              <div className={`absolute inset-0 flex flex-col justify-end p-5 bg-black bg-opacity-60 text-white transition-opacity duration-500 ${
                hoveredProject === project.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm">{project.location} • {project.year}</p>
                <p className="text-sm mt-1">{project.area}</p>
                <p className="text-xs mt-2 italic">{project.awards.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
