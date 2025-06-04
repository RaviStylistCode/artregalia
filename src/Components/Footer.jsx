import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl"
      >
        {/* Card 1: Logo + Name + Social Icons */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-4">
            <img src="https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg" alt="ArtRegalia Logo" className="w-10 h-10 rounded-full shadow-md" />
            <h2 className="text-2xl font-bold text-indigo-400">ArtRegalia Private Limeted</h2>
          </div>
          <p className="text-gray-300 text-sm mb-4">Crafting spaces with emotion & design</p>
          <div className="flex gap-4">
            <a href="#" className="hover:scale-110 hover:text-pink-400 transition-transform duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:scale-110 hover:text-blue-400 transition-transform duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:scale-110 hover:text-sky-400 transition-transform duration-300">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Card 2: Copyright */}
        <div className="flex flex-col justify-center text-center">
          <p className="text-gray-300 text-sm mb-2">
            &copy; {new Date().getFullYear()} <span className="text-indigo-400 font-semibold">ArtRegalia</span>
          </p>
          <p className="text-xs text-gray-400">
            Designed with ❤️ by the ArtRegalia Team. All rights reserved.
          </p>
        </div>

        {/* Card 3: Office Address */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-xl font-semibold text-indigo-400 mb-3">Visit Our Office</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Shiv Shankalp Bhawan <br />
            Kanti Factory Road<br/>
            Patna, Bihar – 800020<br />
            📞 +91 9876543210<br />
            📧 contact@artregalia.com
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
