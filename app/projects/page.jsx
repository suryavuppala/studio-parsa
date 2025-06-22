'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import FooterSection from '../components/Sections/FooterSection'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const projects = [
  {
    id: 1,
    title: 'Modern Villa',
    category: 'Residential',
    image: '/assets/project1.jpg',
    description: 'A luxurious modern villa with open spaces and natural light.',
  },
  {
    id: 2,
    title: 'Urban Apartment',
    category: 'Residential',
    image: '/assets/project2.jpg',
    description: 'Compact yet elegant urban apartment design.',
  },
  {
    id: 3,
    title: 'Commercial Hub',
    category: 'Commercial',
    image: '/assets/project3.jpg',
    description: 'A bustling commercial space designed for high footfall.',
  },
  {
    id: 4,
    title: 'Cultural Center',
    category: 'Institutional',
    image: '/assets/project4.jpg',
    description: 'A center designed for exhibitions, performances, and workshops.',
  },
  {
    id: 5,
    title: 'Beachfront Bungalow',
    category: 'Residential',
    image: '/assets/project5.jpg',
    description: 'A serene retreat by the sea, blending luxury with nature.',
  },
  {
    id: 6,
    title: 'Corporate Office Tower',
    category: 'Commercial',
    image: '/assets/project6.jpg',
    description: 'A high-rise office tower with modern amenities and sustainable design.',
  },
  {
    id: 7,
    title: 'School Campus',
    category: 'Institutional',
    image: '/assets/project7.jpg',
    description: 'A well-planned school campus fostering holistic education and interaction.',
  },
  {
    id: 8,
    title: 'Boutique Hotel',
    category: 'Hospitality',
    image: '/assets/project8.jpg',
    description: 'An intimate hotel with curated interiors and immersive experiences.',
  },
  {
    id: 9,
    title: 'Art Gallery Pavilion',
    category: 'Cultural',
    image: '/assets/project9.jpg',
    description: 'A dynamic pavilion showcasing contemporary art in minimalist design.',
  },
  {
    id: 10,
    title: 'Farmhouse Retreat',
    category: 'Residential',
    image: '/assets/project10.jpg',
    description: 'An earthy farmhouse retreat focused on sustainability and tranquility.',
  },
]

const categories = ['All', ...new Set(projects.map((p) => p.category))]

export default function ProjectsPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    } else {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'dark')
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <div
      className={`min-h-screen transition duration-500 ${
        isDarkMode ? 'bg-[#0F0F0F] text-white' : 'bg-[#F5F5F5] text-black'
      }`}
    >
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b ${
          isDarkMode ? 'bg-[#0F0F0F]/90 border-[#1E1E1E]' : 'bg-[#F5F5F5]/90 border-[#DDD3C3]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/assets/splogo.jpg"
              alt="Studio PARSA Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            <span className="text-xl font-bold tracking-wide">STUDIO PARSA</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="relative group"
              >
                <span className="font-medium transition-colors duration-300 group-hover:text-accent">
                  {item}
                </span>
                <span
                  className={`absolute left-0 bottom-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                    isDarkMode ? 'bg-[#D6B29D]' : 'bg-[#A87E6E]'
                  }`}
                />
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-full ml-2 transition hover:scale-110 ${
                isDarkMode ? 'bg-[#1A1A1A] text-[#D6B29D]' : 'bg-white text-[#A87E6E] shadow'
              }`}
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-full transition hover:scale-110 ${
                isDarkMode ? 'bg-[#1A1A1A] text-[#D6B29D]' : 'bg-white text-[#A87E6E] shadow'
              }`}
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode ? 'hover:bg-[#1A1A1A]' : 'hover:bg-white hover:shadow'
              }`}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`w-5 h-0.5 transition-all duration-300 ${
                    isDarkMode ? 'bg-[#D6B29D]' : 'bg-[#A87E6E]'
                  } ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                  }`}
                />
                <span
                  className={`w-5 h-0.5 my-1 transition-all duration-300 ${
                    isDarkMode ? 'bg-[#D6B29D]' : 'bg-[#A87E6E]'
                  } ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-5 h-0.5 transition-all duration-300 ${
                    isDarkMode ? 'bg-[#D6B29D]' : 'bg-[#A87E6E]'
                  } ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`md:hidden border-t ${
                isDarkMode ? 'bg-[#0F0F0F]/95 border-[#1E1E1E]' : 'bg-[#F5F5F5]/95 border-[#DDD3C3]'
              }`}
            >
              <div className="px-6 py-4 space-y-3">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <Link
                    key={item}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    onClick={closeMobileMenu}
                    className={`block py-2 font-medium transition-colors duration-200 ${
                      isDarkMode
                        ? 'text-white hover:text-[#D6B29D]'
                        : 'text-black hover:text-[#A87E6E]'
                    }`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Carousel */}
      <section className="pt-28 px-6">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          {projects.map((project) => (
            <div key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="h-[400px] w-full object-cover"
              />
              <p className="legend text-lg font-semibold">{project.title}</p>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Category Filter */}
      <div className="text-center my-10 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`mx-2 my-2 px-4 py-2 rounded-full font-semibold text-sm transition ${
              isDarkMode
                ? selectedCategory === cat
                  ? 'bg-[#D6B29D] text-[#0F0F0F]'
                  : 'bg-[#1A1A1A] text-[#D6B29D] border border-[#D6B29D]'
                : selectedCategory === cat
                ? 'bg-[#A87E6E] text-white'
                : 'bg-white text-[#A87E6E] border border-[#A87E6E]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <main className="px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
  key={project.id}
  layoutId={`card-${project.id}`}
  className="cursor-pointer group overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105 relative"
  onClick={() => setSelectedProject(project)}
>
  <Image
    src={project.image}
    alt={project.title}
    width={600}
    height={400}
    className="w-full h-64 object-cover"
  />
  <div className="absolute bottom-4 left-4 z-10">
    <h3 className="text-lg font-bold text-white drop-shadow">{project.title}</h3>
  </div>
</motion.div>

          ))}
        </div>

        {/* Modal View */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/70 z-[9999] flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                layoutId={`card-${selectedProject.id}`}
                className={`bg-white dark:bg-[#1A1A1A] rounded-xl p-6 max-w-lg w-full text-center shadow-xl relative ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={600}
                  height={400}
                  className="rounded-lg mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                <p className="mb-4">{selectedProject.description}</p>
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`mt-4 px-4 py-2 rounded-md transition ${
                    isDarkMode ? 'bg-[#D6B29D] text-[#0F0F0F]' : 'bg-[#A87E6E] text-white'
                  }`}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <FooterSection isDarkMode={isDarkMode} />
    </div>
  )
}