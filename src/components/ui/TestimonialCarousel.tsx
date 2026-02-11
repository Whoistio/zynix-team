
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, User, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Agness Shirima",
    company: "Magomeni National Hospital",
    role: "Nurse and Pharmacist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    text: "Zynix transformed our health management system. Their AI tools have reduced our wasting of writing hospital data by 70%."
  },
  {
    id: 2,
    name: "Onesmo Njuka",
    company: "Preciousking Schools,Morogoro",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    text: "The school management system built by Zynix has streamlined our entire administration. Parents love the mobile accessibility."
  },
  {
    id: 3,
    name: "Gift Mussa",
    company: "MicroBank Tanzania",
    role: "IT Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    text: "Security is paramount in banking, and Zynix's cybersecurity solutions have given us confidence in our digital transformation journey."
  },
  {
    id: 4,
    name: "Dick Masabo",
    company: "Komi code Hub Tech",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    text: "Our e-commerce platform developed by Zynix has opened new markets for us. Sales have increased by 45% in just three months!"
  }
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoplay]);
  
  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };
  
  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <div className="relative max-w-4xl mx-auto px-4 py-12">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-zynix-blue/5 -z-10 rounded-3xl transform -rotate-1"></div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-zynix-green/5 -z-10 rounded-3xl transform rotate-1"></div>
      
      <div className="flex justify-center mb-8">
        <Quote className="text-zynix-blue h-12 w-12 opacity-20" />
      </div>
      
      <div className="relative h-64 md:h-52 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[current].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-gray-700 dark:text-gray-300 italic text-lg mb-6">
              "{testimonials[current].text}"
            </p>
            <div className="flex flex-col items-center">
              <Avatar className="h-16 w-16 border-2 border-zynix-blue mb-3">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="object-cover"
                />
              </Avatar>
              <h3 className="font-bold text-lg">{testimonials[current].name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {testimonials[current].role}, {testimonials[current].company}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoplay(false);
              setCurrent(index);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-zynix-blue scale-125" : "bg-gray-300 dark:bg-gray-600"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:px-10">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
