import React from "react";
import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaPhp,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiReact,
  SiExpress,
  SiSocketdotio,
  SiTypescript,
  SiMysql,
  SiVercel,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  { Icon: FaReact, name: "React", level: 85, color: "#61DBFB" },
  { Icon: SiReact, name: "React Native", level: 72, color: "#61DBFB" },
  { Icon: FaNodeJs, name: "Node.js", level: 79, color: "#3C873A" },
  { Icon: SiExpress, name: "Express.js", level: 75, color: "#000000" },
  { Icon: FaDatabase, name: "MongoDB", level: 91, color: "#4DB33D" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", level: 99, color: "#38BDF8" },
  { Icon: FaJs, name: "JavaScript", level: 87, color: "#F7DF1E" },
  { Icon: SiTypescript, name: "TypeScript", level: 70, color: "#3178C6" },
  { Icon: FaPhp, name: "PHP", level: 65, color: "#8892BE" },
  { Icon: FaPython, name: "Python", level: 60, color: "#3776AB" },
  { Icon: SiMysql, name: "MySQL", level: 68, color: "#00758F" },
  { Icon: SiVercel, name: "Vercel", level: 80, color: "#000000" },
  { Icon: SiNextdotjs, name: "Next.js", level: 73, color: "#000000" },
  { Icon: FaGitAlt, name: "Git", level: 90, color: "#F1502F" },
  { Icon: SiSocketdotio, name: "Socket.io", level: 50, color: "#010101" },
];


const Skills = () => {
  return (
    <div className="py-10">
      <motion.section
        id="skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex  md:h-full flex-col items-center justify-center text-center px-6"
      >
        <h2 className="text-4xl tracking-wider font-bold mb-6 mt-4">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-xl">
          {skills.map(({ Icon, name, level, color }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-start bg-opacity-50 bg-gradient-to-r from-blue-200 to-lime-400 p-4 rounded-lg shadow-lg w-full"
            >
              <div className="flex items-center space-x-3">
                <Icon className="text-4xl" style={{ color }} />
                <p className="text-lg font-semibold">{name}</p>
              </div>

              {/* Fixed Color Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-3 mt-3">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${level}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="bg-blue-700 h-3 rounded-full"
                />
              </div>

              <p className="text-sm font-bold text-gray-600 mt-1">{level}%</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Skills;
