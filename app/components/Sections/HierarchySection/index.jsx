'use client'

import { useState, useEffect, useRef } from 'react'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','700'] })

const packages = [
  {
    name: '     Basic',
    features: {
      '3D Visualizations': true,
      'Detailed Working Drawings': true,
      
      'Material & Finish Selection': true,
      
      'Site Supervision': true,
      
      
      'Project Timeline Plan': true,
      'Lighting Design': false,
      'Custom Furniture Design': false,
      'Mood Boards & Concepts': false,
      'Premium Material Options': false,
      '1-Year Post-Completion Support': false,


    },
  },
  {
    name: '     Standard',
    features: {
      '3D Visualizations': true,
      'Detailed Working Drawings': true,
      
      'Material & Finish Selection': true,
      
      'Site Supervision': true,
      
      'Project Timeline Plan': true,
      
      'Lighting Design': true,
      'Custom Furniture Design': false,
      'Mood Boards & Concepts': false,
      'Premium Material Options': false,
      '1-Year Post-Completion Support': false,
    },
  },
  {
    name: '     Luxury',
    features: {
      '3D Visualizations': true,
      'Detailed Working Drawings': true,
      
      'Material & Finish Selection': true,
      
      'Site Supervision': true,
      
      'Project Timeline Plan': true,
      
      'Lighting Design': true,
      'Custom Furniture Design': true,
      'Mood Boards & Concepts': true,
      'Premium Material Options': true,
      '1-Year Post-Completion Support': true,
    },
  },
]

const featureList = Object.keys(packages[0].features)

export default function PackageComparison({ isDarkMode }) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`py-20 lg:py-32 transition-colors duration-500 ${
        isDarkMode ? 'bg-[#1A1A1A]' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
              isDarkMode ? 'text-[#F5F5F5]' : 'text-[#1A1A1A]'
            }`}
          >
            Interior Design <span className={isDarkMode ? 'text-[#D6B29D]' : 'text-[#A87E6E]'}>Packages</span>
          </h2>
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto mb-4 ${playfair.className} ${
              isDarkMode ? 'text-[#F5F5F5]/80' : 'text-[#1A1A1A]/80'
            }`}
          >
            Choose from our <span className="font-semibold">Basic</span>,{' '}
            <span className="font-semibold">Standard</span>, and{' '}
            <span className="font-semibold">Luxury</span> packages — Basic covers essential design elements, Standard adds detailed drawings, lighting, and supervision, while Luxury offers full 3D visualizations, custom furniture, premium materials, and end-to-end project support.
          </p>
          <div
            className={`w-24 h-1 mx-auto ${
              isDarkMode ? 'bg-[#D6B29D]' : 'bg-[#A87E6E]'
            }`}
          ></div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse text-left">
            <thead>
              <tr>
                <th className="pb-4"></th>
                {packages.map((pkg) => (
                  <th
                    key={pkg.name}
                    className={`pb-4 font-semibold ${
                      pkg.name === 'Luxury'
                        ? isDarkMode
                          ? 'text-[#D6B29D]'
                          : 'text-[#A87E6E]'
                        : isDarkMode
                        ? 'text-[#F5F5F5]'
                        : 'text-[#1A1A1A]'
                    }`}
                  >
                    {pkg.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
  {featureList.map((feature) => (
    <tr
      key={feature}
      className={`border-t transition-colors duration-300 ${
        isDarkMode ? 'border-[#2A2A2A]' : 'border-gray-200'
      }`}
    >
      {/* Feature name */}
      <td
        className={`py-3 pr-6 align-middle ${isDarkMode ? 'text-[#F5F5F5]/80' : 'text-gray-700'}`}
      >
        {feature}
      </td>

      {/* Package ticks */}
      {packages.map((pkg) => (
        <td key={pkg.name} className="py-3 text-center align-middle">
          {pkg.features[feature] ? (
            <span className={`inline-block text-lg ${isDarkMode ? 'text-[#D6B29D]' : 'text-[#A87E6E]'}`}>
              ✓
            </span>
          ) : (
            <span className={`inline-block text-lg ${isDarkMode ? 'text-[#F5F5F5]/50' : 'text-gray-400'}`}>
              —
            </span>
          )}
        </td>
      ))}
    </tr>
  ))}
</tbody>

          </table>
        </div>
      </div>
    </section>
  )
}
