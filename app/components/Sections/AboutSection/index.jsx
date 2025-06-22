'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function AboutSection({ isDarkMode }) {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleElements, setVisibleElements] = useState({})
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Stagger animations for different elements
          setTimeout(() => setVisibleElements(prev => ({ ...prev, title: true })), 200)
          setTimeout(() => setVisibleElements(prev => ({ ...prev, text: true })), 400)
          setTimeout(() => setVisibleElements(prev => ({ ...prev, stats: true })), 600)
          setTimeout(() => setVisibleElements(prev => ({ ...prev, images: true })), 800)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '25+', label: 'Awards Won' },
    { number: '100%', label: 'Client Satisfaction' }
  ]

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className={`py-20 lg:py-32 transition-colors duration-500 ${
        isDarkMode ? 'bg-[#0F0F0F]' : 'bg-[#F5F5F5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          visibleElements.title 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-12 opacity-0'
        }`}>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
            isDarkMode ? 'text-[#F5F5F5]' : 'text-[#1A1A1A]'
          }`}>
            About <span className={isDarkMode ? 'text-[#D6B29D]' : 'text-[#A87E6E]'}>Studio PARSA</span>
          </h2>
          <div className={`w-24 h-1 mx-auto ${
            isDarkMode ? 'bg-[#D6B29D]' : 'bg-[#A87E6E]'
          }`}></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-200 ${
            visibleElements.text 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-12 opacity-0'
          }`}>
            <div>
              <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
                isDarkMode ? 'text-[#F5F5F5]' : 'text-[#1A1A1A]'
              }`}>
                Designing Tomorrow's Spaces Today
              </h3>
              <p className={`text-lg leading-relaxed mb-6 ${
                isDarkMode ? 'text-[#F5F5F5]/80' : 'text-[#1A1A1A]/80'
              }`}>
                Founded in 2008, Studio PARSA has been at the forefront of architectural innovation, 
                creating spaces that seamlessly blend functionality with aesthetic excellence. Our 
                philosophy centers on understanding the unique needs of each client while pushing 
                the boundaries of contemporary design.
              </p>
              <p className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-[#F5F5F5]/80' : 'text-[#1A1A1A]/80'
              }`}>
                We specialize in luxury residential projects, commercial spaces, and bespoke interior 
                design solutions. Every project is approached with meticulous attention to detail, 
                sustainable practices, and a commitment to timeless elegance.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              {[
                { title: 'Innovation', desc: 'Cutting-edge design solutions that push creative boundaries' },
                { title: 'Sustainability', desc: 'Eco-conscious practices in every aspect of our work' },
                { title: 'Excellence', desc: 'Uncompromising quality in design and execution' }
              ].map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                    isDarkMode ? 'bg-[#D6B29D]' : 'bg-[#A87E6E]'
                  }`}></div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${
                      isDarkMode ? 'text-[#F5F5F5]' : 'text-[#1A1A1A]'
                    }`}>
                      {value.title}
                    </h4>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-[#F5F5F5]/70' : 'text-[#1A1A1A]/70'
                    }`}>
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className={`transform transition-all duration-1000 delay-400 ${
            visibleElements.images 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-12 opacity-0'
          }`}>
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 h-64 relative rounded-2xl overflow-hidden group">
                <div className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A]'
                    : 'bg-gradient-to-br from-[#DDD3C3] to-[#A87E6E]'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-4xl font-bold ${
                      isDarkMode ? 'text-[#D6B29D]' : 'text-white'
                    }`}>
                      P A R S A
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Two smaller images */}
              <div className="h-32 relative rounded-xl overflow-hidden group">
                <div className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-[#1E1E1E] to-[#2A2A2A]'
                    : 'bg-gradient-to-r from-[#A87E6E] to-[#DDD3C3]'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-full ${
                      isDarkMode ? 'bg-[#D6B29D]' : 'bg-white'
                    }`}></div>
                  </div>
                </div>
              </div>
              
              <div className="h-32 relative rounded-xl overflow-hidden group">
                <div className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-gradient-to-l from-[#1E1E1E] to-[#2A2A2A]'
                    : 'bg-gradient-to-l from-[#A87E6E] to-[#DDD3C3]'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-6 h-6 rotate-45 ${
                      isDarkMode ? 'bg-[#D6B29D]' : 'bg-white'
                    }`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transform transition-all duration-1000 delay-600 ${
          visibleElements.stats 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-12 opacity-0'
        }`}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-[#1A1A1A] hover:bg-[#1E1E1E]' 
                  : 'bg-white hover:bg-[#DDD3C3]/30 shadow-lg'
              }`}
            >
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                isDarkMode ? 'text-[#D6B29D]' : 'text-[#A87E6E]'
              }`}>
                {stat.number}
              </div>
              <div className={`text-sm font-medium ${
                isDarkMode ? 'text-[#F5F5F5]/80' : 'text-[#1A1A1A]/80'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team/Philosophy Section */}
        <div className={`mt-20 text-center transform transition-all duration-1000 delay-800 ${
          visibleElements.stats 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-12 opacity-0'
        }`}>
          <div className={`max-w-4xl mx-auto p-8 rounded-3xl ${
            isDarkMode 
              ? 'bg-[#1A1A1A] border border-[#1E1E1E]' 
              : 'bg-white shadow-xl'
          }`}>
            <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${
              isDarkMode ? 'text-[#F5F5F5]' : 'text-[#1A1A1A]'
            }`}>
              Our Design Philosophy
            </h3>
            <p className={`text-lg leading-relaxed ${
              isDarkMode ? 'text-[#F5F5F5]/80' : 'text-[#1A1A1A]/80'
            }`}>
              "Architecture is not just about creating buildings; it's about crafting experiences, 
              emotions, and memories. Every line we draw, every space we design, carries the potential 
              to transform lives and inspire generations."
            </p>
            <div className={`mt-6 text-sm font-medium ${
              isDarkMode ? 'text-[#D6B29D]' : 'text-[#A87E6E]'
            }`}>
              — Founder & Principal Architect
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}