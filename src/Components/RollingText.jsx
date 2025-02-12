import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const RollingText = ({ text }) => {
  const textRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const letterContainers = textRef.current.querySelectorAll(".letter-container");

    tl.current = gsap.timeline({ paused: true }).to(letterContainers, {
      y: "-100%", // Moves first row up, revealing second row
      stagger: 0.05, // Delay between each letter
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  return (
    <h1
      ref={textRef}
      style={{
        display: "flex",
        cursor: "pointer",
        gap: "0px",
        letterSpacing: "-0.02em",
        overflow: "hidden",
      }}
      onMouseEnter={() => tl.current?.play()}
      onMouseLeave={() => tl.current?.reverse()}
      className="ppthin text-3xl"
    >
      {text.split("").map((char, index) => (
        <div
          key={index}
          className="letter-container"
          style={{
            position: "relative",
            overflow: "hidden",
            height: "1em",
            width: "auto",
            display: "inline-block",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "absolute",
              top: "0",
              left: "0",
            }}
          >
            <span style={{ display: "block" }}>{char}</span>
            <span style={{ display: "block" }}>{char}</span>
          </div>
        </div>
      ))}
    </h1>
  );
};

export default RollingText;
