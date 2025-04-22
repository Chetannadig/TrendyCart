import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Recycle, Cookie, Trees as Tree, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductShowcase from './components/ProductShowcase';
import Newsletter from './components/Newsletter';

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="block text-brand-cream">QuickSnacks</span>
                <span className="block">Energy That Loves You Back!</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Discover our sustainable, plant-powered granola bars that fuel your body and protect our planet.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-green text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Shop Now
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/mockup-front.jpg"
                alt="GreenFuel Granola eco-packaging front view"
                className="w-full max-w-md mx-auto animate-float"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-brand-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Plant-Powered</h3>
              <p className="text-gray-600">Made with organic ingredients for sustainable energy.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-brand-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Plastic-Free Wrapper</h3>
              <p className="text-gray-600">Eco-friendly packaging for a cleaner planet.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-brand-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cookie className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Crunchy & Nutrient-Dense</h3>
              <p className="text-gray-600">Perfect blend of taste and nutrition.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-20 bg-brand-green text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Tree className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Sustainability Pledge</h2>
            <p className="text-xl mb-8">For every bar sold, we plant one tree</p>
            <div className="text-4xl md:text-6xl font-bold mb-4">
              <span>10,000+</span>
              <span className="text-brand-cream"> Trees Planted</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Newsletter />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-green">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="text-brand-green" />
                  <span>123 Eco Street, Green City, 12345</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-brand-green" />
                  <span>+1 (234) 567-8900</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-brand-green" />
                  <span>hello@greenfuelgranola.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-green text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">About Us</h4>
              <p className="text-white/80">
                QuickSnacks GreenFuel Granola is committed to providing healthy, sustainable snacks while protecting our planet.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#products" className="hover:text-brand-cream transition-colors">Products</a></li>
                <li><a href="#features" className="hover:text-brand-cream transition-colors">Features</a></li>
                <li><a href="#sustainability" className="hover:text-brand-cream transition-colors">Sustainability</a></li>
                <li><a href="#contact" className="hover:text-brand-cream transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Twitter size={20} />
                </motion.a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/80">
              © {new Date().getFullYear()} QuickSnacks GreenFuel Granola. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;