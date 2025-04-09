import React from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom"


const Portfolio = () => {
  return (
    <div className="min-h-screen text-white font-sans">
     

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/y.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
        <div className="relative z-10 items-center justify-center flex flex-col space-y-5">
          <motion.img
            src="/user.png"
            alt="Profile"
            className="w-40 h-40 rounded-full shadow-lg mb-4"
            whileHover={{ scale: 1.1 }}
          />
          <h1 className="text-4xl font-bold">Hello, I'm Edward</h1>
          <p className="mt-2 text-lg max-w-[600px]">
            "I'm Edward, a passionate MERN Stack developer specializing in
            building scalable web and mobile applications. With expertise in
            React, Node.js, MongoDB, and Express, I create efficient and
            user-friendly digital solutions. From eCommerce platforms to
            real-time chat apps, I bring ideas to life with clean code and
            modern design. Let's build something amazing together!"
          </p>
        </div>
      </motion.section>

      {/* Projects Section */}
     

      {/* Skills Section */}
   
    </div>
  );
};

export default Portfolio;