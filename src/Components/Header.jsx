import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import mylogo from "../assets/artregalialogo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [ishover,setIshover]=useState(false);
  const [open ,setOpen]=useState(false);
  const [wall,setWall]=useState(false);
  const isopen=()=>setOpen(!open);
 

  const [chat,setChat]=useState(false);
  const ischat=()=>setChat(!chat);

    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    question: '',
  });

    const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendToWhatsApp = () => {
    const { name, email, phone, question } = formData;

    const message = `Hi, I'm ${name}%0AMy email: ${email}%0APhone: ${phone}%0AQuestion: ${question}`;
    const whatsappNumber = '917645066610'; // Replace with your number in international format
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(url, '_Self');
    // setFormData({
    //   name:"",
    //   email:"",
    //   phone:"",
    //   question:""
    // });
    ischat();
  };

  return (
    <>
    <div className=" w-full h-[85px] border border-b-2 border-black backdrop-blur-xl top-0 shadow-lg rounded-b-md  sticky md:bg-slate-200 z-50">
      <div className="flex gap-3 justify-around items-center text-center p-3 md:p-0 ">
      <Link to={'/'}>

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
         <img src={mylogo} className="w-16 shadow-md object-cover rounded-lg" alt="mylogo" /> <h2 className="font-bold text-violet-500">Art<span className="font-bold text-yellow-400">R</span>egalia</h2>
        </motion.div>
      </Link>

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
            <h3 className="hidden lg:block text-gray-500 cursor-pointer">
              Book Your Appointment Today
            </h3>
            <a href="tel:+917645066610">

            <p className="text-gray-500 cursor-pointer flex gap-2 items-center"><FaPhone/>7645066610</p>
            </a>
          </motion.div>

          <div className="hidden lg:block">
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
                <Link to={'/'}>Home</Link>
                </motion.li>

                <li 
                onMouseOver={()=>setWall(true)}
                onMouseOut={()=>setWall(false)}
                className="flex items-center gap-1 "><Link to={'/wallpaper'}>Wallpaper</Link>  <GoChevronDown size={'22px'} />
                  <motion.div 
                  initial={{opacity:0,height:0}}
                  animate={{opacity: wall ? 1:0,height:wall?'auto':0}}
                  transition={{delay:0.5,duration:0.2}}
                  className="absolute w-96 bg-white p-4 top-21  overflow-hidden transition-all ">
                    <ul className="flex flex-col text-left ">
                      <li>mc2</li>
                      <li>mc2</li>
                      <li>mc2</li>
                      <li>mc2</li>
                    </ul>
                  </motion.div>
                </li>

                <motion.li 
                className="flex items-center gap-1"
                onMouseOver={()=>setIshover(true)}
                onMouseOut={()=>setIshover(false)}
                ><Link to={'/louvers'}> WPC Louver Panel</Link> <GoChevronDown size={'22px'} />
                  <motion.div 
                  initial={{opacity:0,height:0}}
                animate={{opacity:ishover?1:0,height: ishover?'auto':0}}
                transition={{delay:0.5 ,duration:0.2}}
                  className={`w-[20vw] bg-white absolute top-21 p-4 overflow-hidden transition-all `}>
                    <p>Exterier Louvers</p>
                    <p>Interier Louvers</p>
                    <p>Charcol Panel</p>
                  </motion.div>
                </motion.li>
                <li><Link to={'/artificial-grass'} >Artificial Grass</Link></li>
                <li ><Link to={'/about'} >About us</Link></li>
                <li  ><Link to={'/contact-us'}>Contact us</Link></li>
              </ul>
            </nav>
          </div>
        </div>

           {/* get in touch */}
          <div className="hidden md:block">
            <motion.button 
            onClick={()=>ischat()}
            whileTap={{scale:1.3}}
            className="p-3 bg-gradient-to-br from-violet-400 to-slate-300 shadow-md rounded-md cursor-pointer text-white shadow-black">Send via whatsapp</motion.button>
          </div>





        {/* mobile device */}
        <div className="lg:hidden">
          <button onClick={()=>isopen()} className="px-5 py-3  bg-gradient-to-r from-violet-300 to-slate-300 shadow-2xl text-white rounded-lg text-2xl ">{open ? 'X':'|||'}</button>
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
          className="w-full p-2 bg-slate-600 overflow-hidden transition-all">
            <nav>
              <ul>
                 <Link to={'/'} onClick={isopen}>
               <li className="cursor-pointer bg-slate-500 rounded px-4  my-1 focus:translate-x-3 p-2 text-white font-semibold">Home</li>
               </Link> 
                
                <Link to={'/wallpaper'} onClick={isopen}>
               <li className="cursor-pointer bg-slate-500 rounded px-4  my-1 focus:translate-x-3 p-2 text-white font-semibold">Wallpapers</li>
               </Link>

                <Link to={'/louvers'} onClick={isopen}>
               <li className="cursor-pointer bg-slate-500 rounded px-4  my-1 focus:translate-x-3 p-2 text-white font-semibold">WPC Louvers Panel</li>
               </Link>
               

               <Link to={'/artificial-grass'} onClick={isopen}>
               <li className="cursor-pointer bg-slate-500 rounded px-4  my-1 focus:translate-x-3 p-2 text-white font-semibold">Artificial Grass</li>
               </Link> 

               <Link to={'/about'} onClick={isopen}>
               <li className="cursor-pointer bg-slate-500 rounded px-4  my-1 focus:translate-x-3 p-2 text-white font-semibold">About us</li>
               </Link> 

               <Link to={'/contact-us'} onClick={isopen}>

               <li className="cursor-pointer bg-slate-500 rounded px-4  my-1 focus:translate-x-3 p-2 text-white font-semibold">Contact us</li>
               </Link> 
               
              </ul>

            <motion.button 
            onClick={()=>{ischat() ,isopen()}}
            whileTap={{scale:0.8}}
            className="p-3 w-full my-1 bg-gradient-to-br from-violet-400 to-slate-300 shadow-md rounded-md cursor-pointer text-black font-bold shadow-black"><span>Send via whatsapp</span></motion.button>

            </nav>
          </motion.section>

          {/* chat with me */}
          <div className={`fixed top-0 w-full h-[100vh] bg-slate-500 ${chat ? "flex":"hidden"}`}>
          
          <div className="max-w-md h-fit  my-[60px] mx-auto bg-gradient-to-br p-4 from-violet-400 to-slate-300 rounded-xl shadow-md">
            <p className="w-full text-right"><span onClick={()=>ischat()} className="p-4 cursor-pointer bg-slate-500 rounded-full text-white">X</span></p>
      <h2 className="text-xl font-semibold mb-4 text-gray-300">Ask Your Question</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        className="w-full mb-2 px-3 py-2 border rounded bg-white outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
        className="w-full mb-2 px-3 py-2 border rounded bg-white outline-none"
      />
      <input
        type="text"
        name="phone"
        placeholder="Your Phone"
        onChange={handleChange}
        className="w-full mb-2 px-3 py-2 border rounded bg-white outline-none"
      />
      <textarea
        name="question"
        placeholder="Your Question"
        onChange={handleChange}
        className="w-full mb-4 px-3 py-2 border rounded bg-white"
      />
      <button
        onClick={sendToWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
      >
        Send via WhatsApp
      </button>
    </div>
          </div>
    </div>
    </>
  );
};

export default Header;
