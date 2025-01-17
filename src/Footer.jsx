import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-8 text-white bg-gray-900"
    >
      <div className="container grid gap-8 px-4 mx-auto sm:grid-cols-1 md:grid-cols-3">
        {/* Left Section */}
        <div className="text-left sm:text-center lg:text-left">
          <h3 className="text-lg font-bold">Bluh Bluh Dev</h3>
          <p className="text-gray-400">"Innovating one line at a time"</p>
          <p className="mt-4 text-sm text-gray-400">
            &copy; 2025 Bluh Bluh Dev. All Rights Reserved.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex justify-center space-x-6">
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

        {/* Right Section */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            For more inquiries if this form doesn't work:
          </p>
          <p className="flex items-center justify-center mt-2">
            <FaWhatsapp size={20} className="mr-2 text-green-500" />
            <a
              href="https://wa.me/94769496250"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 transition-colors hover:text-green-600"
            >
              076-9496250
            </a>
          </p>
          <p className="mt-2">
            <a
              href="mailto:weroshprofy@gmail.com"
              className="text-blue-400 transition-colors hover:text-blue-500"
            >
              weroshprofy@gmail.com
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
