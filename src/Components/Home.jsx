import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "./Marquee";
// import Lenis from "@studio-freight/lenis";
// import RollingText from "./RollingText";
// import HoverEffectLink from "./HoverEffectLink";
import ParallaxImage from "./ParallaxImage";

const Home = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(imgRef.current, {
      y: "-20%", // Move up on scroll
      ease: "none",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });
  }, []);

  return (
    <div className="bg-[#F2F1E9] w-full flex flex-col justify-center gap-8 items-center relative">
      <div className="h-screen relative w-full overflow-hidden flex justify-center items-center">
        <div className="flex justify-center items-center w-full p-10">
          <div className=" w-full h-[400px] sm:h-[500px] sm:w-[400px] relative overflow-hidden">
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
                transition: { duration: 0.8, ease: "easeInOut",delay:0.5 },
              }}
              exit={{ y: "100%" }}
              className="overlay absolute top-0 left-0 ] h-full w-full bg-[#F2F1E9]"
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
          className="absolute bottom-0 overflow-hidden "
        >
          <Marquee name={"Nikhil Dalton"} />
        </motion.div>
      </div>
      {/* <div className="relative h-[150vh] w-full flex justify-center items-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            ref={imgRef}
            src="https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Parallax"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-col md:flex justify-center items-center gap-5">
      </div>
      <div className="w-full h-[200vh] bg-green-500"></div> */}
    </div>
  );
};

export default Home;

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import Marquee from "./Marquee";

// const Home = () => {
//   const marqueeRef = useRef(null);

//   useEffect(() => {
//     const marquee = marqueeRef.current;

//     gsap.to(marquee, {
//       xPercent: -50, // Move by half the width of the text block
//       duration: 30, // Speed of the animation
//       ease: "linear",
//       repeat: -1, // Infinite loop
//       modifiers: {
//         xPercent: (x) => `${x % 50}`, // Keeps the animation smooth
//       },
//     });
//   }, []);

//   return (
//     <div className="bg-[#F2F1E9] w-full flex flex-col justify-center items-center relative">
//       <div className="h-screen relative w-full overflow-hidden flex justify-center items-center">

//         <div className="absolute bottom-0 w-full overflow-hidden whitespace-nowrap">
//         <Marquee name={"ROHIT"}/>
//           {/* <div ref={marqueeRef} className="flex w-max"> */}
//             {/* Duplicate text content to make the loop seamless */}
//             {/* {[...Array(2)].map((_, index) => (
//               <h1 key={index} className="text-black text-9xl uppercase tracking-tighter title whitespace-nowrap mx-4">
//                 Nikhil Dalton - Nikhil Dalton - Nikhil Dalton - Nikhil Dalton - Nikhil Dalton -
//               </h1>
//             ))} */}
//           {/* </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
