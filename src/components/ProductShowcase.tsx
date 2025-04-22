import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Original Blend",
    description: "Classic granola with organic oats and super seeds",
    image: "/mockup-front.jpg",
    price: "$4.99"
  },
  {
    id: 2,
    name: "Berry Blast",
    description: "Antioxidant-rich blend with mixed berries",
    image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
    price: "$5.49"
  },
  {
    id: 3,
    name: "Nutty Delight",
    description: "Premium nuts and honey blend",
    image: "https://images.pexels.com/photos/1367243/pexels-photo-1367243.jpeg",
    price: "$5.99"
  },
  {
    id: 4,
    name: "Tropical Paradise",
    description: "Exotic blend with coconut and mango",
    image: "https://images.pexels.com/photos/1028598/pexels-photo-1028598.jpeg",
    price: "$5.49"
  }
];

const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-brand-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of sustainable, nutrient-rich granola bars made with love for you and the planet.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-brand-green font-bold text-lg">{product.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-brand-green text-white p-2 rounded-full hover:bg-opacity-90 transition-colors"
                  >
                    <ShoppingCart size={20} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;