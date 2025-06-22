'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from './components/Sections/HeroSection'
import AboutSection from './components/Sections/AboutSection'
import FeaturesSection from './components/Sections/FeaturesSection'
import ProjectsSection from './components/Sections/ProjectsSection'
import ContactSection from './components/Sections/ContactSection' 
import PageLoader from './components/PageLoader'
import FooterSection from './components/Sections/FooterSection'
import Link from 'next/link'
import QuoteEstimator from './components/QuoteEstimator'
import PhonePopupCard from './components/PhonePopupCard'

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [loading, setLoading] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = 'dark'
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true)
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500) // 1.5 seconds

    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  if (loading) {
    return <PageLoader isDarkMode={isDarkMode} />
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-[#0F0F0F] text-[#F5F5F5]' 
        : 'bg-[#F5F5F5] text-[#1A1A1A]'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isDarkMode 
          ? 'bg-[#0F0F0F]/95 backdrop-blur-md border-b border-[#1E1E1E]' 
          : 'bg-[#F5F5F5]/95 backdrop-blur-md border-b border-[#DDD3C3]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                isDarkMode 
                  ? 'bg-[#D6B29D] text-[#0F0F0F]' 
                  : 'bg-[#A87E6E] text-white'
              }`}>
                <img src="/assets/splogo.jpg" className="w-12 h-12 rounded-full"/>
              </div>
              <span className="text-xl font-bold tracking-wide">STUDIO PARSA</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Projects', href: '/projects' },
                { name: 'Contact', href: '/contact' },
              ].map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className={`relative font-medium transition-colors duration-300 hover:${
                    isDarkMode ? 'text-[#D6B29D]' : 'text-[#A87E6E]'
                  } group`}
                >
                  {name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                      isDarkMode ? 'bg-[#D6B29D]' : 'bg-[#A87E6E]'
                    } transition-all duration-300 group-hover:w-full`}
                  ></span>
                </Link>
              ))}
              {/* Desktop Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDarkMode
                    ? 'bg-[#1A1A1A] text-[#D6B29D] hover:bg-[#1E1E1E]'
                    : 'bg-white text-[#A87E6E] hover:bg-[#DDD3C3] shadow-lg'
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Menu Controls */}
            <div className="md:hidden flex items-center gap-2">
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDarkMode
                    ? 'bg-[#1A1A1A] text-[#D6B29D] hover:bg-[#1E1E1E]'
                    : 'bg-white text-[#A87E6E] hover:bg-[#DDD3C3] shadow-lg'
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
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
                {[
                  { name: 'Home', href: '/home' },
                  { name: 'About', href: '/about' },
                  { name: 'Projects', href: '/projects' },
                  { name: 'Contact', href: '/#contact' },
                ].map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    onClick={closeMobileMenu}
                    className={`block py-2 font-medium transition-colors duration-200 ${
                      isDarkMode
                        ? 'text-white hover:text-[#D6B29D]'
                        : 'text-black hover:text-[#A87E6E]'
                    }`}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection isDarkMode={isDarkMode} /> 
        <AboutSection isDarkMode={isDarkMode}/>
        <FeaturesSection isDarkMode={isDarkMode} />
        <ProjectsSection isDarkMode={isDarkMode} />
        <ContactSection isDarkMode={isDarkMode} />
        <FooterSection isDarkMode={isDarkMode} />
        <PhonePopupCard />
        <QuoteEstimator />
      </main>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
          isDarkMode
            ? 'bg-[#1A1A1A] text-[#D6B29D] hover:bg-[#1E1E1E]'
            : 'bg-white text-[#A87E6E] hover:bg-[#DDD3C3] shadow-lg'
        }`}
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  )
}