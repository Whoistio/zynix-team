
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Github, Send, ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ZynixLogo from '../ZynixLogo';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscription successful",
        description: "Thank you for subscribing to our newsletter",
        duration: 3000,
      });
      setEmail('');
    }
  };

  return (
    <footer className="bg-zynix-black text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Logo and About */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <ZynixLogo className="h-10 w-auto" />
              <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zynix-blue to-zynix-red">
                Zynix
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Innovate. Secure. Transform.
            </p>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-zynix-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-zynix-blue transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://wa.me/255674517279" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-zynix-green transition-colors"
                aria-label="WhatsApp"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 113.4 2.9L3 21" />
                  <path d="M9 10a1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1 1 1 0 00-1 1" />
                  <path d="M13 10a1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1 1 1 0 00-1 1" />
                </svg>
              </a>
              <a 
                href="tel:+255674517279"
                className="text-gray-400 hover:text-zynix-red transition-colors"
                aria-label="Call"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-zynix-green transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-zynix-green transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-zynix-green transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-zynix-green transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-zynix-green transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Subscribe</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter to receive the latest updates and news.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-gray-800 border-gray-700 text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="bg-zynix-blue hover:bg-blue-700">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
            <div className="mt-6 space-y-2">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-zynix-blue mt-0.5 mr-2" />
                <span className="text-gray-400">cnjuka99@gmail.com</span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-zynix-blue mt-0.5 mr-2" />
                <span className="text-gray-400">+255 674 517 279</span>
              </div>
              <div className="flex items-start">
                <MessageSquare className="h-5 w-5 text-zynix-blue mt-0.5 mr-2" />
                <a href="https://wa.me/255674517279" className="text-gray-400 hover:text-zynix-green">
                  WhatsApp: +255 674 517 279
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-zynix-blue mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-400">Dar es Salaam, Tanzania</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-500">
            © Zynix Technologies 2026. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
