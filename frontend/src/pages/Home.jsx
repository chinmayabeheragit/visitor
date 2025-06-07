import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

import bannerImg1 from '../assets/images/banner1.jpg';
import bannerImg2 from '../assets/images/banner2.jpg';
import bannerImg3 from '../assets/images/banner3.jpg';

import TourCategories from '../components/TourCategories';
import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import FoodGallery from '../components/FoodGalery';
import AddTravelExperience from '../components/Experince';
import Map from '../components/Map';

const Home = () => {
  const textRef = useRef(null);
  const imagesRef = useRef(null);

  // Control animation when element is in view
  const textInView = useInView(textRef, { once: true, margin: '-100px' });
  const imagesInView = useInView(imagesRef, { once: true, margin: '-100px' });

  const textControls = useAnimation();
  const imagesControls = useAnimation();

  React.useEffect(() => {
    if (textInView) {
      textControls.start('visible');
    }
    if (imagesInView) {
      imagesControls.start('visible');
    }
  }, [textInView, imagesInView, textControls, imagesControls]);

  // Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.7 } },
  };

  return (
    <>
      {/* Hero Section Top */}
      <section className="relative w-full pt-24 pb-12 bg-gradient-to-r from-white via-emerald-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[32rem]">

            {/* Left: Text Content */}
            <motion.div
              ref={textRef}
              variants={containerVariants}
              initial="hidden"
              animate={textControls}
              className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center h-full"
            >
              <motion.h1
                variants={fadeUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight playfair-display"
              >
                Make Beautiful{' '}
                <span className="text-emerald-600 pacifico-regular">Travel</span>
                <br />
                in the <em className="italic text-gray-600">world!</em>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 edu-vic-hand"
              >
                Journey through India’s breathtaking landscapes where every mountain path, coastal breeze, and forest trail tells a story — not just of nature, but of flavor.{' '}
                <br className="hidden sm:inline" />
                From hot chai in Himachal to smoky grilled fish in Kerala, let your wanderlust guide your soul, and your palate follow.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-6 flex justify-center lg:justify-start">
                <motion.button
                  className="w-52 py-4 sm:py-5 text-emerald-600 border border-emerald-500 rounded-full font-medium hover:bg-emerald-500 hover:text-white transition duration-300 lato-regular"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(16, 185, 129, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Now
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right: Image Grid */}
            <motion.div
              ref={imagesRef}
              variants={containerVariants}
              initial="hidden"
              animate={imagesControls}
              className="w-full lg:w-1/2 grid grid-cols-2 gap-4 mt-10 lg:mt-20"
            >
              {[bannerImg1, bannerImg2, bannerImg3].map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={`Travel ${idx + 1}`}
                  className={`rounded-xl shadow-lg object-cover h-40 sm:h-52 md:h-60 w-full ${
                    idx === 1 ? 'mt-6 sm:mt-8' : ''
                  } ${idx === 2 ? 'col-span-2' : ''}`}
                  variants={fadeUp}
                  transition={{ delay: idx * 0.2 }}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(16,185,129,0.5)' }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <SearchBar />


      {/* Other Components */}
      <TourCategories />
      <HeroSection />

      <section className="bg-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-bold text-emerald-800 playfair-display mb-4"
          >
            Where Every Journey Becomes a Feast
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed edu-vic-hand"
          >
            From the fragrant spice trails of Kerala to the snowy apple orchards of Kashmir, India invites you to wander deeper. Savor the crisp sizzle of dosas at dawn, the smoky richness of Rajasthani grills at dusk. In every bite, a region; in every mile, a memory.
          </motion.p>
        </div>
      </section>
      <FoodGallery />
      <AddTravelExperience />
      <Map />
      <Footer />
    </>
  );
};

export default Home;
