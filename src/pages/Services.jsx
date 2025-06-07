import React from 'react';
import Slider from 'react-slick';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const services = [
  {
    title: 'Wallpapers',
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353',
    description: 'Enhance your walls with our premium quality wallpapers that blend with every decor style.',
    reasons: [
      'Wide variety of styles and textures',
      'Easy to apply and remove',
      'Cost-effective decor solution',
    ],
    comments: 'Customers love the ease and look of our wallpapers for transforming spaces instantly.'
  },
  {
    title: 'WPC Louvers Panel',
    image: 'https://darioexim.com/wp-content/uploads/2024/07/exterior-louver-clad-1.png',
    description: 'Durable and aesthetic WPC Louvers that bring sophistication to your walls.',
    reasons: [
      'Weather resistant and durable',
      'Natural wood texture with modern design',
      'Eco-friendly and low maintenance',
    ],
    comments: 'Highly admired for their stylish finish and long-term value.'
  },
  {
    title: 'Artificial Grass',
    image: 'https://darioexim.com/wp-content/uploads/2024/07/40mm-premium-PU-backing.jpg',
    description: 'Bring greenery indoors and outdoors with our realistic artificial grass options.',
    reasons: [
      'Low maintenance',
      'Eco-friendly alternative to natural grass',
      'Adds aesthetic appeal to spaces',
    ],
    comments: 'Clients appreciate the natural look and feel it brings to their areas.'
  },
  {
    title: 'Man Power',
    image: 'https://thumbs.dreamstime.com/b/full-length-side-view-carpenters-standing-line-against-white-background-side-view-carpenters-standing-line-218939652.jpg',
    description: 'Skilled manpower to help with installation, design, and customization as per your needs.',
    reasons: [
      'Trained professionals',
      'Punctual and experienced team',
      'Efficient execution of tasks',
    ],
    comments: 'Rated highly for professionalism and work ethics during project execution.'
  },
];

const reviews = [
  {
    name: 'Amit Kumar',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    comment: 'Great service and fantastic designs. My room looks completely new!',
    rating: 5,
  },
  {
    name: 'Ritika Sharma',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    comment: 'Loved the wallpaper options. Quality is amazing!',
    rating: 4,
  },
  {
    name: 'Suresh Verma',
    image: 'https://randomuser.me/api/portraits/men/54.jpg',
    comment: 'The artificial grass is exactly what I needed for my balcony.',
    rating: 5,
  },
];

const Services = () => {
  const reviewSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="bg-slate-100 px-4 py-10 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12 text-violet-700">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow-2xl shadow-black rounded-xl overflow-hidden"
          >
            <img src={service.image} alt={service.title} className="w-full h-60 object-cover" />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-violet-700 mb-3">{service.title}</h3>
              <p className="text-sm text-gray-700 mb-3">{service.description}</p>
              <ul className="space-y-2 text-sm">
                {service.reasons.map((reason, i) => (
                  <li key={i} className="flex items-center gap-2"><FaCheckCircle className="text-green-600" /> {reason}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm italic text-gray-600">"{service.comments}"</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-violet-700 mb-6">Customer Reviews</h3>
        <Slider {...reviewSettings}>
          {reviews.map((review, idx) => (
            <motion.div key={idx} className="text-center bg-white shadow-2xl shadow-black rounded-xl px-6 py-8">
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold mb-2">{review.name}</h4>
              <p className="text-sm text-gray-600 mb-3">"{review.comment}"</p>
              <div className="flex justify-center gap-1 text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
