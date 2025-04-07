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
        Have a project or just want to say hi? Fill out the form or reach out
        via email or social media.
      </p>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row gap-8 mb-12 text-gray-700">
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-lime-600 text-xl" />
          <span>kaahenjoroge@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-lime-600 text-xl" />
          <span>+254 743080538</span>
        </div>
        <div className="flex items-center gap-2">
          <FaGithub className="text-lime-600 text-xl" />
          <a href="https://github.com/tedcodesm" target="_blank" rel="noreferrer">GitHub</a>
        </div>
       
      </div>

      {/* Contact Form */}
      <form className="w-full max-w-xl space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-green-50 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full bg-green-50 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full bg-green-50 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
        ></textarea>
        <button
          type="submit"
          className="bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 rounded-lg transition"
        >
          Send Message
        </button>
      </form>
    </motion.section>
  );
};

export default About;
