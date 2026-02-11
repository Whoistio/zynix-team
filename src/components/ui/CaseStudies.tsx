
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, ChevronRight, Code, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CodeBlock from '@/components/ui/CodeBlock';

// Sample case studies data
const caseStudies = [
  {
    id: 'tanzamarket-case',
    title: 'TanzaMarket E-commerce Platform',
    description: 'How we helped a local business increase online sales by 200% with our custom e-commerce solution',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    results: [
      'Increased sales by 200% in 6 months',
      'Reduced cart abandonment rate by 35%',
      'Mobile conversion rate improved by 150%',
      '65% increase in returning customers'
    ],
    tags: ['E-commerce', 'UI/UX', 'Mobile Optimization']
  },
  {
    id: 'edutrack-case',
    title: 'EduTrack School Management System',
    description: 'Transforming educational administration for 15 schools across Tanzania with our integrated platform',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    results: [
      'Administrative time reduced by 40%',
      '98% parent satisfaction with the communication system',
      'Paperwork reduced by 75%',
      'Staff training time cut in half'
    ],
    tags: ['Education', 'Management System', 'Mobile App']
  },
  {
    id: 'securenet-case',
    title: 'SecureNet Cybersecurity Implementation',
    description: 'Protecting a financial institution with advanced threat detection and prevention systems',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    results: [
      'Zero successful breaches since implementation',
      'Threat detection time improved by 85%',
      'Compliance requirements fully satisfied',
      'Staff security awareness increased by 60%'
    ],
    tags: ['Cybersecurity', 'Finance', 'Compliance']
  }
];

// Generate code snippets for each case study
const generateCaseStudyCode = (study: typeof caseStudies[0]) => {
  if (study.id === 'tanzamarket-case') {
    return `
// E-commerce platform implementation
import { ShoppingCart, Products, Analytics } from '@zynix/ecommerce';

class TanzaMarket extends EcommerceProject {
  constructor() {
    super('TanzaMarket');
    this.cart = new ShoppingCart();
    this.products = new Products();
    this.analytics = new Analytics();
  }

  optimizeMobile() {
    // Mobile-first design approach
    this.ui.setResponsive(true);
    return this.analytics.getMobileConversion();
    // Result: 150% improvement
  }

  reduceCartAbandonment() {
    this.cart.simplifyCheckout();
    this.cart.addReminders();
    return this.analytics.getCartCompletion();
    // Result: 35% reduction in abandonment
  }
}

// Initialize project
const project = new TanzaMarket();
project.launch();
`;
  } else if (study.id === 'edutrack-case') {
    return `
// School Management System
import { Database, UserAuth, Reports } from '@zynix/systems';

class EduTrack extends ManagementSystem {
  constructor() {
    super('EduTrack');
    this.db = new Database('schools');
    this.auth = new UserAuth();
    this.reports = new Reports();
  }

  digitalizeWorkflow() {
    // Replace paper-based processes
    const forms = this.getAllForms();
    forms.forEach(form => this.createDigitalVersion(form));
    // Result: 75% reduction in paperwork
  }

  improveParentCommunication() {
    this.createPortal('parents');
    this.setupNotifications('realtime');
    // Result: 98% parent satisfaction
  }
}

// Deploy to 15 schools
const system = new EduTrack();
system.deploy(schools.list);
`;
  } else {
    return `
// Cybersecurity Implementation
import { Firewall, IDS, SecurityTraining } from '@zynix/security';

class SecureNet extends SecurityProject {
  constructor() {
    super('SecureNet');
    this.firewall = new Firewall('advanced');
    this.ids = new IDS('AI-powered');
    this.training = new SecurityTraining();
  }

  detectThreats() {
    this.ids.activateRealTimeMonitoring();
    this.ids.connectToThreatDatabase();
    // Result: 85% faster threat detection
  }

  preventBreaches() {
    this.firewall.blockMaliciousTraffic();
    this.training.educateStaff();
    // Result: Zero successful breaches
  }
}

// Implement for financial client
const security = new SecureNet();
security.deploy();
`;
  }
};

const CaseStudies = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70
      }
    }
  };
  
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <CodeBlock title="case_studies.js" language="javascript" className="inline-block max-w-md">
              <pre><code>
                <span className="text-blue-400">import</span> <span className="text-yellow-300">{'{'} CaseStudies {'}'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'@zynix/showcase'</span>;
              </code></pre>
            </CodeBlock>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-zynix-blue">&lt;</span>CaseStudies <span className="text-green-500">client</span><span className="text-blue-500">=</span><span className="text-purple-500">"success"</span><span className="text-zynix-blue">/&gt;</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore how we've helped businesses across Tanzania transform their operations and achieve remarkable results.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {caseStudies.map((study) => (
            <motion.div 
              key={study.id}
              className="overflow-hidden shadow-lg transition-all hover:shadow-xl group"
              variants={itemVariants}
            >
              <CodeBlock
                language="javascript" 
                title={`${study.id.replace(/-/g, '_')}.js`}
              >
                <div className="h-56 overflow-y-auto text-xs">
                  <pre className="font-mono">
                    <code>
                      {generateCaseStudyCode(study)}
                    </code>
                  </pre>
                </div>
                
                <div className="p-4 border-t border-gray-700">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs font-medium bg-blue-900/30 text-blue-400 py-1 px-2 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-zynix-blue transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {study.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2 text-gray-400">
                      <span className="text-green-400">// Results:</span>
                    </h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="text-sm flex items-start">
                          <ChevronRight className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/portfolio#${study.id}`}>
                      view.fullCase() <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CodeBlock>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-zynix-blue hover:bg-blue-700 font-mono">
            <Link to="/portfolio">CaseStudies.viewAll()</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
