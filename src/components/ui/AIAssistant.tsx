
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Bot, Terminal, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import ZynixLogo from '@/components/ZynixLogo';
import CodeBlock from '@/components/ui/CodeBlock';

// AI assistant data model
type AssistantData = {
  name: string;
  greetings: string[];
  responses: Record<string, string>;
};

// Message structure for the chat
type Message = {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  isCode?: boolean;
};

// ZynixAI knowledge base
const assistantData: AssistantData = {
  name: "ZynixAI",
  greetings: [
    "/**\n * @function initialize\n * @description ZynixAI system boot sequence\n * @returns {Promise<AIAssistant>}\n */\n\nInitializing ZynixAI v3.2.1...\nAI Core loaded successfully.\nHello! How can I assist with your tech needs today?",
    "/**\n * @class ZynixAI\n * @extends AIAssistant\n */\n\nZynixAI instance ready.\nWelcome to Zynix Technologies!\nHow may I help you with our services?",
    "/**\n * @event onConnect\n */\n\nEstablishing secure connection...\nConnection established.\nZynixAI online and ready to provide information on our cutting-edge solutions."
  ],
  responses: {
    services: "/**\n * @function getServices\n * @returns {Service[]}\n */\n\nZynix Technologies offers:\n- Web Development (React, Angular, Vue)\n- AI Solutions (ML models, NLP, computer vision)\n- E-commerce Systems (full-stack solutions)\n- School Management Systems (cloud-based)\n- Cybersecurity Services (testing, implementation)\n- ICT Training (workshops, courses)",
    contact: "/**\n * @function getContactInfo\n * @returns {ContactDetails}\n */\n\nContact channels:\n- Form: [contact form on website]\n- Email: cnjuka99@gmail.com\n- Phone/WhatsApp: +255 674 517 279",
    pricing: "/**\n * @function getPricingModel\n * @returns {PricingStructure}\n */\n\nPricing is custom-based on project requirements.\nWe offer competitive rates with flexible payment options.\nWould you like to schedule a free consultation?",
    about: "/**\n * @function getCompanyInfo\n * @returns {CompanyProfile}\n */\n\nZynix Technologies:\n- Founded: 2016\n- Location: Tanzania\n- Team: Experienced tech professionals\n- Mission: Transform businesses through innovative technology",
    ai: "/**\n * @function getAISolutions\n * @returns {AIService[]}\n */\n\nOur AI solutions include:\n- Custom chatbots and virtual assistants\n- Data analysis and pattern recognition tools\n- Predictive modeling systems\n- Process automation solutions\n- Enhanced customer experience platforms",
    website: "/**\n * @function getWebDevelopment\n * @returns {WebService[]}\n */\n\nWeb development services:\n- Responsive modern websites\n- E-commerce platforms\n- Content management systems\n- Progressive web applications\n- Enterprise web solutions",
    mobile: "/**\n * @function getMobileApps\n * @returns {MobileService[]}\n */\n\nMobile development:\n- Native iOS and Android apps\n- Cross-platform solutions\n- Mobile-first experiences\n- Offline-capable applications\n- Integration with existing systems",
    security: "/**\n * @function getSecurityServices\n * @returns {SecurityService[]}\n */\n\nCybersecurity services:\n- Vulnerability assessments\n- Penetration testing\n- Security audits\n- Implementation of security measures\n- Employee security training",
    default: "/**\n * @function processQuery\n * @param {string} query\n * @returns {Response}\n */\n\nThank you for your message.\nI'd be happy to help with more information.\nCould you provide additional details about your needs?"
  }
};

