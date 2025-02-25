// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  
  return (
    <nav className="bg-gray-800 text-white shadow-xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <Link to="/" className="flex items-center py-5 px-2 text-2xl font-bold">
                Atif_Tailor
              </Link>
            </div>
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="py-5 px-3 hover:text-gray-300">Home</Link>
              <Link to="/about" className="py-5 px-3 hover:text-gray-300">About</Link>
              <Link to="/services" className="py-5 px-3 hover:text-gray-300">Services</Link>
              <Link to="/gallery" className="py-5 px-3 hover:text-gray-300">Gallery</Link>
              <Link to="/contact" className="py-5 px-3 hover:text-gray-300">Contact</Link>
            </div>
          </div>
          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setOpen(!open)} className="mobile-menu-button p-2 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden">
          <Link to="/" className="block py-2 px-4 text-sm hover:bg-gray-700">Home</Link>
          <Link to="/about" className="block py-2 px-4 text-sm hover:bg-gray-700">About</Link>
          <Link to="/services" className="block py-2 px-4 text-sm hover:bg-gray-700">Services</Link>
          <Link to="/gallery" className="block py-2 px-4 text-sm hover:bg-gray-700">Gallery</Link>
          <Link to="/contact" className="block py-2 px-4 text-sm hover:bg-gray-700">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
