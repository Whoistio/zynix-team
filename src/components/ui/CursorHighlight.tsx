
import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorHighlight = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      
      if (!isVisible) {
        setIsVisible(true);
      }
    };
    
    // Only apply cursor effect on desktop
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) {
      window.addEventListener('mousemove', moveCursor);
    }
    
    return () => {
      if (!isMobile) {
        window.removeEventListener('mousemove', moveCursor);
      }
    };
  }, [isVisible]);

  if (!isVisible) return null;
  
  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[100] w-8 h-8 rounded-full border-2 border-zynix-blue mix-blend-difference"
        style={{
          x: springX,
          y: springY,
        }}
      />
      <motion.div
        className="fixed pointer-events-none z-[100] w-2 h-2 rounded-full bg-zynix-green mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: 14,
          translateY: 14
        }}
      />
    </>
  );
};

export default CursorHighlight;
