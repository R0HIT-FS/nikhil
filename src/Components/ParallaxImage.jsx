// import React, { useEffect, useRef } from 'react' 
// import gsap from "gsap"

// const ParallaxImage = ({src,height}) => {
//     const imgRef = useRef(null);

//     useEffect(() => {
//         gsap.to(imgRef.current, {
//           y: "-20%", // Move up on scroll
//           ease: "none",
//           scrollTrigger: {
//             trigger: imgRef.current,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: 2,
//           },
//         });
//       }, []);
//   return (
//     <>
//           <div className="relative w-full flex justify-center items-center overflow-hidden" style={{height:height}}>
//         <div className="absolute top-0 left-0 w-full h-full">
//           <img
//             ref={imgRef}
//             src={`${src}`}
//             alt="Parallax"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </>
//   )
// }

// export default ParallaxImage

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger once

const ParallaxImage = ({ src, height }) => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        y: "-20%", // Move up on scroll
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current, // Use container instead of img
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden flex justify-center items-center" style={{ height }}>
      <img ref={imgRef} src={src} alt="Parallax" className="w-full h-full object-cover absolute top-0 left-0" />
    </div>
  );
};

export default ParallaxImage;
