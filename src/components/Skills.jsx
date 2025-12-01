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
  { Icon: FaReact, name: "React", level: 99, color: "#61DBFB" },
  { Icon: SiReact, name: "React Native", level: 95, color: "#61DBFB" },
  { Icon: FaNodeJs, name: "Node.js", level: 90, color: "#3C873A" },
  { Icon: SiExpress, name: "Express.js", level: 95, color: "#000000" },
  { Icon: FaDatabase, name: "MongoDB", level: 94, color: "#4DB33D" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", level: 99, color: "#38BDF8" },
  { Icon: FaJs, name: "JavaScript", level: 95, color: "#F7DF1E" },
  { Icon: SiTypescript, name: "TypeScript", level: 88, color: "#3178C6" },
  { Icon: FaPhp, name: "PHP", level: 70, color: "#8892BE" },
  { Icon: FaPython, name: "Python", level: 60, color: "#3776AB" },
  { Icon: SiMysql, name: "MySQL", level: 80, color: "#00758F" },
  { Icon: SiVercel, name: "Vercel", level: 80, color: "#000000" },
  { Icon: SiNextdotjs, name: "Next.js", level: 73, color: "#000000" },
  { Icon: FaGitAlt, name: "Git", level: 99, color: "#F1502F" },
  { Icon: SiSocketdotio, name: "Socket.io", level: 88, color: "#010101" },
];

// Framer Motion variants for staggered animation
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Skills = () => {
  return (
      <div className="py-16 bg-animated text-white">
        <motion.section
        id="skills"
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center text-center px-6"
      >
        <h2 className="text-4xl font-extrabold font-serif mb-10 tracking-wide">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {skills.map(({ Icon, name, level, color }, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-start p-5 rounded-xl shadow-lg bg-white/10 backdrop-blur-md w-full transition-transform duration-300"
            >
              <div className="flex items-center space-x-4 relative mb-3">
                <Icon className="text-5xl z-10" style={{ color }} />
                {/* Halo Glow Behind Icon */}
                <div
                  className="absolute -z-10 w-12 h-12 rounded-full"
                  style={{ background: `${color}30` }}
                />
                <p className="text-lg font-semibold">{name}</p>
              </div>

              {/* Gradient Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-4 mt-2 overflow-hidden relative">
  <motion.div
    initial={{ width: "0%" }}
    animate={{ width: `${level}%` }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="h-4 rounded-full relative"
    style={{
      background: `linear-gradient(90deg, ${color} 0%, ${color}80 100%)`,
    }}
  >
    <div className="shine rounded-full"></div>
  </motion.div>
</div>


              <p className="text-sm font-bold text-gray-300 mt-1">{level}%</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Skills;
