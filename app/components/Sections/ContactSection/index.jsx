'use client'

import { useState, useEffect, useRef } from 'react'

export default function ContactSection({ isDarkMode }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Handle form input
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // Form validation
  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.projectType) newErrors.projectType = 'Project type is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000)) // simulate delay
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: '',
        timeline: ''
      })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const labelStyle = isDarkMode ? 'text-[#F5F5F5]' : 'text-[#1A1A1A]'
  const inputBase = 'w-full px-4 py-3 rounded-xl border transition-colors duration-300 focus:outline-none focus:ring-2'
  const getInputStyle = (field) =>
    errors[field]
      ? 'border-red-500 focus:ring-red-500/20'
      : isDarkMode
        ? 'bg-[#1A1A1A] border-[#1E1E1E] text-[#F5F5F5] focus:ring-[#D6B29D]/20 focus:border-[#D6B29D]'
        : 'bg-white border-[#DDD3C3] text-[#1A1A1A] focus:ring-[#A87E6E]/20 focus:border-[#A87E6E]'

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-20 lg:py-32 transition-colors duration-500 ${isDarkMode ? 'bg-[#1A1A1A]' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${labelStyle}`}>
            Let's Create <span className={isDarkMode ? 'text-[#D6B29D]' : 'text-[#A87E6E]'}>Together</span>
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-[#F5F5F5]/80' : 'text-[#1A1A1A]/80'}`}>
            Ready to transform your space? Reach out to our team to start your vision.
          </p>
          <div className={`mt-6 w-24 h-1 mx-auto ${isDarkMode ? 'bg-[#D6B29D]' : 'bg-[#A87E6E]'}`}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className={`${isDarkMode ? 'bg-[#0F0F0F] border border-[#1E1E1E]' : 'bg-[#F5F5F5] shadow-xl'} p-8 rounded-3xl`}>
              <h3 className={`text-2xl font-bold mb-6 ${labelStyle}`}>Start Your Project</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${labelStyle}`}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`${inputBase} ${getInputStyle('name')}`}
                      placeholder="Your Name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${labelStyle}`}>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`${inputBase} ${getInputStyle('email')}`}
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${labelStyle}`}>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`${inputBase} ${getInputStyle('phone')}`}
                    placeholder="+91 99999 99999"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${labelStyle}`}>Project Type *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className={`${inputBase} ${getInputStyle('projectType')}`}
                    >
                      <option value="">Select</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="interior">Interior</option>
                      <option value="landscape">Landscape</option>
                    </select>
                    {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${labelStyle}`}>Estimated Budget</label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className={`${inputBase} ${getInputStyle('budget')}`}
                      placeholder="e.g., ₹15L - ₹30L"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${labelStyle}`}>Timeline</label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className={`${inputBase} ${getInputStyle('timeline')}`}
                    placeholder="e.g., 3-6 months"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${labelStyle}`}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className={`${inputBase} ${getInputStyle('message')}`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 text-white font-semibold rounded-xl transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : isDarkMode
                          ? 'bg-[#D6B29D] hover:bg-[#cfa48d]'
                          : 'bg-[#A87E6E] hover:bg-[#8d6753]'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </button>
                  {submitStatus === 'success' && <p className="text-green-500 text-sm mt-2">Message sent successfully!</p>}
                  {submitStatus === 'error' && <p className="text-red-500 text-sm mt-2">Something went wrong. Please try again.</p>}
                </div>
              </form>
            </div>
          </div>

          {/* You can put the ContactInfo / Address / Map or Socials section in the other half here */}
          <div className="flex items-center justify-center">
            {/* Placeholder or additional content */}
            <div className={`text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              <p className="text-xl font-medium">Or reach us directly at:</p>
              <p className="mt-2">📧 hello@studioparsa.com</p>
              <p className="mt-1">📞 +91-99999 99999</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
