import { motion } from "framer-motion";
import React from "react";

const OverlayTransition = () => {
  return (
    <motion.svg
      className="fixed top-0 left-0 w-full h-full z-50"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      initial={{ y: "100vh" }} // Start fully off-screen at the bottom
      animate={{ y: "0vh", transition: { duration: 1, ease: "easeInOut" } }} // Move up to cover screen
      exit={{ y: "-100vh", transition: { duration: 1, ease: "easeInOut" } }} // Move off-screen at the top
    >
      <path
        fill="black"
        d="
          M 0 100 
          C 25 85, 75 85, 100 100  /* Outward curve at the bottom */
          L 100 0
          C 75 15, 25 15, 0 0  /* Outward curve at the top */
          Z"
      />
    </motion.svg>
  );
};

export default OverlayTransition;
