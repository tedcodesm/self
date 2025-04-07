import React from 'react'
import { motion } from "framer-motion";
import Hotel from './Hotel';
import Market from './Market';
import { Link } from 'react-router-dom';


const Project = () => {


  return (
    <div>
       {/* Projects Section */}
       <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="py-16 flex flex-col items-center justify-center text-neutral-200 text-center px-6"
      >
        <h2 className="text-3xl font-bold"> Major Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{
            title: "Ecommerce",
            description: "A feature-rich eCommerce platform built with the MERN stack, offering a seamless shopping experience with authentication, product listings, and real-time tracking.",
            link: "https://ecommerce-vtt3.onrender.com/"
          }, {
            title: "ChatApp",
            description: "A real-time chat application using Socket.io, React, and Node.js. It supports private messaging, group chats, and real-time notifications.",
            link: "https://fullstack-chatapp-12-hbox.onrender.com/"
          },  {
            title: "Job Application",
            description: "A MERN stack job application platform that allows users to post jobs, apply online, and track applications in real-time.",
            link: "https://github.com/tedcodesm/job_frontend"
          }].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="bg-gradient-to-r from-lime-400 to-black h-80 p-4 relative space-y-4 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-lg mt-2 max-w-[400px]">{project.description}</p>
              <Link to={project.link} className="text-neutral-400 bg-lime-700 absolute bg-opacity-50 bottom-5 py-1 right-5  px-4 rounded-full hover:bg-lime-900">
                View Project
              </Link>
            </motion.div>
          ))}
        </div>
      <h1 className="font-bold text-white text-3xl pt-8">Test Projects</h1>

      <Hotel/>
        <div className="mt-6 grid grid-cols-1 pt-8 sm:px-[100px] md:px-[250px]  gap-6">
       
        <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-gradient-to-r from-lime-400 to-black h-auto  relative space-y-4 rounded-lg shadow-lg"
    >
      <div className=" z-[4] items-center justify-center">
      <h3 className="text-xl font-bold">School Advert</h3>     
      <h3 className="text-xs ">Scroll up</h3>     
      </div>

      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
      <div className="carousel carousel-vertical rounded-box h-full">
  <div className="carousel-item">
    <img
      src="/educax1.png"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="/educax2.png"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="/educax33.png"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="/educax3.png"
      alt="Burger" />
  </div>
 
</div>
      </div>
    </motion.div>
        </div>
        <Market/>
      </motion.section>
    </div>
  )
}

export default Project

