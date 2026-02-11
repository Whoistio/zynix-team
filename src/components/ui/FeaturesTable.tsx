
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { programmingFeatures } from '@/data/programmingData';
import { Filter, SortAsc, SortDesc } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { FilterIcon } from 'lucide-react';

type Feature = typeof programmingFeatures[0];
type SortKey = keyof Feature;

const FeaturesTable = () => {
  const [features, setFeatures] = useState([...programmingFeatures]);
  const [sortConfig, setSortConfig] = useState<{ key: SortKey | null; direction: 'asc' | 'desc' }>({
    key: null,
    direction: 'asc',
  });
  const [activeFilters, setActiveFilters] = useState<{
    status: string[];
    language: string[];
  }>({
    status: [],
    language: [],
  });

  const uniqueStatuses = Array.from(new Set(programmingFeatures.map(f => f.status)));
  const uniqueLanguages = Array.from(new Set(programmingFeatures.map(f => f.language)));

  const handleSort = (key: SortKey) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    
    setSortConfig({ key, direction });
    
    const sortedFeatures = [...features].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    
    setFeatures(sortedFeatures);
  };

  const toggleFilter = (type: 'status' | 'language', value: string) => {
    setActiveFilters(prev => {
      const currentFilters = [...prev[type]];
      const index = currentFilters.indexOf(value);
      
      if (index > -1) {
        currentFilters.splice(index, 1);
      } else {
        currentFilters.push(value);
      }
      
      const newFilters = { ...prev, [type]: currentFilters };
      
      // Apply filters to the data
      let filteredData = [...programmingFeatures];
      
      if (newFilters.status.length > 0) {
        filteredData = filteredData.filter(f => newFilters.status.includes(f.status));
      }
      
      if (newFilters.language.length > 0) {
        filteredData = filteredData.filter(f => newFilters.language.includes(f.language));
      }
      
      // Maintain current sort if any
      if (sortConfig.key) {
        filteredData.sort((a, b) => {
          if (a[sortConfig.key!] < b[sortConfig.key!]) 
            return sortConfig.direction === 'asc' ? -1 : 1;
          if (a[sortConfig.key!] > b[sortConfig.key!]) 
            return sortConfig.direction === 'asc' ? 1 : -1;
          return 0;
        });
      }
      
      setFeatures(filteredData);
      return newFilters;
    });
  };

  const clearFilters = () => {
    setActiveFilters({ status: [], language: [] });
    setFeatures([...programmingFeatures]);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Done':
        return <Badge className="bg-green-500 hover:bg-green-600">Done</Badge>;
      case 'In Progress':
        return <Badge className="bg-amber-500 hover:bg-amber-600">In Progress</Badge>;
      case 'Pending':
        return <Badge className="bg-slate-500 hover:bg-slate-600">Pending</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getSortIcon = (key: SortKey) => {
    if (sortConfig.key !== key) return <SortAsc size={14} className="ml-1 opacity-50" />;
    return sortConfig.direction === 'asc' 
      ? <SortAsc size={14} className="ml-1" /> 
      : <SortDesc size={14} className="ml-1" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border border-gray-200 dark:border-gray-800">
        <CardHeader className="pb-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0">
            <CardTitle className="text-lg flex items-center">
              <FilterIcon className="mr-2 h-5 w-5 text-zynix-blue" /> 
              Programming Features
            </CardTitle>
            
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex flex-wrap gap-1">
                <div className="text-xs text-muted-foreground mr-1 mt-1">Status:</div>
                {uniqueStatuses.map(status => (
                  <Button
                    key={status}
                    variant={activeFilters.status.includes(status) ? "default" : "outline"}
                    size="sm"
                    className="h-6 text-xs"
                    onClick={() => toggleFilter('status', status)}
                  >
                    {status}
                  </Button>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-1">
                <div className="text-xs text-muted-foreground mr-1 mt-1">Language:</div>
                {uniqueLanguages.map(lang => (
                  <Button
                    key={lang}
                    variant={activeFilters.language.includes(lang) ? "default" : "outline"}
                    size="sm"
                    className="h-6 text-xs"
                    onClick={() => toggleFilter('language', lang)}
                  >
                    {lang}
                  </Button>
                ))}
              </div>
              
              {(activeFilters.status.length > 0 || activeFilters.language.length > 0) && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 text-xs"
                  onClick={clearFilters}
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>List of features in development</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="cursor-pointer w-[250px]" onClick={() => handleSort('feature')}>
                  <div className="flex items-center">
                    Feature {getSortIcon('feature')}
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort('status')}>
                  <div className="flex items-center">
                    Status {getSortIcon('status')}
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort('language')}>
                  <div className="flex items-center">
                    Language {getSortIcon('language')}
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort('priority')}>
                  <div className="flex items-center">
                    Priority {getSortIcon('priority')}
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-right" onClick={() => handleSort('completion')}>
                  <div className="flex items-center justify-end">
                    Completion {getSortIcon('completion')}
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature) => (
                <TableRow key={feature.feature}>
                  <TableCell className="font-medium">{feature.feature}</TableCell>
                  <TableCell>{getStatusBadge(feature.status)}</TableCell>
                  <TableCell>
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs">
                      {feature.language}
                    </code>
                  </TableCell>
                  <TableCell>
                    <span className={
                      feature.priority === 'High' ? 'text-amber-500' : 
                      feature.priority === 'Medium' ? 'text-blue-500' : 
                      feature.priority === 'Critical' ? 'text-red-500' : 
                      'text-gray-500'
                    }>
                      {feature.priority}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Progress value={feature.completion} className="w-20 h-2" />
                      <span className="text-xs tabular-nums">{feature.completion}%</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeaturesTable;
