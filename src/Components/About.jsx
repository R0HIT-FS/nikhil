import React from "react";
import {motion} from "framer-motion"

const About = () => {
  return (
    <div className="p-10">
      <h1 className="text-black text-9xl text-center uppercase title tracking-tighter">About</h1>
      <div className="flex justify-center items-center w-full">
        <div className=" w-full sm:h-[500px] sm:w-[400px] relative overflow-hidden">
        <motion.img
        initial={{scale:1.4,y:"60%"}}
        animate={{scale:1.0,y:"0%",transition: { duration: 0.8, ease: "easeInOut" }}}
        exit={{scale:1.0,y:"0%"}}
          className="h-full w-full object-cover object-center"
          src="nikhil_bw2.jpg"
          alt="nikhil"
        />
        <motion.div initial={{y:0}} animate={{y:"100%",transition: { duration: 0.8, ease: "easeInOut" }}} exit={{y:"100%"}} className="overlay absolute top-0 left-0 bg-white h-full w-full block sm:hidden"></motion.div>
        </div> 
      </div>
    </div>
  );
};

export default About;
