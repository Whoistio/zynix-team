
import { ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from '../ui/BackToTop';
import FloatingAction from '../ui/FloatingAction';
import CursorHighlight from '../ui/CursorHighlight';
import AIAssistant from '../ui/AIAssistant';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Add page view effect when page loads
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Add body class for better styling
    document.body.classList.add('antialiased');
    
    return () => {
      document.body.classList.remove('antialiased');
    };
  }, []);
  
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 relative overflow-hidden">
      {/* Enhanced technological background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Binary code background */}
        <div className="absolute top-0 left-0 text-xl md:text-2xl font-mono text-gray-100 opacity-[0.02] leading-none">
          {Array(20).fill(0).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {Array(50).fill(0).map((_, j) => (
                <span key={j}>
                  {Math.round(Math.random()) === 1 ? '1' : '0'}
                </span>
              ))}
            </div>
          ))}
        </div>
        
        {/* Animated Matrix-like code rain */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
          {Array(10).fill(0).map((_, i) => (
            <div 
              key={i} 
              className="absolute text-zynix-green font-mono text-lg"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: -100,
                animation: `fall ${5 + Math.random() * 10}s linear ${Math.random() * 5}s infinite`,
                opacity: 0.3 + Math.random() * 0.7
              }}
            >
              {Array(Math.floor(10 + Math.random() * 15)).fill(0).map((_, j) => (
                <div key={j} className="my-2">
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </div>
          ))}
        </div>
        
        {/* Grid pattern with glow */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,255,136,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        {/* Code snippets in background */}
        <div className="absolute bottom-20 right-10 opacity-[0.02] font-mono text-xs">
          <pre>
            {`function initAI() {
  const model = new ZynixAI({
    version: '3.1.4',
    capabilities: ['nlp', 'vision']
  });
  
  return model.initialize();
}`}
          </pre>
        </div>
        
        <div className="absolute top-40 left-10 opacity-[0.02] font-mono text-xs">
          <pre>
            {`class SecurityScanner {
  constructor(target) {
    this.target = target;
    this.vulnerabilities = [];
  }
  
  async scan() {
    // Implementation
  }
}`}
          </pre>
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-zynix-blue opacity-5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-zynix-green opacity-5 blur-3xl"></div>
      </div>
      
      {/* Add keyframes for code rain animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fall {
            0% {
              transform: translateY(-100px);
            }
            100% {
              transform: translateY(100vh);
            }
          }
        `
      }} />
      
      <Navbar />
      
      <motion.main 
        className="flex-1 pt-16 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Enhanced code bracket decoration - curly braces instead of angle brackets */}
        <div className="fixed left-4 top-1/2 -translate-y-1/2 opacity-10 text-6xl font-mono text-zynix-blue select-none pointer-events-none">
          {'{'}
        </div>
        <div className="fixed left-8 top-1/2 -translate-y-[60%] opacity-10 text-4xl font-mono text-zynix-green select-none pointer-events-none">
          {'['}
        </div>
        <div className="fixed right-8 top-1/2 -translate-y-[40%] opacity-10 text-4xl font-mono text-zynix-green select-none pointer-events-none">
          {']'}
        </div>
        <div className="fixed right-4 top-1/2 -translate-y-1/2 opacity-10 text-6xl font-mono text-zynix-blue select-none pointer-events-none">
          {'}'}
        </div>
        
        {children}
      </motion.main>
      
      <Footer />
      <BackToTop />
      <FloatingAction />
      <CursorHighlight />
      <AIAssistant />
    </div>
  );
};

export default Layout;
