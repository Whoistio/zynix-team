
import { motion } from 'framer-motion';
import { teamMembers } from '@/data/team';
import { Linkedin, Github, Twitter, Code, Terminal, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useState } from 'react';

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  
  // Mockup programming skills data
  const skillsData = {
    chrisnjuka: {
      languages: ["JavaScript", "TypeScript", "Python", "PHP"],
      frameworks: ["React", "Node.js", "Express", "Laravel"],
      tools: ["Git", "Docker", "AWS", "CI/CD"],
      projects: 23,
      commits: 1254,
      issues: 87
    },
    mrpassword: {
      languages: ["Python", "Bash", "C++", "Go"],
      frameworks: ["Django", "Flask", "Gin", "TensorFlow"],
      tools: ["Kali Linux", "Wireshark", "Metasploit", "Burp Suite"],
      projects: 17,
      commits: 892,
      issues: 42
    },
    iamunix: {
      languages: ["SQL", "Python", "R", "Java"],
      frameworks: ["Pandas", "NumPy", "Spring", "Hibernate"],
      tools: ["Tableau", "Power BI", "Jira", "Confluence"],
      projects: 19,
      commits: 765,
      issues: 63
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 relative overflow-hidden">
        {/* Code background effect */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 overflow-hidden pointer-events-none">
          <pre className="text-xs md:text-sm overflow-hidden" style={{ fontFamily: 'monospace' }}>
            {`
function TeamComponent() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchTeamData() {
      try {
        const response = await api.get('/team');
        setTeam(response.data);
      } catch (error) {
        console.error('Error fetching team data:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchTeamData();
  }, []);
  
  return (
    <div className="team-container">
      {loading ? <Loader /> : <TeamGrid data={team} />}
    </div>
  );
}
            `}
          </pre>
        </div>
        
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-zynix-blue to-zynix-green">
                Our Team
              </span>
            </motion.h1>
            
            <motion.div
              className="flex justify-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="bg-gray-800 text-gray-100 dark:bg-gray-700 rounded-lg px-4 py-1.5 text-sm font-mono">
                <span className="text-green-400">const</span> <span className="text-blue-400">team</span> = <span className="text-yellow-400">await</span> <span className="text-purple-400">zynix</span>.<span className="text-blue-400">getExperts</span>();
              </div>
            </motion.div>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Meet the tech experts behind Zynix's success
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Team Members */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={member.id}
                  className="team-card group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Profile Image with Terminal Effect */}
                  <div className="relative mb-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
                    {/* Terminal Header */}
                    <div className="bg-gray-800 dark:bg-gray-900 text-white p-2 flex items-center">
                      <div className="flex space-x-2 mr-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="font-mono text-xs flex-1 text-center truncate">
                        ~/zynix/team/{member.id}
                      </div>
                    </div>
                    
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-64 object-cover"
                    />
                    
                    {/* Code overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <pre className="text-gray-300 text-xs font-mono mb-4 overflow-hidden">
                        <span className="text-pink-400">{`const `}</span>
                        <span className="text-blue-400">{`${member.id} `}</span>
                        <span className="text-pink-400">{`= {`}</span>
                        <br />
                        <span className="text-green-400 ml-4">{`role: `}</span>
                        <span className="text-yellow-400">{`"${member.role}",`}</span>
                        <br />
                        <span className="text-green-400 ml-4">{`expertise: `}</span>
                        <span className="text-yellow-400">{`"${skillsData[member.id as keyof typeof skillsData].languages.join(', ')}"}`}</span>
                      </pre>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                      <p className="text-zynix-green font-medium">{member.role}</p>
                    </div>
                    
                    {/* Glow Border Overlay */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-zynix-green rounded-lg transition-colors duration-300"></div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {member.bio}
                  </p>
                  
                  {/* Tech Stack */}
                  <Card className="mb-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <Code className="h-4 w-4 text-zynix-blue mr-2" />
                        <h4 className="text-sm font-semibold">Tech Stack</h4>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {skillsData[member.id as keyof typeof skillsData].languages.map((lang) => (
                          <span key={lang} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Interactive component to show more details */}
                  <button 
                    onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                    className="w-full mb-6 px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md flex items-center justify-between font-mono text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span>
                      <Terminal className="h-4 w-4 inline mr-2" />
                      {selectedMember === member.id ? 'Hide' : 'Show'} developer details
                    </span>
                    <span className="text-zynix-green">{selectedMember === member.id ? '▲' : '▼'}</span>
                  </button>
                  
                  {/* Developer details panel */}
                  {selectedMember === member.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden"
                    >
                      <div className="bg-gray-800 text-white p-2 font-mono text-xs">
                        <Database className="h-3 w-3 inline mr-2" />
                        Developer Stats
                      </div>
                      <div className="p-3 bg-white dark:bg-gray-900">
                        <Table>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-mono text-xs py-1">Projects</TableCell>
                              <TableCell className="font-mono text-xs py-1 text-right">
                                {skillsData[member.id as keyof typeof skillsData].projects}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-xs py-1">Commits</TableCell>
                              <TableCell className="font-mono text-xs py-1 text-right">
                                {skillsData[member.id as keyof typeof skillsData].commits}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-xs py-1">Issues Resolved</TableCell>
                              <TableCell className="font-mono text-xs py-1 text-right">
                                {skillsData[member.id as keyof typeof skillsData].issues}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-xs py-1">Frameworks</TableCell>
                              <TableCell className="font-mono text-xs py-1 text-right">
                                {skillsData[member.id as keyof typeof skillsData].frameworks.join(', ')}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-xs py-1">Tools</TableCell>
                              <TableCell className="font-mono text-xs py-1 text-right">
                                {skillsData[member.id as keyof typeof skillsData].tools.join(', ')}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Social Links */}
                  <div className="flex gap-4">
                    {member.social.github && (
                      <a 
                        href={member.social.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-500 hover:text-zynix-blue transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a 
                        href={member.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-500 hover:text-zynix-blue transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a 
                        href={member.social.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-500 hover:text-zynix-blue transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Code background effect */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 overflow-hidden pointer-events-none">
          <pre className="text-xs md:text-sm overflow-hidden" style={{ fontFamily: 'monospace' }}>
            {`
class Career extends Opportunity {
  constructor(position, skills, benefits) {
    super(position);
    this.requiredSkills = skills;
    this.benefits = benefits;
    this.company = "Zynix";
  }
  
  apply(candidate) {
    if (this.isQualified(candidate)) {
      return this.sendOffer(candidate);
    }
    return this.sendFeedback(candidate);
  }
  
  isQualified(candidate) {
    return candidate.skills.some(skill => 
      this.requiredSkills.includes(skill)
    );
  }
}
            `}
          </pre>
        </div>
      
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-zynix-blue to-zynix-green">
                Join Our Team
              </span>
            </motion.h2>
            
            <motion.div 
              className="flex justify-center mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="bg-gray-800 text-gray-100 dark:bg-gray-700 rounded-lg px-4 py-1.5 text-sm font-mono">
                <span className="text-pink-400">function</span> <span className="text-blue-400">joinTeam</span>(<span className="text-orange-400">yourTalent</span>) {"{"}
                <span className="text-purple-400"> return</span> <span className="text-green-400">success</span>;
                {"}"}
              </div>
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              We're always looking for talented individuals to join our team. If you're passionate about technology and innovation, we'd love to hear from you.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {[
                {
                  title: "Collaborative Environment",
                  description: "Work with a diverse team of talented professionals in a supportive and collaborative environment.",
                  code: "team.collaborate();"
                },
                {
                  title: "Growth Opportunities",
                  description: "Continuous learning, professional development, and opportunities to grow your career.",
                  code: "you.skills.upgrade();"
                },
                {
                  title: "Meaningful Impact",
                  description: "Contribute to projects that make a real difference for businesses across Tanzania and East Africa.",
                  code: "impact.create();"
                }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:border-zynix-green transition-colors">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                  <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded font-mono text-sm">
                    <span className="text-blue-600 dark:text-blue-400">{item.code}</span>
                  </div>
                </div>
              ))}
            </motion.div>
            
            <motion.p 
              className="mt-10 text-zynix-blue font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Send your CV to <a href="mailto:cnjuka99@gmail.com" className="underline">cnjuka99@gmail.com</a>
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
