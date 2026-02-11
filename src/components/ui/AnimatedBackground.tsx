
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatedBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  density?: 'low' | 'medium' | 'high';
  animate?: boolean;
  variant?: 'binary' | 'grid' | 'matrix' | 'code';
}

const AnimatedBackground = ({ 
  children, 
  className = "",
  density = 'medium',
  animate = true,
  variant = 'binary'
}: AnimatedBackgroundProps) => {
  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number, delay: number}>>([]);

  useEffect(() => {
    const particleCount = {
      low: 5,
      medium: 10,
      high: 15
    }[density];
    
    const newParticles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * 100, // %
      y: Math.random() * 100, // %
      size: Math.random() * 40 + 20, // px
      delay: Math.random() * 2 // second
    }));
    
    setParticles(newParticles);
  }, [density]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Binary pattern */}
      {variant === 'binary' && (
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="font-mono text-sm grid grid-cols-12 gap-1">
            {Array(100).fill(0).map((_, i) => (
              <div key={i} className="text-center">
                {Math.round(Math.random()) === 1 ? '1' : '0'}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Grid pattern */}
      {variant === 'grid' && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,255,136,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
      )}
      
      {/* Matrix effect */}
      {variant === 'matrix' && animate && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array(8).fill(0).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-zynix-green font-mono text-sm"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: -100,
                opacity: 0.3
              }}
              animate={{
                y: ["0vh", "100vh"]
              }}
              transition={{
                duration: 8 + Math.random() * 12,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
            >
              {Array(20).fill(0).map((_, j) => (
                <div key={j} className="my-1">
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      )}
      
      {/* Code snippets */}
      {variant === 'code' && (
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none font-mono text-xs overflow-hidden">
          <pre className="absolute top-10 left-10">
            {`function initialize() {
  return {
    status: "ready",
    version: "3.1.4"
  };
}`}
          </pre>
          <pre className="absolute bottom-10 right-10">
            {`class DataProcessor {
  constructor() {
    this.queue = [];
  }
  
  process(data) {
    // Processing logic
  }
}`}
          </pre>
        </div>
      )}
      
      {/* Animated particles */}
      {animate && particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-r from-zynix-blue/5 to-zynix-green/5 blur-3xl pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size
          }}
          animate={{
            x: [0, 10, 5, 15, 0],
            y: [0, 15, 5, 10, 0],
          }}
          transition={{
            duration: 10 + particle.delay * 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: particle.delay
          }}
        />
      ))}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
