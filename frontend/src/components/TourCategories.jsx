import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import cruiseImg from '../assets/images/cruise.jpg';
import hikingImg from '../assets/images/hiking.jpg';
import airbirdsImg from '../assets/images/airbirds.jpg';
import wildlifeImg from '../assets/images/wildlife.jpg';
import walkingImg from '../assets/images/walking.jpg';
import foodImg from '../assets/images/food.jpg';
import campImg from '../assets/images/camp.jpg';
import chillImg from '../assets/images/chill.jpg';

const topCards = [
  { src: cruiseImg, title: 'Cruises' },
  { src: hikingImg, title: 'Hiking' },
  { src: airbirdsImg, title: 'Airbirds' },
  { src: wildlifeImg, title: 'Wildlife' },
  { src: walkingImg, title: 'Walking' },
];

const bottomCards = [
  { src: foodImg, title: 'Food' },
  { src: campImg, title: 'Camp' },
  { src: chillImg, title: 'Chill' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05, // minimal stagger
      when: "beforeChildren",
      ease: "easeOut",
      duration: 0.4,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.3, // shorter duration for snappier reveal
    },
  },
};

const TourCategories = () => {
  const ref = useRef(null);
  // No rootMargin, triggers exactly when element is visible
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <section
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-white via-emerald-50 to-white"
    >
      <motion.div
        className="max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Headings */}
        <motion.h2
          className="text-2xl font-handwritten text-forest italic mb-2 tracking-wide playfair-display"
          variants={cardVariants}
        >
          Wonderful Place For You
        </motion.h2>
        <motion.h3
          className="text-5xl font-cursive text-emerald-600 font-bold mb-14 leading-snug pacifico-regular"
          variants={cardVariants}
        >
          Tour Categories
        </motion.h3>

        {/* Top 5 Cards */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center items-center mb-16 px-4 lato-regular"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {topCards.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 text-center border border-emerald-100"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0 10px 20px rgba(16, 185, 129, 0.3)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-forest mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500 font-sans lato-regular">Read More</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom 3 Cards */}
        <motion.div
          className="flex justify-center flex-wrap gap-6 px-4 lato-regular"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {bottomCards.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white w-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 text-center border border-emerald-100"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0 10px 20px rgba(16, 185, 129, 0.3)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-forest mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500 font-sans lato-regular">Read More</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TourCategories;
