import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Leaf className="text-brand-green h-6 w-6" />
            <span className="text-xl font-bold">
              <span className="text-brand-brown">Quick</span>
              <span className="text-brand-green">Snacks</span>
            </span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#products" className="text-gray-600 hover:text-brand-green transition-colors">Products</a>
            <a href="#features" className="text-gray-600 hover:text-brand-green transition-colors">Features</a>
            <a href="#sustainability" className="text-gray-600 hover:text-brand-green transition-colors">Sustainability</a>
            <a href="#contact" className="text-gray-600 hover:text-brand-green transition-colors">Contact</a>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-green text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors"
          >
            Shop Now
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;