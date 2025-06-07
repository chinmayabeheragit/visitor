import React from "react";

const indianStates = [
  "Jammu & Kashmir",
  "Punjab",
  "Haryana",
  "Delhi",
  "Rajasthan",
  "Uttar Pradesh",
  "Bihar",
  "West Bengal",
  "Maharashtra",
  "Gujarat",
  "Tamil Nadu",
  "Kerala",
  "Karnataka",
  "Odisha",
  "Assam",
];

export default function StateCarousel() {
  const half = Math.ceil(indianStates.length / 2);
  const topRow = indianStates.slice(0, half);
  const bottomRow = indianStates.slice(half);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-emerald-700 mb-6 text-center playfair-display">
        Discover India’s States
      </h1>
      <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto text-lg leading-relaxed edu-vic-hand">
        Journey through India’s diverse tapestry, one state at a time. Each box
        invites you to explore the unique flavors, cultures, and travel
        experiences that define this incredible land.
      </p>

      <div className="carousel-container space-y-12 overflow-hidden">
        {/* Top Row: scroll right to left */}
        <div className="carousel-row scroll-left whitespace-nowrap">
          {[...topRow, ...topRow].map((state, idx) => (
            <button
              key={idx}
              className="carousel-button bg-white text-emerald-700 border-emerald-700"
            >
              {state}
            </button>
          ))}
        </div>

        {/* Bottom Row: scroll left to right */}
        <div className="carousel-row scroll-right whitespace-nowrap">
          {[...bottomRow, ...bottomRow].map((state, idx) => (
            <button
              key={idx}
              className="carousel-button bg-emerald-600 text-white border-emerald-700"
            >
              {state}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
