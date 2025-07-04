
import { motion } from "framer-motion";

const DashboardSection = () => {
  return (
    <section className="w-full py-12 px-6 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Professional Trading Dashboard
          </motion.h2>
          <motion.p 
            className="text-xl text-[#a1a1aa] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Track performance, analyze trades, and share insights with our comprehensive trading platform
          </motion.p>
        </div>
        
        <div className="relative">
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
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
