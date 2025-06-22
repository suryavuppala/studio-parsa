'use client'

import { useState, useEffect, useRef } from 'react'

export default function FeaturesSection({ isDarkMode }) {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
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

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Residential Design',
      description: 'Luxury homes and private residences that reflect your unique lifestyle and personality.',
      features: ['Custom Home Design', 'Renovation & Remodeling', 'Sustainable Living Solutions', 'Smart Home Integration']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
        </svg>
      ),
      title: 'Commercial Spaces',
      description: 'Innovative commercial architecture that enhances productivity and brand identity.',
      features: ['Office Buildings', 'Retail Spaces', 'Hospitality Design', 'Mixed-Use Developments']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      title: 'Interior Design',
      description: 'Sophisticated interior solutions that maximize space while maintaining elegance.',
      features: ['Space Planning', 'Furniture Selection', 'Lighting Design', 'Art & Accessories']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Consultation',
      description: 'Expert architectural consultation to bring your vision to life with professional guidance.',
      features: ['Design Consultation', 'Project Management', 'Permit Assistance', 'Construction Oversight']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      title: 'Sustainable Design',
      description: 'Eco-friendly solutions that minimize environmental impact while maximizing efficiency.',
      features: ['Green Building Certification', 'Energy Efficiency', 'Renewable Materials', 'Water Conservation']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'Cutting-edge design technologies and methodologies for future-ready spaces.',
      features: ['3D Modeling & VR', 'AI-Assisted Design', 'Parametric Architecture', 'Digital Twin Technology']
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className={`py-20 lg:py-32 transition-colors duration-500 ${
        isDarkMode ? 'bg-[#1A1A1A]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-12 opacity-0'
        }`}>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
            isDarkMode ? 'text-[#F5F5F5]' : 'text-[#1A1A1A]'
          }`}>
            Our <span className={isDarkMode ? 'text-[#D6B29D]' : 'text-[#A87E6E]'}>Expertise</span>
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 ${
            isDarkMode ? 'text-[#F5F5F5]/80' : 'text-[#1A1A1A]/80'
          }`}>
            From concept to completion, we offer comprehensive design services 
            that transform your vision into extraordinary spaces.
          </p>
          <div className={`w-24 h-1 mx-auto ${
            isDarkMode ? 'bg-[#D6B29D]' : 'bg-[#A87E6E]'
          }`}></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl transition-all duration-500 cursor-pointer transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              } ${
                isDarkMode
                  ? 'bg-[#0F0F0F] border border-[#1E1E1E] hover:border-[#D6B29D]/50'
                  : 'bg-[#F5F5F5] border border-[#DDD3C3] hover:border-[#A87E6E]/50 shadow-lg'
              } hover:scale-105 hover:shadow-2xl`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 ${
                isDarkMode
                  ? hoveredCard === index 
                    ? 'bg-[#D6B29D] text-[#0F0F0F]' 
                    : 'bg-[#1E1E1E] text-[#D6B29D]'
                  : hoveredCard === index 
                    ? 'bg-[#A87E6E] text-white' 
                    : 'bg-[#DDD3C3] text-[#A87E6E]'
              }`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className={`text-xl md:text-2xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-[#F5F5F5]' : 'text-[#1A1A1A]'
              }`}>
                {feature.title}
              </h3>

              {/* Description */}
              <p className={`text-base mb-6 leading-relaxed ${
                isDarkMode ? 'text-[#F5F5F5]/80' : 'text-[#1A1A1A]/80'
              }`}>
                {feature.description}
              </p>

              {/* Feature List */}
              <ul className="space-y-2">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      isDarkMode ? 'bg-[#D6B29D]' : 'bg-[#A87E6E]'
                    }`}></div>
                    <span className={`text-sm ${
                      isDarkMode ? 'text-[#F5F5F5]/70' : 'text-[#1A1A1A]/70'
                    }`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect Arrow */}
              <div className={`absolute bottom-6 right-6 transition-all duration-300 ${
                hoveredCard === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-[#D6B29D] text-[#0F0F0F]' : 'bg-[#A87E6E] text-white'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Background Pattern */}
              <div className={`absolute top-0 right-0 w-20 h-20 opacity-5 transition-opacity duration-300 ${
                hoveredCard === index ? 'opacity-10' : 'opacity-5'
              }`}>
                <div className={`w-full h-full rounded-full ${
                  isDarkMode ? 'bg-[#D6B29D]' : 'bg-[#A87E6E]'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`mt-20 text-center transform transition-all duration-1000 delay-300 ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-12 opacity-0'
        }`}>
          <div className={`max-w-4xl mx-auto p-12 rounded-3xl ${
            isDarkMode 
              ? 'bg-gradient-to-r from-[#1E1E1E] to-[#2A2A2A] border border-[#1E1E1E]' 
              : 'bg-gradient-to-r from-[#DDD3C3] to-[#A87E6E] shadow-xl'
          }`}>
            <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDarkMode ? 'text-[#F5F5F5]' : 'text-white'
            }`}>
              Ready to Start Your Project?
            </h3>
            <p className={`text-lg mb-8 ${
              isDarkMode ? 'text-[#F5F5F5]/80' : 'text-white/90'
            }`}>
              Let's discuss how we can bring your architectural vision to life with our expertise and passion.
            </p>
            <button className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              isDarkMode
                ? 'bg-[#D6B29D] text-[#0F0F0F] hover:bg-[#C5A08A]'
                : 'bg-white text-[#A87E6E] hover:bg-[#F5F5F5]'
            }`}>
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}