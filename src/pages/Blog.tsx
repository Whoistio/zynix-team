
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blog';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, Search, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  
  const categoryFilters = ['All', 'AI', 'Web', 'Cybersecurity', 'E-commerce', 'Education'];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = filter === 'All' || post.category === filter;
    const matchesSearch = search === '' || 
      post.title.toLowerCase().includes(search.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Blog
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              The latest news, insights, and updates from the tech world
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Search and Filter */}
      <section className="py-12">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center mb-12">
              <div className="relative w-full md:w-1/2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                <Input 
                  type="text" 
                  placeholder="Search articles..."
                  className="pl-10"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap justify-center gap-2 w-full md:w-1/2">
                {categoryFilters.map(category => (
                  <motion.button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      filter === category 
                        ? 'bg-zynix-blue text-white' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
            
            {/* Blog Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <motion.article
                      key={post.id}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="blog-card"
                    >
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200">
                            {post.category}
                          </Badge>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                        </div>
                        <Link to={`/blog/${post.id}`} className="block group">
                          <h3 className="text-xl font-bold mb-2 group-hover:text-zynix-blue transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center font-medium text-zynix-blue">
                            Read More <ArrowRight className="ml-1 h-4 w-4" />
                          </div>
                        </Link>
                      </div>
                    </motion.article>
                  ))
                ) : (
                  <div className="col-span-full flex flex-col items-center py-12 text-center">
                    <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-full">
                      <Search className="h-8 w-8 text-gray-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                    <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-zynix-blue text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Subscribe to Our Newsletter
            </motion.h2>
            <motion.p 
              className="text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Stay updated with the latest tech news, trends, and insights delivered directly to your inbox.
            </motion.p>
            <motion.form 
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white text-gray-900"
                required
              />
              <button type="submit" className="bg-white text-zynix-blue px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
