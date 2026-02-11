
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ServiceCards from './ServiceCards';
import ProjectStats from './ProjectStats';
import ApiResponseCard from './ApiResponseCard';
import ConsoleFeed from './ConsoleFeed';
import FeaturesTable from './FeaturesTable';
import { Database, Cpu, Code, TerminalSquare } from 'lucide-react';

const TechDashboard = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="space-y-16">
      <section>
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <span className="relative inline-flex">
              <Cpu className="h-8 w-8 text-zynix-green mr-2" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-zynix-green rounded-full animate-pulse"></span>
            </span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Technology Stack
            <span className="absolute -top-1 -left-2 text-zynix-green opacity-60 text-xs font-mono">{"{"}</span>
            <span className="absolute -bottom-1 -right-2 text-zynix-green opacity-60 text-xs font-mono">{"}"}</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Powered by cutting-edge technologies and AI-driven solutions, we deliver exceptional digital experiences
          </motion.p>
        </div>
        
        <ServiceCards />
      </section>
      
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <span className="relative inline-flex">
              <Database className="h-8 w-8 text-zynix-blue mr-2" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-zynix-blue rounded-full animate-pulse"></span>
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Project Analytics
            <span className="absolute -top-1 -left-2 text-zynix-blue opacity-60 text-xs font-mono">{"["}</span>
            <span className="absolute -bottom-1 -right-2 text-zynix-blue opacity-60 text-xs font-mono">{"]"}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real-time insights and statistics about our project portfolio and performance
          </p>
        </div>
        
        <ProjectStats />
      </motion.section>
      
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <div>
          <motion.div
            className="mb-8 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Code className="h-6 w-6 text-zynix-green mr-2" />
            <div>
              <h2 className="text-2xl font-bold mb-1">AI Response Analysis</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Our AI systems process requests and provide real-time insights
              </p>
            </div>
          </motion.div>
          
          <ApiResponseCard />
        </div>
        
        <div>
          <motion.div
            className="mb-8 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TerminalSquare className="h-6 w-6 text-zynix-blue mr-2" />
            <div>
              <h2 className="text-2xl font-bold mb-1">System Monitor</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Real-time logs from our infrastructure and monitoring systems
              </p>
            </div>
          </motion.div>
          
          <ConsoleFeed />
        </div>
      </motion.section>
      
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-center mb-12 relative">
          <motion.div 
            className="absolute inset-0 -z-10 opacity-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-xs leading-relaxed overflow-hidden h-full flex items-center justify-center">
              {Array(10).fill(0).map((_, i) => (
                <div key={i} className="mx-2">
                  {`function feature${i}() {
  return {
    id: ${i},
    status: "active",
    priority: ${Math.floor(Math.random() * 5)}
  };
}`}
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <span className="relative inline-flex">
              <Code className="h-8 w-8 text-zynix-green mr-2" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-zynix-green rounded-full animate-pulse"></span>
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Roadmap</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Track the status of our features and ongoing development efforts
          </p>
        </div>
        
        <FeaturesTable />
      </motion.section>
    </div>
  );
};

export default TechDashboard;
