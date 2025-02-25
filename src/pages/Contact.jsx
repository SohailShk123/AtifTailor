// src/pages/Contact.jsx
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send email or integrate with a backend)
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-700">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
