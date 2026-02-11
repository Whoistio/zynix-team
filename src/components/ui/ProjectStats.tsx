
import { motion } from 'framer-motion';
import { BarChart, PieChart, Server, Gauge, Users, CheckCircle2, HardDrive } from 'lucide-react';
import { projectStats } from '@/data/programmingData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart as ReChart, Pie, Cell, ResponsiveContainer, BarChart as ReBarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const StatCard = ({ title, value, icon, color }: { title: string; value: string | number; icon: React.ReactNode; color: string }) => (
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold" style={{ color }}>{value}</div>
        <div className={`p-2 rounded-full`} style={{ backgroundColor: `${color}20` }}>
          {icon}
        </div>
      </div>
    </CardContent>
  </Card>
);

const ProjectStats = () => {
  const pieData = [
    { name: 'React', value: projectStats.technologies.react, color: '#61DAFB' },
    { name: 'Python', value: projectStats.technologies.python, color: '#3776AB' },
    { name: 'PHP', value: projectStats.technologies.php, color: '#777BB4' },
    { name: 'Other', value: projectStats.technologies.other, color: '#8F8F8F' },
  ];

  const deploymentData = [
    { name: 'Cloud', value: projectStats.deployments.cloud },
    { name: 'On-Premise', value: projectStats.deployments.onPremise },
  ];

  const barData = [
    { name: 'Q1', projects: 8, clients: 5 },
    { name: 'Q2', projects: 12, clients: 7 },
    { name: 'Q3', projects: 9, clients: 4 },
    { name: 'Q4', projects: 8, clients: 6 },
  ];

  const animationConfig = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div {...animationConfig} transition={{ delay: 0.1, duration: 0.5 }}>
          <StatCard 
            title="Total Projects" 
            value={projectStats.totalProjects} 
            icon={<Server size={24} className="text-zynix-blue" />} 
            color="#1D4ED8" 
          />
        </motion.div>
        <motion.div {...animationConfig} transition={{ delay: 0.2, duration: 0.5 }}>
          <StatCard 
            title="Active Clients" 
            value={projectStats.activeClients} 
            icon={<Users size={24} className="text-zynix-green" />} 
            color="#22FF88" 
          />
        </motion.div>
        <motion.div {...animationConfig} transition={{ delay: 0.3, duration: 0.5 }}>
          <StatCard 
            title="Tickets Resolved" 
            value={projectStats.ticketsResolved} 
            icon={<CheckCircle2 size={24} className="text-purple-500" />} 
            color="#8B5CF6" 
          />
        </motion.div>
        <motion.div {...animationConfig} transition={{ delay: 0.4, duration: 0.5 }}>
          <StatCard 
            title="Ongoing Systems" 
            value={projectStats.ongoingSystems} 
            icon={<HardDrive size={24} className="text-amber-500" />} 
            color="#F59E0B" 
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div {...animationConfig} transition={{ delay: 0.5, duration: 0.5 }}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <BarChart size={18} className="mr-2" />
                Quarterly Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <ReBarChart data={barData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="projects" name="Projects" fill="#1D4ED8" />
                    <Bar dataKey="clients" name="Clients" fill="#22FF88" />
                  </ReBarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div {...animationConfig} transition={{ delay: 0.6, duration: 0.5 }}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <PieChart size={18} className="mr-2" />
                  Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        innerRadius={40}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div {...animationConfig} transition={{ delay: 0.7, duration: 0.5 }}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Gauge size={18} className="mr-2" />
                  Deployment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={deploymentData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        innerRadius={0}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        <Cell fill="#1D4ED8" />
                        <Cell fill="#64748B" />
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;
