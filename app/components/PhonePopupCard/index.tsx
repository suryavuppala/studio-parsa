'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import {
  CountryCode,
  getCountries,
  getCountryCallingCode,
  parsePhoneNumberFromString,
  getExampleNumber
} from 'libphonenumber-js'
import examples from 'libphonenumber-js/examples.mobile.json'

export default function PhonePopupCard() {
  const [show, setShow] = useState(false)
  const [country, setCountry] = useState<CountryCode>('IN')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 7000)
    return () => clearTimeout(timer)
  }, [])

  const getMaxDigits = (countryCode: CountryCode) => {
    try {
      const example = getExampleNumber(countryCode, examples)
      return example?.nationalNumber.length || 10
    } catch {
      return 10
    }
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '')
    const maxDigits = getMaxDigits(country)
    if (digits.length <= maxDigits) {
      setPhone(digits)
    }
  }

  const handleSubmit = () => {
    const fullNumber = `+${getCountryCallingCode(country)}${phone}`
    const parsed = parsePhoneNumberFromString(fullNumber, country)

    if (!parsed?.isValid()) {
      setError(`Please enter a valid phone number for ${country}`)
      return
    }

    setError('')
    console.log('✅ Valid phone:', parsed.number)
    setShow(false)
  }

  const handleBackdropClick = (e: any) => {
    if (!cardRef.current?.contains(e.target)) {
      setShow(false)
    }
  }

  return (
    <AnimatePresence>
      {show && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* BACKDROP */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* CARD */}
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative z-10 w-[90%] max-w-md rounded-3xl p-6 bg-white dark:bg-[#1e1e1e] shadow-xl border border-gray-200 dark:border-gray-700"
          >
            {/* Close Button */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-2 text-center text-[#A87E6E]">Get in Touch</h2>
            <p className="mb-5 text-sm text-center text-gray-600 dark:text-gray-400">
              Enter your phone number and we’ll contact you shortly.
            </p>

            {/* Inputs */}
            <div className="flex gap-2 mb-3">
              <select
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value as CountryCode)
                  setPhone('')
                  setError('')
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#2b2b2b] text-sm w-[45%] focus:outline-none focus:ring-2 focus:ring-[#A87E6E] text-black dark:text-white"
              >
                {getCountries().map((c) => (
                  <option key={c} value={c}>
                    +{getCountryCallingCode(c as CountryCode)} {c}
                  </option>
                ))}
              </select>

              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Phone number"
                value={phone}
                onChange={handleInput}
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A87E6E] bg-white dark:bg-[#2b2b2b] placeholder-gray-700 dark:placeholder-gray-400 text-black dark:text-white"
              />
            </div>

            {/* Error */}
            {error && <p className="text-red-500 text-xs mb-2">{error}</p>}

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="w-full mt-2 bg-[#A87E6E] text-white py-2 rounded-xl hover:bg-[#8f6a5c] transition font-medium shadow"
            >
              Submit
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
