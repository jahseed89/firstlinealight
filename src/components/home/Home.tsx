import React from 'react'
import { motion } from 'framer-motion'

const text = 'FIRSTLINEALIGHT'.split('')

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.3
    }
  }
}

const letter = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100
    }
  }
}

const Home = () => {
  return (
    <div>
      <div className="relative h-screen bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gray-800 lg:bg-red-500 z-0"
          style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 60% 100%)' }}>
        </div>
        <div className="relative z-10 p-10 md:p-20 max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-black leading-tight flex flex-wrap"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {text.map((char, i) => (
              <motion.span
                key={i}
                variants={letter}
                className={`${i < 5 ? 'text-red-600' : 'text-black'}`}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <p className="mt-4 text-gray-600">
            We have every car you need, from the latest models to timeless classics, ready for rent. Whether it’s for a weekend getaway or a long-term rental, our team of experts is here to help you with the perfect vehicle to suit your needs and budget
          </p>
          <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded hover:bg-red-700 transition cursor-pointer">
            Discover Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home

