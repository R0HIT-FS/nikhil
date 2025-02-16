import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "./Marquee";
import Lenis from "@studio-freight/lenis";
// import RollingText from "./RollingText";
// import HoverEffectLink from "./HoverEffectLink";
import ParallaxImage from "./ParallaxImage";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      speed: 1.5,
      lerp: 0.1,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    return () => {
      lenis.destroy();
    };
  }, []);


  return (
    <div className="bg-[#F2F1E9] w-full flex flex-col justify-center gap-8 items-center relative">
      <div className="h-screen relative w-full overflow-hidden flex justify-center items-center">
        <div className="flex justify-center items-center w-full p-10">
          <div className=" w-full h-[400px] sm:h-[70%] sm:w-[50%] relative overflow-hidden">
            <motion.img
              initial={{ scale: 1.4, y: "0%" }}
              animate={{
                scale: 1.0,
                y: "0%",
                transition: { duration: 0.8, ease: "easeInOut" },
              }}
              exit={{ scale: 1.0, y: "0%" }}
              className="h-full w-full object-cover object-center mix-blend-multiply"
              src="nikhil.jpg"
              alt="nikhil"
            />
            <motion.div
              initial={{ y: 0 }}
              animate={{
                y: "100%",
                transition: { duration: 0.8, ease: "easeInOut", delay: 0.5 },
              }}
              exit={{ y: "100%" }}
              className="overlay absolute top-0 left-0 h-full w-full bg-[#F2F1E9]"
            ></motion.div>
          </div>
        </div>
        <motion.div
          initial={{ y: "100%" }}
          animate={{
            y: 0,
            transition: { duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.8 },
          }}
          exit={{ y: 0 }}
          className="absolute overflow-hidden bottom-0"
        >
          <Marquee name={"Nikhil Dalton"} marqueeDirection={1} />
        </motion.div>
      </div>
      <div className="p-10 h-fit md:h-screen w-full flex flex-col justify-center items-center gap-5">
        <p className="text-3xl md:text-6xl ppthin text-center">
          "Capturing stories through moments—be it the vibrant streets or
          heartfelt weddings. Every frame is a reflection of life, filled with
          raw emotion and connection."
        </p>
        <Link to={`/about`} className="border-[1px] border-black rounded-full p-4 ppthin text-3xl hover:bg-black hover:text-white transition-all">More About Nikhil</Link>
      </div>
    </div>
  );
};

export default Home;
