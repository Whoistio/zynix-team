
import Layout from "@/components/layout/Layout";
import { motion } from 'framer-motion';
import { ArrowRight, Target, BookOpen, Award, Code, Terminal, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CodeBlock from '@/components/ui/CodeBlock';

const TimelineItem = ({ year, title, description, isLeft = true }: { year: string, title: string, description: string, isLeft?: boolean }) => {
  return (
    <div className={`flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col mb-8`}>
      <motion.div 
        className="md:w-1/2 p-4"
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <span className="text-zynix-blue font-bold mb-2 block">{year}</span>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </motion.div>
      <div className="hidden md:flex md:w-1/2 items-center justify-center">
        <div className="h-full w-0.5 bg-zynix-blue relative">
          <motion.div 
            className="absolute w-4 h-4 rounded-full bg-zynix-blue left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <motion.div 
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-transparent hover:border-zynix-green transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4 p-3 bg-zynix-blue/10 rounded-lg inline-block text-zynix-blue">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

const About = () => {
  const timelineItems = [
    {
      year: '2019',
      title: 'Zynix Founded',
      description: 'Zynix was founded in Dar es Salaam by a team of passionate tech enthusiasts with a vision to transform Tanzania\'s digital landscape.'
    },
    {
      year: '2020',
      title: 'First Major Project',
      description: 'Completed our first major e-commerce platform for a leading retailer in Tanzania, establishing our reputation for quality and reliability.'
    },
    {
      year: '2021',
      title: 'Expansion to Cybersecurity',
      description: 'Expanded our services to include cybersecurity solutions, addressing the growing need for digital security in the region.'
    },
    {
      year: '2022',
      title: 'School Management System',
      description: 'Developed our flagship school management system, now used by over 50 educational institutions across Tanzania.'
    },
    {
      year: '2023',
      title: 'AI Tools Development',
      description: 'Launched our AI division, focusing on developing custom AI solutions for businesses in various industries.'
    },
    {
      year: '2024',
      title: 'Partnership with Tech Giants',
      description: 'Formed strategic partnerships with international tech companies to bring cutting-edge solutions to the African market.'
    },
    {
      year: '2025',
      title: 'Regional Expansion',
      description: 'Expanded operations to neighboring countries, bringing our expertise to the wider East African region.'
    }
  ];

  // Generate mock company info object for code display
  const companyInfo = {
    name: "Zynix Technologies",
    founded: 2019,
    location: "Dar es Salaam, Tanzania",
    team: {
      size: 24,
      roles: ["Developers", "Designers", "Security Experts", "Data Scientists"],
      expertise: ["Web", "Mobile", "AI", "Cybersecurity"]
    },
    mission: "Empowering businesses with innovative technology solutions",
    vision: "To be the leading technology partner across Africa"
  };
  
  return (
    <div className="pt-20">
      {/* Hero Section - updated with code elements */}
      <section className="bg-gray-900 dark:bg-gray-900 py-20 relative overflow-hidden">
        {/* Code background effect */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 overflow-hidden pointer-events-none">
          <pre className="text-xs md:text-sm overflow-hidden font-mono">
            {`
class Zynix {
  constructor(year = 2019) {
    this.founded = year;
    this.mission = "Empower businesses with technology";
    this.team = [];
    this.clients = [];
    this.projects = [];
  }
  
  addTeamMember(member) {
    this.team.push(member);
    console.log(\`Team expanded: \${this.team.length} members\`);
  }
  
  launchProject(name, client, technology) {
    const project = new Project(name, client, technology);
    this.projects.push(project);
    this.clients.push(client);
    return project.initialize();
  }
  
  getCompanyInfo() {
    return {
      name: "Zynix Technologies",
      founded: this.founded,
      teamSize: this.team.length,
      projectsCompleted: this.projects.length,
      uniqueClients: [...new Set(this.clients)].length
    };
  }
}
            `}
          </pre>
        </div>
        
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-zynix-blue to-zynix-green">
                About Zynix
              </span>
            </motion.h1>
            
            <motion.div
              className="flex justify-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="bg-gray-800 text-gray-100 dark:bg-gray-700 rounded-lg px-4 py-1.5 text-sm font-mono">
                <span className="text-green-400">const</span> <span className="text-blue-400">company</span> = <span className="text-yellow-400">new</span> <span className="text-purple-400">Zynix</span>();
              </div>
            </motion.div>
            
            <motion.p 
              className="text-xl text-gray-100 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Leading tech innovation in Tanzania since 2018
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Story Section - updated with code block */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Story
            </motion.h2>
            
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <CodeBlock title="company.json" language="json" className="max-w-2xl mx-auto">
                <pre className="text-sm">
                  {JSON.stringify(companyInfo, null, 2)}
                </pre>
              </CodeBlock>
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Founded in 2019, Zynix began as a small web development agency with a vision to bring innovative digital solutions to Tanzania. What started as a three-person team has now grown into a diverse group of passionate tech professionals, serving clients across East Africa.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Our journey has been defined by a commitment to quality, innovation, and making technology accessible to businesses of all sizes. From web development to AI solutions and cybersecurity, we've continuously expanded our expertise to meet the evolving needs of our clients.
            </motion.p>
            
            {/* Team Image */}
            <motion.div
              className="mb-12 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80" 
                alt="Zynix Team" 
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-gray-50 dark:bg-gray-800 font-mono text-xs text-gray-500 dark:text-gray-400">
                <span className="text-green-500">// </span>
                The Zynix team during our 2023 company retreat, where we discussed future innovations
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section - updated with terminal-like design */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative">
        <div className="absolute inset-0 opacity-5 dark:opacity-10 overflow-hidden pointer-events-none">
          <pre className="text-xs md:text-sm overflow-hidden font-mono">
            {`
function loadCompanyTimeline() {
  return fetch('/api/company/timeline')
    .then(response => response.json())
    .then(data => {
      console.log('Timeline loaded successfully');
      return data.map(entry => {
        return {
          year: entry.year,
          title: entry.title,
          description: entry.description,
          impact: calculateImpact(entry)
        };
      });
    })
    .catch(error => {
      console.error('Failed to load timeline:', error);
      return [];
    });
}

function calculateImpact(entry) {
  // Calculate business impact score
  let score = 0;
  if (entry.clients) score += entry.clients.length * 5;
  if (entry.revenue) score += Math.log(entry.revenue) * 10;
  if (entry.innovation) score += entry.innovation * 25;
  return score;
}

// Initialize timeline visualization
document.addEventListener('DOMContentLoaded', () => {
  const timelineEl = document.getElementById('company-timeline');
  loadCompanyTimeline().then(timeline => {
    renderTimeline(timeline, timelineEl);
  });
});
            `}
          </pre>
        </div>
        
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Journey
            </motion.h2>
            
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="bg-gray-800 text-gray-100 dark:bg-gray-700 rounded-lg px-4 py-1.5 text-sm font-mono">
                <span className="text-green-400">await</span> <span className="text-blue-400">company</span>.<span className="text-yellow-400">getJourney</span>();
              </div>
            </motion.div>
            
            <div className="mt-16" id="company-timeline">
              {timelineItems.map((item, index) => (
                <TimelineItem 
                  key={item.year} 
                  year={item.year} 
                  title={item.title} 
                  description={item.description}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission, Vision, Values - now with code-themed cards */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Mission, Vision & Values
            </motion.h2>
            
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="bg-gray-800 text-gray-100 dark:bg-gray-700 rounded-lg px-4 py-1.5 text-sm font-mono">
                <span className="text-purple-400">interface</span> <span className="text-yellow-400">CompanyCore</span> {'{'}
                <span className="text-blue-400"> mission</span>: <span className="text-green-400">string</span>;
                <span className="text-blue-400"> vision</span>: <span className="text-green-400">string</span>;
                <span className="text-blue-400"> values</span>: <span className="text-green-400">string[]</span>;
                {'}'}
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Target className="h-6 w-6" />}
              title="Our Mission"
              description="To empower businesses in Tanzania and East Africa with innovative technology solutions that drive growth, efficiency, and security."
            />
            <ValueCard 
              icon={<BookOpen className="h-6 w-6" />}
              title="Our Vision"
              description="To be the leading technology partner for businesses across Africa, recognized for excellence, innovation, and positive impact on digital transformation."
            />
            <ValueCard 
              icon={<Award className="h-6 w-6" />}
              title="Our Values"
              description="Innovation, Excellence, Integrity, Collaboration, and Customer-Centricity guide our work and relationships with clients and partners."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section - updated with terminal styling */}
      <section className="py-20 bg-gray-900 text-white relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <Terminal className="w-96 h-96" />
        </div>
        
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-xl">
              <div className="flex items-center border-b border-gray-700 pb-2 mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 font-mono text-sm text-gray-400">terminal — contact.sh</div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="font-mono"
              >
                <p className="mb-2 text-green-400">$ ./contact-zynix.sh</p>
                <p className="mb-4 text-white">Ready to work with us?</p>
                <p className="mb-6 text-blue-100">Let's discuss how Zynix can help your business thrive in the digital age.</p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-white text-gray-900 hover:bg-gray-100">
                    <Link to="/contact">$ ./contact-form.sh</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white text-white hover:bg-blue-700">
                    <Link to="/services">$ ./view-services.sh</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
