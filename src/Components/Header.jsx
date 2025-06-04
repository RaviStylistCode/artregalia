import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";

const Header = () => {
  const [ishover,setIshover]=useState(false);
  const [open ,setOpen]=useState(false);
  const isopen=()=>setOpen(!open);
  return (
    <div className=" w-full h-[85px] border border-b-2 border-black backdrop-blur-3xl top-0 shadow-lg rounded-b-md  sticky md:bg-slate-200 z-50">
      <div className="flex gap-3 justify-around items-center text-center p-3 md:p-0 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="  flex gap-2 items-center px-3 rounded  text-2xl"
        >
         <img src="https://www.shutterstock.com/image-vector/eagle-logo-fierce-vibrant-soaring-260nw-2494369867.jpg" className="w-16 shadow-md object-cover rounded-full" alt="mylogo" /> <h2 className="font-semibold">Art<span className="font-bold text-yellow-400">R</span>egalia</h2>
        </motion.div>

        <div className="h-full flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.5,
              duration: 1,
            }}
            className="hidden md:flex gap-5 justify-end p-2 font-bold top-0  "
          >
            <h3 className="text-gray-500 cursor-pointer">
              Book Your Appointment Today
            </h3>
            <a href="tel:+917645066610">

            <p className="text-gray-500 cursor-pointer flex gap-2 items-center"><FaPhone/>7645066610</p>
            </a>
          </motion.div>

          <div className="hidden md:block">
            <nav>
              <ul className="flex gap-4 font-bold cursor-pointer text-gray-600 transition-all">
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.2,
                    duration: 1,
                  }}
                >
                  Home
                </motion.li>
                <li>Wallpaper</li>
                <motion.li 
                className="flex items-center gap-1"
                onMouseOver={()=>setIshover(true)}
                onMouseOut={()=>setIshover(false)}
                >WPC Louver Panel <GoChevronDown size={'22px'} />
                  <motion.div 
                  initial={{opacity:0,height:0}}
                animate={{opacity:ishover?1:0,height: ishover?'auto':0}}
                transition={{delay:0.5 ,duration:0.2}}
                  className={`w-[20vw] bg-white absolute top-21 p-4 overflow-hidden transition-all `}>
                    <li>Exterier Louvers</li>
                    <li>Interier Louvers</li>
                    <li>Charcol Panel</li>
                  </motion.div>
                </motion.li>
                <li>Artificial Grass</li>
                <li>About us</li>
                <li>Contact us</li>
              </ul>
            </nav>
          </div>
        </div>



        {/* mobile device */}
        <div className="md:hidden">
          <button onClick={()=>isopen()} className="p-3 bg-gradient-to-r from-violet-300 to-slate-300 shadow-2xl text-white rounded-lg text-2xl w-24">{open ? 'X':'|||'}</button>
        </div>
      </div>

          <motion.section
          initial={{opacity:0,height:0}}
          animate={{opacity:open?1:0,height:open?'auto':0}}
          transition={{
            type:"spring",
            duration:0.5,
            delay:0.5
          }}
          className="w-full p-2 bg-white overflow-hidden transition-all">
            <nav>
              <ul>
                <li className="cursor-pointer bg-violet-500 focus:translate-x-3 p-2 text-white font-semibold">Home</li>
                <li className="cursor-pointer bg-violet-500 focus:translate-x-3 p-2 text-white font-semibold">Wallpaper</li>
                <li className="cursor-pointer bg-violet-500 focus:translate-x-3 p-2 text-white font-semibold">Louvers</li>
                <li className="cursor-pointer bg-violet-500 focus:translate-x-3 p-2 text-white font-semibold">Panel</li>
                <li className="cursor-pointer bg-violet-500 focus:translate-x-3 p-2 text-white font-semibold">About us</li>
                <li className="cursor-pointer bg-violet-500 focus:translate-x-3 p-2 text-white font-semibold">Contact us</li>
              </ul>
            </nav>
          </motion.section>

    </div>
  );
};

export default Header;
