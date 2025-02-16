import React from "react";
import {motion} from "framer-motion"
import Marquee from "./Marquee";

const About = () => {
  return (
    <div className="p-10">
      <div className="flex justify-center items-center w-full h-screen">
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
      <div>
        <p className="text-3xl md:text-4xl ppthin">I’m Nikhil Dalton, a Hyderabad-based photographer with a deep passion for storytelling through my lens. Whether it’s the dynamic energy of street photography or the intimate emotions of weddings, my work is about capturing raw, unfiltered moments that tell a story. I strive to preserve the beauty of human connections and everyday life, turning them into timeless visuals.</p>
      </div>
      <br/>
      <p className="text-3xl md:text-4xl ppthin">Beyond photography, I’m also a <span className="italic">passionate editor</span>, refining each frame to bring out its full potential. My love for art extends to music as well—I’m a bassist who finds rhythm not just in sound but in the visual world too. Whether through a photograph, an edit, or a bassline, my goal is to create work that evokes emotions and leaves a lasting impression.</p>
      <div className="h-screen w-full bg-red-400"></div>
    </div>
  );
};

export default About;
