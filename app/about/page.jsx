'use client'

import { useState, useEffect } from 'react'
import FooterSection from '../components/Sections/FooterSection'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

const teamMembers = [
  { name: 'SATYA GUNTURU', role: 'Designer', image: '/assets/akhil.jpg' },
  { name: 'ABHIJIT', role: 'Architect', image: '/assets/bhai.jpg' },
  { name: 'SURYA', role: 'Planner', image: '/assets/suryaa.jpg' },
  { name: 'KEERTHY', role: '3D Visualizer', image: '/assets/keerthy.jpg' },
  { name: 'SPOORTHY', role: 'Consultant', image: '/assets/spoorthy.jpg' },
  { name: 'DEEKSHA', role: 'Intern', image: '/assets/deeksha.jpg' },
  { name: 'Member 7', role: 'Supervisor', image: '/assets/team7.jpg' },
  { name: 'Member 8', role: 'Site Engineer', image: '/assets/team8.jpg' },
  { name: 'Member 9', role: 'Marketing Head', image: '/assets/team9.jpg' },
  { name: 'Member 10', role: 'Procurement', image: '/assets/team10.jpg' },
  { name: 'Member 11', role: 'Draftsman', image: '/assets/team11.jpg' },
  { name: 'Member 12', role: 'Project Manager', image: '/assets/team12.jpg' },
]

export default function AboutPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    
    const savedTheme='dark'
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const themeColor = isDarkMode ? '#D6B29D' : '#A87E6E'

  return (
    <div
      className={`min-h-screen transition duration-500 ${
        isDarkMode ? 'bg-[#0F0F0F] text-white' : 'bg-[#F5F5F5] text-[#1A1A1A]'
      }`}
    >
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isDarkMode
            ? 'bg-[#0F0F0F]/95 backdrop-blur-md border-b border-[#1E1E1E]'
            : 'bg-[#F5F5F5]/95 backdrop-blur-md border-b border-[#DDD3C3]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src="/assets/splogo.jpg" className="w-12 h-12 rounded-full" alt="Logo" />
              <span className="text-xl font-bold tracking-wide">STUDIO PARSA</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="hover:text-parsa transition-all">Home</a>
              <a href="/about" className="hover:text-parsa transition-all">About</a>
              <a href="/projects" className="hover:text-parsa transition-all">Projects</a>
              <a href="/contact" className="hover:text-parsa transition-all">Contact</a>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="ml-4 p-2 rounded-full border border-gray-300 dark:border-gray-700"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full border border-gray-300 dark:border-gray-700"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-2 space-y-2">
              <a href="/" className="block">Home</a>
              <a href="/about" className="block">About</a>
              <a href="/projects" className="block">Projects</a>
              <a href="/contact" className="block">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* About Section */}
      <section className="pt-28 pb-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Image
            src="/assets/spname.jpg"
            alt="About Studio PARSA"
            width={600}
            height={400}
            className="w-full h-full object-cover rounded-xl shadow-xl"
          />
          <div>
            <h1 className="text-5xl font-bold mb-6 tracking-tight">About STUDIO PARSA</h1>
            <p className="text-lg leading-8 text-justify">
              Studio PARSA is an award-winning architecture and interior design firm specializing in elegant,
              timeless, and functional spaces. Our multidisciplinary team brings together creativity and technical
              excellence to design structures that speak to the present while standing strong into the future.
            </p>
          </div>
        </div>

        {/* Additional Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {[
            'We integrate sustainable principles in all our projectsWe integrate sustainable principles in all our projectsWe integrate sustainable principles in all our projects.',
            'Our client-first approach ensures total transparencysustainable principles in all our projectsWe integrate sustainable .',
            'We handle everything from concept to executionsustainable principles in all our projectsWe integrate sustainable sustainable principles in all our projectsWe integrate sustainable .',
          ].map((text, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl shadow-md text-lg font-semibold tracking-wide ${
                idx === 0
                  ? 'bg-[#EFE4DC]'
                  : idx === 1
                  ? 'bg-[#DDD3C3]'
                  : 'bg-[#C6B4A1]'
              }`}
            >
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="pb-20 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-wider">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div
                className="absolute bottom-0 left-0 w-full px-3 py-4 bg-black bg-opacity-60 text-center"
              >
                <h2
                  className="text-xl font-bold uppercase"
                  style={{ color: themeColor }}
                >
                  {member.name}
                </h2>
                <p
                  className="text-sm font-semibold uppercase"
                  style={{ color: themeColor }}
                >
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FooterSection isDarkMode={isDarkMode} />
    </div>
  )
}
