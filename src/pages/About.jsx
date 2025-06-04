import React from 'react';
import { motion } from 'framer-motion';
import { FaCogs, FaUsers, FaMapMarkerAlt, FaHandshake, FaTools, FaPalette, FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hero from '../Components/Hero';

const teamImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgRRq7Sg0yVvL--xkHs4EOZk8BMD3vJJxlg&s";



const About = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const customerReviews = [
  {
    name: "Rahul Verma",
    image: teamImage,
    comment: "Amazing service and top-quality work. Really impressed!",
    rating: 5,
  },
  {
    name: "Anjali Singh",
    image: teamImage,
    comment: "They understood our requirements and delivered on time.",
    rating: 4.5,
  },
  {
    name: "Vikash Kumar",
    image: teamImage,
    comment: "Professional team and excellent customer service.",
    rating: 4,
  },
  {
    name: "Rausan Kumar",
    image: teamImage,
    comment: "Professional team and excellent customer service.",
    rating: 4,
  },
  {
    name: "Vicky Singh",
    image: teamImage,
    comment: "Professional team and excellent customer service.",
    rating: 4,
  },
];

    const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    return (
      <div className="flex justify-center text-yellow-500">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} />
        ))}
        {hasHalfStar && <FaStar className="opacity-50" />}
      </div>
    );
  };

  return (
    <div className="bg-slate-100 text-gray-800">
        <Hero/>
      {/* Section 1: About the Company */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-100 to-blue-100 p-10 rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">About ArtRegalia</h2>
          <p className="text-base md:text-lg leading-relaxed">
            ArtRegalia Private Limited was inaugurated in 2020 and is proudly based in Kankarbagh, Patna. With a commitment to flexible work culture and delivering top-tier outcomes, we’ve grown into a brand that values innovation, precision, and customer satisfaction. Our designs reflect not just beauty but purpose, creating experiences that last.
          </p>
        </motion.div>
      </section>

      {/* Customer Reviews */}
       <section className="py-16 bg-white">
        <div className="w-[90%] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">What Our Customers Say</h2>
          <Slider {...sliderSettings}>
            {customerReviews.map((review, index) => (
              <div key={index} className="flex flex-col gap-4  items-center text-center px-4  py-8">
                <div className='flex justify-center items-center '>

                <img
                  src={review.image}
                  alt={review.name}
                  className="w-24 h-24 object-cover  rounded-full mb-4 border-4 border-blue-200"
                />
                </div>
                <h4 className="text-lg font-semibold text-indigo-600 mb-2">{review.name}</h4>
                <p className="text-gray-600 mb-3 line-clamp-2">"{review.comment}"</p>
                {renderStars(review.rating)}
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Section 2: Why Choose Us */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">Why Choose Us?</h2>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            At ArtRegalia Private Limited, we understand the power of design. Our approach involves detailed discussions, understanding client needs, careful planning, and professional execution. From concept to creation, our every step is transparent, client-focused, and committed to excellence.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <li className="bg-blue-50 p-6 rounded-lg shadow-md shadow-black flex items-start gap-4">
              <FaHandshake className="text-blue-600 text-xl mt-1" /> Initial Discovery & Consultation
            </li>
            <li className="bg-blue-50 p-6 rounded-lg shadow-md shadow-black flex items-start gap-4">
              <FaPalette className="text-blue-600 text-xl mt-1" /> Concept Planning & Visual Mockups
            </li>
            <li className="bg-blue-50 p-6 rounded-lg shadow-md shadow-black flex items-start gap-4">
              <FaTools className="text-blue-600 text-xl mt-1" /> Execution & Quality Assurance
            </li>
            <li className="bg-blue-50 p-6 rounded-lg shadow-md shadow-black flex items-start gap-4">
              <FaCogs className="text-blue-600 text-xl mt-1" /> End-to-End Project Management
            </li>
            <li className="bg-blue-50 p-6 rounded-lg shadow-md shadow-black flex items-start gap-4">
              <FaUsers className="text-blue-600 text-xl mt-1" /> Skilled Workforce & Premium Materials
            </li>
            <li className="bg-blue-50 p-6 rounded-lg shadow-md shadow-black flex items-start gap-4">
              <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" /> Customer-Centric Communication
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Section 3: Members of Company */}
      <section className="py-20 bg-gray-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-center text-indigo-800 mb-12">Meet Our Director</h2>
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full text-center"
            >
              <img
                src={teamImage}
                alt="Director"
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-indigo-600">Mr. Arun Kumar Singh</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Founder & Director of ArtRegalia, Mr. Arun brings visionary leadership and unmatched dedication to creative excellence.
              </p>
            </motion.div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-center text-indigo-800 mt-20 mb-10">Our Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <img src={teamImage} alt="Finance" className="w-full h-56 object-cover rounded-xl mb-4" />
              <h3 className="text-lg font-semibold text-indigo-600">Mr. Nishant Singh</h3>
              <p className="text-sm text-gray-600">Head of Finance, ensuring efficient budgeting and seamless operations.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <img src={teamImage} alt="Provider" className="w-full h-56 object-cover rounded-xl mb-4" />
              <h3 className="text-lg font-semibold text-indigo-600">Mr. Devchand JI</h3>
              <p className="text-sm text-gray-600">Lead Provider, managing logistics and ensuring timely delivery of quality materials.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <img src={teamImage} alt="CEO" className="w-full h-56 object-cover rounded-xl mb-4" />
              <h3 className="text-lg font-semibold text-indigo-600">Mr. Ankit Singh</h3>
              <p className="text-sm text-gray-600">Chief Executive Officer, leading growth strategy and delivering exceptional value to our clients.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Section 4: Map */}
      <section className="py-20">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Our Location</h2>
          <iframe
            title="ArtRegalia Map"
            src="https://www.google.com/maps?q=kankarbagh,patna+800020&output=embed"
            className="w-full h-[400px] border-none"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  );
};

export default About;
