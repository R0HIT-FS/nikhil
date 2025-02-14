
import React, { useEffect, useRef,useState } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Marquee = ({name}) => {
  const marqueeRef = useRef(null);

//   useEffect(() => {
//     const marquee = marqueeRef.current;

//     // gsap.to(marquee, {
//     //   xPercent: -50, // Move by half the width of the text block
//     //   duration: 30, // Speed of the animation
//     //   ease: "linear",
//     //   repeat: -1, // Infinite loop
//     //   modifiers: {
//     //     xPercent: (x) => `${x % 50}`, // Keeps the animation smooth
//     //   },

//     gsap.to(marquee, {
//         x: "-10%", // Moves left on scroll down
//         ease: "none",
//         duration:10,
//         scrollTrigger: {
//           trigger: marquee,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: 1, // Smooth scroll effect
//         },
//     });
//   }, []);

const [direction, setDirection] = useState(1); // 1 for left, -1 for right

useEffect(() => {
  const marquee = marqueeRef.current;

  // Function to move marquee continuously
  const moveMarquee = (dir) => {
    gsap.to(marquee, {
      x: dir * -10 + "%", // Moves left (-200%) or right (200%)
      duration: 30, // Smooth transition
      ease: "linear",
      repeat: -1, // Infinite loop
    });
  };

  // Detect scrolling and change direction
  let lastScrollY = window.scrollY;
  ScrollTrigger.create({
    onUpdate: (self) => {
      if (self.direction === 1) {
        // Scrolling Down
        setDirection(-1);
      } else {
        // Scrolling Up
        setDirection(1);
      }
    },
  });

  moveMarquee(direction);

  return () => gsap.killTweensOf(marquee);
}, [direction]);

  return (
        
          <div ref={marqueeRef} className="flex w-max select-none">
            {/* Duplicate text content to make the loop seamless */}
            {[...Array(3)].map((_, index) => (
              <h1 key={index} className="text-black text-9xl uppercase tracking-tighter title whitespace-nowrap mx-4">
                {name} - {name} - {name} - {name} - {name} - {name} - {name} - {name} - {name} -
              </h1>
            ))}
          </div>
  );
};

export default Marquee;

