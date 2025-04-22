import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Success
    setIsSubscribed(true);
    setError('');
    // In a real application, you would send this to your backend
  };

  // Animation variants for social icons
  const socialIconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.15, rotate: 5 }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-white">Trendy</span>
              <span className="text-coral-400">Cart</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Revolutionizing e-commerce with data-driven insights and exceptional customer experiences.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                aria-label="Facebook"
                variants={socialIconVariants}
                initial="initial"
                whileHover="hover"
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="Twitter"
                variants={socialIconVariants}
                initial="initial"
                whileHover="hover"
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="Instagram"
                variants={socialIconVariants}
                initial="initial"
                whileHover="hover"
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-coral-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="YouTube"
                variants={socialIconVariants}
                initial="initial"
                whileHover="hover"
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-red-400 hover:bg-red-600 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </motion.a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Electronics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Clothing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accessories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home & Living</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Beauty & Health</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sports & Outdoors</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to receive updates on new products and special promotions.</p>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      className="bg-gray-800 w-full py-2 pl-10 pr-20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-500"
                    />
                    <button
                      type="submit"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-1 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                  {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-900/30 text-green-400 p-3 rounded-md"
              >
                Thank you! You've been subscribed to our newsletter.
              </motion.div>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TrendyCart. All rights reserved.
          </p>
          <div className="space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;