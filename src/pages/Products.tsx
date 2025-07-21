import { motion } from 'framer-motion';
import { ProductCard } from '@/components/ProductCard';
import { SubscriptionStatus } from '@/components/SubscriptionStatus';
import { products } from '@/stripe-config';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Products = () => {
  return (
    <div className="min-h-screen bg-[#000000] w-full">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <motion.h1 
            className="text-3xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Products & Services
          </motion.h1>
          <p className="text-[#717179]">Choose the perfect plan for your trading journey</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Products */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.priceId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Subscription Status Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SubscriptionStatus />
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;