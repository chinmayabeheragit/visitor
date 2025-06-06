import React from 'react';
import bannerImg1 from '../assets/images/banner1.jpg';
import bannerImg2 from '../assets/images/banner2.jpg';
import bannerImg3 from '../assets/images/banner3.jpg';

import TourCategories from '../components/TourCategories';



const Home = () => {
  return (
<>
    // Hero Section
    <section className="relative w-full pt-24 pb-12 bg-gradient-to-r from-white via-emerald-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[32rem]">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center h-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Make Beautiful <span className="text-emerald-600">Travel</span><br />
              in the <em className="italic text-gray-600">world!</em>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600">
              Journey through India’s breathtaking landscapes where every mountain path, coastal breeze, and forest trail tells a story — not just of nature, but of flavor. <br className="hidden sm:inline" />
              From hot chai in Himachal to smoky grilled fish in Kerala, let your wanderlust guide your soul, and your palate follow.
            </p>

            <div className="mt-6 flex justify-center lg:justify-start">
              <button className="w-52 py-4 sm:py-5 text-emerald-600 border border-emerald-500 rounded-full font-medium hover:bg-emerald-500 hover:text-white transition duration-300">
                Explore Now
              </button>
            </div>
          </div>

          {/* Right: Image Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 mt-10 lg:mt-20">
            <img
              src={bannerImg1}
              alt="Travel 1"
              className="rounded-xl shadow-lg object-cover h-40 sm:h-52 md:h-60 w-full"
            />
            <img
              src={bannerImg2}
              alt="Travel 2"
              className="rounded-xl shadow-lg object-cover h-40 sm:h-52 md:h-60 w-full mt-6 sm:mt-8"
            />
            <img
              src={bannerImg3}
              alt="Travel 3"
              className="rounded-xl shadow-lg object-cover h-40 sm:h-52 md:h-60 w-full col-span-2"
            />
          </div>
        </div>
      </div>
    </section>
  
      <TourCategories />


    </>
  );
};

export default Home;
