import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description:
      "This is a brief description of Project One. It demonstrates our innovative approach to problem-solving.",
    image: "https://beneworleans.com/wp-content/uploads/2022/07/what-does-pending-mean.jpg",
    link: "#",
  },
  {
    title: "Project Two",
    description:
      "Project Two showcases our expertise in developing scalable and efficient software solutions.",
    image: "https://beneworleans.com/wp-content/uploads/2022/07/what-does-pending-mean.jpg",
    link: "#",
  },
  {
    title: "Project Three",
    description:
      "A creative and technical masterpiece, Project Three pushes the boundaries of modern web development.",
    image: "https://beneworleans.com/wp-content/uploads/2022/07/what-does-pending-mean.jpg",
    link: "#",
  },
];

const Project = () => {
  return (
    <motion.div id="projects"
      className="w-full min-h-screen px-4 py-8 md:px-12 lg:px-24 "
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
          Our Projects
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-600 sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover some of the amazing projects we’ve worked on.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="flex flex-col overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} // Animation triggers when in view
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            viewport={{ once: true }} // Animates only once when the element comes into view
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h2 className="mb-2 text-xl font-bold text-gray-800">
                {project.title}
              </h2>
              <p className="mb-4 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-white transition-colors duration-300 bg-blue-600 rounded hover:bg-blue-700"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