// Enhanced response matching function
const getResponse = (message: string) => {
  const lowerMessage = message.toLowerCase();
  
  // Mapping patterns to response categories
  const patternMap: Record<string, RegExp[]> = {
    services: [/service|offer|provide|what.+do/i],
    contact: [/contact|reach|call|email|phone/i],
    pricing: [/price|cost|payment|how much/i],
    about: [/about|company|who|background/i],
    ai: [/ai|artificial intelligence|machine learning|chatbot/i],
    website: [/website|web|web development|site/i],
    mobile: [/mobile|app|android|ios/i],
    security: [/security|cyber|protect|hack/i]
  };
  
  // Find matching pattern
  for (const [key, patterns] of Object.entries(patternMap)) {
    if (patterns.some(pattern => pattern.test(lowerMessage))) {
      return assistantData.responses[key];
    }
  }
  
  return assistantData.responses.default;
};

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Show chat bubble after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Initial greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const randomGreeting = assistantData.greetings[Math.floor(Math.random() * assistantData.greetings.length)];
      setMessages([
        {
          id: `assistant-${Date.now()}`,
          text: randomGreeting,
          sender: 'assistant',
          timestamp: new Date(),
          isCode: true
        }
      ]);
    }
  }, [isOpen, messages.length]);
  
  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  // Quick response suggestions
  const suggestions = [
    "What services do you offer?",
    "How can I contact you?",
    "Tell me about your AI solutions",
    "What are your pricing options?"
  ];

  const handleSuggestionClick = (suggestion: string) => {
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: suggestion,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate AI thinking
    setIsTyping(true);
    
    // Add AI response after delay
    setTimeout(() => {
      const response = getResponse(suggestion);
      const aiMessage: Message = {
        id: `assistant-${Date.now()}`,
        text: response,
        sender: 'assistant',
        timestamp: new Date(),
        isCode: true
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: message,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    
    // Simulate AI thinking
    setIsTyping(true);
    
    // Add AI response after delay
    setTimeout(() => {
      const response = getResponse(userMessage.text);
      const aiMessage: Message = {
        id: `assistant-${Date.now()}`,
        text: response,
        sender: 'assistant',
        timestamp: new Date(),
        isCode: true
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };
  
  const handleClose = () => {
    setIsOpen(false);
    toast({
      title: "// Chat session terminated",
      description: "Connection closed. Restart anytime.",
      duration: 2000,
    });
  };
  
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  
  // Animation variants
  const chatBubbleVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
    exit: { opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.3 } }
  };
  
  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } }
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          variants={chatBubbleVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed bottom-20 right-6 z-50"
        >
          {isMinimized ? (
            <motion.button
              onClick={toggleMinimize}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-zynix-blue to-zynix-green text-white shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Terminal className="w-6 h-6" />
            </motion.button>
          ) : (
            <motion.div 
              className="bg-gray-950 rounded-2xl shadow-2xl w-80 md:w-96 overflow-hidden border border-zynix-blue"
              layoutId="assistant-container"
            >
              {/* Terminal Header */}
              <div className="bg-gray-900 text-white p-3 flex items-center justify-between border-b border-gray-800">
                <div className="flex items-center">
                  <div className="flex space-x-2 mr-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex items-center">
                    <Code className="h-4 w-4 text-zynix-green mr-2" />
                    <span className="text-sm font-mono text-zynix-green">
                      zynix@ai:~$ ./assistant
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <button 
                    onClick={toggleMinimize}
                    className="p-1 hover:bg-gray-800 rounded"
                    aria-label="Minimize chat"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button 
                    onClick={handleClose}
                    className="p-1 hover:bg-gray-800 rounded"
                    aria-label="Close chat"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Chat body */}
              <div className="h-80 overflow-y-auto p-4 bg-gray-950">
                {messages.map((msg) => (
                  <motion.div 
                    key={msg.id}
                    className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {msg.sender === 'assistant' && msg.isCode ? (
                      <div className="max-w-full w-full">
                        <CodeBlock 
                          language="typescript" 
                          title="response.ts"
                          className="text-xs"
                        >
                          <pre>
                            <code>{msg.text}</code>
                          </pre>
                        </CodeBlock>
                      </div>
                    ) : (
                      <div 
                        className={`max-w-3/4 rounded-2xl px-4 py-2 ${
                          msg.sender === 'user' 
                            ? 'bg-zynix-blue text-white rounded-tr-none'
                            : 'bg-gray-800 text-gray-200 rounded-tl-none border border-gray-700'
                        }`}
                      >
                        {msg.text}
                      </div>
                    )}
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div 
                    className="flex justify-start mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="font-mono text-xs bg-gray-800 text-zynix-green p-3 border border-gray-700 rounded">
                      <div className="flex">
                        <span className="mr-2">$</span>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-zynix-green rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-zynix-green rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
                          <div className="w-2 h-2 bg-zynix-green rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Quick suggestions */}
              {messages.length < 3 && (
                <div className="px-4 py-2 bg-gray-900 border-t border-gray-800">
                  <p className="text-xs text-gray-500 font-mono mb-2">// Available commands:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-xs bg-gray-800 hover:bg-zynix-blue hover:text-white text-gray-300 px-2 py-1 rounded-md border border-gray-700 transition-colors font-mono"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Input area */}
              <form onSubmit={handleSubmit} className="p-3 border-t border-gray-800 bg-gray-900 flex items-center">
                <div className="flex items-center w-full bg-gray-800 rounded px-2">
                  <span className="text-zynix-green font-mono mr-2">$</span>
                  <Input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your query..."
                    className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-gray-300 font-mono"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="icon"
                  disabled={!message.trim()}
                  className="ml-2 bg-zynix-blue hover:bg-zynix-green"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </motion.div>
          )}
        </motion.div>
      )}
      
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-zynix-blue to-zynix-green text-white shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(34, 255, 136, 0.5)" }}
          whileTap={{ scale: 0.9 }}
        >
          <Terminal className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default AIAssistant;
