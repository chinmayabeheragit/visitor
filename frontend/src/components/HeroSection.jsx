import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import bgImage from '../assets/images/banner3.jpg';

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const bgVariants = {
    hidden: { scale: 1.08 },
    visible: {
      scale: 1,
      transition: { duration: 2, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white bg-white overflow-hidden select-none">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, white 20%)',
          maskImage: 'linear-gradient(to bottom, transparent, white 20%)',
          filter: 'brightness(0.75) saturate(1.15)',
        }}
        variants={bgVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-[1]" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl text-center px-6"
        variants={container}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg"
          variants={item}
        >
          Explore the Wonders of <br />
          <span className="text-emerald-400 pacifico-regular">India</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl mb-10 drop-shadow-md edu-vic-hand"
          variants={item}
        >
          Discover vibrant cultures, breathtaking landscapes, and savor the rich flavors
          of Indian cuisine on your next unforgettable journey.
        </motion.p>

        <motion.button
          className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold shadow-lg lato-regular origin-center transition-all duration-300 ease-in-out hover:bg-emerald-600 hover:text-white hover:scale-x-110"
          variants={item}
          whileTap={{ scale: 0.96 }}
        >
          Start planning →
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
