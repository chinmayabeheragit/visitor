import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SearchBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-full shadow-xl border border-emerald-400 overflow-hidden">

        {/* Place Name */}
        <div className="flex-1 px-5 py-4 flex items-center space-x-2">
          <label className="text-emerald-700 font-medium text-sm whitespace-nowrap">Place</label>
          <select className="w-full bg-transparent focus:outline-none text-emerald-800">
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Kerala</option>
            <option>Manali</option>
          </select>
        </div>

        <div className="border-l border-emerald-200 h-full hidden sm:block" />

        {/* Date */}
        <div className="flex-1 px-5 py-4 flex items-center space-x-2">
          <label className="text-emerald-700 font-medium text-sm whitespace-nowrap">Date</label>
          <input
            type="date"
            className="w-full bg-transparent focus:outline-none text-emerald-800"
          />
        </div>

        <div className="border-l border-emerald-200 h-full hidden sm:block" />

        {/* Guests */}
        <div className="flex-1 px-5 py-4 flex items-center space-x-2">
          <label className="text-emerald-700 font-medium text-sm whitespace-nowrap">Guests</label>
          <input
            type="number"
            min="1"
            placeholder="0"
            className="w-full bg-transparent focus:outline-none text-emerald-800"
          />
        </div>

        <div className="border-l border-emerald-200 h-full hidden sm:block" />

        {/* Country */}
        <div className="flex-1 px-5 py-4 flex items-center space-x-2">
          <label className="text-emerald-700 font-medium text-sm whitespace-nowrap">Country</label>
          <select className="w-full bg-transparent focus:outline-none text-emerald-800">
            <option>India</option>
            <option>USA</option>
            <option>France</option>
            <option>Japan</option>
          </select>
        </div>

        {/* Search Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-5 aspect-square rounded-full transition duration-300 ease-in-out flex items-center justify-center m-2"
        >
          <FaSearch className="text-xl" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SearchBar;
