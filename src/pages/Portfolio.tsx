
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioItems } from '@/data/portfolio';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Check, Shield, Network, Database, Cpu, Cloud, ShoppingCart, Book, Code, Terminal } from 'lucide-react';
import CodeBlock from '@/components/ui/CodeBlock';

const PortfolioPage = () => {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  
  const categoryFilters = ['All', 'Static', 'Dynamic', 'E-commerce', 'AI', 'Security', 'Systems', 'SaaS'];
  
  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category.includes(filter));
    
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'AI': return <Cpu className="h-12 w-12 text-zynix-blue" />;
      case 'Security': return <Shield className="h-12 w-12 text-zynix-blue" />;
      case 'Systems': return <Database className="h-12 w-12 text-zynix-blue" />;
      case 'SaaS': return <Cloud className="h-12 w-12 text-zynix-blue" />;
      case 'E-commerce': return <ShoppingCart className="h-12 w-12 text-zynix-blue" />;
      case 'Dynamic': return <Network className="h-12 w-12 text-zynix-blue" />;
      case 'Static': return <Code className="h-12 w-12 text-zynix-blue" />;
      default: return <Book className="h-12 w-12 text-zynix-blue" />;
    }
  };
  
  const getItemIcon = (item: typeof portfolioItems[0] | null) => {
    // Add null check
    if (!item) return null;
    
    // For NIDS, show a special icon
    if (item.id === 'nids1') {
      return (
        <div className="flex items-center justify-center p-6 bg-gradient-to-r from-zynix-blue to-zynix-green rounded-lg">
          <Network className="h-20 w-20 text-white" />
        </div>
      );
    }
    
    // For other items, show the first category icon
    return (
      <div className="flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        {item.category && item.category.length > 0 ? getCategoryIcon(item.category[0]) : <Book className="h-12 w-12 text-zynix-blue" />}
      </div>
    );
  };

  // Function to generate project code representation
  const generateProjectCode = (item: typeof portfolioItems[0]) => {
    if (item.id === 'nids1') {
      return `
// Network Intrusion Detection System
class ZynixGuard {
  constructor() {
    this.detectionEngine = new ML.NeuralNetwork();
    this.threatDatabase = new Database('threats');
    this.alertSystem = new RealTime.Alerting();
  }

  async initialize() {
    await this.detectionEngine.loadModel('model-v3.2');
    console.log('Threat detection engine initialized');
    return this;
  }

  detectThreats(packetStream) {
    return this.detectionEngine
      .analyze(packetStream)
      .filter(threat => threat.confidence > 0.85);
  }

  blockAttack(threat) {
    this.alertSystem.trigger(threat);
    return this.firewallApi.blockSource(threat.source);
  }
}

// Initialize system
const nids = new ZynixGuard()
  .initialize()
  .then(() => console.log('System online'));`;
    }
    
    return `
// ${item.title}
class ${item.id.charAt(0).toUpperCase() + item.id.slice(1)} {
  constructor() {
    this.name = "${item.title}";
    this.technologies = ${JSON.stringify(item.technologies)};
    this.features = ${JSON.stringify(item.features)};
  }

  initialize() {
    console.log(\`Initializing ${item.title}...\`);
    // Setup core components
    ${item.technologies.map(tech => `this.setup${tech.replace(/[^a-zA-Z0-9]/g, '')}();`).join('\n    ')}
    return this;
  }

  ${item.features.map((feature, i) => `
  feature${i + 1}() {
    // ${feature}
    console.log("Implemented: ${feature}");
  }`).join('\n')}
}

// Initialize project
const project = new ${item.id.charAt(0).toUpperCase() + item.id.slice(1)}().initialize();`;
  };
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute text-xs text-green-500 font-mono"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `fadeInOut ${2 + Math.random() * 5}s infinite ${Math.random() * 5}s`
              }}
            >
              {Math.random() > 0.5 ? '</div>' : '<project>'}
            </div>
          ))}
        </div>
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div 
              className="inline-block mb-4 px-4 py-1 border border-gray-600 rounded-full"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <code className="text-green-400 font-mono text-sm">import &#123; Portfolio &#125; from '@zynix/projects'</code>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 via-blue-500 to-zynix-blue bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {'<Portfolio />'}
            </motion.h1>
            <motion.div 
              className="text-xl text-gray-300 mb-8 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-blue-400">const</span> <span className="text-white">projects</span> <span className="text-blue-400">=</span> <span className="text-green-400">await</span> <span className="text-yellow-400">Portfolio</span><span className="text-white">.getAll()</span>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Portfolio */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categoryFilters.map(category => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-mono transition-colors ${
                  filter === category 
                    ? 'bg-zynix-blue text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === 'All' ? '*' : category}
              </motion.button>
            ))}
          </div>
          
          {/* Portfolio Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="portfolio-item group cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <CodeBlock 
                    title={`${item.id}.js`} 
                    language={item.id === 'nids1' ? 'typescript' : 'javascript'}
                  >
                    <div className="h-64 bg-gray-950 overflow-hidden relative">
                      {/* Featured or spotlight effect for NIDS */}
                      {item.id === 'nids1' && (
                        <div className="absolute top-2 right-2 bg-zynix-green text-black px-3 py-1 rounded-full text-xs font-bold z-10">
                          Featured
                        </div>
                      )}
                      
                      {/* Project code preview */}
                      <div className="text-left text-xs text-green-400 overflow-hidden h-full">
                        <pre>{item.id === 'nids1' ? 
                          <code className="text-left">
                            <span className="text-blue-400">import</span> <span className="text-yellow-300">{'{'} ML, Database, RealTime, firewallApi {'}'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'@zynix/security'</span>;
                            {'\n\n'}
                            <span className="text-purple-400">// Advanced threat detection system</span>
                            {'\n'}
                            <span className="text-blue-400">class</span> <span className="text-yellow-300">ZynixGuard</span> {'{'}
                            {'\n  '}
                            <span className="text-yellow-300">constructor</span>() {'{'}
                            {'\n    '}
                            <span className="text-white">...</span>
                            {'\n  '}
                            {'}'}
                            {'\n\n  '}
                            <span className="text-green-400">async</span> <span className="text-yellow-300">detectThreats</span>(<span className="text-orange-300">network</span>) {'{'}
                            {'\n    '}
                            <span className="text-white">...</span>
                            {'\n  '}
                            {'}'}
                            {'\n'}
                            {'}'}
                          </code> : 
                          <code className="text-left">
                            <span className="text-blue-400">import</span> <span className="text-yellow-300">{'{'} Project {'}'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'@zynix/core'</span>;
                            {'\n\n'}
                            <span className="text-purple-400">// {item.description}</span>
                            {'\n'}
                            <span className="text-blue-400">class</span> <span className="text-yellow-300">{item.id.charAt(0).toUpperCase() + item.id.slice(1)}</span> <span className="text-blue-400">extends</span> <span className="text-yellow-300">Project</span> {'{'}
                            {'\n  '}
                            <span className="text-yellow-300">constructor</span>() {'{'}
                            {'\n    '}
                            <span className="text-white">...</span>
                            {'\n  '}
                            {'}'}
                            {'\n\n  '}
                            <span className="text-yellow-300">initialize</span>() {'{'}
                            {'\n    '}
                            <span className="text-white">...</span>
                            {'\n  '}
                            {'}'}
                            {'\n'}
                            {'}'}
                          </code>
                        }</pre>
                      </div>
                    </div>
                  </CodeBlock>
                  
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {item.category.map(cat => (
                        <Badge key={cat} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300">
                          {cat}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Special glow effect for NIDS */}
                  {item.id === 'nids1' && (
                    <div className="absolute inset-0 -z-10 bg-zynix-blue/20 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      
      {/* Project Details Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {selectedItem?.id === 'nids1' ? (
                <span className="gradient-text">{selectedItem?.title}</span>
              ) : (
                selectedItem?.title
              )}
            </DialogTitle>
          </DialogHeader>
          
          <div className="mt-4">
            {/* Code representation of the project */}
            <CodeBlock
              language={selectedItem?.id === 'nids1' ? 'typescript' : 'javascript'}
              title={selectedItem ? `${selectedItem.id}.js` : ''}
              className="mb-6"
            >
              <pre className="text-xs">
                <code>
                  {selectedItem && generateProjectCode(selectedItem)}
                </code>
              </pre>
            </CodeBlock>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {selectedItem?.description}
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {selectedItem?.technologies.map(tech => (
                  <Badge key={tech} variant="secondary" className={selectedItem?.id === 'nids1' ? "bg-zynix-blue/10 text-zynix-blue" : ""}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Key Features</h3>
              <ul className="space-y-2">
                {selectedItem?.features.map(feature => (
                  <li key={feature} className="flex items-start">
                    <Check className={`h-5 w-5 mr-2 flex-shrink-0 mt-0.5 ${
                      selectedItem?.id === 'nids1' ? "text-zynix-green" : "text-zynix-blue"
                    }`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {selectedItem?.link && (
              <div className="mt-4">
                <a 
                  href={selectedItem.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zynix-blue hover:text-blue-700 underline font-mono"
                >
                  git clone {selectedItem.link}
                </a>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PortfolioPage;
