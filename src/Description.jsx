import React from 'react'
import { motion } from 'framer-motion'

const AboutUs = () => {
  return (
    <motion.div id="about-us"
      className="w-full px-4 py-8 md:px-12 lg:px-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      <div className="text-center backdrop-blur-sm">
        <motion.h1
          className="text-4xl font-bold text-black sm:text-5xl mt-[150px]"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          About US...
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-600 sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We are a dynamic team of seven aspiring tech enthusiasts studying at the
          University of Moratuwa. With diverse talents and shared ambitions, we are
          united by a passion for innovation, problem-solving, and creating impactful
          solutions in the field of software development.
        </motion.p>
        <motion.p
          className="mt-4 text-lg text-gray-600 sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Our group consists of a mix of coders, designers, and strategists, each
          bringing unique skills and perspectives to the table. From brainstorming
          creative ideas to coding robust applications, we thrive on collaboration and
          a shared commitment to excellence.
        </motion.p>
        <motion.p
          className="mt-4 text-lg text-gray-600 sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Whether it's building cutting-edge web platforms, exploring AI innovations,
          or designing seamless user experiences, we take pride in every project we
          undertake. Our time at the University of Moratuwa has equipped us with a
          strong foundation and a drive to make a difference in the tech industry.
        </motion.p>
        <motion.p
          className="mt-4 text-lg text-gray-600 sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Thank you for taking the time to learn more about us. We are excited to share
          our journey, projects, and aspirations with you. Together, we aim to push
          boundaries and shape a better future through technology.
        </motion.p>
      </div>
    </motion.div>
  )
}

export default AboutUs
