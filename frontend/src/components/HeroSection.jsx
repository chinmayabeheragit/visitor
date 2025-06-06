import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import bgImage from '../assets/images/banner3.jpg';

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, rootMargin: '-100px' });
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
        staggerChildren: 0.25,
        delayChildren: 0.2,
        ease: 'easeOut',
        duration: 0.8,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.6 } },
  };

  const bgVariants = {
    hidden: { scale: 1.08 },
    visible: {
      scale: 1,
      transition: { duration: 1.8, ease: 'easeOut' },
    },
  };

  const buttonHover = {
    scaleX: 1.18,
    x: -12,
    boxShadow: '0 0 12px rgba(16, 185, 129, 0.6)', // emerald glow
    transition: { duration: 0.35, ease: 'easeInOut' },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white bg-white overflow-hidden select-none">
      {/* Background Image with top fade mask */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          maskImage: 'linear-gradient(to bottom, transparent, white 20%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, white 20%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.75) saturate(1.15)',
        }}
        variants={bgVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
      />

      {/* Dark overlay for readability */}
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
          <SubtleShimmerText>
            India
          </SubtleShimmerText>
        </motion.h1>

        <motion.p className="text-lg sm:text-xl mb-10 drop-shadow-md edu-vic-hand" variants={item}>
          Discover vibrant cultures, breathtaking landscapes, and savor the rich flavors of Indian cuisine on your next unforgettable journey.
        </motion.p>

        <motion.button
          className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold shadow-lg relative overflow-hidden transition-colors duration-300 ease-in-out lato-regular origin-left"
          variants={item}
          whileHover={buttonHover}
          whileTap={{ scale: 0.95 }}
          initial={{ scaleX: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 20 }}
          onHoverStart={e => {
            e.currentTarget.style.backgroundColor = '#059669'; // emerald-500
            e.currentTarget.style.color = 'white';
          }}
          onHoverEnd={e => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.color = '#10B981'; // emerald-600
          }}
        >
          Start planning →
        </motion.button>
      </motion.div>
    </section>
  );
};

const SubtleShimmerText = ({ children }) => {
  return (
    <span className="text-emerald-400 pacifico-regular inline-block relative overflow-hidden">
      {children}
      <motion.span
        style={{
          position: 'absolute',
          top: 0,
          left: '-75%',
          width: '50%',
          height: '100%',
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
          transform: 'skewX(-20deg)',
          pointerEvents: 'none',
        }}
        animate={{ x: ['-75%', '125%'] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
      />
    </span>
  );
};

export default HeroSection;
