
export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  category: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "static",
    name: "Static Website",
    price: "300,000",
    description: "Simple, informational website for small businesses or personal use.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form",
      "Domain & hosting setup",
      "Basic SEO",
      "3 months support"
    ],
    category: "Web"
  },
  {
    id: "business",
    name: "Business Website",
    price: "600,000",
    description: "Professional website with more features and customization.",
    features: [
      "Up to 10 pages",
      "Responsive design",
      "Contact form",
      "Domain & hosting setup",
      "Advanced SEO",
      "Content management system",
      "6 months support"
    ],
    popular: true,
    category: "Web"
  },
  {
    id: "dynamic",
    name: "Dynamic Website",
    price: "1,200,000",
    description: "Interactive website with database integration and user accounts.",
    features: [
      "Unlimited pages",
      "User authentication",
      "Database integration",
      "Admin dashboard",
      "Custom features",
      "Advanced SEO",
      "12 months support"
    ],
    category: "Web"
  },
  {
    id: "ecommerce",
    name: "E-commerce Website",
    price: "3,000,000",
    description: "Full-featured online store with product management and payment processing.",
    features: [
      "Product catalog",
      "Shopping cart",
      "Payment gateway integration",
      "Inventory management",
      "Order tracking",
      "Customer accounts",
      "12 months support"
    ],
    category: "E-commerce"
  },
  {
    id: "ai",
    name: "AI Tools Development",
    price: "Custom Quote",
    description: "Custom AI solutions tailored to your specific business needs.",
    features: [
      "Requirements analysis",
      "Custom AI model development",
      "Integration with existing systems",
      "User interface development",
      "Testing and deployment",
      "Training and documentation"
    ],
    category: "AI"
  },
  {
    id: "school",
    name: "School System",
    price: "2,500,000",
    description: "Comprehensive school management system with student, staff, and administrative features.",
    features: [
      "Student records",
      "Attendance tracking",
      "Grade management",
      "Timetable system",
      "Fee management",
      "Parent portal",
      "12 months support"
    ],
    category: "Systems"
  },
  {
    id: "inventory",
    name: "Inventory System",
    price: "1,500,000",
    description: "Inventory management system for retail businesses.",
    features: [
      "Product management",
      "Stock tracking",
      "Supplier management",
      "Sales tracking",
      "Reports and analytics",
      "User roles and permissions",
      "12 months support"
    ],
    category: "Systems"
  },
  {
    id: "security",
    name: "Vulnerability Assessment",
    price: "400,000",
    description: "Comprehensive security assessment of your systems and networks.",
    features: [
      "Network scanning",
      "Vulnerability identification",
      "Risk assessment",
      "Security recommendations",
      "Follow-up consultation",
      "Basic security training"
    ],
    category: "Security"
  }
];
