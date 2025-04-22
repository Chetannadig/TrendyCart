import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, TrendingUp, Users } from 'lucide-react';
import Button from './ui/Button';
import AnimatedCounter from './ui/AnimatedCounter';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-black/70"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Discover the Power of <span className="text-coral-400">Data-Driven</span> Shopping
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            TrendyCart combines premium shopping experiences with powerful analytics to revolutionize how you shop online.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-700">
              <ShoppingBag className="mr-2" size={20} />
              Shop Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              View Dashboard
            </Button>
          </motion.div>
          
          {/* Stats Ticker */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center">
              <div className="bg-white/10 p-3 rounded-lg mr-4">
                <ShoppingBag className="text-coral-400" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold flex items-baseline">
                  <AnimatedCounter from={0} to={50000} className="mr-1" />+
                </div>
                <p className="text-gray-300 text-sm">Products Sold</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-white/10 p-3 rounded-lg mr-4">
                <Users className="text-coral-400" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold flex items-baseline">
                  <AnimatedCounter from={0} to={10000} className="mr-1" />+
                </div>
                <p className="text-gray-300 text-sm">Happy Customers</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-white/10 p-3 rounded-lg mr-4">
                <TrendingUp className="text-coral-400" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold flex items-baseline">
                  <AnimatedCounter from={0} to={98} className="mr-1" />%
                </div>
                <p className="text-gray-300 text-sm">Growth Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated decorative elements */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </section>
  );
};

export default Hero;