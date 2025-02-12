// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Preloader = ({ onComplete,location }) => {
//   const preloaderRef = useRef(null);
//   console.log(location.pathname)
//   useEffect(() => {
//     gsap.to(preloaderRef.current, {
//       y: "100%",
//       duration: 1,
//       ease: "power2.inOut",
//       delay: 0.5,
//       onComplete: onComplete,
//     });
//   }, [onComplete]);

//   return (
//     <div
//       ref={preloaderRef}
//       className="fixed top-0 left-0 w-full h-full bg-black z-50"
//     />
//   );
// };

// export default Preloader;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete, location }) => {
  const preloaderRef = useRef(null);
  
  useEffect(() => {
    gsap.to(preloaderRef.current, {
      scale: 0, // Shrink to center
      duration: 1, 
      ease: "power2.inOut",
      delay: 0.5,
      onComplete: onComplete,
    });
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed top-0 left-0 w-full h-full bg-black z-50 flex justify-center items-center"
      style={{ transformOrigin: "center" }} // Ensures it shrinks towards center
    />
  );
};

export default Preloader;
