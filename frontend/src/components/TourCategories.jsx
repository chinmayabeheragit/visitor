import React from 'react';

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

const TourCategories = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-emerald-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Headings */}
        <h2 className="text-2xl font-handwritten text-forest italic mb-2 tracking-wide">
          Wonderful Place For You
        </h2>
        <h3 className="text-5xl font-cursive text-emerald-600 font-bold mb-14 leading-snug">
          Tour Categories
        </h3>

        {/* Top 5 Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center items-center mb-16 px-4">
          {topCards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 text-center border border-emerald-100"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-forest mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500 font-sans">Read More</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 3 Cards */}
        <div className="flex justify-center flex-wrap gap-6 px-4">
          {bottomCards.map((item, index) => (
            <div
              key={index}
              className="bg-white w-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 text-center border border-emerald-100"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-forest mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500 font-sans">Read More</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourCategories;
