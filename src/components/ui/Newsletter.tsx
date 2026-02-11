
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail('');
      
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter. Your free consultation request has been received.",
        duration: 5000,
      });
    }, 1500);
  };
  
  return (
    <section className="py-20 bg-gradient-to-br from-zynix-blue via-blue-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 right-[10%] w-24 h-24 bg-white opacity-10 rounded-full blur-xl"
          animate={{ 
            y: [0, 30, 0], 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
        <motion.div 
          className="absolute bottom-10 left-[15%] w-32 h-32 bg-zynix-green opacity-10 rounded-full blur-xl"
          animate={{ 
            y: [0, -40, 0], 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-[40%] left-[5%] w-40 h-40 bg-blue-300 opacity-10 rounded-full blur-xl"
          animate={{ 
            x: [0, 30, 0], 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 2
          }}
        />
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Elements */}
          <div className="flex justify-center mb-8">
            <motion.div 
              className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <Mail className="h-8 w-8" />
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transform Your Business with Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zynix-green to-white">AI-Powered</span> Solutions
            </h2>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto">
              Join our newsletter and receive tech insights, industry updates, and a free 30-minute consultation to elevate your digital presence.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-zynix-green/20 rounded-full mr-3">
                    <Sparkles className="h-5 w-5 text-zynix-green" />
                  </div>
                  <h3 className="text-xl font-semibold">Free 30-minute consultation</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Check className="h-5 w-5 text-zynix-green" />
                    </div>
                    <p>Expert insights tailored to your business needs</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Check className="h-5 w-5 text-zynix-green" />
                    </div>
                    <p>Bi-weekly tech updates and industry trends</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Check className="h-5 w-5 text-zynix-green" />
                    </div>
                    <p>Exclusive access to Zynix webinars and events</p>
                  </div>
                </div>
              </div>
              
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="newsletter-email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Input
                        id="newsletter-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        required
                        disabled={subscribed}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/70 h-12 pl-10"
                      />
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-white/50" />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={loading || subscribed}
                    className="w-full h-12 bg-zynix-green text-zynix-black hover:bg-zynix-green/90 transition-all"
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-zynix-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : subscribed ? (
                      <span className="flex items-center justify-center">
                        <Check className="mr-2 h-5 w-5" />
                        Successfully Subscribed
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Get Your Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </span>
                    )}
                  </Button>
                  
                  <p className="text-center text-sm text-blue-100 opacity-80">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
