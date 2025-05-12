import React from 'react';
import { motion } from 'framer-motion';
import Fleet from '../fleet/Fleet';

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
    <div className="relative overflow-hidden bg-black">
      <div className="text-center mt-10 border-b-2 border-white pb-4">
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
        <button className="mt-6 px-6 py-2 bg-black text-white border border-white rounded-full hover:bg-white hover:text-black transition cursor-pointer">
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
      <div className='lg:w-[60%] mt-10 pl-10'>
        <h1 className='text-white text-[50px] lg:text-[68px] font-bold'>
          Our Fleet
        </h1>
        <Fleet car='https://static.wixstatic.com/media/a6e5eed9b50e4982860ab21a580d1942.jpg/v1/fill/w_598,h_382,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a6e5eed9b50e4982860ab21a580d1942.jpg' carType='Luxury Cars' category='Elegance and Performance' carDescription='Experience the perfect blend of elegance and performance with our luxury cars. Designed for discerning travelers, our fleet offers unparalleled comfort and exquisite style. Whether for business or leisure, our luxury cars ensure a memorable journey.' />
        <Fleet car='https://static.wixstatic.com/media/5cda707e579f481091fc99762b5b521e.jpg/v1/fill/w_598,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5cda707e579f481091fc99762b5b521e.jpg' carType='Private Jet' category='Seamless Travel Experience' carDescription='Indulge in the ultimate luxury travel with our private jets. Enjoy personalized service, luxurious amenities, and the freedom to travel on your schedule. Our private jets redefine the art of flying, providing an unmatched level of exclusivity and comfort.
' />
        <Fleet car='https://static.wixstatic.com/media/11062b_ffd126baa7a343a3a0dc8598163549a2~mv2_d_5304_3990_s_4_2.jpg/v1/fill/w_598,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_ffd126baa7a343a3a0dc8598163549a2~mv2_d_5304_3990_s_4_2.jpg' carType='Executive Protection  ' category='Safety and Security' carDescription='  Prioritize your safety and security with our executive protection services. Our dedicated team ensures a discreet and reliable experience, offering peace of mind during your travels, events, or business engagements.' />

      </div>
    </div>
  );
};

export default Home;
