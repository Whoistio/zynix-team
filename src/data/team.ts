
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "chrisnjuka",
    name: "Chris Njuka",
    role: "CTO & Full-Stack Developer",
    bio: "Full-stack developer with over 3 years of experience building web applications and systems. Specializes in React, Node.js, TypeScript and database architecture. Leading technical strategy and infrastructure development at Zynix.",
    image: "https://raw.githubusercontent.com/MrpasswordTz/MrpasswordTz/refs/heads/main/images%20(2).jpeg",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "mrpassword",
    name: "MrpasswordTz",
    role: "Cybersecurity Engineer",
    bio: "Cybersecurity expert with a focus on network security, penetration testing, and vulnerability assessments. Certified in major security frameworks with expertise in Kali Linux, Python automation and security auditing.",
    image: "https://raw.githubusercontent.com/MrpasswordTz/MrpasswordTz/refs/heads/main/IMG-20250518-WA0173.jpg",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "komicode09",
    name: "KomiCode09",
    role: "System Analyst & Database Architect",
    bio: "System analyst and data specialist with extensive experience in designing and implementing complex business systems and databases. Expert in SQL optimization, data modeling, and business intelligence solutions.",
    image: "https://raw.githubusercontent.com/MrpasswordTz/MrpasswordTz/refs/heads/main/images%20(5).jpeg",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  }
];
