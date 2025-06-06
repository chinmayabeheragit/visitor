import React, { useEffect, useState } from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  User,
  Search,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMobile = window.innerWidth < 768;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled && !isMobile
          ? 'bg-white shadow-md py-2'
          : 'bg-white shadow-sm py-3'
      } border-b border-gray-200`}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Top Icons (Hidden on scroll and mobile) */}
        <div
          className={`flex space-x-4 text-gray-700 text-sm ${
            scrolled || isMobile ? 'hidden' : 'flex'
          }`}
        >
          <Facebook className="w-4 h-4 hover:text-blue-600 cursor-pointer" />
          <Twitter className="w-4 h-4 hover:text-sky-400 cursor-pointer" />
          <Instagram className="w-4 h-4 hover:text-pink-500 cursor-pointer" />
          <User className="w-4 h-4 hover:text-gray-700 cursor-pointer" />
        </div>

        {/* Center: Search & Logo */}
        <div className="flex items-center justify-between w-full md:w-auto space-x-4">
          {!scrolled && !isMobile && (
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-1.5 rounded-full bg-gray-100 text-sm text-gray-700 outline-none border border-gray-300 shadow-inner"
              />
              <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
            </div>
          )}

          {/* Logo + India Badge */}
          <div className="text-center md:ml-4">
            <h1 className="text-2xl md:text-3xl font-bold font-handwritten tracking-wider text-gray-800 edu-vic-hand">
              TripGo
            </h1>
            <div className="text-xs font-semibold bg-emerald-500 px-2 py-0.5 inline-block text-white rounded tracking-widest mt-0.5 playfair-display">
              INDIA
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden ml-auto">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Nav Links (Desktop) */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-800 lato-regular">
          {['Home', 'Destinations', 'Experiences', 'Gallery', 'Contact'].map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-1 hover:text-emerald-600 cursor-pointer transition-all"
            >
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
              {index < 3 && <ChevronDown className="w-3 h-3" />}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 border-t border-gray-200">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            {['Home', 'Destinations', 'Experiences', 'Gallery', 'Contact'].map((item, index) => (
              <li key={index}>
                <Link to={`/${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
