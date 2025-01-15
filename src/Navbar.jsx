import React, { useState } from "react";
import { Link } from "react-scroll"; // Add scroll to sections functionality
import { BsFillHouseGearFill } from "react-icons/bs";
import { IoBackspaceSharp } from "react-icons/io5";
import { motion } from "framer-motion"; // For animations
import { FaHome, FaUsers, FaCogs, FaLaptopCode, FaProjectDiagram, FaPhoneAlt } from "react-icons/fa"; // Icons for the navbar

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu

  // Toggle the mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 z-50 w-full bg-opacity-50 shadow-lg backdrop-blur-[8px]">
      <div className="flex items-center justify-between p-4 mx-auto max-w-7xl">
        {/* Mobile Menu Button */}
        <div className=" lg:hidden">
          <motion.button
            onClick={toggleMenu}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-3xl text-black cursor-pointer"
          >
            {isOpen ? <IoBackspaceSharp /> : <BsFillHouseGearFill />}
          </motion.button>
        </div>

        {/* Navbar Links for Desktop */}
        <div className="justify-center flex-grow hidden space-x-6 cursor-pointer lg:flex">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 font-semibold text-black hover:text-blue-500"
          >
            <FaHome size={20} />
            <span>Home</span>
          </Link>
          <Link
            to="about-us"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 font-semibold text-black hover:text-blue-500"
          >
            <FaUsers size={20} />
            <span>Who We Are</span>
          </Link>
          <Link
            to="team"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 font-semibold text-black hover:text-blue-500"
          >
            <FaCogs size={20} />
            <span>Solutions Crew</span>
          </Link>
          <Link
            to="technos"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 font-semibold text-black hover:text-blue-500"
          >
            <FaLaptopCode size={20} />
            <span>Digital Powers</span>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 font-semibold text-black hover:text-blue-500"
          >
            <FaProjectDiagram size={20} />
            <span>Our Creations</span>
          </Link>
          <Link
            to="contact-us"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 font-semibold text-black hover:text-blue-500"
          >
            <FaPhoneAlt size={20} />
            <span>Let's Connect</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-screen space-y-6 bg-gray-800 lg:hidden bg-opacity-80"
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 font-semibold text-white cursor-pointer hover:text-blue-500"
            onClick={toggleMenu}
          >
            <FaHome size={20} />
            <span>Home</span>
          </Link>
          <Link
            to="about-us"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 font-semibold text-white cursor-pointer hover:text-blue-500"
            onClick={toggleMenu}
          >
            <FaUsers size={20} />
            <span>About Us</span>
          </Link>
          <Link
            to="team"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 font-semibold text-white cursor-pointer hover:text-blue-500"
            onClick={toggleMenu}
          >
            <FaCogs size={20} />
            <span>Team</span>
          </Link>
          <Link
            to="technos"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 font-semibold text-white cursor-pointer hover:text-blue-500"
            onClick={toggleMenu}
          >
            <FaLaptopCode size={20} />
            <span>TechNos</span>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 font-semibold text-white cursor-pointer hover:text-blue-500"
            onClick={toggleMenu}
          >
            <FaProjectDiagram size={20} />
            <span>Projects</span>
          </Link>
          <Link
            to="contact-us"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 font-semibold text-white cursor-pointer hover:text-blue-500"
            onClick={toggleMenu}
          >
            <FaPhoneAlt size={20} />
            <span>Contact Us</span>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
