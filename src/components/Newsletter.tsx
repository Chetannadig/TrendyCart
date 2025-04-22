import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate API call
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-xl mx-auto text-center">
      <h3 className="text-2xl font-bold text-brand-green mb-4">
        Join Our Green Community
      </h3>
      <p className="text-gray-600 mb-6">
        Subscribe to receive updates, eco-tips, and exclusive offers.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-brand-green"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-brand-green text-white p-2 rounded-full"
          >
            <Send size={20} />
          </motion.button>
        </div>
        
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-600"
          >
            Thanks for subscribing!
          </motion.p>
        )}
        
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-600"
          >
            Please enter a valid email.
          </motion.p>
        )}
      </form>
    </div>
  );
};

export default Newsletter;