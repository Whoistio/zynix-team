
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

// Tech stack categories and tools
const techStacks = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" }
    ]
  },
  {
    category: "Database",
    technologies: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
    ]
  },
  {
    category: "AI/ML",
    technologies: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Scikit-Learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" }
    ]
  }
];

const TechStack = () => {
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };
  
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl mb-4">
            <Code className="h-6 w-6 text-zynix-blue" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our team works with cutting-edge technologies to deliver modern, efficient, and scalable solutions for our clients.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techStacks.map((stack, index) => (
            <motion.div 
              key={stack.category} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              variants={childVariants}
            >
              <div className="p-6 bg-gradient-to-r from-zynix-blue/10 to-zynix-green/10">
                <h3 className="text-xl font-bold mb-1">{stack.category}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Core technologies we master in {stack.category.toLowerCase()}
                </p>
              </div>
              
              <div className="p-6 grid grid-cols-5 gap-4">
                {stack.technologies.map((tech) => (
                  <div 
                    key={tech.name} 
                    className="flex flex-col items-center justify-center group"
                    title={tech.name}
                  >
                    <div className="w-10 h-10 mb-2 flex items-center justify-center overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-700 p-1.5 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <span className="text-xs opacity-0 group-hover:opacity-100 absolute mt-16 bg-black text-white px-2 py-1 rounded transition-opacity">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
