import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-8 text-white bg-gray-900"
    >
      <div className="container flex flex-col items-center px-4 mx-auto">
        {/* Social Media Icons */}
        <div className="flex mb-4 space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-white"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-blue-500"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-pink-500"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-blue-400"
          >
            <FaTwitter size={28} />
          </a>
        </div>

        {/* Copyright Text */}
        <div className="text-sm text-center text-gray-400">
          <p>&copy; 2025 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
