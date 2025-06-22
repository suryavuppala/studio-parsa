'use client'

import { useState } from 'react'
import { Sparkles } from 'lucide-react'

export default function QuoteEstimator() {
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState('residential')
  const [type, setType] = useState('basic')
  const [bedrooms, setBedrooms] = useState(2)
  const [homeTheatre, setHomeTheatre] = useState(false)
  const [squareFeet, setSquareFeet] = useState(1500)
  const [floors, setFloors] = useState('1')
  const [quote, setQuote] = useState(null)

  const pricing = {
    residential: {
      basic: 1400,
      standard: 2100,
      luxury: 2800,
    },
    commercial: {
      basic: 1600,
      standard: 2400,
      luxury: 3100,
    },
  }

  const handleNumberInput = (e, setter, min = 0, max = null) => {
    const val = e.target.value
    if (/^\d*$/.test(val)) {
      const num = Number(val || 0)
      if (num >= min && (max === null || num <= max)) {
        setter(num)
      }
    }
  }

  const calculateQuote = () => {
    let totalCost = 0
    const baseRate = pricing[category][type]

    if (category === 'residential') {
      const baseCost = squareFeet * baseRate
      const bedroomCost = bedrooms * 50000
      const theatreCost = homeTheatre ? 500000 : 0
      totalCost = baseCost + bedroomCost + theatreCost
    } else {
      const floorCount = Number(floors) || 0
      const totalSqft = squareFeet * floorCount

      totalCost = totalSqft * baseRate
    }

    const minQuote = Math.floor(totalCost * 0.9)
    const maxQuote = Math.ceil(totalCost * 1.1)

    setQuote({ min: minQuote, max: maxQuote })
  }

  return (
    <>
      {/* Glowing Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#A87E6E] text-white px-5 py-3 rounded-full shadow-xl hover:scale-105 transition-transform duration-300 focus:outline-none animate-pulse"
      >
        <Sparkles className="w-5 h-5" />
        {open ? 'Close Estimator' : 'Get Instant Quote'}
      </button>

      {/* Estimator UI */}
      {open && (
        <div className="fixed bottom-24 left-6 right-6 sm:left-6 sm:w-96 bg-white dark:bg-[#1E1E1E] text-black dark:text-white p-6 rounded-2xl shadow-2xl z-50 transition-all duration-300 max-h-[80vh] overflow-auto">
          <h2 className="text-2xl font-semibold mb-5 text-[#A87E6E]">Estimate Your Project</h2>

          {/* Category */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`w-full p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#A87E6E] 
    `}
            >
              <option value="residential" style={{
      color:'rgb(0, 0, 0)',
    }} >Residential</option>
              <option value="commercial" style={{
      color:'rgb(0, 0, 0)',
    }}>Commercial</option>
            </select>
          </div>

          {/* Type */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#A87E6E]"
            >
              <option value="basic" style={{
      color:'rgb(0, 0, 0)',
    }}>Basic</option>
              <option value="standard" style={{
      color:'rgb(0, 0, 0)',
    }}>Standard</option>
              <option value="luxury" style={{
      color:'rgb(0, 0, 0)',
    }}>Luxury</option>
            </select>
          </div>

          {/* Residential */}
          {category === 'residential' ? (
            <>
            <label className="block mb-1 font-medium">No.of Bedrooms</label>
              <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={bedrooms}
                    onChange={(e) => {
                        const val = e.target.value
                        if (/^\d*$/.test(val) && (val === '' || (Number(val) >= 1 && Number(val) <= 20))) {
                        setBedrooms(val)
                        }
                    }}
                    className="w-full p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#A87E6E]"
                    />


              <div className="mb-4 flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={homeTheatre}
                  onChange={() => setHomeTheatre(!homeTheatre)}
                  className="accent-[#A87E6E] w-4 h-4"
                />
                <label className="font-medium">Include Home Theatre</label>
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-medium">Square Feet</label>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={squareFeet}
                  onChange={(e) => handleNumberInput(e, setSquareFeet, 0)}
                  className="w-full p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#A87E6E]"
                />
              </div>
            </>
          ) : (
            <>
              <div className="mb-4">
                <label className="block mb-1 font-medium">No. of Floors</label>
                <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={floors}
                onChange={(e) => {
                    const val = e.target.value
                    if (/^\d*$/.test(val) && (val === '' || Number(val) >= 1)) {
                    setFloors(val)
                    }
                }}
                className="w-full p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#A87E6E]"
                />

              </div>

              <div className="mb-4">
                <label className="block mb-1 font-medium">Sqft per Floor</label>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={squareFeet}
                  onChange={(e) => handleNumberInput(e, setSquareFeet, 0)}
                  className="w-full p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#A87E6E]"
                />
              </div>
            </>
          )}

          {/* Get Quote Button */}
          <button
            onClick={calculateQuote}
            className="w-full bg-[#A87E6E] text-white py-2 mt-2 rounded-xl font-semibold hover:bg-[#8f6a5c] transition duration-200"
          >
            Calculate Quote
          </button>

          {/* Quote Output */}
          {quote && (
            <div className="mt-5 bg-[#f8f4f0] dark:bg-[#2c2c2c] p-4 rounded-lg text-center">
              <p className="font-semibold">Estimated Cost:</p>
              <p className="text-lg text-[#A87E6E] font-bold">
                ₹{quote.min.toLocaleString('en-IN')} – ₹{quote.max.toLocaleString('en-IN')}
                </p>

            </div>
          )}
        </div>
      )}
    </>
  )
}
