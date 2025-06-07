import React from "react";
import CountUp from "react-countup";
import { FaCogs, FaLaptopCode, FaChartLine } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from 'framer-motion';
import { FaLightbulb, FaHandsHelping, FaMapMarkedAlt, FaHome, FaPalette } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Homecontent = () => {

  const cardData = [
  { icon: <FaLightbulb size={36} className="text-indigo-500" />, title: 'Expert Advice' },
  { icon: <FaHandsHelping size={36} className="text-green-500" />, title: 'Customer Hand Holding' },
  { icon: <FaMapMarkedAlt size={36} className="text-yellow-500" />, title: 'All India Execution' },
  { icon: <FaHome size={36} className="text-blue-500" />, title: 'Material Selection at Your Home' },
  { icon: <FaPalette size={36} className="text-pink-500" />, title: 'Design Coordination' },
  { icon: <FaCogs size={36} className="text-purple-500" />, title: 'Colour Coordination' },
];

  const counters = [
    { title: "Happy Customers", count: 1250 },
    { title: "Projects Completed", count: 320 },
    { title: "Years of Experience", count: 13 },
  ];

  const services = [
  {
    icon: <FaCogs size={40} className="text-indigo-500" />,
    title: 'WPC LOUVERS',
    description: 'We build scalable, secure, and fast custom web and mobile applications.',
  },
  {
    icon: <FaLaptopCode size={40} className="text-indigo-500" />,
    title: 'WALLPAPERS',
    description: 'We design intuitive user interfaces and seamless user experiences.',
  },
  {
    icon: <FaChartLine size={40} className="text-indigo-500" />,
    title: 'MAN POWER',
    description: 'We help you make data-driven decisions with powerful dashboards.',
  },
];

const steps = [
    {
      title: 'MEET AND DEAL',
      description:
        'The first stage in the process of meeting the customer and understanding is always to take all the steps to understand and collect information for the creation of the concept.',
    },
    {
      title: 'PLANNING AND DESIGN OF SPACE',
      description:
        'We will start to plan and manage an agreed conceptualization based on an initial discussion.',
    },
    {
      title: 'DESIGN',
      description:
        'After the concept has been developed, we will offer you complete drawings and conceptual representation for a better understanding.',
    },
    {
      title: 'INSTALLATION',
      description:
        'Here, we have translated conceptually designed dreams into reality.',
    },
  ];

  const cartSlider=[
    'https://spectratek.in/kitchen/wp-content/uploads/2024/07/wallpaper-for-home.jpg',
    'https://spectratek.in/kitchen/wp-content/uploads/2024/07/wallpaper.jpg',
    'https://spectratek.in/kitchen/wp-content/uploads/2024/07/Artficial-grass-for-playground.png',
    'https://spectratek.in/kitchen/wp-content/uploads/2024/07/Artficial-truf.png',
    'https://spectratek.in/kitchen/wp-content/uploads/2024/07/wpc-interior-louver.png',
    '	https://spectratek.in/kitchen/wp-content/uploads/2024/07/exterior-louver-clad-2.png',

  ];

  const card1settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // 🔴 Hides prev/next arrows
    cssEase: 'ease-in-out',
    rtl:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const card2settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // 🔴 Hides prev/next arrows
    cssEase: 'ease-in-out',
    ltr:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <div className="w-full p-1 ">

           {/* <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Achievements</h1> */}
        <div className="p-2 bg-gradient-to-r from-slate-50 to-purple-100  flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            {counters.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-xl shadow-gray-400 rounded-2xl p-8 flex flex-col items-center transition-transform transform hover:scale-105 duration-300"
              >
                <p className="text-5xl font-extrabold text-indigo-600">
                  <CountUp end={item.count } duration={2} suffix="+" />
                </p>
                <h2 className="text-xl lg:text-2xl font-semibold font-sans text-gray-400 mb-3">
                  {item.title}
                </h2>
              </div>
            ))}
          </div>
        </div>

        {/* wpc louvers */}
        <div className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Card - Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-gray-100 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-500 uppercase mb-4">WPC Louvers</h2>
          <p className="text-gray-700 mb-6">
            WPC (Wood Plastic Composite) Louvers offer a perfect blend of aesthetics and durability. These are eco-friendly,
            weather-resistant, and low-maintenance solutions ideal for both interior and exterior applications. With their
            elegant wood-like appearance, they add a modern touch to your architectural design while ensuring long-lasting
            performance.
          </p>

          <Link to={'/louvers'}>
          <motion.button 
          whileTap={{scale:2}}
          className="bg-indigo-600 cursor-pointer text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition duration-300">
            Explore More
          </motion.button>
          </Link>
        </motion.div>

        {/* Right Card - Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <motion.img
          whileHover={{scale:1.1}}
            src="https://darioexim.com/wp-content/uploads/2024/07/exterior-louver-clad-1.png"
            alt="WPC Louvers"
            className="rounded-2xl w-full h-[400px] object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </div>

    {/* wallpapers */}
      <div className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Card - Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <motion.img
          whileHover={{scale:1.1}}
            src="https://darioexim.com/wp-content/uploads/2024/07/wallpaper.jpg"
            alt="Wallpaper"
            className="rounded-2xl w-full h-[400px] object-cover shadow-lg"
          />
        </motion.div>

        {/* Right Card - Text */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-gray-100 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-500 uppercase mb-4">Wallpaper</h2>
          <p className="text-gray-700 mb-6">
            Wallpaper brings life to your walls by adding color, texture, and design. Whether you're aiming for a bold,
            modern look or a soft, classic feel, wallpapers offer endless design possibilities. They're easy to install,
            clean, and replace — making them a perfect choice for transforming interiors quickly and effectively.
          </p>
          <Link to={'/wallpaper'}>
          <motion.button 
          whileTap={{scale:2}}
          className="bg-indigo-600 cursor-pointer text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition duration-300">
            Explore More
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>


        {/* services */}
         <div className="bg-gradient-to-br from-purple-50 to-blue-100 py-16 px-6  flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-8 text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>

            <Link to={'/services'}> 
            <button className="mt-auto bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition">
              Learn More
            </button>
            </Link>

          </div>
        ))}
      </div>

        <Link to={'/services'}>    
      <button className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition">
        Explore All Services
      </button>
        </Link>
    </div>

    {/* design process */}
    <div className="bg-white py-16 px-6 md:px-16 flex flex-col md:flex-row gap-10 items-center">
      {/* Left Column - Text Content */}
      <div className="w-full md:w-1/2 space-y-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Designing Process</h2>
        {steps.map((step, idx) => (
          <div key={idx} className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Right Column - Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://darioexim.com/wp-content/uploads/2024/01/casador-INSIDE-IMAGE1.png"
          alt="Designing Process"
          className="rounded-xl w-full h-full object-cover shadow-lg"
        />
      </div>
    </div>

{/* card1slider */}
        <div className="py-12 px-4 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Gallery</h2>
      <Slider {...card1settings}>
        {cartSlider.map((url, index) => (
          <div key={index} className="px-3">
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              className="rounded-2xl w-full h-64 object-cover shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </Slider>
      <Slider {...card2settings}>
        {cartSlider.map((url, index) => (
          <div key={index} className="px-3">
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              className="rounded-2xl w-full h-64 object-cover shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </Slider>
    </div>

    {/* what we see apart */}
    <div className="bg-gradient-to-b from-white to-blue-50 py-16 px-4 md:px-12">
      <h2 className="text-4xl font-bold  text-center text-gray-500 uppercase mb-12">What Sets Us Apart</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cardData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-400 hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>


      </div>
    </>
  );
};

export default Homecontent;
