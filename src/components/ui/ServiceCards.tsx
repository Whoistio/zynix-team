
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronUp, ChevronDown, Users } from 'lucide-react';
import { services } from '@/data/programmingData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

const ServiceCards = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (name: string) => {
    setExpandedCard(expandedCard === name ? null : name);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <motion.div
          key={service.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Card className="border border-gray-200 dark:border-gray-800 hover:border-zynix-green dark:hover:border-zynix-green transition-all duration-300 overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    {service.name}
                    {service.status === "Live" ? (
                      <Badge className="bg-green-500 hover:bg-green-600">Live</Badge>
                    ) : (
                      <Badge className="bg-amber-500 hover:bg-amber-600">Beta</Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="text-sm mt-1 opacity-80 font-mono">
                    {service.lang}
                  </CardDescription>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => toggleCard(service.name)}
                >
                  {expandedCard === service.name ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-2">
                <Users size={16} className="text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-500 dark:text-gray-400">{service.users.toLocaleString()} users</span>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progress</span>
                  <span>{service.progress}%</span>
                </div>
                <Progress value={service.progress} className="h-2" />
              </div>
              
              {expandedCard === service.name && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: 'auto', opacity: 1 }} 
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-4 pt-4 border-t border-dashed border-gray-200 dark:border-gray-700"
                >
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Uptime</span>
                      <span>99.98%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Resources</span>
                      <span>64 GB / 128 GB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Last Updated</span>
                      <span>2h ago</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full mt-4 text-zynix-blue">
                    View Details <ArrowUpRight size={14} className="ml-1" />
                  </Button>
                </motion.div>
              )}
            </CardContent>
            
            {/* Code lines background effect */}
            <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none overflow-hidden">
              {Array(10).fill(0).map((_, i) => (
                <div key={i} className="whitespace-nowrap font-mono text-xs">
                  {Array(20).fill(0).map((_, j) => (
                    <span key={j} className="select-none">
                      {Math.round(Math.random()) === 1 ? '1' : '0'}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceCards;
