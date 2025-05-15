import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Fleet from "../fleet/Fleet";

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
      ease: "easeOut",
    },
  },
};

const fadeUp = {
  initial: { y: 50, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.3 }, // triggers once when 30% is visible
};

const Home = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const videoRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // 50% of video section visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-black">
      <div className="text-center mt-10 border-b-2 border-white pb-4">
        <motion.h1
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="text-[40px] md:text-[100px] font-bold w-[100%] md:w-[60%] mx-auto text-white leading-tight"
        >
          <motion.span variants={spanVariants} className="block">
            Premium Luxury Rides
          </motion.span>
          <motion.span variants={spanVariants} className="block">
            and Executive
          </motion.span>
          <motion.span variants={spanVariants} className="block">
            Protection
          </motion.span>
        </motion.h1>
        <p className="text-lg mt-4 text-white">Arrive in Style and Comfort</p>
        <button
          className="mt-6 px-6 py-2 bg-black text-white border border-white rounded-full hover:bg-white hover:text-black transition cursor-pointer"
          onClick={handleScroll}
        >
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
      <div className="lg:w-[60%] mt-10 px-8 lg:pl-10 lg:pr-0" ref={contentRef}>
        <h1 className="text-white text-[50px] lg:text-[68px] font-bold">
          Our Fleet
        </h1>
        <Fleet
          car="https://static.wixstatic.com/media/a6e5eed9b50e4982860ab21a580d1942.jpg/v1/fill/w_598,h_382,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a6e5eed9b50e4982860ab21a580d1942.jpg"
          carType="Luxury Cars"
          category="Elegance and Performance"
          carDescription="Experience the perfect blend of elegance and performance with our luxury cars. Designed for discerning travelers, our fleet offers unparalleled comfort and exquisite style. Whether for business or leisure, our luxury cars ensure a memorable journey."
        />
        <Fleet
          car="https://static.wixstatic.com/media/5cda707e579f481091fc99762b5b521e.jpg/v1/fill/w_598,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5cda707e579f481091fc99762b5b521e.jpg"
          carType="Private Jet"
          category="Seamless Travel Experience"
          carDescription="Indulge in the ultimate luxury travel with our private jets. Enjoy personalized service, luxurious amenities, and the freedom to travel on your schedule. Our private jets redefine the art of flying, providing an unmatched level of exclusivity and comfort.
"
        />
        <Fleet
          car="https://static.wixstatic.com/media/11062b_ffd126baa7a343a3a0dc8598163549a2~mv2_d_5304_3990_s_4_2.jpg/v1/fill/w_598,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_ffd126baa7a343a3a0dc8598163549a2~mv2_d_5304_3990_s_4_2.jpg"
          carType="Executive Protection  "
          category="Safety and Security"
          carDescription="  Prioritize your safety and security with our executive protection services. Our dedicated team ensures a discreet and reliable experience, offering peace of mind during your travels, events, or business engagements."
        />
      </div>
      <div className="flex justify-between items-start flex-wrap mt-10 px-8 lg:pl-10 lg:pr-0 border-y-2 border-white">
        <div className="lg:w-[50%]">
          <div className="lg:w-[50%]">
            <h1 className="text-[40px] lg:text-[64px] text-white mt-10">
              About Rent a Car
            </h1>
            <motion.p
              variants={fadeUp}
              initial="initial"
              whileInView="whileInView"
              viewport={fadeUp.viewport}
              className="ext-[16px] text-white text-justify"
            >
              At Rent a Car, we specialize in providing premium luxury rides,
              private jets, and executive protection exclusively for discerning
              travelers from around the world. Our commitment to excellence and
              personalized service ensures a seamless and luxurious travel
              experience, wherever your journey begins.
            </motion.p>
          </div>
        </div>
        <div className="lg:w-[50%] border-l-2 border-white">
          <img
            src="https://static.wixstatic.com/media/11062b_0a0a412e3de64d3a98618b9ad9fd26a2~mv2.jpg/v1/fill/w_1096,h_652,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_0a0a412e3de64d3a98618b9ad9fd26a2~mv2.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <h1 className="text-white text-[40px] lg:text-[64px] font-bold text-center py-10">
          Latest Additions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-16 pb-20">
          {[
            {
              img: "https://static.wixstatic.com/media/11062b_ddfdcd25558b44a6944fda30067181c6~mv2.jpg/v1/fill/w_302,h_422,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0-01.jpg",
              title: "New Offerings",
              text: `Discover our latest offerings, designed to elevate your travel experience. From exclusive luxury cars to bespoke private jet services, we continue to redefine premium travel with uncompromising quality and sophistication.`,
            },
            {
              img: "https://static.wixstatic.com/media/11062b_465533d7f61747529c1ac6fc7c35c34b~mv2.jpg/v1/crop/x_35,y_0,w_2688,h_3744/fill/w_302,h_422,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0-02.jpg",
              title: "Events & Experiences",
              text: `Join us at prestigious events and exclusive experiences tailored for our distinguished clientele. Immerse yourself in the world of luxury travel and explore the finest in transportation, hospitality, and lifestyle.`,
            },
            {
              img: "https://static.wixstatic.com/media/11062b_77ee69ae2f3744b9b0c5f7019982f846~mv2.jpg/v1/fill/w_302,h_422,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0-03.jpg",
              title: "Recognition & Awards",
              text: `We take pride in our industry recognition and prestigious awards, celebrating our commitment to delivering exceptional services and experiences to our esteemed customers.`,
            },
          ].map(({ img, title, text }, i) => (
            <div
              key={i}
              className="text-white border border-white pt-6 pb-8 px-4 flex flex-col items-center text-center"
            >
              <img
                src={img}
                alt={title}
                className="border-2 border-white mb-6 w-full max-w-[300px]"
              />
              <h2 className="text-[22px] lg:text-[26px] font-bold mb-4">
                {title}
              </h2>
              <motion.p
                variants={fadeUp}
                initial="initial"
                whileInView="whileInView"
                viewport={fadeUp.viewport}
                className="text-[16px] text-justify text-white max-w-[300px]"
              >
                {text}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
          src="https://player.vimeo.com/external/341068168.sd.mp4?s=8f01e3f7d1784f90a71d3e2188654a3cd1d38ea5&profile_id=164&oauth2_token_id=57447761"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
    </div>
  );
};

export default Home;
