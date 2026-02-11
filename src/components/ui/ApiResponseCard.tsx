
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Copy, CheckCheck } from 'lucide-react';
import { mockApiResponse } from '@/data/programmingData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ApiResponseCard = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(mockApiResponse, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border border-gray-200 dark:border-gray-800">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg flex items-center">
            <Code className="mr-2 h-5 w-5 text-zynix-blue" /> 
            API Response
            <Badge variant="outline" className="ml-3 text-xs">
              JSON
            </Badge>
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            className="h-8 w-8"
          >
            {copied ? <CheckCheck size={16} /> : <Copy size={16} />}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="rounded-md bg-slate-950 p-4 overflow-auto max-h-96 font-mono text-sm">
            <pre className="text-green-400">
              <span className="text-blue-400">{"{"}</span>
              <br />
              {"  "}<span className="text-yellow-400">"status"</span>: <span className="text-green-400">"success"</span>,
              <br />
              {"  "}<span className="text-yellow-400">"tool"</span>: <span className="text-green-400">"Zynix AI Writer"</span>,
              <br />
              {"  "}<span className="text-yellow-400">"response_time"</span>: <span className="text-green-400">"153ms"</span>,
              <br />
              {"  "}<span className="text-yellow-400">"credits_used"</span>: <span className="text-purple-400">3</span>,
              <br />
              {"  "}<span className="text-yellow-400">"ai_analysis"</span>: <span className="text-blue-400">{"{"}</span>
              <br />
              {"    "}<span className="text-yellow-400">"sentiment"</span>: <span className="text-green-400">"positive"</span>,
              <br />
              {"    "}<span className="text-yellow-400">"keywords"</span>: <span className="text-blue-400">{"["}</span>
              <span className="text-green-400">"technology"</span>, <span className="text-green-400">"innovation"</span>, <span className="text-green-400">"security"</span>
              <span className="text-blue-400">{"]"}</span>,
              <br />
              {"    "}<span className="text-yellow-400">"readability_score"</span>: <span className="text-purple-400">92</span>
              <br />
              {"  "}<span className="text-blue-400">{"}"}</span>,
              <br />
              {"  "}<span className="text-yellow-400">"usage_quota"</span>: <span className="text-blue-400">{"{"}</span>
              <br />
              {"    "}<span className="text-yellow-400">"remaining"</span>: <span className="text-purple-400">547</span>,
              <br />
              {"    "}<span className="text-yellow-400">"total"</span>: <span className="text-purple-400">1000</span>
              <br />
              {"  "}<span className="text-blue-400">{"}"}</span>
              <br />
              <span className="text-blue-400">{"}"}</span>
            </pre>
          </div>
          
          {/* Animated cursor */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-5 bg-green-500 absolute bottom-8 right-8"
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ApiResponseCard;
