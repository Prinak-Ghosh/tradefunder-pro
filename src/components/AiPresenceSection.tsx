import { Button } from "@/components/ui/button";
import { Globe, Bell, TrendingUp, Zap, BarChart3, MousePointer } from "lucide-react";
import { motion } from "framer-motion";

const AiPresenceSection = () => {
  return <div className="w-full min-h-screen relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section removed as requested */}

        {/* First Content Section - Performance Analytics */}
        <div className="border-t border-l border-r border-[#252525] mb-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 relative">
              <img 
                alt="Trading Performance Dashboard" 
                className="w-full h-[403px] object-cover rounded-lg" 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <h4 className="text-white text-2xl font-bold mb-2">Performance Analytics</h4>
                  <p className="text-gray-300">Real-time trading metrics</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="mb-8">
                <motion.h3 
                  className="text-white text-4xl font-bold leading-[44px] mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  Trading Performance Analytics
                </motion.h3>
                <motion.p 
                  className="text-[#717179] text-lg font-medium leading-[23.4px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Get deep insights into your trading performance and how the community perceives your strategies across different market conditions.
                </motion.p>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Zap size={20} className="text-[#EB894C] flex-shrink-0" />
                  <span className="text-white text-base font-medium">Performance scoring</span>
                </div>
                <div className="flex items-center gap-4">
                  <Zap size={20} className="text-[#EB894C] flex-shrink-0" />
                  <span className="text-white text-base font-medium">Strategy analysis</span>
                </div>
                <div className="flex items-center gap-4">
                  <Zap size={20} className="text-[#EB894C] flex-shrink-0" />
                  <span className="text-white text-base font-medium">Market trend monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Content Section - Live Trading Mentions */}
        <div className="border-t border-l border-r border-[#252525] mb-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 pt-6 lg:pt-0 px-4">
              <div className="mb-8">
                <motion.h3 
                  className="text-white text-4xl font-bold leading-[44px] mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  Live Trading Mentions
                </motion.h3>
                <motion.p 
                  className="text-[#717179] text-lg font-medium leading-[23.4px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Monitor your trading mentions across social platforms in real-time and receive instant alerts when your strategies are discussed in the community.
                </motion.p>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Globe size={20} className="text-[#797BEC] flex-shrink-0" />
                  <span className="text-white text-base font-medium">Real-time mention monitoring</span>
                </div>
                <div className="flex items-center gap-4">
                  <Bell size={20} className="text-[#797BEC] flex-shrink-0" />
                  <span className="text-white text-base font-medium">Instant strategy alerts</span>
                </div>
                <div className="flex items-center gap-4">
                  <TrendingUp size={20} className="text-[#797BEC] flex-shrink-0" />
                  <span className="text-white text-base font-medium">Mention frequency tracking</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 relative">
              <img 
                alt="Trading Analytics Dashboard" 
                className="w-full h-[403px] object-cover rounded-lg" 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <h4 className="text-white text-2xl font-bold mb-2">Mention Tracking</h4>
                  <p className="text-gray-300">Community sentiment analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Content Section - Traffic Analytics */}
        <div className="border-t border-l border-r border-[#252525]">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 relative">
              <img 
                alt="Traffic Analytics Dashboard" 
                className="w-full h-[403px] object-cover rounded-lg" 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <h4 className="text-white text-2xl font-bold mb-2">Traffic Intelligence</h4>
                  <p className="text-gray-300">Follower-driven traffic analysis</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="mb-8">
                <motion.h3 
                  className="text-white text-4xl font-bold leading-[44px] mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  Follower-Driven Traffic Intelligence
                </motion.h3>
                <motion.p 
                  className="text-[#717179] text-lg font-medium leading-[23.4px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Track and analyze traffic generated from your followers and community recommendations, measuring the direct impact on your creator revenue.
                </motion.p>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <BarChart3 size={20} className="text-[#EB894C] flex-shrink-0" />
                  <span className="text-white text-base font-medium">Traffic attribution</span>
                </div>
                <div className="flex items-center gap-4">
                  <Bell size={20} className="text-[#EB894C] flex-shrink-0" />
                  <span className="text-white text-base font-medium">Conversion tracking</span>
                </div>
                <div className="flex items-center gap-4">
                  <MousePointer size={20} className="text-[#EB894C] flex-shrink-0" />
                  <span className="text-white text-base font-medium">ROI measurement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default AiPresenceSection;
