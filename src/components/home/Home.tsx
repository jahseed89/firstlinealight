import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const spanVariants = {
  initial: { y: 80, opacity: 0 }, // Start lower
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <div className="text-center mt-10 border-b-2 border-white">
        <motion.h1
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="text-[40px] md:text-[100px] font-bold w-[100%] md:w-[60%] mx-auto text-white leading-tight"
        >
          <motion.span variants={spanVariants} className="block">Premium Luxury Rides</motion.span>
          <motion.span variants={spanVariants} className="block">and Executive</motion.span>
          <motion.span variants={spanVariants} className="block">Protection</motion.span>
        </motion.h1>

        <p className="text-lg mt-4 text-white">Arrive in Style and Comfort</p>
        <button className="mt-6 px-6 py-2 bg-black text-white border border-white rounded-full hover:bg-white hover:text-black transition">
          Explore Now
        </button>
      </div>

      <div>
        <img
          src="https://static.wixstatic.com/media/11062b_df157b31de1b4741a83209d5931f7d92~mv2.jpeg/v1/fill/w_2191,h_812,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_df157b31de1b4741a83209d5931f7d92~mv2.jpeg"
          alt="Luxury Car"
          className="w-full h-auto object-cover mt-10"
        />
      </div>
    </div>
  );
};

export default Home;
