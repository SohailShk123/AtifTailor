import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../src/assets/img.webp';

function Home() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <img
        src={images}
        alt="TailorShop Background"
        className="absolute inset-0 w-full h-full object-contain"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to TailorShop</h1>
        <p className="text-lg md:text-2xl mt-4">Expert tailoring, custom fittings & alterations</p>
        <Link to="/contact">
          <button className="mt-8 px-6 py-3 bg-white text-gray-800 rounded hover:bg-gray-200">
            Book an Appointment
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
