import React, { useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import cruiseImg from '../assets/images/cruise.jpg';
import hikingImg from '../assets/images/hiking.jpg';
import airbirdsImg from '../assets/images/airbirds.jpg';
import wildlifeImg from '../assets/images/wildlife.jpg';
import walkingImg from '../assets/images/walking.jpg';
import foodImg from '../assets/images/food.jpg';
import campImg from '../assets/images/camp.jpg';
import chillImg from '../assets/images/chill.jpg';

const allCards = [
  { src: cruiseImg, title: 'Cruises', details: 'Explore serene waters and luxurious vessels.' },
  { src: hikingImg, title: 'Hiking', details: 'Discover scenic trails and breathtaking views.' },
  { src: airbirdsImg, title: 'Airbirds', details: 'Birdwatching adventures in natural habitats.' },
  { src: wildlifeImg, title: 'Wildlife', details: 'Experience close encounters with majestic creatures.' },
  { src: walkingImg, title: 'Walking', details: 'Leisurely walks through nature’s embrace.' },
  { src: foodImg, title: 'Food', details: 'Savor exotic cuisines and local flavors.' },
  { src: campImg, title: 'Camp', details: 'Under the stars, where stories come alive.' },
  { src: chillImg, title: 'Chill', details: 'Relax and unwind in tranquil settings.' },
];

const ScrollableCards = ({ cards }) => {
  const containerRef = useRef(null);

  const scrollAmount = 350; // pixels to scroll per click

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide no-scrollbar"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {cards.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-72 bg-white rounded-3xl shadow-lg border border-emerald-200 scroll-snap-align-start
              transform transition-transform duration-300 hover:-translate-y-3 hover:scale-105 cursor-pointer"
          >
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              className="w-full h-56 object-cover rounded-t-3xl"
            />
            <div className="p-5 text-center">
              <h4 className="text-2xl font-semibold text-emerald-700 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.details}</p>
              <button className="mt-3 text-emerald-600 font-semibold hover:underline">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bigger, close arrows container */}
      <div className="flex justify-center space-x-6 mt-6">
        <button
          onClick={scrollLeft}
          className="bg-emerald-100 text-emerald-700 p-5 rounded-full shadow hover:bg-emerald-200 transition"
          aria-label="Scroll Left"
          style={{ fontSize: '2.5rem' }}
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={scrollRight}
          className="bg-emerald-100 text-emerald-700 p-5 rounded-full shadow hover:bg-emerald-200 transition"
          aria-label="Scroll Right"
          style={{ fontSize: '2.5rem' }}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

const TourCategories = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('opacity-0', 'translate-y-5');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current.querySelectorAll('.fade-up');
    elements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-white via-emerald-50 to-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="fade-up opacity-0 translate-y-5 text-3xl font-handwritten text-forest italic mb-4 tracking-wide playfair-display">
          Wonderful Place For You
        </h2>

        <h3 className="fade-up opacity-0 translate-y-5 text-6xl font-cursive text-emerald-600 font-bold mb-16 leading-snug pacifico-regular">
          Tour Categories
        </h3>

        {/* All Cards Scrollable */}
        <ScrollableCards cards={allCards} />
      </div>
    </section>
  );
};

export default TourCategories;
