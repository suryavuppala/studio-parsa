'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function HeroSection({ isDarkMode }) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Background images for each slide
  const heroImages = [
    '/images/hero-1.jpg',
    '/images/hero-2.jpg',
    '/images/hero-3.jpg',
  ]

  // Content for each slide
  const heroContent = [
    {
      titleLine1: 'Crafting Spaces',
      titleLine2: 'That Inspire',
      subtitle: 'Studio PARSA specializes in luxury architectural design and interior solutions that blend modern aesthetics with timeless elegance.',
    },
    {
      titleLine1: 'Designing Dreams',
      titleLine2: 'With Precision',
      subtitle: 'From concept to completion, our team delivers stunning architecture tailored to your lifestyle and vision.',
    },
    {
      titleLine1: 'Interiors that',
      titleLine2: 'Tell Your Story',
      subtitle: 'Our interiors reflect your identity, combining comfort, functionality, and elegance seamlessly.',
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              {/* Background gradient instead of actual image */}
              <div
                className={`w-full h-full ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-[#1F1C1A] via-[#2E2B28] to-[#1F1C1A]'
                    : 'bg-gradient-to-r from-[#F4EDE4] via-[#EFE8DC] to-[#F4EDE4]'
                }`}
              />
              {/* Optional image overlay */}
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <span className="block text-white">{heroContent[currentImageIndex].titleLine1}</span>
            <span
              className={`block ${
                isDarkMode ? 'text-[#D6B29D]' : 'text-[#A87E6E]'
              }`}
            >
              {heroContent[currentImageIndex].titleLine2}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            {heroContent[currentImageIndex].subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <a href="#projects"
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isDarkMode
                  ? 'bg-[#D6B29D] text-[#0F0F0F] hover:bg-[#C5A08A]'
                  : 'bg-[#A87E6E] text-white hover:bg-[#9A6B5B]'
              }`}
            >
              View Our Work
            </a>

            <a href="#contact"
              className={`px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? 'border-[#D6B29D] text-[#D6B29D] hover:bg-[#D6B29D] hover:text-[#0F0F0F]'
                  : 'border-white text-white hover:bg-white hover:text-[#A87E6E]'
              }`}
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="flex flex-col items-center">
              <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
              <div
                className={`w-6 h-10 border-2 rounded-full flex justify-center ${
                  isDarkMode ? 'border-[#D6B29D]' : 'border-white'
                }`}
              >
                <div
                  className={`w-1 h-3 rounded-full mt-2 animate-bounce ${
                    isDarkMode ? 'bg-[#D6B29D]' : 'bg-white'
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? isDarkMode
                    ? 'bg-[#D6B29D]'
                    : 'bg-[#A87E6E]'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 z-10 hidden lg:block">
        <div
          className={`w-20 h-20 rounded-full border-2 animate-pulse ${
            isDarkMode ? 'border-[#D6B29D]/30' : 'border-white/30'
          }`}
        ></div>
      </div>

      <div className="absolute bottom-1/4 right-10 z-10 hidden lg:block">
        <div
          className={`w-16 h-16 rotate-45 border-2 animate-pulse delay-500 ${
            isDarkMode ? 'border-[#D6B29D]/30' : 'border-white/30'
          }`}
        ></div>
      </div>
    </section>
  )
}
