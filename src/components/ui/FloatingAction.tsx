import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, X, Phone, ArrowUp, 
  Menu, Mail, Github, 
  Linkedin, Heart
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const FloatingAction = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API request
    setTimeout(() => {
      toast({
        title: 'Quote request sent!',
        description: 'We will get back to you soon.',
        duration: 3000,
      });
      setLoading(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 1000);
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setTimeout(() => setIsMenuOpen(false), 500);
  };
  
  const menuItems = [
    {
      icon: <Phone className="h-4 w-4" />,
      label: "Call Us",
      action: () => {
        window.location.href = 'tel:+255652181995';
        setIsMenuOpen(false);
      },
      color: "bg-gradient-to-r from-green-500 to-green-600"
    },
    {
      icon: <Mail className="h-4 w-4" />,
      label: "Email",
      action: () => {
        window.location.href = 'mailto:cnjuka99@gmail.com';
        setIsMenuOpen(false);
      },
      color: "bg-gradient-to-r from-blue-500 to-blue-600"
    },
    {
      icon: <MessageSquare className="h-4 w-4" />,
      label: "WhatsApp",
      action: () => {
        window.open('https://wa.me/255674517279', '_blank');
        setIsMenuOpen(false);
      },
      color: "bg-gradient-to-r from-green-600 to-green-700"
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      label: "LinkedIn",
      action: () => {
        window.open('https://linkedin.com', '_blank');
        setIsMenuOpen(false);
      },
      color: "bg-gradient-to-r from-blue-600 to-blue-800"
    },
    {
      icon: <Github className="h-4 w-4" />,
      label: "GitHub",
      action: () => {
        window.open('https://github.com', '_blank');
        setIsMenuOpen(false);
      },
      color: "bg-gradient-to-r from-gray-700 to-gray-900"
    },
    {
      icon: <ArrowUp className="h-4 w-4" />,
      label: "Top",
      action: scrollToTop,
      color: "bg-gradient-to-r from-zynix-blue to-blue-700"
    }
  ];

  // Animation variants
  const buttonVariants = {
    hover: { 
      scale: 1.1,
      boxShadow: "0px 0px 15px rgba(34, 255, 136, 0.5)",
      transition: {
        type: "spring",
        stiffness: 500
      }
    },
    tap: { 
      scale: 0.95 
    },
    initial: { 
      scale: 1,
      boxShadow: "0px 0px 10px rgba(34, 255, 136, 0.3)"
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <motion.button 
            className="fixed bottom-6 right-6 bg-gradient-to-r from-zynix-green to-green-500 text-zynix-black p-3 rounded-full shadow-lg animate-pulse-glow z-40"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            aria-label="Request a Quote"
          >
            <Heart className="h-6 w-6" />
          </motion.button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-900 shadow-xl border-gray-200 dark:border-gray-800">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zynix-blue to-zynix-green">
              Request a Quote
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Name</Label>
              <Input 
                id="name" 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message</Label>
              <Textarea 
                id="message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                required
                rows={4}
                className="mt-1"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-zynix-blue to-blue-700 hover:opacity-90 text-white"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Quote Request'
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      
      {/* Floating Action Menu */}
      <div className="fixed bottom-20 left-6 z-40">
        <motion.button
          className="p-3 rounded-full bg-gradient-to-r from-zynix-blue to-blue-700 text-white shadow-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="absolute left-0 bottom-16 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  className={`flex items-center space-x-2 p-2 rounded-lg shadow-md text-white ${item.color}`}
                  onClick={item.action}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.3)" }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FloatingAction;
