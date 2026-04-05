import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Hide cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' || 
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Use a subtle glassmorphic styling
  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      width: 20,
      height: 20,
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      backdropFilter: "blur(2px)",
      border: "1px solid rgba(59, 130, 246, 0.4)",
      transition: { type: "tween", ease: "backOut", duration: 0.1 }
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      width: 48,
      height: 48,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(4px)",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      mixBlendMode: "difference",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  // Only render on non-touch screens (desktop)
  if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 bg-transparent rounded-full pointer-events-none z-[9999]"
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      initial="default"
    />
  );
};

export default CustomCursor;
