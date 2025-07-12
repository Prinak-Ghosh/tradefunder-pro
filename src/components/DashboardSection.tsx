import { motion } from "framer-motion";
import { CheckCircle, BarChart3, Users, DollarSign, Shield, Zap } from "lucide-react";

const DashboardSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time performance tracking with detailed trade analysis"
    },
    {
      icon: Users,
      title: "Follower Management",
      description: "Build and engage with your trading community"
    },
    {
      icon: DollarSign,
      title: "Revenue Tracking",
      description: "Monitor earnings from subscriptions and strategy sharing"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Professional tools for position sizing and risk control"
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Real-time alerts for trades and market opportunities"
    }
  ];

  return (
    <section className="w-full py-20 px-6 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Professional Trading Dashboard
          </motion.h2>
          <motion.p 
            className="text-xl text-[#a1a1aa] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Track performance, analyze trades, and share insights with our comprehensive trading platform designed for serious traders
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Preview */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] shadow-2xl overflow-hidden border border-[#262626] rounded-3xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#0a0a0a] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Portfolio Performance</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[#a1a1aa]">Total Return</span>
                      <span className="text-[#4a9489] font-semibold">+24.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#a1a1aa]">Monthly P&L</span>
                      <span className="text-[#4a9489] font-semibold">$12,450</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#a1a1aa]">Win Rate</span>
                      <span className="text-white font-semibold">68%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#0a0a0a] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Active Positions</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[#a1a1aa]">AAPL</span>
                      <span className="text-[#4a9489] font-semibold">+$2,340</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#a1a1aa]">TSLA</span>
                      <span className="text-red-400 font-semibold">-$890</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#a1a1aa]">NVDA</span>
                      <span className="text-[#4a9489] font-semibold">+$1,560</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#0a0a0a] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Followers</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[#a1a1aa]">Total Followers</span>
                      <span className="text-white font-semibold">2,847</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#a1a1aa]">Subscribers</span>
                      <span className="text-[#4a9489] font-semibold">156</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#a1a1aa]">Monthly Revenue</span>
                      <span className="text-[#4a9489] font-semibold">$3,240</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Built for Serious Traders</h3>
              <p className="text-[#a1a1aa] mb-6">
                Professional-grade tools and features designed to help you succeed in the markets while building your trading community.
              </p>
            </div>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-[#4a9489] rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-[#a1a1aa]">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
