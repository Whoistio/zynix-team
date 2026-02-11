
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  features: string[];
  link?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "nids1",
    title: "ZynixGuard NIDS",
    description: "Next-generation Network Intrusion Detection System with advanced machine learning capabilities for real-time threat detection and prevention",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: ["AI", "Security"],
    technologies: ["TensorFlow", "Python", "Kubernetes", "React", "ElasticSearch"],
    features: [
      "Real-time network traffic analysis using deep learning models",
      "Zero-day attack detection through anomaly recognition",
      "Interactive threat visualization dashboard",
      "Automated incident response workflows",
      "Continuous model training with federated learning"
    ]
  },
  {
    id: "ecom1",
    title: "TanzaMarket",
    description: "A comprehensive e-commerce platform for small businesses in Tanzania",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: ["E-commerce", "Dynamic"],
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    features: ["User authentication", "Product management", "Shopping cart", "Payment processing", "Order tracking"]
  },
  {
    id: "ai1",
    title: "AgriSense AI",
    description: "AI-powered crop analysis and prediction tool for Tanzanian farmers",
    image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: ["AI", "Dynamic"],
    technologies: ["Python", "TensorFlow", "Flask", "React"],
    features: ["Crop disease detection", "Yield prediction", "Weather analysis", "Mobile accessibility"]
  },
  {
    id: "saas1",
    title: "ZynixFlow SaaS",
    description: "Enterprise workflow automation platform offered as a scalable SaaS solution",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: ["Web", "SaaS"],
    technologies: ["React", "Node.js", "GraphQL", "AWS", "Docker"],
    features: [
      "Multi-tenant architecture",
      "Custom workflow designer",
      "Role-based access control",
      "API integrations",
      "Advanced analytics dashboard"
    ]
  },
  {
    id: "school1",
    title: "EduTrack",
    description: "School management system for primary and secondary schools",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: ["Systems", "Dynamic"],
    technologies: ["React", "Node.js", "PostgreSQL"],
    features: ["Student records", "Attendance tracking", "Grade management", "Parent portal", "Fee management"]
  },
  {
    id: "security1",
    title: "SecureNet",
    description: "Network security assessment tool for small and medium enterprises",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: ["Security"],
    technologies: ["Python", "React", "Node.js"],
    features: ["Network scanning", "Vulnerability assessment", "Threat detection", "Security reports"]
  }
];
