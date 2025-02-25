// src/pages/Gallery.jsx
import React from 'react';

function Gallery() {
  // Example images array (replace URLs with your own images)
  const images = [
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/400x300',
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Work</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index + 1}`} className="w-full h-auto rounded" />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
