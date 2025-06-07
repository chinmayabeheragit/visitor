import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const foodItems = [
  {
    src: 'https://res.cloudinary.com/dg11zc9os/image/upload/w_600,q_auto,f_auto/dosa_bvwyxd',
    title: 'Dosa - Tamil Nadu',
  },
  {
    src: 'https://res.cloudinary.com/dg11zc9os/image/upload/w_600,q_auto,f_auto/biryani_eqnmy4',
    title: 'Hyderabadi Biryani - Telangana',
  },
  {
    src: 'https://res.cloudinary.com/dg11zc9os/image/upload/w_600,q_auto,f_auto/thali_q4h3tc',
    title: 'Rajasthani Thali - Rajasthan',
  },
  {
    src: 'https://res.cloudinary.com/dg11zc9os/image/upload/w_600,q_auto,f_auto/momo_p5i5rr',
    title: 'Momo - Darjeeling',
  },
  {
    src: 'https://res.cloudinary.com/dg11zc9os/image/upload/w_600,q_auto,f_auto/thali2_ohe6qc',
    title: 'Gujarati Thali - Gujarat',
  },
  {
    src: 'https://res.cloudinary.com/dg11zc9os/image/upload/w_600,q_auto,f_auto/thali3_b690qg',
    title: 'Assamese Thali - Assam',
  },
  {
    src: 'https://res.cloudinary.com/dg11zc9os/image/upload/w_600,q_auto,f_auto/food2_wwcoo7',
    title: 'Kashmiri Wazwan - Jammu & Kashmir',
  },
  {
    src: 'https://res.cloudinary.com/dg11zc9os/image/upload/w_600,q_auto,f_auto/sweets_axorul',
    title: 'Odia Sweets - Odisha',
  },
];

const FoodGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-r from-white via-emerald-50 to-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-emerald-700 playfair-display mb-4">
          Culinary Treasures of India
        </h2>
        <p className="text-emerald-900 text-lg font-lato edu-vic-hand">
          Explore iconic dishes across every state, where heritage meets flavor and every plate tells a story.
        </p>
      </div>

      <div className="relative">
        <Slider {...settings}>
          {foodItems.map(({ src, title }, idx) => (
            <div key={idx} className="px-3">
              <div className="relative overflow-hidden rounded-xl shadow-lg border border-emerald-100 group bg-white">
                <img
                  src={src}
                  alt={title}
                  loading="lazy"
                  className="w-full h-[340px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-emerald-900/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xl font-semibold text-center px-4 playfair-display">
                    {title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FoodGallery;
