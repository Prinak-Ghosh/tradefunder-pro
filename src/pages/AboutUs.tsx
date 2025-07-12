
import { Button } from "@/components/ui/button";
import { Users, Heart, Target, Award } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#000000] w-full">
      <Navigation />
      
      {/* Hero Section */}
      <section className="w-full py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <motion.h1 
              className="text-4xl md:text-[64px] font-bold text-white leading-[72px] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About TradeFunder
            </motion.h1>
            <motion.p 
              className="text-[#717179] text-xl font-medium leading-[26px] mb-12 max-w-[600px] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We're revolutionizing how traders and funders connect, creating a transparent and efficient marketplace for trading ideas and capital.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-20 bg-black border-t border-[#252525]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                className="text-4xl font-bold text-white leading-[44px] mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our Story
              </motion.h2>
              <motion.p 
                className="text-[#717179] text-lg font-medium leading-[23.4px] mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Founded in 2024, TradeFunder emerged from a simple observation: talented traders with great ideas often lack the capital to execute them, while investors with capital struggle to find reliable trading opportunities.
              </motion.p>
              <motion.p 
                className="text-[#717179] text-lg font-medium leading-[23.4px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                We created a platform that bridges this gap, connecting skilled traders with funders in a transparent, secure, and mutually beneficial ecosystem.
              </motion.p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Team collaboration" 
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-20 bg-black border-t border-[#252525]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-white leading-[44px] mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Values
            </motion.h2>
            <motion.p 
              className="text-[#717179] text-lg font-medium leading-[23.4px] max-w-[500px] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The principles that guide everything we do at TradeFunder
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-[#EB894C] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Transparency</h3>
              <p className="text-[#717179] text-sm leading-[18px]">
                Complete visibility into trading performance, risk metrics, and fund allocation for all parties involved.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-[#797BEC] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Security</h3>
              <p className="text-[#717179] text-sm leading-[18px]">
                Advanced security measures and escrow systems to protect both traders and funders throughout the process.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-[#4a9489] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart size={24} className="text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Performance</h3>
              <p className="text-[#717179] text-sm leading-[18px]">
                Data-driven approach to match the best traders with the right funding opportunities for optimal returns.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-[#EB894C] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Community</h3>
              <p className="text-[#717179] text-sm leading-[18px]">
                Building a collaborative ecosystem where traders and funders can learn, grow, and succeed together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 bg-black border-t border-[#252525]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-white leading-[44px] mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Meet Our Team
            </motion.h2>
            <motion.p 
              className="text-[#717179] text-lg font-medium leading-[23.4px] max-w-[500px] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The passionate experts behind TradeFunder's innovative trading platform
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300" 
                alt="CEO" 
                className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
              />
              <h3 className="text-white text-xl font-bold mb-2">Alex Chen</h3>
              <p className="text-[#EB894C] text-sm font-medium mb-3">CEO & Co-Founder</p>
              <p className="text-[#717179] text-sm leading-[18px]">
                Former quantitative trader with 10+ years of experience in algorithmic trading and risk management.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b5c5?auto=format&fit=crop&q=80&w=300&h=300" 
                alt="CTO" 
                className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
              />
              <h3 className="text-white text-xl font-bold mb-2">Sarah Rodriguez</h3>
              <p className="text-[#797BEC] text-sm font-medium mb-3">CTO & Co-Founder</p>
              <p className="text-[#717179] text-sm leading-[18px]">
                Engineering leader with expertise in fintech platforms, payment systems, and real-time trading infrastructure.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300" 
                alt="Head of Product" 
                className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
              />
              <h3 className="text-white text-xl font-bold mb-2">Marcus Johnson</h3>
              <p className="text-[#4a9489] text-sm font-medium mb-3">Head of Product</p>
              <p className="text-[#717179] text-sm leading-[18px]">
                Product strategist focused on creating intuitive trading tools and building strong user communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-black border-t border-[#252525]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl font-bold text-white leading-[44px] mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-[#717179] text-lg font-medium leading-[23.4px] mb-8 max-w-[500px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of traders and funders already using TradeFunder to connect, collaborate, and succeed together.
          </motion.p>
          <div className="flex gap-4 justify-center">
            <Button variant="default" className="bg-white text-[#0D0D0D] hover:bg-gray-100 px-6 py-2 rounded-lg">
              Try for free
            </Button>
            <Button variant="secondary" className="bg-[#171717] text-white hover:bg-[#252525] px-6 py-2 rounded-lg shadow-sm">
              Book a demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
