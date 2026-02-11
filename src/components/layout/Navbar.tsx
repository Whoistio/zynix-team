
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { Menu, X, Sun, Moon, Phone, Mail, ArrowRight, Code, Database, Shield } from 'lucide-react';
import ZynixLogo from '../ZynixLogo';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuCodeItem
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const { toast } = useToast();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    toast({
      title: !darkMode ? "Dark mode enabled" : "Light mode enabled",
      description: !darkMode ? "Switched to dark theme" : "Switched to light theme",
      duration: 2000,
    });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      children: [
        {
          title: "webDev",
          description: "Modern, responsive websites and web applications",
          path: "/services#web-development",
          icon: <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center">
            <Code className="h-5 w-5 text-blue-400" />
          </div>
        },
        {
          title: "aiSolutions",
          description: "Custom AI tools for business automation and insights",
          path: "/services#ai-solutions",
          icon: <div className="w-8 h-8 rounded-full bg-green-900/30 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-400">
              <path d="M12 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.93 4.93L7.76 7.76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.24 16.24L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.93 19.07L7.76 16.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        },
        {
          title: "secureSystems",
          description: "Protect your business with our security services",
          path: "/services#cybersecurity",
          icon: <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center">
            <Shield className="h-5 w-5 text-red-400" />
          </div>
        }
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Team', path: '/team' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-gray-800' 
          : 'py-4 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      {/* Top Bar with Contact Info */}
      <div className={`bg-gray-800 text-gray-300 py-1 transition-all ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center text-sm font-mono">
          <div className="flex items-center space-x-4">
            <a href="tel:+255674517279" className="flex items-center hover:text-zynix-green transition-colors">
              <Phone className="h-3 w-3 mr-1" /> +255 674 517 279
            </a>
            <a href="mailto:cnjuka99@gmail.com" className="flex items-center hover:text-zynix-green transition-colors">
              <Mail className="h-3 w-3 mr-1" /> cnjuka99@gmail.com
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <a 
              href="https://wa.me/255674517279" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zynix-green transition-colors"
            >
              WhatsApp
            </a>
            <span>|</span>
            <a 
              href="https://www.linkedin.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zynix-green transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <ZynixLogo className="h-10 w-auto" />
            <motion.span
              className="ml-2 text-xl font-bold font-mono text-white"
              animate={{ 
                backgroundPosition: ['0% center', '100% center', '0% center'],
              }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              Zynix<span className="text-zynix-green">.</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => 
                  link.children ? (
                    <NavigationMenuItem key={link.name}>
                      <NavigationMenuTrigger className={
                        location.pathname === link.path ? 'text-zynix-blue dark:text-zynix-green' : ''
                      }>
                        {link.name}()
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {link.children.map((item) => (
                            <li key={item.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={item.path}
                                  className="block select-none outline-none transition-colors"
                                >
                                  <NavigationMenuCodeItem
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                  />
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={link.name}>
                      <Link 
                        to={link.path} 
                        className={`nav-link font-mono ${location.pathname === link.path ? 'text-zynix-blue dark:text-zynix-green' : 'text-gray-300'} px-3 py-2`}
                      >
                        {location.pathname === link.path ? `<${link.name} />` : `${link.name}()`}
                        {location.pathname === link.path && (
                          <motion.span
                            className="absolute bottom-0 left-0 h-0.5 bg-zynix-blue dark:bg-zynix-green"
                            layoutId="navIndicator"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
            
            <motion.button 
              onClick={toggleDarkMode} 
              className="ml-2 p-2 rounded-full hover:bg-gray-800 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <Sun className="h-5 w-5 text-gray-300" /> : <Moon className="h-5 w-5 text-gray-300" />}
            </motion.button>

            <Button asChild className="ml-2 bg-zynix-green hover:bg-green-600 text-black font-mono">
              <Link to="/contact">
                connect() <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <motion.button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <Sun className="h-5 w-5 text-gray-300" /> : <Moon className="h-5 w-5 text-gray-300" />}
            </motion.button>
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:bg-gray-800"
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-4 py-4 bg-gray-900 rounded-lg shadow-lg border border-gray-800"
            >
              <nav className="flex flex-col space-y-3 px-4 font-mono">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link 
                      to={link.path} 
                      className={`py-2 px-3 rounded-md hover:bg-gray-800 block ${
                        location.pathname === link.path ? 'text-zynix-green font-medium' : 'text-gray-300'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {location.pathname === link.path ? `<${link.name} />` : `${link.name}()`}
                    </Link>
                    
                    {/* Submenu for services on mobile */}
                    {link.children && location.pathname === link.path && (
                      <div className="pl-6 mt-2 space-y-2">
                        {link.children.map((item) => (
                          <Link
                            key={item.title}
                            to={item.path}
                            className="py-1 px-3 rounded-md hover:bg-gray-800 block flex items-center text-sm"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="mr-2">{item.icon}</span>
                            {item.title}()
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                
                <div className="border-t border-gray-800 pt-2 mt-2">
                  <div className="flex flex-col space-y-2 text-sm text-gray-400">
                    <a href="tel:+255674517279" className="flex items-center py-1 px-3">
                      <Phone className="h-4 w-4 mr-2" /> +255 674 517 279
                    </a>
                    <a href="mailto:cnjuka99@gmail.com" className="flex items-center py-1 px-3">
                      <Mail className="h-4 w-4 mr-2" /> cnjuka99@gmail.com
                    </a>
                  </div>
                </div>
                
                <Button asChild className="mt-2 bg-zynix-green hover:bg-green-600 text-black w-full font-mono">
                  <Link to="/contact">
                    connect() <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
