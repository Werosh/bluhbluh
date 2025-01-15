import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For animation effects

// Sample testimonials data
const testimonials = [
  {
    name: "John Doe",
    role: "CEO of Company A",
    message: "This is the best service I have ever used. Highly recommend!",
  },
  {
    name: "Jane Smith",
    role: "Marketing Manager at Company B",
    message: "Incredible experience! The team went above and beyond our expectations.",
  },
  {
    name: "Sara Lee",
    role: "Product Manager at Company C",
    message: "Fantastic support and quality. I can’t imagine working without them.",
  },
  {
    name: "Sara Lee",
    role: "Product Manager at Company C",
    message: "Fantastic support and quality. I can’t imagine working without them.",
  },
  {
    name: "Sara Lee",
    role: "Product Manager at Company C",
    message: "Fantastic support and quality. I can’t imagine working without them.",
  },
  {
    name: "Sara Lee",
    role: "Product Manager at Company C",
    message: "Fantastic support and quality. I can’t imagine working without them.",
  },
];

const Testimonial = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating a loading delay (like fetching data from an API)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay
  }, []);

  return (
    <div
      className="w-full min-h-screen px-4 py-8 md:px-12 lg:px-24 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="mb-12 text-center">
        <motion.h1
          className="text-4xl font-bold text-gray-800 sm:text-5xl"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-600 sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Hear from some of our satisfied clients.
        </motion.p>
      </div>

      {isLoading ? (
        <motion.div
          className="flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, loop: Infinity }}
        >
          <svg
            className="w-8 h-8 text-blue-600 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              <p className="mt-4 text-gray-600">{testimonial.message}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonial;
