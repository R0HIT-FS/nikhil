import React, { useRef } from "react";
import gsap from "gsap";

const HoverEffectLink = ({text,textColor}) => {
  const linkRef = useRef(null);
  const secondRef = useRef(null)

  const handleMouseEnter = () => {
    if (!linkRef.current) return;
    const letters = linkRef.current.querySelectorAll(".letter");
    const secondLetter = secondRef.current.querySelectorAll(".second");
    

    gsap.to(letters, {
      y: "-100%",
      duration: 0.3,
      ease: "power1.inOut",
      stagger: 0.03,
      overwrite:"auto"
    });
    gsap.to(secondLetter, {
      y: "0%",
      duration: 0.3,
      ease: "power1.inOut",
      stagger: 0.03,
      overwrite:"auto"
    });
  };
  const handleMouseLeave = () => {
    if (!linkRef.current) return;
    const letters = linkRef.current.querySelectorAll(".letter");
    const secondLetter = secondRef.current.querySelectorAll(".second")
    gsap.to(letters, {
      y: "0%",
      duration: 0.3,
      ease: "power1.inOut",
      stagger: 0.03,
      overwrite:"auto"
    });
    gsap.to(secondLetter, {
        y: "100%",
        duration: 0.3,
        ease: "power1.inOut",
        stagger: 0.03,
        overwrite:"auto"
      });
  };
  return (
      <div
        className="w-full overflow-hidden flex flex-col justify-center items-center relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
<p className="overflow-hidden" ref={linkRef}>{text.split("").map((letter, index) => (
          <span className={`letter text-4xl sm:text-6xl ppthin inline-block`} style={{color:textColor}} key={index}>
            {letter}
          </span>
        ))}</p>
<p className="overflow-hidden absolute top-0 " ref={secondRef}>{text.split("").map((letter, index) => (
          <span className="second text-4xl sm:text-6xl ppthin inline-block translate-y-[100%]" style={{color:textColor}} key={index}>
            {letter}
          </span>
        ))}</p>
      </div>
  );
};

export default HoverEffectLink;
