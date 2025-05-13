import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { y: 50, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  viewport: { once: true, amount: 0.3 }, // triggers once when 30% is visible
};

const Fleet = ({ car, category, carType, carDescription }) => {
  return (
    <div className='flex justify-between items-start flex-wrap mt-10'>
      <div className='lg:w-[55%]'>
        <img
          src={car}
          alt="Luxury Car"
          className="w-full h-auto object-cover mt-10"
        />
      </div>

      <div className='lg:w-[35%] pt-10 border-t-2 border-white lg:mt-10 text-justify'>
        <h3 className='text-[26px] lg:text-[28px] text-white mb-5'>{carType}</h3>

        <motion.p
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={fadeUp.viewport}
          className='text-[16px] text-white mb-4'
        >
          {category}
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={fadeUp.viewport}
          className='text-[16px] text-white'
        >
          {carDescription}
        </motion.p>
      </div>
    </div>
  );
};

export default Fleet;

