import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, Search, Heart, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <motion.div 
              className="text-2xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className={`${isScrolled ? 'text-blue-600' : 'text-white'}`}>Trendy</span>
              <span className={`${isScrolled ? 'text-coral-500' : 'text-coral-400'}`}>Cart</span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600 transition-colors`}>Home</a>
            <a href="#products" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600 transition-colors`}>Products</a>
            <a href="#dashboard" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600 transition-colors`}>Dashboard</a>
            <a href="#testimonials" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600 transition-colors`}>Testimonials</a>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`p-2 rounded-full ${isScrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'} transition-colors`}>
              <Search size={20} />
            </button>
            <button className={`p-2 rounded-full ${isScrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'} transition-colors`}>
              <Heart size={20} />
            </button>
            <button className={`p-2 rounded-full ${isScrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'} transition-colors`}>
              <User size={20} />
            </button>
            <button className={`p-2 rounded-full ${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} relative`}>
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-coral-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#" className="text-gray-800 hover:text-blue-600 py-2 transition-colors">Home</a>
              <a href="#products" className="text-gray-800 hover:text-blue-600 py-2 transition-colors">Products</a>
              <a href="#dashboard" className="text-gray-800 hover:text-blue-600 py-2 transition-colors">Dashboard</a>
              <a href="#testimonials" className="text-gray-800 hover:text-blue-600 py-2 transition-colors">Testimonials</a>
              
              <div className="flex items-center space-x-4 py-2">
                <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors">
                  <Search size={20} />
                </button>
                <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors">
                  <Heart size={20} />
                </button>
                <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors">
                  <User size={20} />
                </button>
                <button className="p-2 rounded-full bg-blue-600 text-white relative">
                  <ShoppingCart size={20} />
                  <span className="absolute -top-1 -right-1 bg-coral-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;