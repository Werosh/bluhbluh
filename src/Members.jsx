import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaLink } from "react-icons/fa";
import weroshImg from "../public/Images/Team/werosh.jpg";
import ishanImg from "../public/Images/Team/ishan.jpg";
import rumethImg from "../public/Images/Team/rumeth.jpg";
import dilshanImg from "../public/Images/Team/dilshan.jpg";
import sankalpaImg from "../public/Images/Team/sankalpa.jpg";
import mallImg from "../public/Images/Team/mall.jpg";

const Members = () => {
  const members = [
    {
      name: "Werosh Kriyanjala",
      role: ["{ Software Engineer }", "{ Front-End Developer }"], // Array of roles
      description:
        "A passionate Front-End Web Developer and a proud student of the University of Moratuwa, with expertise in crafting visually appealing, responsive, and user-friendly websites. I thrive on creating seamless digital interfaces that combine aesthetics and functionality, ensuring engaging and impactful web experiences for users and businesses alike.",
      imageUrl: weroshImg,
      socialLinks: {
        github: "https://github.com/Werosh",
        linkedin: "www.linkedin.com/in/werosh-kriyanjala-0318b1292",
        portfolio: "https://weroshportfolio.netlify.app/",
      },
    },
    {
      name: "Ishan Nilaksha",
      role: ["{ UI Designer }"], // Array of roles
      description:
        "UG in HND Engineering (Electrical and Electronics) | UG in BIT University of Moratuwa | Data Science, Cloud, and Electronics Engineering Intern (SLTMobitel Digital Lab - Embryo Innovation Center, Maradana) | Freelancer Graphic Designer",
      imageUrl: ishanImg,
      socialLinks: {
        github: "https://github.com/ishanHatharasinghe",
        linkedin:
          "https://www.linkedin.com/in/ishan-nilaksha-686461308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        portfolio: "https://ishanHatharasinghe.github.io/portfolio_web",
      },
    },
    {
      name: "Dilshan Sulakshana",
      role: ["{ Software Developer }"], // Array of roles
      description:
        "Enthusiastic BIT student at the University of Moratuwa,Sri Lanka. Experienced Computer Technician with one year of hands-on troubleshooting experience, dedicated to delivering efficient IT support to enhance organizational productivity, excited about achieving goals and advancing in the IT field.",
      imageUrl: dilshanImg,
      socialLinks: {
        github: "https://github.com/DilshanSulakshana",
        linkedin: "http://www.linkedin.com/in/dilshansk520",
        portfolio: "-",
      },
    },
    {
      name: "Umayanga Gamage",
      role: ["{ Business Analyst  }", "{ Frontend Developer }"], // Array of roles
      description:
        "Enthusiastic MIS UG at KIU University and BIT UG at the University of Moratuwa. Skilled in Business Analysis, UI/UX design, and Conducting Machine Learning researches. Experienced in analyzing requirements, crafting user-focused designs, and delivering top-notch project documentation. A dedicated learner and professional announcer passionate about driving IT solutions and innovation.",
      imageUrl: mallImg,
      socialLinks: {
        github: "https://github.com/Maalgamage",
        linkedin: "http://www.linkedin.com/in/umayanga-gamage-62ba05260",
        portfolio: "-",
      },
    },
    {
      name: "Rumeth Rathubalage",
      role: ["{ Member (QA) }"], // Array of roles
      description:
        "SE Undergrad with a passion for weird things in life. I'm a QA Engineer who loves to break things and make them better. I'm a tech enthusiast who loves to learn new things and share them with others.",
      imageUrl: rumethImg,
      socialLinks: {
        github: "https://github.com/RathuGT",
        linkedin: "https://www.linkedin.com/in/rumethrathuu/",
        portfolio: "-",
      },
    },
    {
      name: "Sankalpa Sithmina",
      role: ["{ UI Designer }"], // Array of roles
      description:
        "I am a BIT undergraduate student at the University of Moratuwa, with a strong background in Frontend Development, UI/UX Design and Robotics. With a passion for creating intuitive digital experiences and building innovative systems, I combine creativity and technical expertise to deliver impactful solutions.",
      imageUrl: sankalpaImg,
      socialLinks: {
        github: "https://github.com/sana1211",
        linkedin: "http://www.linkedin.com/in/sankalpa-sithmina-29b728311",
        portfolio: "-",
      },
    },
  ];

  return (
    <div id="team" className="container py-10 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center mt-[40px]">
        Our Team
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="relative p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ y: -10 }} // Floating effect
            whileInView={{ opacity: 1, scale: 1.05 }} // Scale on scroll
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center">
              <motion.div
                className="mb-4 overflow-hidden rounded-full shadow-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="object-cover w-32 h-32"
                />
              </motion.div>
              <h3 className="mb-2 text-xl font-semibold">{member.name}</h3>
              <div className="text-center text-gray-700 mb-[15px]">
                {member.role.map((role, idx) => (
                  <p key={idx}>{role}</p>
                ))}
              </div>
              <p className="text-center text-gray-600">{member.description}</p>
              <div className="flex mt-4 space-x-4">
                <a
                  title="GitHub"
                  href={member.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-black"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  title="LinkedIn"
                  href={member.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-blue-600"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  title="Portfolio"
                  href={member.socialLinks.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-green-500"
                >
                  <FaLink size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Members;
