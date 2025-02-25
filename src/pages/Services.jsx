// src/pages/Services.jsx
import React from 'react';

function Services() {
  const services = [
    { title: 'Custom Tailoring', description: 'Personalized designs and perfect fits.' },
    { title: 'Alterations', description: 'Expert alterations for a flawless finish.' },
    { title: 'Repairs', description: 'High-quality repair work for your favorite pieces.' },
    { title: 'Bespoke Designs', description: 'One-of-a-kind creations tailored to your style.' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-4 border rounded hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
