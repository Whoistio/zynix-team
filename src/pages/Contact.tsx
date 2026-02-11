import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-xs text-green-500 font-mono"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `fadeInOut ${2 + Math.random() * 5}s infinite ${Math.random() * 5}s`
              }}
            >
              {Math.random() > 0.5 ? 'contact@zynix.io' : '+255 674 517 279'}
            </div>
          ))}
        </div>
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 via-blue-500 to-zynix-blue bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              We're here to help. Reach out and let's discuss your project.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Send us a message</h2>
              <form>
                <div className="mb-4">
                  <Input type="text" placeholder="Your Name" className="border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-zynix-blue focus:border-zynix-blue" />
                </div>
                <div className="mb-4">
                  <Input type="email" placeholder="Your Email" className="border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-zynix-blue focus:border-zynix-blue" />
                </div>
                <div className="mb-6">
                  <Textarea placeholder="Your Message" className="border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-zynix-blue focus:border-zynix-blue" />
                </div>
                <Button className="bg-zynix-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Contact Information</h2>
              <div className="mb-4 flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
                <a href="mailto:cnjuka99@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-zynix-blue">cnjuka99@gmail.com</a>
              </div>
              <div className="mb-4 flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
                <a href="tel:+255674517279" className="text-gray-700 dark:text-gray-300 hover:text-zynix-blue">+255 674 517 279</a>
              </div>
              <div className="mb-6 flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  Dar es Salaam, Tanzania
                </span>
              </div>

              {/* Google Maps */}
              <div className="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  width="100%"
                  height="300"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Dar es Salaam&amp;coords=-6.8024949,39.2851844&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <style>
  {`
    .gmap_canvas {
      overflow:hidden;
      background:none!important;
      height:300px;
      width:100%;
      border-radius: 0.5rem;
    }
  `}
</style>
    </div>
  );
};

export default ContactPage;
