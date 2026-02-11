
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ZynixLogo from '../ZynixLogo';

interface PageLoaderProps {
  isLoading: boolean;
}

const PageLoader = ({ isLoading }: PageLoaderProps) => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      // Delay the exit animation slightly
      const timer = setTimeout(() => {
        setExit(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setExit(false);
    }
  }, [isLoading]);

  if (exit) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-gradient-to-r from-zynix-blue/90 to-zynix-green/70 backdrop-blur-sm z-[100] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center space-y-6">
        <ZynixLogo animated className="h-24 w-24" />
        
        <motion.div 
          className="w-48 h-2 bg-gray-200/20 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div 
            className="h-full bg-white rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 1.5, 
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PageLoader;
