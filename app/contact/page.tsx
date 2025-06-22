'use client'

import { useState, useEffect } from 'react'
import { FiMail, FiPhone, FiMapPin, FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'

export default function ContactPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const savedTheme = 'dark'
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? 'bg-[#0F0F0F] text-white' : 'bg-[#F5F5F5] text-[#1A1A1A]'
      }`}
    >
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isDarkMode
            ? 'bg-[#0F0F0F]/95 backdrop-blur-md border-b border-[#1E1E1E]'
            : 'bg-[#F5F5F5]/95 backdrop-blur-md border-b border-[#DDD3C3]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                  isDarkMode ? 'bg-[#D6B29D] text-[#0F0F0F]' : 'bg-[#A87E6E] text-white'
                }`}
              >
                <img src="/assets/splogo.jpg" className="w-12 h-12 rounded-full" />
              </div>
              <span className="text-xl font-bold tracking-wide">STUDIO PARSA</span>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-6">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
  <a
    key={item}
    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
    className={`relative font-medium transition-colors duration-300 hover:${
      isDarkMode ? 'text-[#D6B29D]' : 'text-[#A87E6E]'
    } group`}
  >
    {item}
    <span
      className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
        isDarkMode ? 'bg-[#D6B29D]' : 'bg-[#A87E6E]'
      } transition-all duration-300 group-hover:w-full`}
    ></span>
  </a>
))}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`text-xl focus:outline-none transition-colors duration-300 ${
                  isDarkMode ? 'text-[#D6B29D]' : 'text-[#A87E6E]'
                }`}
              >
                {isDarkMode ? <FiSun /> : <FiMoon />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`text-xl focus:outline-none transition-colors duration-300 ${
                  isDarkMode ? 'text-[#D6B29D]' : 'text-[#A87E6E]'
                }`}
              >
                {isDarkMode ? <FiSun /> : <FiMoon />}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`text-2xl transition-colors duration-300 ${
                  isDarkMode ? 'text-[#D6B29D]' : 'text-[#A87E6E]'
                }`}
              >
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>

          {/* Mobile nav dropdown */}
          {menuOpen && (
  <div className={`md:hidden pb-4 w-full ${isDarkMode ? 'bg-[#0F0F0F]' : 'bg-[#F5F5F5]'}`}>
    {['Home', 'About', 'Projects', 'Contact'].map((item) => (
      <a
        key={item}
        href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
        className={`block py-2 px-4 font-medium transition-colors duration-300 hover:${
          isDarkMode ? 'text-[#D6B29D]' : 'text-[#A87E6E]'
        }`}
      >
        {item}
      </a>
    ))}
  </div>
)}
        </div>
      </nav>

      {/* Contact Section */}
      <section className="pt-28 px-4 sm:px-10 pb-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 tracking-wider">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We’d love to hear from you. Whether you have a question about our projects, team, or want to collaborate — let’s connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <FiMapPin className="text-2xl mt-1 text-[#A87E6E]" />
              <div>
                <h2 className="text-xl font-semibold">Address</h2>
                <p>Plot No 123, Studio PARSA Lane, Hyderabad, India</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FiPhone className="text-2xl mt-1 text-[#A87E6E]" />
              <div>
                <h2 className="text-xl font-semibold">Phone</h2>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FiMail className="text-2xl mt-1 text-[#A87E6E]" />
              <div>
                <h2 className="text-xl font-semibold">Email</h2>
                <p>studio.parsa@example.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block mb-1 font-semibold">Your Name</label>
              <input
                type="text"
                className={`w-full p-3 rounded-md border ${
                  isDarkMode ? 'bg-[#1E1E1E] border-[#333] text-white placeholder:text-gray-300' : 'border-gray-300'
                }`}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Your Email</label>
              <input
                type="email"
                className={`w-full p-3 rounded-md border ${
                  isDarkMode ? 'bg-[#1E1E1E] border-[#333] text-white placeholder:text-gray-300' : 'border-gray-300'
                }`}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                rows={5}
                className={`w-full p-3 rounded-md border ${
                  isDarkMode ? 'bg-[#1E1E1E] border-[#333] text-white placeholder:text-gray-300' : 'border-gray-300'
                }`}
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#A87E6E] text-white px-6 py-3 rounded-md font-bold hover:bg-[#946b5e] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}