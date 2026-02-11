
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "ai-revolution",
    title: "The AI Revolution in Tanzania's Tech Scene",
    excerpt: "How artificial intelligence is transforming businesses across Tanzania and opening new opportunities for innovation.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod consectetur nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod consectetur nisi nisl euismod nisi.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    author: "Chris Njuka",
    date: "2024-05-10",
    category: "AI",
    tags: ["AI", "Machine Learning", "Business"]
  },
  {
    id: "web-security",
    title: "Essential Web Security Practices for 2024",
    excerpt: "Protect your online presence with these updated security practices every website owner should implement.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod consectetur nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod consectetur nisi nisl euismod nisi.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    author: "MrpasswordTZ",
    date: "2024-05-01",
    category: "Cybersecurity",
    tags: ["Security", "Web Development", "Best Practices"]
  },
  {
    id: "ecommerce-growth",
    title: "E-commerce Growth in East Africa: Opportunities and Challenges",
    excerpt: "An analysis of the rapidly expanding e-commerce market in East Africa and what it means for local businesses.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod consectetur nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod consectetur nisi nisl euismod nisi.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    author: "SynTz",
    date: "2024-04-20",
    category: "E-commerce",
    tags: ["E-commerce", "Business", "East Africa"]
  },
  {
    id: "school-systems",
    title: "Digital Transformation in Tanzania's Educational System",
    excerpt: "How technology is revolutionizing education management and improving student outcomes across Tanzania.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod consectetur nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod consectetur nisi nisl euismod nisi.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    author: "MrpasswordTz",
    date: "2024-04-15",
    category: "Education",
    tags: ["Education", "Technology", "Digital Transformation"]
  },
  {
    id: "web-trends",
    title: "Web Development Trends to Watch in 2024",
    excerpt: "The latest technologies and approaches shaping the future of web development.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod consectetur nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod consectetur nisi nisl euismod nisi.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    author: "MrpasswordTz",
    date: "2024-04-05",
    category: "Web",
    tags: ["Web Development", "Trends", "Technology"]
  },
  {
    id: "cybersecurity-tanzania",
    title: "The State of Cybersecurity in Tanzania",
    excerpt: "An overview of current cybersecurity challenges and solutions in Tanzania's growing digital landscape.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod consectetur nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod consectetur nisi nisl euismod nisi.",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    author: "IamUnix",
    date: "2024-03-25",
    category: "Cybersecurity",
    tags: ["Cybersecurity", "Tanzania", "Digital Safety"]
  }
];
