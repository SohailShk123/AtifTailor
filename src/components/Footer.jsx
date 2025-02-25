// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} TailorShop. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:text-gray-300">Facebook</a>
        <a href="#" className="hover:text-gray-300">Instagram</a>
        <a href="#" className="hover:text-gray-300">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
