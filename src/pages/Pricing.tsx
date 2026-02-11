
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pricingPlans } from '@/data/pricing';
import { Button } from '@/components/ui/button';
import { Check, AlertCircle, Code, Database } from 'lucide-react';
import { TerminalIcon } from 'lucide-react'; // Renamed Terminal to TerminalIcon to avoid conflict
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import CodeBlock from '@/components/ui/CodeBlock';
import Terminal, { TerminalLine } from '@/components/ui/Terminal';

const PricingPage = () => {
  const [filter, setFilter] = useState('All');
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    details: '',
  });
  const [loading, setLoading] = useState(false);
  
  const categoryFilters = ['All', 'Web', 'E-commerce', 'AI', 'Systems', 'Security'];
  
  const filteredPlans = filter === 'All' 
    ? pricingPlans 
    : pricingPlans.filter(plan => plan.category === filter);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      toast({
        title: 'Quote Request Submitted!',
        description: 'We will get back to you shortly with a custom quote.',
        duration: 3000,
      });
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        details: '',
      });
    }, 1500);
  };

  // Generate pricing JSON for code block display
  const generatePricingJson = (plan: typeof pricingPlans[0]) => {
    return `{
  "name": "${plan.name}",
  "price": ${typeof plan.price === 'number' ? plan.price : `"${plan.price}"`},
  "category": "${plan.category}",
  "features": [
    ${plan.features.map(feature => `"${feature}"`).join(',\n    ')}
  ],
  "popular": ${plan.popular ? 'true' : 'false'}
}`;
  };
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute text-xs text-green-500 font-mono"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `fadeInOut ${2 + Math.random() * 5}s infinite ${Math.random() * 5}s`
              }}
            >
              {Math.random() > 0.5 ? '{price: function() {...}}' : 'const pricing = new Pricing()'}
            </div>
          ))}
        </div>
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-block mb-4">
              <Terminal title="pricing.sh" className="w-auto inline-block">
                <TerminalLine>./calculate_price --service=web --scope=enterprise</TerminalLine>
                <TerminalLine prefix=">" delay={300}>Running pricing algorithm...</TerminalLine>
                <TerminalLine prefix=">" delay={600}>Transparent pricing structure loaded</TerminalLine>
              </Terminal>
            </div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Pricing
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center bg-gray-800 rounded-lg px-4 py-2 text-gray-300 font-mono text-sm mb-8"
            >
              <Code className="h-4 w-4 mr-2" /> 
              <span className="text-green-400">const</span> 
              <span className="text-white mx-2">pricing</span> 
              <span className="text-blue-400">=</span> 
              <span className="text-purple-400 mx-2">transparent</span> 
              <span className="text-blue-400">&amp;&amp;</span>
              <span className="text-purple-400 ml-2">affordable</span>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Pricing */}
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
                {category}
              </motion.button>
            ))}
          </div>
          
          {/* Pricing Cards */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPlans.map((plan) => (
                <motion.div
                  key={plan.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className={`${plan.popular ? 'border-2 border-green-500' : ''}`}
                >
                  <CodeBlock 
                    language="json" 
                    title={`pricing/${plan.id}.json`}
                    className="h-full"
                  >
                    <div className="mb-6">
                      <pre>{generatePricingJson(plan)}</pre>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="text-sm text-gray-400 mb-4 font-sans">
                        <span className="text-green-500">// Execute pricing plan:</span>
                      </div>
                      <Button 
                        className="w-full bg-zynix-blue hover:bg-blue-700 font-mono"
                        onClick={() => {
                          document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                          setFormData(prev => ({ ...prev, service: plan.name }));
                        }}
                      >
                        requestQuote()
                      </Button>
                    </div>
                  </CodeBlock>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      
      {/* Quote Request Form */}
      <section id="quote-form" className="py-20 bg-gray-900">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Request a Custom Quote
              </motion.h2>
              <motion.div 
                className="inline-block mb-8 font-mono bg-gray-800 px-4 py-2 rounded-lg text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="text-blue-400">function</span> 
                <span className="text-yellow-300"> requestCustomQuote</span>
                <span className="text-white">(</span>
                <span className="text-green-300">project</span>
                <span className="text-white">)</span> 
                <span className="text-white"> &#123; ... &#125;</span>
              </motion.div>
            </div>
            
            <motion.div
              className="bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700">
                <div className="flex items-center">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm text-gray-400 font-mono">quote_request.js</span>
                </div>
                <span className="text-xs px-2 py-1 rounded-md bg-gray-700 text-gray-300 font-mono">POST /api/quote</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300 font-mono text-xs mb-2 block">
                      <span className="text-purple-400">const</span> <span className="text-yellow-300">fullName</span> <span className="text-blue-400">=</span>
                    </Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="your.name"
                      required
                      className="bg-gray-700 border-gray-600 text-white font-mono"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300 font-mono text-xs mb-2 block">
                      <span className="text-purple-400">const</span> <span className="text-yellow-300">emailAddress</span> <span className="text-blue-400">=</span>
                    </Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="bg-gray-700 border-gray-600 text-white font-mono"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-gray-300 font-mono text-xs mb-2 block">
                      <span className="text-purple-400">const</span> <span className="text-yellow-300">phoneNumber</span> <span className="text-blue-400">=</span>
                    </Label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+255.674.517.279"
                      className="bg-gray-700 border-gray-600 text-white font-mono"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service" className="text-gray-300 font-mono text-xs mb-2 block">
                      <span className="text-purple-400">const</span> <span className="text-yellow-300">service</span> <span className="text-blue-400">=</span>
                    </Label>
                    <Select value={formData.service} onValueChange={handleServiceChange}>
                      <SelectTrigger id="service" className="bg-gray-700 border-gray-600 text-white font-mono">
                        <SelectValue placeholder="Select.service()" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        {pricingPlans.map(plan => (
                          <SelectItem key={plan.id} value={plan.name}>
                            {plan.name}
                          </SelectItem>
                        ))}
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="budget" className="text-gray-300 font-mono text-xs mb-2 block">
                    <span className="text-purple-400">const</span> <span className="text-yellow-300">budget</span> <span className="text-blue-400">=</span>
                  </Label>
                  <Input 
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="budget.estimate(TSh)"
                    className="bg-gray-700 border-gray-600 text-white font-mono"
                  />
                </div>
                
                <div>
                  <Label htmlFor="details" className="text-gray-300 font-mono text-xs mb-2 block">
                    <span className="text-purple-400">const</span> <span className="text-yellow-300">projectDetails</span> <span className="text-blue-400">=</span>
                  </Label>
                  <Textarea 
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    placeholder="/* Describe your project requirements here */"
                    rows={5}
                    className="bg-gray-700 border-gray-600 text-white font-mono"
                  />
                </div>
                
                <div className="flex items-start p-4 bg-gray-900 border border-blue-900/40 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-200 font-mono">
                    <span className="text-blue-400">// Note:</span> All quotes are non-binding and subject to a detailed assessment of your specific requirements.
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 font-mono"
                  disabled={loading}
                >
                  {loading ? 'processing...' : 'submit.request()'}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
