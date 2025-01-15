import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { GiBigGear } from "react-icons/gi";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const gearControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await gearControls.start({ opacity: 0, scale: 0.5, y: 50 }); // Initial hidden state
      await textControls.start({ opacity: 0, y: 50 }); // Initial hidden state

      await Promise.all([
        gearControls.start({ opacity: 1, scale: 1, y: 0, transition: { duration: 1, type:"spring", bounce: 0.25 } }),
        textControls.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5, type:"spring", bounce: 0.25 } }),
      ]);
      setLoading(false); // Set loading to false after animation
    };

    sequence();
  }, [gearControls, textControls]);

  const gearAnimation = {
    rotate: [0, 360],
    y: [0, -20, 0],
    color: ["#000000", "#024CAA", "#000000"],
  };

  const gearTransition = {
    rotate: { repeat: Infinity, duration: 10, ease: "linear" },
    y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
    color: { repeat: Infinity, duration: 10, ease: "linear" },
  };

  const letterAnimation = {
    y: [0, -10, 0],
  };

  const letterTransition = {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  };

  if (loading) {
    return (
      <div  className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="flex items-center justify-center w-24 h-24 border-4 border-blue-500 rounded-full"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            className="w-12 h-12 bg-blue-500 rounded-full"
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div id="home" className="flex items-center justify-center w-full min-h-screen ">
      <div className="flex flex-col items-center justify-center space-y-10 sm:flex-row sm:space-y-0 sm:space-x-16 md:space-x-24">
        <motion.div
          animate={gearControls}
          initial={false}
          className="flex items-center justify-center"
        >
          <motion.h1
            animate={gearAnimation}
            transition={gearTransition}
            className="text-[150px] sm:text-[200px] md:text-[250px] lg:text-[300px]"
          >
            <GiBigGear />
          </motion.h1>
        </motion.div>

        <motion.div
          animate={textControls}
          initial={false}
          className="relative w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-[150px] sm:h-[200px] bg-red-700 flex items-center justify-center rounded-full"
        >
          <div className="relative z-10 flex items-center justify-between w-full px-5">
            {[
              "B", "L", "U", "H", " ", "B", "L", "U", "H", " ", "D", "E", "V",
            ].map((letter, index) => (
              <motion.h1
                key={index}
                animate={letterAnimation}
                transition={{ ...letterTransition, delay: index * 0.2 }}
                className="font-sans font-bold text-white transition-transform sm:text-1xl md:text-3xl lg:text-3xl hover:scale-110"
              >
                {letter}
              </motion.h1>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
