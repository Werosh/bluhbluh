import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Technology stack with placeholder logos
const techStack = [
  { name: "Java", logo: "https://i.pinimg.com/originals/79/5e/bb/795ebb5f4a470cd7242136237f61fc53.png" },
  { name: "C#", logo: "https://images.seeklogo.com/logo-png/36/1/c-sharp-c-logo-png_seeklogo-363285.png" },
  { name: "Python", logo: "https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png" },
  { name: "JavaScript", logo: "https://i.pinimg.com/736x/56/03/6a/56036a3a83ef6312ab16173625973f80.jpg" },
  { name: "HTML", logo: "https://cdn.pixabay.com/photo/2018/05/08/21/28/html5-3384014_960_720.png" },
  { name: "CSS", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UbgCQjb0mCUe8Sk7QAz2y4KxOXXe0D-Itg&s" },
  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" },
  { name: "React Native", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" },
  { name: "MySQL", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqYf4wXKaa-XOfMXnuCttpW3vfbyYH3GiZ7w&s" },
  { name: "MongoDB", logo: "https://raw.githubusercontent.com/detain/svg-logos/master/svg/m/mongodb-icon-2.svg" },
  { name: "PHP", logo: "https://banner2.cleanpng.com/20180413/xlq/kisspng-web-development-php-software-developer-web-applica-create-5ad11121794b05.5974879215236508494968.jpg" },
  { name: "Expo", logo: "https://i.pinimg.com/564x/39/3d/99/393d99c90318d111c33f01277ce5b7c6.jpg" },
  { name: "Tailwind CSS", logo: "https://images.seeklogo.com/logo-png/35/1/tailwind-css-logo-png_seeklogo-354675.png" },
  { name: "Framer Motion", logo: "https://www.iconbolt.com/preview/facebook/tabler/brand-framer-motion.svg" },
];

const Techs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulate loading delay
    }, 1500); // Adjust the time for loading effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div id="technos"
      className="w-full min-h-screen px-4 py-8 md:px-12 lg:px-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="mb-12 text-center">
        <motion.h1
          className="text-4xl font-bold text-gray-800 sm:text-5xl mt-[40px]"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Technology Stack
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-600 sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Explore the technologies we use to build innovative solutions.
        </motion.p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <motion.div
            className="w-12 h-12 border-4 border-t-4 border-blue-600 rounded-full animate-spin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center justify-center p-6 transition-all duration-300 bg-gray-200 rounded-lg shadow-md hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }} // Trigger on scroll
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }} // Animates only once when the element enters view
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-white rounded-full shadow-lg">
                {/* Placeholder for Logo */}
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="object-contain w-12 h-12"
                />
              </div>
              <h2 className="text-lg font-bold text-gray-800">{tech.name}</h2>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Techs;
