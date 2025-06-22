'use client'

import Link from 'next/link'

export default function Navbar({ isDarkMode }) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
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
                isDarkMode
                  ? 'bg-[#D6B29D] text-[#0F0F0F]'
                  : 'bg-[#A87E6E] text-white'
              }`}
            >
              <img
                src="/assets/splogo.jpg"
                className="w-12 h-12 rounded-full"
                alt="Studio PARSA logo"
              />
            </div>
            <span className="text-xl font-bold tracking-wide">STUDIO PARSA</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', href: '/home' },
              { name: 'About', href: '/about' },
              { name: 'Projects', href: '/#projects' },
              { name: 'Contact', href: '/#contact' },
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
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
