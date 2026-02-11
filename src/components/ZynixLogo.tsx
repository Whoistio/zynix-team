
import { motion } from 'framer-motion';

interface ZynixLogoProps {
  className?: string;
  animated?: boolean;
}

const ZynixLogo = ({ className = "h-16 w-auto", animated = false }: ZynixLogoProps) => {
  // Define animation variants
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2, 
        ease: "easeInOut" 
      }
    }
  };
  
  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };
  
  // Pulsing animation for the dots
  const pulseVariants = {
    pulse: (i: number) => ({
      scale: [1, 1.2, 1],
      opacity: [1, 0.8, 1],
      transition: {
        delay: i * 0.5,
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  // Choose between animated or static logo
  if (animated) {
    return (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        className={className}
        initial="hidden"
        animate="visible"
      >
        {/* Red Z */}
        <motion.path
          d="M150 150 H350 L150 350 H350"
          fill="none"
          stroke="#DC2626"
          strokeWidth="40"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
        />
        
        {/* Blue circuit elements */}
        <motion.path
          d="M150 300 H50"
          fill="none"
          stroke="#1D4ED8"
          strokeWidth="15"
          strokeLinecap="round"
          variants={pathVariants}
        />
        
        <motion.path
          d="M150 250 H70"
          fill="none"
          stroke="#1D4ED8"
          strokeWidth="15"
          strokeLinecap="round"
          variants={pathVariants}
        />
        
        <motion.path
          d="M150 200 H90"
          fill="none"
          stroke="#1D4ED8"
          strokeWidth="15"
          strokeLinecap="round"
          variants={pathVariants}
        />
        
        <motion.path
          d="M150 350 H30"
          fill="none"
          stroke="#1D4ED8"
          strokeWidth="15"
          strokeLinecap="round"
          variants={pathVariants}
        />
        
        {/* Circle end points with pulse - FIX: combined variants and animate */}
        <motion.circle 
          cx="50" 
          cy="300" 
          r="12" 
          fill="#1D4ED8" 
          custom={0}
          variants={circleVariants}
          animate="pulse"
          whileInView={pulseVariants.pulse(0)}
        />
        
        <motion.circle 
          cx="70" 
          cy="250" 
          r="12" 
          fill="#1D4ED8" 
          custom={1}
          variants={circleVariants}
          animate="pulse"
          whileInView={pulseVariants.pulse(1)}
        />
        
        <motion.circle 
          cx="90" 
          cy="200" 
          r="12" 
          fill="#1D4ED8" 
          custom={2}
          variants={circleVariants}
          animate="pulse"
          whileInView={pulseVariants.pulse(2)}
        />
        
        <motion.circle 
          cx="30" 
          cy="350" 
          r="12" 
          fill="#1D4ED8" 
          custom={3}
          variants={circleVariants}
          animate="pulse"
          whileInView={pulseVariants.pulse(3)}
        />
        
        {/* Add a subtle glow effect */}
        <motion.filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </motion.filter>
      </motion.svg>
    );
  }
  
  // Static version
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      className={className}
    >
      {/* Red Z */}
      <path
        d="M150 150 H350 L150 350 H350"
        fill="none"
        stroke="#DC2626"
        strokeWidth="40"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Blue circuit elements */}
      <path
        d="M150 300 H50"
        fill="none"
        stroke="#1D4ED8"
        strokeWidth="15"
        strokeLinecap="round"
      />
      
      <path
        d="M150 250 H70"
        fill="none"
        stroke="#1D4ED8"
        strokeWidth="15"
        strokeLinecap="round"
      />
      
      <path
        d="M150 200 H90"
        fill="none"
        stroke="#1D4ED8"
        strokeWidth="15"
        strokeLinecap="round"
      />
      
      <path
        d="M150 350 H30"
        fill="none"
        stroke="#1D4ED8"
        strokeWidth="15"
        strokeLinecap="round"
      />
      
      {/* Circle end points */}
      <circle cx="50" cy="300" r="12" fill="#1D4ED8" />
      <circle cx="70" cy="250" r="12" fill="#1D4ED8" />
      <circle cx="90" cy="200" r="12" fill="#1D4ED8" />
      <circle cx="30" cy="350" r="12" fill="#1D4ED8" />
    </svg>
  );
};

export default ZynixLogo;
