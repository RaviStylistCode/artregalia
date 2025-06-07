import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import Hero from '../Components/Hero';

const louvers = [
  {
    image: 'https://darioexim.com/wp-content/uploads/2024/07/exterior-louver-clad-1.png',
    name: 'Natural Wood Finish',
    brand: 'LouverLux',
    size: '8x10 ft',
  },
  {
    image: 'https://darioexim.com/wp-content/uploads/2024/07/exterior-louver-clad-1.png',
    name: 'Dark Oak Style',
    brand: 'NatureWalls',
    size: '9x12 ft',
  },
  {
    image: 'https://darioexim.com/wp-content/uploads/2024/07/exterior-louver-clad-1.png',
    name: 'Vertical Panels',
    brand: 'UrbanDeck',
    size: '10x10 ft',
  },
  {
    image: 'https://darioexim.com/wp-content/uploads/2024/07/exterior-louver-clad-1.png',
    name: 'Rustic Look',
    brand: 'WoodNMore',
    size: '7x9 ft',
  },
  {
    image: 'https://darioexim.com/wp-content/uploads/2024/07/exterior-louver-clad-1.png',
    name: 'Modern Grey Finish',
    brand: 'GrayDecks',
    size: '8x8 ft',
  },
  {
    image: 'https://darioexim.com/wp-content/uploads/2024/07/exterior-louver-clad-1.png',
    name: 'Modern Grey Finish',
    brand: 'GrayDecks',
    size: '8x8 ft',
  },
];

const Louvers = () => {
  return (
    <div className="bg-slate-100  text-gray-800">
        <Hero/>
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center mb-12"
      >
        <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-violet-700 p-4">Why Choose WPC Louvers?</h2>
        <p className="text-lg mb-6 text-gray-700 p-4 text-justify">
          WPC Louvers are a modern, eco-friendly solution to elevate both interior and exterior walls. With excellent durability and aesthetics, they mimic the natural beauty of wood without the maintenance. Ideal for both residential and commercial spaces, these panels are water-resistant, termite-proof, and weather-friendly.
        </p>
        <ul className="text-left text-base md:text-lg max-w-3xl mx-auto space-y-3 shadow-2xl shadow-black p-6 rounded-xl bg-white">
          <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600" /> Water and termite resistant</li>
          <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600" /> Long-lasting and low maintenance</li>
          <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600" /> Available in elegant wood textures</li>
          <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600" /> Perfect for both indoor and outdoor settings</li>
          <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600" /> Easy to install and clean</li>
        </ul>
      </motion.div>

      {/* Louver Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-6 max-w-7xl mx-auto">
        {louvers.map((panel, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow-2xl shadow-black rounded-xl overflow-hidden"
          >
            <img src={panel.image} alt={panel.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-700 mb-2">{panel.name}</h3>
              <p className="text-sm text-gray-600">Brand: {panel.brand}</p>
              <p className="text-sm text-gray-600">Size: {panel.size}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Louvers;
