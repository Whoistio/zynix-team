
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/data/services';
import { Code, Cpu, Cloud, ShoppingCart, Book, Database, Shield, Settings, Users } from 'lucide-react';
import CodeBlock from '@/components/ui/CodeBlock';

const ServicesPage = () => {
  const [filter, setFilter] = useState('All');
  const categoryFilters = ['All', 'Web', 'AI', 'Security', 'Systems', 'SaaS'];

  const filteredServices = filter === 'All'
    ? services
    : services.filter(service => service.category === filter);

  const iconMap: { [key: string]: React.ReactNode } = {
    code: <Code className="h-10 w-10" />,
    cpu: <Cpu className="h-10 w-10" />,
    cloud: <Cloud className="h-10 w-10" />,
    "shopping-cart": <ShoppingCart className="h-10 w-10" />,
    book: <Book className="h-10 w-10" />,
    database: <Database className="h-10 w-10" />,
    shield: <Shield className="h-10 w-10" />,
    settings: <Settings className="h-10 w-10" />,
    users: <Users className="h-10 w-10" />
  };

  return (
    <div className="pt-20">
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
              {Math.random() > 0.5 ? 'function service() {...}' : 'class Service {}'}
            </div>
          ))}
        </div>
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <CodeBlock title="services.ts" language="typescript" className="inline-block max-w-md">
                <pre><code>
<span className="text-blue-400">import</span> <span className="text-yellow-300">{'{'} Services {'}'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'@zynix/core'</span>;
                </code></pre>
              </CodeBlock>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 via-blue-500 to-zynix-blue bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-blue-400">export default</span> <span className="text-yellow-400">Services</span><span className="text-white">.getAll()</span>
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
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

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredServices.map(service => (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="group relative"
                    id={service.id}
                  >
                    <CodeBlock title={`${service.id.replace(/-/g, '_')}.ts`} language="typescript" className="h-full transition-all duration-300">
                      <div className="mb-6 text-xs">
                        <pre className="whitespace-pre-wrap">
                          <code>
<span className="text-blue-400">import</span> <span className="text-yellow-300">{'{'} IService {'}'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'@zynix/types'</span>;
{'\n\n'}
<span className="text-purple-400">/**
 * @service {service.title}
 * @category {service.category}
 */</span>
{'\n'}
<span className="text-blue-400">export class</span> <span className="text-yellow-300">{service.id.replace(/-/g, '_')}</span> <span className="text-blue-400">implements</span> <span className="text-yellow-300">IService</span> {'{'}
{'\n  '}
<span className="text-purple-400">private</span> <span className="text-white">name</span> = <span className="text-green-400">"{service.title}"</span>;
{'\n  '}
<span className="text-purple-400">private</span> <span className="text-white">category</span> = <span className="text-green-400">"{service.category}"</span>;
{'\n\n  '}
<span className="text-yellow-300">initialize</span>() {'{'}
{'\n    '}
<span className="text-white">console.log("Service initialized successfully");</span>
{'\n    '}
<span className="text-blue-400">return</span> <span className="text-white">this;</span>
{'\n  '}
{'}'}
{'\n\n  '}
<span className="text-yellow-300">getDescription</span>() {'{'}
{'\n    '}
<span className="text-blue-400">return</span> <span className="text-green-400">"{service.description}"</span>;
{'\n  '}
{'}'}
{'\n'}
{'}'}
                          </code>
                        </pre>
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/70 rounded-lg">
                        <div className="p-4 text-center">
                          <div className="p-4 rounded-full bg-zynix-blue/10 text-zynix-blue mb-6 inline-flex">
                            {iconMap[service.icon]}
                          </div>
                          <h3 className="text-2xl font-bold mb-3 text-white">
                            {service.title}
                          </h3>
                          <p className="text-gray-300 mb-4">
                            {service.description}
                          </p>
                          <div className="flex items-center justify-center">
                            <span className="text-sm px-3 py-1 bg-zynix-blue rounded-full text-white">
                              {service.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CodeBlock>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
