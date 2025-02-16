import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Home from "./Components/Home";
import { AnimatePresence, motion } from "framer-motion";
import OverlayTransition from "./Components/OverlayTransition";
import Preloader from "./Components/Preloader";
import Lenis from "@studio-freight/lenis";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // Initialize Lenis for smooth scrolling
      const lenis = new Lenis({
        duration: 1.5, // Controls the smoothness
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
        smooth: true,
      });
  
      // RAF for smooth scrolling
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
  
      return () => {
        lenis.destroy(); // Cleanup Lenis on component unmount
      };
  }, [])
  
  return (
    <>
        <Header/>
      {/* {loading ? (
        <Preloader location={location} onComplete={() => setLoading(false)} />
      ) : ( */}
        <div className="bg-[#F2F1E9] max-w-[1920px] mx-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </div>
      {/* )} */}
    </>
  );
};

const pageVariants = {
//   initial: { opacity: 0,scale:1 },
//   animate: { opacity: 1,scale:1,transition: { duration: 0.5 } },
//   exit: { opacity: 0,scale:0.9, transition: { duration: 0.5 } },
initial:{translateY:"100%"},
animate:{translateY:"0%",transition:{duration:1,ease:[0.83, 0, 0.17, 1]}},
exit:{opacity:0,transition:{duration:1}},
// initial:{scaleY:0},
// animate:{scaleY:1,transition:{duration:0.8,ease:[0.83, 0, 0.17, 1]}},
// exit:{opacity:0,transition:{duration:0.5}},
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    style={{transformOrigin:"bottom"}}
  >
    {children}
  </motion.div>
);

export default App;
