import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import HoverEffectLink from "./HoverEffectLink";

const Header = () => {
  const overlayRef = useRef(null);
  const linksRef = useRef(null);
  const [overlay, setOverlay] = useState(false);

  const toggleOverlay = () => {
    setOverlay((prev) => {
      const newState = !prev;
      gsap.to(overlayRef.current, {
        right: newState ? "0%" : "-100%",
        duration: 0.5,
        ease: [0.83, 0, 0.17, 1],
      });
      return newState;
    });
  };

  return (
    <div className="p-10 flex justify-between gap-2 items-center fixed top-0 left-0 w-full z-[99]">
      <Link
        to={"/"}
        className="text-xl sm:text-4xl ppthin tracking-tighter mix-blend-difference"
      >
        NikhilDaltonFilms.
      </Link>
      <p
        className={`text-md sm:text-2xl ppthin tracking-tighter cursor-pointer `}
        onClick={toggleOverlay}
      >
        Menu
      </p>
      <div
        ref={overlayRef}
        className="overlay fixed top-0 right-[-100%] h-screen w-full z-[100]  bg-[#F9E79F] p-10 flex flex-col justify-center items-center"
      >
        <p
          className="text-right absolute top-0 left-0 w-full text-black text-md sm:text-2xl ppthin tracking-tighter cursor-pointer p-10"
          onClick={toggleOverlay}
        >
          Close
        </p>
        <Link to={"/"} onClick={toggleOverlay}><HoverEffectLink text={"INDEX"} textColor={'black'}/></Link>
        {/* <Link to={"/about"} onClick={toggleOverlay}><HoverEffectLink text={"ABOUT"} textColor={'black'}/></Link> */}
        <Link to={"/contact"} onClick={toggleOverlay}><HoverEffectLink text={"WORK"} textColor={'black'}/></Link>
      </div>
    </div>
  );
};

export default Header;
