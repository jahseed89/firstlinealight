import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="relative h-screen bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gray-800 lg:bg-red-500 z-0"
          style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 60% 100%)' }}>
        </div>
        <div className="relative z-10 p-10 md:p-20 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            <span className="text-red-600">FIRST</span>LINEALIGHT
          </h1>
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
