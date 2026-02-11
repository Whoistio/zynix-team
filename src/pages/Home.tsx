
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Code, Cpu, Cloud, Database, Shield, Layout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ZynixLogo from '@/components/ZynixLogo';
import { services } from '@/data/services';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import TechStack from '@/components/ui/TechStack';
import CaseStudies from '@/components/ui/CaseStudies';
import Newsletter from '@/components/ui/Newsletter';
import TechDashboard from '@/components/ui/TechDashboard';

const AnimatedCounter = ({ value, title, description }: { value: string, title: string, description: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-zynix-blue mb-2">
        {isInView ? <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {value}
        </motion.span> : "0"}
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    code: <Code className="h-6 w-6" />,
    cpu: <Cpu className="h-6 w-6" />,
    cloud: <Cloud className="h-6 w-6" />,
    "shopping-cart": <ArrowRight className="h-6 w-6" />,
    book: <Layout className="h-6 w-6" />,
    database: <Database className="h-6 w-6" />,
    shield: <Shield className="h-6 w-6" />,
    settings: <Layout className="h-6 w-6" />,
    users: <ArrowRight className="h-6 w-6" />
  };

  return (
    <motion.div 
      className="service-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px 0px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4 p-3 bg-zynix-blue/10 rounded-lg inline-block text-zynix-blue">
        {iconMap[service.icon]}
      </div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-500 mb-4">{service.description}</p>
      <Link 
        to={`/services/#${service.id}`} 
        className="inline-flex items-center text-zynix-blue hover:text-blue-700 transition-colors"
      >
        Learn more <ArrowRight className="h-4 w-4 ml-1" />
      </Link>
    </motion.div>
  );
};

const DeviceMockup = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`relative w-full max-w-md mx-auto ${className}`}>
      <div className="relative z-10 overflow-hidden rounded-xl shadow-2xl">
        {children}
      </div>
    </div>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);
  const isFeatureInView = useInView(featureRef, { once: true });
  
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  
  const fadeInAnimations = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };
  
  // Featured services (limit to 4)
  const featuredServices = services.slice(0, 4);
  
  return (
    <div>
      {/* Hero Section */}
      <motion.section 
        ref={heroSectionRef}
        className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
        style={{ scale: heroScale, opacity: heroOpacity }}
      >
        <div className="container px-4 z-10 pt-16 md:pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-block"
              >
                <ZynixLogo animated className="h-40 w-auto mx-auto md:mx-0" />
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span>Welcome to </span>
                <span className="gradient-text">Zynix</span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Innovate. Secure. Transform.
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                A leading tech company in Tanzania specializing in web development, AI solutions, e-commerce, and cybersecurity.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <Button className="bg-zynix-blue hover:bg-blue-700 text-white px-8 py-6">
                  Get a Quote
                </Button>
                <Button variant="outline" className="border-zynix-blue text-zynix-blue hover:bg-blue-50 px-8 py-6">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>
            
            <div className="hidden md:block">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <DeviceMockup>
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                    alt="Zynix Web Platform" 
                    className="w-full"
                  />
                </DeviceMockup>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-64 h-64 bg-zynix-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-zynix-green/10 rounded-full blur-3xl"></div>
        </div>
      </motion.section>
      
      {/* Tech Dashboard Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4">
          <TechDashboard />
        </div>
      </section>
      
      {/* Case Studies */}
      <CaseStudies />
      
      {/* Services Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.h2>
            <motion.p 
              className="text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              From web development to cybersecurity, we offer a wide range of tech solutions to help your business grow.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p 
              className="text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Don't just take our word for it. Hear what our clients have to say about working with Zynix.
            </motion.p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>
      
      {/* Tech Stack */}
      <TechStack />
      
      {/* Stats */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter 
              value="99+" 
              title="Clients Served" 
              description="Across Tanzania and East Africa"
            />
            <AnimatedCounter 
              value="50+" 
              title="Projects Completed" 
              description="From simple websites to complex systems"
            />
            <AnimatedCounter 
              value="2+" 
              title="Years Experience" 
              description="In the tech industry"
            />
            <AnimatedCounter 
              value="5+" 
              title="Team Members" 
              description="Skilled professionals in various domains"
            />
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <Newsletter />
      
      {/* CTA */}
      <section className="py-20 bg-zynix-blue text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-700/30 rounded-full blur-3xl"></div>
          
          {/* Code snippets in background */}
          <div className="absolute top-20 left-20 opacity-[0.1] font-mono text-xs text-white">
            <pre>
              {`function getStarted() {
  const client = new ZynixClient();
  return client.connect();
}`}
            </pre>
          </div>
        </div>
        
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to transform your business with technology?
            </motion.h2>
            <motion.p 
              className="text-blue-100 mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Contact us today for a consultation and let's discuss how we can help you achieve your goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button asChild className="bg-white text-zynix-blue hover:bg-gray-100 px-8 py-6">
                <Link to="/contact">Get Started</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
