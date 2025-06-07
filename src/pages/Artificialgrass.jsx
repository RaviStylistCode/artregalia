import React from 'react'
import { motion } from 'framer-motion';
import Hero from "../Components/Hero"

const Artificialgrass = () => {

    const grassVariants = [
  {
    image: "https://darioexim.com/wp-content/uploads/2024/07/Artficial-grass-importer-1.png",
    label: "15mm Soft Turf",
  },
  {
    image: "https://darioexim.com/wp-content/uploads/2024/07/Artficial-grass-importer-1.png",
    label: "25mm Balcony Turf",
  }
  ,
  {
    image: "https://darioexim.com/wp-content/uploads/2024/07/Artficial-grass-importer-1.png",
    label: "35mm Garden Turf",
  }
  ,
  {
    image: "https://darioexim.com/wp-content/uploads/2024/07/Artficial-grass-importer-1.png",
    label: "35mm Garden Turf",
  }
  ,
  {
    image: "https://darioexim.com/wp-content/uploads/2024/07/Artficial-grass-importer-1.png",
    label: "35mm Garden Turf",
  }
  ,
  {
    image: "https://darioexim.com/wp-content/uploads/2024/07/Artficial-grass-importer-1.png",
    label: "35mm Garden Turf",
  }
  ,
  {
    image: "https://darioexim.com/wp-content/uploads/2024/07/Artficial-grass-importer-1.png",
    label: "35mm Garden Turf",
  }
  ,
  {
    image: "https://darioexim.com/wp-content/uploads/2024/07/Artficial-grass-importer-1.png",
    label: "35mm Garden Turf",
  }
  ,
  {
    image: "https://darioexim.com/wp-content/uploads/2024/07/Artficial-grass-importer-1.png",
    label: "35mm Garden Turf",
  }
  ,
  {
    image: "https://darioexim.com/wp-content/uploads/2024/07/Artficial-grass-importer-1.png",
    label: "35mm Garden Turf",
  }
  ,
  {
    image: "https://darioexim.com/wp-content/uploads/2024/07/Artficial-grass-importer-1.png",
    label: "35mm Garden Turf",
  }
  ,
  {
    image: "https://darioexim.com/wp-content/uploads/2024/07/Artficial-grass-importer-1.png",
    label: "35mm Garden Turf",
  }
];

  return (
    <>
<div className="bg-slate-100 text-gray-800">
      <Hero/>

  {/* Artificial Grass Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-green-100">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="max-w-5xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-6">Artificial Grass for Elegant Living</h2>
          <p className="md:text-lg text-gray-600 mb-4 text-justify font-semibold ">
            Artificial grass is a modern solution for beautifying spaces without the hassle of maintenance. It stays lush year-round, is cost-effective, eco-friendly, and pet-safe. Whether you want a fresh look for your balcony, rooftop, garden, or indoor setting — artificial grass can instantly transform your space into a vibrant and welcoming area.
            It is ideal for families, working professionals, and businesses seeking a maintenance-free greenery upgrade.
          </p>
                  
          <ul className="text-left max-w-3xl mx-auto text-base text-gray-600 shadow-md shadow-black p-6 rounded-xl bg-white">
            <li className="mb-2 ">✅ Adds instant greenery and beauty to your home</li>
            <li className="mb-2 ">✅ No need to water or mow — perfect for busy lifestyles</li>
            <li className="mb-2 ">✅ UV resistant and weather-proof</li>
            <li className="mb-2 ">✅ Safe for children and pets</li>
            <li className="mb-2 ">✅ Easy to clean and long-lasting</li>
            <li className="mb-2 ">✅ Great for balconies, terraces, indoor corners, and gardens</li>
          </ul>
        </motion.div>
      </section>

      {/* Why People Admire Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-10">Why People Admire Our Company</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-green-50 shadow-md shadow-black p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4">Customer First Approach</h3>
              <p>We listen carefully, understand your needs, and execute with utmost care to deliver outstanding results every time.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-green-50 shadow-md shadow-black p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4">Creative & Modern Designs</h3>
              <p>We bring a blend of creativity and functionality to enhance the beauty and purpose of your space.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-green-50 shadow-md shadow-black p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4">Transparent Process</h3>
              <p>From the first meeting to the final execution, we ensure transparency and timely updates.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-green-50 shadow-md shadow-black p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4">All India Execution</h3>
              <p>No matter where you live, our team ensures seamless delivery and setup anywhere across the country.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Artificial Grass Variants */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-10">Our Grass Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {grassVariants.map((variant, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="bg-green-50 rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={variant.image}
                  alt={variant.label}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-green-800">{variant.label}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing content continues below... */}

    </div>
    </>
  )
}

export default Artificialgrass