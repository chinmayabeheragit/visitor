import React from 'react';
import Masonry from 'react-masonry-css';

const images = [
    'https://res.cloudinary.com/dg11zc9os/image/upload/w_600,q_auto,f_auto/exp1_dvn67r',
    'https://res.cloudinary.com/dg11zc9os/image/upload/w_600,q_auto,f_auto/airbirds_rqqnao',

    'https://res.cloudinary.com/dg11zc9os/image/upload/w_600,q_auto,f_auto/exp3_cv2amz',
    'https://res.cloudinary.com/dg11zc9os/image/upload/w_600,q_auto,f_auto/exp5_hwicw1',
    'https://res.cloudinary.com/dg11zc9os/image/upload/w_600,q_auto,f_auto/exp6_jglq9c',

    'https://res.cloudinary.com/dg11zc9os/image/upload/w_600,q_auto,f_auto/exp4_hdzahf',
    'https://res.cloudinary.com/dg11zc9os/image/upload/w_600,q_auto,f_auto/camp_p9sm1a',

];

const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
};

const TravelExperienceMasonry = () => {
    return (
        <section className="py-16 px-4 bg-gradient-to-br from-white via-emerald-50 to-white">
            <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 playfair-display mb-3">
                    Share Your Travel Experience
                </h2>
                <p className="text-gray-700 text-base sm:text-lg font-lato edu-vic-hand">
                    A gallery of memories told through the lens of travelers. Dive into stories, colors, and cultures that shaped unforgettable journeys.
                </p>
                <div className="mt-6">
                    <button className="relative inline-block px-6 py-3 font-semibold text-white bg-emerald-500 rounded-full overflow-hidden group hover:text-white transition duration-300 ease-in-out">
                        <span className="absolute w-64 h-64 -top-1/2 -left-1/2 bg-gradient-to-tr from-emerald-600 via-emerald-400 to-emerald-600 transform rotate-45 scale-0 group-hover:scale-150 transition duration-500 ease-out z-0"></span>
                        <span className="relative z-10">+ Add Experience</span>
                    </button>
                </div>
            </div>

            <div className="max-w-6xl mx-auto">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex gap-4"
                    columnClassName="space-y-4"
                >
                    {images.map((src, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={src}
                                alt={`Travel Experience ${idx + 1}`}
                                className="w-full h-auto object-cover block"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </Masonry>
            </div>
        </section>
    );
};

export default TravelExperienceMasonry;
