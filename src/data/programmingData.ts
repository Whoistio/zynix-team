
// Mock programming data for the Zynix project

export const services = [
  { name: "AI Website Scanner", users: 1200, status: "Live", lang: "Python, React", progress: 95 },
  { name: "Zynix School System", users: 800, status: "Beta", lang: "Laravel, Vue", progress: 80 },
  { name: "Cybersecurity Assessment", users: 620, status: "Live", lang: "Python, Go", progress: 100 },
  { name: "E-commerce Platform", users: 1500, status: "Live", lang: "React, Node.js", progress: 98 },
  { name: "Cloud Migration Tool", users: 350, status: "Beta", lang: "AWS, Docker", progress: 75 },
];

export const projectStats = {
  totalProjects: 37,
  activeClients: 18,
  ticketsResolved: 312,
  ongoingSystems: 6,
  deployments: {
    cloud: 65,
    onPremise: 35
  },
  technologies: {
    react: 40,
    python: 25,
    php: 20,
    other: 15
  }
};

export const mockApiResponse = {
  status: "success",
  tool: "Zynix AI Writer",
  response_time: "153ms",
  credits_used: 3,
  ai_analysis: {
    sentiment: "positive",
    keywords: ["technology", "innovation", "security"],
    readability_score: 92
  },
  usage_quota: {
    remaining: 547,
    total: 1000
  }
};

export const consoleLog = [
  { type: "INFO", message: "Vulnerability scan completed in 6.3s", timestamp: "10:45:23" },
  { type: "ALERT", message: "Port 22 open on 192.168.1.14", timestamp: "10:45:24" },
  { type: "OK", message: "AI report generated", timestamp: "10:45:29" },
  { type: "INFO", message: "Running penetration test suite...", timestamp: "10:45:35" },
  { type: "INFO", message: "Database integrity check passed", timestamp: "10:45:42" },
  { type: "WARN", message: "SSL certificate expires in 30 days", timestamp: "10:46:03" },
  { type: "ERROR", message: "Failed to reach external API endpoint", timestamp: "10:46:15" },
  { type: "INFO", message: "Applying fallback connection method", timestamp: "10:46:18" },
  { type: "OK", message: "Connection established via secondary route", timestamp: "10:46:22" },
  { type: "INFO", message: "User authentication successful", timestamp: "10:47:01" }
];

export const programmingFeatures = [
  { feature: "API Integration", status: "Done", language: "PHP", priority: "High", completion: 100 },
  { feature: "AI Prompt Builder", status: "In Progress", language: "React", priority: "Medium", completion: 65 },
  { feature: "Database Optimization", status: "Done", language: "SQL", priority: "Critical", completion: 100 },
  { feature: "Cloud Deployment Pipeline", status: "In Progress", language: "Docker", priority: "Medium", completion: 45 },
  { feature: "ML Training Module", status: "Pending", language: "Python", priority: "Low", completion: 0 },
  { feature: "Authentication System", status: "Done", language: "Node.js", priority: "High", completion: 100 },
  { feature: "Dashboard Analytics", status: "In Progress", language: "React", priority: "Medium", completion: 80 },
  { feature: "Payment Gateway", status: "Done", language: "PHP", priority: "Critical", completion: 100 },
  { feature: "Real-time Notifications", status: "Pending", language: "WebSockets", priority: "Low", completion: 0 },
  { feature: "Mobile Responsiveness", status: "Done", language: "CSS", priority: "High", completion: 100 },
];
