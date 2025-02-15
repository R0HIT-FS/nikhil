import { useState, useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const GalleryWithMinimap = ({ images, initialIndex = 0 }) => {
  const [selectedImage, setSelectedImage] = useState(images[initialIndex]);
  const [isAnimating, setIsAnimating] = useState(false);
  const thumbnailsRef = useRef(null);
  const mainImageRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    const thumbnailsElement = thumbnailsRef.current;
    if (!thumbnailsElement) return;

    // Create separate Lenis instances for vertical and horizontal scrolling
    lenisRef.current = new Lenis({
      wrapper: thumbnailsElement,
      content: thumbnailsElement,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
      direction: window.innerWidth >= 768 ? "vertical" : "horizontal",
      gestureDirection: window.innerWidth >= 768 ? "vertical" : "horizontal",
      smooth: true,
      smoothTouch: true, // Disable smooth scrolling on touch devices
      touchMultiplier: 2,
    });

    // Animation frame for smooth scrolling
    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Handle wheel events
    const handleWheel = (event) => {
      event.preventDefault();

      if (window.innerWidth >= 768) {
        lenisRef.current.scrollTo(thumbnailsElement.scrollTop + event.deltaY, {
          immediate: false,
          duration: 1.2,
        });
      } else {
        lenisRef.current.scrollTo(thumbnailsElement.scrollLeft + event.deltaY, {
          immediate: false,
          duration: 1.2,
        });
      }
    };

    thumbnailsElement.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    // Handle resize events to update Lenis direction
    const handleResize = () => {
      lenisRef.current.destroy();
      lenisRef.current = new Lenis({
        wrapper: thumbnailsElement,
        content: thumbnailsElement,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: window.innerWidth >= 768 ? "vertical" : "horizontal",
        gestureDirection: window.innerWidth >= 768 ? "vertical" : "horizontal",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      lenisRef.current?.destroy();
      thumbnailsElement.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      const currentIndex = images.indexOf(selectedImage);

      if (event.key === "ArrowUp" && currentIndex > 0) {
        setSelectedImage(images[currentIndex - 1]);
      } else if (
        event.key === "ArrowDown" &&
        currentIndex < images.length - 1
      ) {
        setSelectedImage(images[currentIndex + 1]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images, selectedImage]);

  // Handle image transition animation
  useEffect(() => {
    if (!mainImageRef.current) return;

    setIsAnimating(true);
    const image = mainImageRef.current;

    image.style.opacity = "0";
    image.style.transform = "scale(0.9)";

    requestAnimationFrame(() => {
      image.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      image.style.opacity = "1";
      image.style.transform = "scale(1)";
    });

    const timer = setTimeout(() => {
      setIsAnimating(false);
      image.style.transition = "";
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedImage]);

  return (
    <div className="flex flex-col justify-end pb-[12.5vh] px-10 md:px-0 items-center w-full h-screen relative overflow-hidden">
      {/* Main Image Container */}
      <div
        className="w-[100%] h-[50%] md:w-[50%] md:h-[75%] overflow-hidden select-none absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        role="region"
        aria-label="Main image view"
      >
        <img
          ref={mainImageRef}
          src={selectedImage}
          alt={`Image ${images.indexOf(selectedImage) + 1} of ${images.length}`}
          className="object-contain w-full h-full object-center"
          aria-live="polite"
        />
      </div>

      {/* Thumbnails Navigation */}
      <div
        ref={thumbnailsRef}
        className="md:mt-4 flex max-w-[450px] px-10 md:px-0 overflow-x-scroll md:flex-col max-h-[500px] gap-2 md:w-[72px] p-2 select-none md:absolute md:right-[5%] md:top-[12.5vh] md:overflow-y-auto scrollbar-hide scrollable-container"
        role="navigation"
        aria-label="Image thumbnails"
      >
        {images.map((img, index) => (
          <button
            key={index}
            className={`w-[60px] shrink-0 md:shrink md:w-full p-1 transition-all ${
              selectedImage === img
                ? "border-1 border-black"
                : "border-1 border-none"
            }`}
            onClick={() => !isAnimating && setSelectedImage(img)}
            aria-label={`Select image ${index + 1}`}
            aria-current={selectedImage === img ? "true" : "false"}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-16 object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryWithMinimap;
