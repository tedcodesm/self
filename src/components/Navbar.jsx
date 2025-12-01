import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Motion.div className="fixed top-0 w-full z-50 text-white">
      {/* Desktop Navbar */}
      <nav className="hidden md:flex justify-center items-center gap-16 w-full bg-lime-700 bg-opacity-80 backdrop-blur-md shadow-md py-4 text-white">
        <Motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/" className="hover:text-gray-300 font-serif transition duration-300">
            About
          </Link>
        </Motion.div>

        <Motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/projects" className="hover:text-gray-300 font-serif transition duration-300">
            Projects
          </Link>
        </Motion.div>

        <Motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/skills" className="hover:text-gray-300 font-serif transition duration-300">
            Skills
          </Link>
        </Motion.div>

        <Motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/contacts" className="hover:text-gray-300 font-serif transition duration-300">
            Contact
          </Link>
        </Motion.div>
      </nav>

      {/* Mobile Navbar Toggle */}
      <div className="md:hidden flex justify-end p-4 bg-lime-700 bg-opacity-80 backdrop-blur-md shadow-md">
        {isOpen ? (
          <Icon.X size={28} color="white" onClick={toggleMenu} />
        ) : (
          <Icon.Menu size={28} color="white" onClick={toggleMenu} />
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <Motion.nav
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-0 left-0 w-full h-screen bg-lime-100 bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-lg font-semibold text-gray-800 z-40"
          >
            <Motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={toggleMenu}>
              <Link to="/" className="hover:text-gray-700 transition duration-300">About</Link>
            </Motion.div>

            <Motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={toggleMenu}>
              <Link to="/projects" className="hover:text-gray-700 transition duration-300">Projects</Link>
            </Motion.div>

            <Motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={toggleMenu}>
              <Link to="/skills" className="hover:text-gray-700 transition duration-300">Skills</Link>
            </Motion.div>

            <Motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={toggleMenu}>
              <Link to="/contacts" className="hover:text-gray-700 transition duration-300">Contact</Link>
            </Motion.div>
          </Motion.nav>
        )}
      </AnimatePresence>
    </Motion.div>
  );
};

export default Navbar;
