import React, { useState } from "react";
import Hero from "../Components/Hero";
import mylog from "../assets/artregalialogo.jpg";
import {
  FaClock,
  FaEnvelope,
  FaGlobe,
  FaHandshake,
  FaInstagram,
  FaLinkedin,
  FaLock,
  FaPhone,
  FaTwitter,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    question: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, question } = formData;
    const message = `Hello, my name is ${name}. My email is ${email} and phone is ${phone}. I have a question: ${question}`;
    const url = `https://wa.me/917645066610?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_Self");
  };

  return (
    <>
      <div>
        <Hero />

        <div className="flex flex-col md:flex-row gap-2  p-8">
          <div className="flex justify-center lg:w-1/2">
            <img src={mylog} className="w-72 h-48 lg:h-64" alt="mylogo" />
          </div>
          <div className="flex flex-col lg:gap-8 justify-center ">
            <h1 className="font-bold text-gray-500 lg:text-lg text-justify">
              AT ArtRegalia Private Limited, OUR ENTIRE TEAM IS FULLY COMMITTED
              TO ENSURING A MEMORABLE AND DELIGHTFUL EXPERIENCE FOR YOU.
            </h1>
            <h2 className="font-bold text-left lg:text-lg text-gray-500 uppercase">
              Mr. Arun Kumar Singh
            </h2>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-indigo-100 to-blue-100 p-6 rounded-xl shadow-md text-center"
            >
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                What We Promise
              </h3>
              <p className="text-gray-700 text-sm">
                Delivering innovative and personalized interior experiences with
                precision and care.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-indigo-100 to-blue-100 p-6 rounded-xl shadow-md text-center"
            >
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                Our Address
              </h3>
              <p className="text-gray-700 text-sm">
                Kankarbagh, Patna - 800020, Bihar, India
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-indigo-100 to-blue-100 p-6 rounded-xl shadow-md text-center space-y-2"
            >
              <h3 className="text-xl font-bold text-blue-800 mb-2">Contact</h3>
              <p className="text-sm flex items-center justify-center gap-2">
                <FaPhone className="text-blue-600" /> +917645066610
              </p>
              <p className="text-sm flex items-center justify-center gap-2">
                <FaEnvelope className="text-blue-600" /> info@artregalia.com
              </p>
              <p className="text-sm flex items-center justify-center gap-2">
                <FaGlobe className="text-blue-600" /> www.artregalia.com
              </p>
              <div className="flex justify-center gap-4 mt-2">
                <FaInstagram className="text-blue-600 text-lg cursor-pointer" />
                <FaLinkedin className="text-blue-600 text-lg cursor-pointer" />
                <FaTwitter className="text-blue-600 text-lg cursor-pointer" />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-indigo-100 to-blue-100 p-6 rounded-xl shadow-md text-center"
            >
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                Opening Hours
              </h3>
              <p className="flex items-center justify-center gap-2 text-sm text-gray-700">
                <FaClock className="text-blue-600 text-lg" /> Open 24/7 for your
                convenience
              </p>
            </motion.div>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-indigo-100 to-slate-600 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-indigo-700 mb-6">
                Get in Touch
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border bg-white border-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <textarea
                  name="question"
                  placeholder="Your Question"
                  onChange={handleChange}
                  required
                  className="w-full p-3 h-28 rounded-md border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  type="submit"
                  className="bg-gradient-to-tr from-violet-500 to-slate-400 cursor-pointer hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md"
                >
                  Send via WhatsApp
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-2xl bg-blue-50 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-6">
                Your Data is Safe With Us
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FaLock className="text-blue-600 text-2xl mt-1" />
                  <p>We never share your information with third parties.</p>
                </div>
                <div className="flex items-start gap-4">
                  <FaHandshake className="text-blue-600 text-2xl mt-1" />
                  <p>We respond to every query within 24 hours.</p>
                </div>
                <div className="flex items-start gap-4">
                  <FaUsers className="text-blue-600 text-2xl mt-1" />
                  <p>Your privacy and trust are our top priorities.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Map */}
        <section className="py-20">
          <div className="w-full">
            {/* <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Our Location</h2> */}
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
    </>
  );
};

export default Contact;
