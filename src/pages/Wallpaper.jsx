import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import Hero from '../Components/Hero';

const wallpapers = [
  {
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353',
    name: 'Floral Elegance',
    brand: 'DecorLux',
    size: '10x12 ft',
  },
  {
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353',
    name: 'Floral Elegance',
    brand: 'DecorLux',
    size: '10x12 ft',
  },
  {
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353',
    name: 'Floral Elegance',
    brand: 'DecorLux',
    size: '10x12 ft',
  },

  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    name: 'Artistic Imprint',
    brand: 'Artify Walls',
    size: '10x10 ft',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    name: 'Artistic Imprint',
    brand: 'Artify Walls',
    size: '10x10 ft',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    name: 'Artistic Imprint',
    brand: 'Artify Walls',
    size: '10x10 ft',
  },
 

  {
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
    name: 'Abstract Colors',
    brand: 'SplashArt',
    size: '11x11 ft',
  },
  {
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
    name: 'Abstract Colors',
    brand: 'SplashArt',
    size: '11x11 ft',
  },
  {
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
    name: 'Abstract Colors',
    brand: 'SplashArt',
    size: '11x11 ft',
  },
  {
    image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    name: 'Soothing Blues',
    brand: 'Oceanic Decor',
    size: '10x13 ft',
  },
  {
    image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    name: 'Soothing Blues',
    brand: 'Oceanic Decor',
    size: '10x13 ft',
  },
  {
    image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    name: 'Soothing Blues',
    brand: 'Oceanic Decor',
    size: '10x13 ft',
  },
];

const Wallpaper = () => {
  return (
    <div className="bg-slate-100   text-gray-800">
        <Hero/>
      {/* Wallpaper Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center mb-12"
      >
        <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-violet-700 p-3">Why Choose Wallpapers for Your Home?</h2>
        <p className="md:text-lg mb-6 text-gray-700 text-justify p-4">
          Wallpapers are a stylish and effortless way to add beauty and sophistication to your interiors. They offer a wide variety of options that can transform your walls into a canvas of creativity and comfort. Whether you're going for a modern vibe or a cozy aesthetic, wallpapers allow you to express your personal taste. With easy application and removal, they’re perfect for both temporary and long-term décor.
        </p>
        <ul className="text-left text-base md:text-lg max-w-3xl mx-auto space-y-3 shadow-2xl shadow-black p-6 rounded-xl bg-white">
          <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600" /> Easy to install and replace</li>
          <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600" /> Available in endless colors, textures, and patterns</li>
          <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600" /> Enhances the aesthetic appeal instantly</li>
          <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600" /> Cost-effective and durable option</li>
          <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600" /> Suitable for any room and wall type</li>
        </ul>
      </motion.div>

      {/* Wallpaper Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl p-4 mx-auto">
        {wallpapers.map((wall, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow-2xl shadow-black rounded-xl overflow-hidden"
          >
            <img src={wall.image} alt={wall.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-violet-700 mb-2">{wall.name}</h3>
              <p className="text-sm text-gray-600">Brand: {wall.brand}</p>
              <p className="text-sm text-gray-600">Size: {wall.size}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Wallpaper;
