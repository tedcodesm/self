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
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-r from-blue-200 to-lime-400 text-center"
    >
      <h2 className="text-4xl font-bold mb-6 text-lime-600">Contact Me</h2>

      <p className="text-gray-600 font-semibold mb-10 max-w-xl">
        Have a project or just want to say hi?  Reach out
        via email or social media.
      </p>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row gap-8 mb-12 text-gray-700">
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-lime-600 text-xl animate-bounce " />
          <span>kaahenjoroge@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-lime-600 text-xl animate-pulse" />
          <span>+254 743080538</span>
        </div>
        <div className="flex items-center gap-2">
          <FaGithub className="text-lime-600 text-xl" />
          <a href="https://github.com/tedcodesm" target="_blank" rel="noreferrer">GitHub</a>
        </div>
       
      </div>

      {/* Contact Form */}

    </motion.section>
  );
};

export default About;
