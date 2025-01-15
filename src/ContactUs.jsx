import React, { useState } from "react";
import { motion } from "framer-motion"; // Add framer-motion for animations

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state for spinner

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsLoading(true); // Show loading spinner

    // Simulate form submission delay (for demonstration)
    setTimeout(() => {
      const mailtoLink = `mailto:weroshprofy@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${
        formData.name
      }%0AEmail: ${formData.email}`;

      window.location.href = mailtoLink;

      // Reset form data
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
      setIsLoading(false); // Hide loading spinner after submission
    }, 2000); // Simulate a delay (2 seconds)
  };

  return (
    <motion.div
      id="contact-us"
      className="w-full min-h-screen px-4 py-8 md:px-12 lg:px-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }} // Animation triggers once when in view
    >
      <div className="mb-12 text-center">
        <motion.h1
          className="text-4xl font-bold text-gray-800 sm:text-5xl mt-[40px]"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-600 sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          We would love to hear from you. Please fill out the form below to get
          in touch with us.
        </motion.p>
      </div>

      <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-8 mb-6 sm:grid-cols-2">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-2 text-lg font-semibold text-gray-800"
              >
                Your Name
              </label>
              <motion.input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-2 text-lg font-semibold text-gray-800"
              >
                Your Email
              </label>
              <motion.input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <label
              htmlFor="subject"
              className="mb-2 text-lg font-semibold text-gray-800"
            >
              Subject
            </label>
            <motion.input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="flex flex-col mb-6">
            <label
              htmlFor="message"
              className="mb-2 text-lg font-semibold text-gray-800"
            >
              Your Message
            </label>
            <motion.textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            ></motion.textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full p-3 font-semibold text-white transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, loop: Infinity }}
                className="inline-block"
              >
                <svg
                  className="w-5 h-5 animate-spin"
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
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactUs;
