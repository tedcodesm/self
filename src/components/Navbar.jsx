import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import * as Icon from "react-feather"

const Navbar = () => {

   const [isOpen,setIsOpen] = useState(false);
  

   const Showmenu = () =>{
    setIsOpen(!isOpen)
   }
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-white"
    >
      {/* Navigation */}
      <nav className="fixed bg-opacity-60 top-0 hidden  w-full bg-lime-700 gap-16 shadow-md p-4 md:flex justify-center space-x-6 z-50">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/" className="hover:text-gray-300 transition duration-300">
            About 
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/projects" className="hover:text-gray-300 transition duration-300">
            Projects
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/skills" className="hover:text-gray-300 transition duration-300">
            Skills
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/contacts" className="hover:text-gray-300 transition duration-300">
            Contact
          </Link>
        </motion.div>
      </nav>
      <nav className="md:hidden flex">
        {
          isOpen ?(
            <Icon.X size={24} color="white" onClick={Showmenu}/>
          ):(
            <Icon.Menu size={24} color="white" onClick={Showmenu}/>

          )
        }
      </nav>
      {
        isOpen && (
          <nav className="fixed bg-opacity-60 top-0 flex fixed  absolute left-8 top-1 text-black font-semibold rounded-b-xl bg-lime-100 gap-4 shadow-md items-start p-4 md:hidden flex-col justify-center z-50">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/" className="hover:text-gray-300 transition duration-300">
              About 
            </Link>
          </motion.div>
  
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/projects" className="hover:text-gray-300 transition duration-300">
              Projects
            </Link>
          </motion.div>
  
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/skills" className="hover:text-gray-300 transition duration-300">
              Skills
            </Link>
          </motion.div>
  
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/contacts" className="hover:text-gray-300 transition duration-300">
              Contact
            </Link>
          </motion.div>
        </nav>
        ) 
      }

    </motion.div>
  );
};

export default Navbar;
