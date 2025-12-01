import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-r from-blue-100 via-lime-100 to-green-200 text-center"
    >
      <h2 className="text-4xl typewriter md:text-5xl font-serif font-extrabold mb-6 text-lime-700">
        Get In Touch...
      </h2>

      <p className="text-gray-700 font-medium mb-12 max-w-2xl text-lg">
        Whether you have a project in mind, a collaboration opportunity, 
        or just want to connect  feel free to reach out via any of the 
        platforms below.
      </p>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {/* Email */}
        <motion.a
          href="mailto:kaahenjoroge@gmail.com"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 bg-white shadow-lg rounded-2xl p-5 hover:shadow-xl transition"
        >
          <FaEnvelope className="text-lime-600 text-2xl" />
          <span className="text-gray-800 font-semibold">
            kaahenjoroge@gmail.com
          </span>
        </motion.a>

        {/* Phone */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 bg-white shadow-lg rounded-2xl p-5 hover:shadow-xl transition"
        >
          <FaPhoneAlt className="text-lime-600 text-2xl" />
          <span className="text-gray-800 font-semibold">+254 743 080 538</span>
        </motion.div>

        {/* GitHub */}
        <motion.a
          href="https://github.com/tedcodesm"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 bg-white shadow-lg rounded-2xl p-5 hover:shadow-xl transition"
        >
          <FaGithub className="text-gray-800 text-2xl" />
          <span className="text-gray-800 font-semibold">GitHub</span>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://linkedin.com/in/edwardkaahe"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 bg-white shadow-lg rounded-2xl p-5 hover:shadow-xl transition"
        >
          <FaLinkedin className="text-blue-700 text-2xl" />
          <span className="text-gray-800 font-semibold">LinkedIn</span>
        </motion.a>
      </div>
    </motion.section>
  );
};

export default About;
