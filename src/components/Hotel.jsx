import React from 'react'
import { motion } from "framer-motion";


const Hotel = () => {
  return (
    <div>
        <div className="mt-6 grid grid-cols-1 sm:px-[100px] md:px-[250px]  pt-5 gap-6">
             
              <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-r from-lime-400 to-black h-auto  relative space-y-4 rounded-lg shadow-lg"
          >
            <div className=" z-[4] items-center  justify-center">
            <h3 className="text-xl font-bold">Hotel Booking</h3>     
            <h3 className="text-xs ">Scroll up</h3>     
            </div>
      
            <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
            <div className="carousel carousel-vertical rounded-box h-full">
        <div className="carousel-item">
          <img
            src="/1.png"
            alt="Burger" />
        </div>
        <div className="carousel-item">
          <img
            src="/2.png"
            alt="Burger" />
        </div>
        <div className="carousel-item">
          <img
            src="/3.png"
            alt="Burger" />
        </div>
        <div className="carousel-item">
          <img
            src="/4.png"
            alt="Burger" />
        </div>
        <div className="carousel-item">
          <img
            src="/5.png"
            alt="Burger" />
        </div>
        <div className="carousel-item">
          <img
            src="/6.png"
            alt="Burger" />
        </div>
        <div className="carousel-item">
          <img
            src="/7.png"
            alt="Burger" />
        </div>
        <div className="carousel-item">
          <img
            src="/8.png"
            alt="Burger" />
        </div>
        <div className="carousel-item">
          <img
            src="/9.png"
            alt="Burger" />
        </div>
        <div className="carousel-item ">
          <img
            src="/10.png"
            alt="Burger" />
        </div>
       
      </div>
            </div>
          </motion.div>
              </div>
    </div>
  )
}

export default Hotel
