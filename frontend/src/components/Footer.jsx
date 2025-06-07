import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-white via-emerald-50 to-emerald-200 pt-20 pb-10 px-6 text-gray-700 mt-24 overflow-hidden">
      
      {/* Cloud Curve Top */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white rounded-b-[60%] shadow-inner z-10" />

      {/* Emerald Atmospheric Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-50 to-emerald-100 opacity-70 z-0 pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Intro */}
        <div>
          <h1 className="text-2xl font-bold text-emerald-600 mb-4 edu-vic-hand">TripGo</h1>
          <p className="text-sm leading-relaxed text-gray-700">
            Explore the world with flavors and sights that stay in your soul. Wander into joy, and let your heart taste adventure.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="font-semibold text-emerald-700 mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-600 transition">Home</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition">Destinations</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition">Tours</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="font-semibold text-emerald-700 mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-emerald-100 text-emerald-600 p-2 rounded-full hover:bg-emerald-500 hover:text-white transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-semibold text-emerald-700 mb-4">Stay Updated</h2>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-16 border-t border-emerald-200 pt-6 text-center text-sm text-gray-500 relative z-20">
        &copy; {new Date().getFullYear()} TripGo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
