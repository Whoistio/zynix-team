
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Modern, responsive web applications built with the latest technologies. Our web solutions are fast, secure, and tailored to your specific business needs.",
    icon: "code",
    category: "Web"
  },
  {
    id: "ai-ml-model",
    title: "AI/ML Model Development",
    description: "Custom machine learning solutions with advanced neural networks for data analysis, pattern recognition, and intelligent decision-making systems.",
    icon: "cpu",
    category: "AI"
  },
  {
    id: "saas-production",
    title: "SaaS Production",
    description: "End-to-end Software-as-a-Service development with scalable architecture, subscription management, and multi-tenant capabilities for global reach.",
    icon: "cloud",
    category: "Web"
  },
  {
    id: "ecommerce",
    title: "E-commerce Solutions",
    description: "Feature-rich online stores with secure payment processing, inventory management, and analytics. Scale your business with our e-commerce solutions.",
    icon: "shopping-cart",
    category: "Web"
  },
  {
    id: "school-sys",
    title: "School Management Systems",
    description: "Comprehensive school management platforms for student records, attendance, grades, timetables, and communication with parents.",
    icon: "book",
    category: "Systems"
  },
  {
    id: "inventory",
    title: "Inventory Management",
    description: "Track inventory in real-time, manage stock levels, and generate reports. Optimize your inventory processes with our solutions.",
    icon: "database",
    category: "Systems"
  },
  {
    id: "security",
    title: "Vulnerability Assessment",
    description: "Identify security weaknesses in your systems and networks. Our security experts help protect your data from cyber threats.",
    icon: "shield",
    category: "Security"
  },
  {
    id: "dynamic",
    title: "Dynamic Systems",
    description: "Custom, data-driven applications that scale with your business. From CRM to ERP, we build systems that meet your unique requirements.",
    icon: "settings",
    category: "Systems"
  },
  {
    id: "ict-training",
    title: "ICT Training & Consulting",
    description: "Expert-led training and consulting services to help your team leverage technology effectively in your business operations.",
    icon: "users",
    category: "Web"
  }
];
