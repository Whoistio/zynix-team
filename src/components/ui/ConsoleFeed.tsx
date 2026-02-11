
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Play, Pause, XCircle } from 'lucide-react';
import { consoleLog } from '@/data/programmingData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

const ConsoleFeed = () => {
  const [logs, setLogs] = useState(consoleLog.slice(0, 5));
  const [isPaused, setIsPaused] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  // Effect to auto-scroll to the bottom when new logs are added
  useEffect(() => {
    if (scrollAreaRef.current && !isPaused) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [logs, isPaused]);
  
  // Effect to simulate adding new logs
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      const randomLog = consoleLog[Math.floor(Math.random() * consoleLog.length)];
      const now = new Date();
      const timestamp = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
      
      setLogs(current => [...current, { ...randomLog, timestamp }].slice(-20)); // Keep the last 20 logs
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isPaused]);
  
  const getLogColor = (type: string) => {
    switch (type) {
      case 'INFO': return 'text-blue-500';
      case 'ALERT': return 'text-amber-500';
      case 'OK': return 'text-green-500';
      case 'WARN': return 'text-yellow-500';
      case 'ERROR': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const clearLogs = () => {
    setLogs([]);
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
            <Terminal className="mr-2 h-5 w-5 text-zynix-blue" /> 
            System Log
            <Badge variant="outline" className="ml-3 text-xs">
              LIVE
            </Badge>
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsPaused(!isPaused)}
              className="h-8 w-8"
              title={isPaused ? "Resume" : "Pause"}
            >
              {isPaused ? <Play size={16} /> : <Pause size={16} />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={clearLogs}
              className="h-8 w-8"
              title="Clear logs"
            >
              <XCircle size={16} />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md bg-slate-950 p-4 font-mono text-sm">
            <ScrollArea className="h-80" ref={scrollAreaRef}>
              {logs.map((log, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-1"
                >
                  <span className="text-gray-500">[{log.timestamp}]</span>{' '}
                  <span className={`font-bold ${getLogColor(log.type)}`}>[{log.type}]</span>{' '}
                  <span className="text-gray-300">{log.message}</span>
                </motion.div>
              ))}
              
              {logs.length === 0 && (
                <div className="text-center text-gray-500 py-10">
                  No logs to display
                </div>
              )}
              
              {!isPaused && logs.length > 0 && (
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="h-4 w-4 rounded-full bg-green-500 absolute bottom-4 right-4"
                />
              )}
            </ScrollArea>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ConsoleFeed;
