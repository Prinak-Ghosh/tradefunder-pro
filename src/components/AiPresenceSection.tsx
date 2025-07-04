
import { Button } from "@/components/ui/button";
import { Globe, Bell, TrendingUp, Zap, BarChart3, MousePointer } from "lucide-react";
import { motion } from "framer-motion";

const AiPresenceSection = () => {
  return <div className="w-full min-h-screen relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-[44px] font-bold text-white leading-[52px] mb-8 max-w-[520px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Understand Your AI Presence Fully
          </motion.h2>
          <motion.p 
            className="text-[#717179] text-xl font-medium leading-[26px] mb-12 max-w-[500px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The tools designed to give you complete oversight of your brand's performance and perception
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

        {/* First Content Section - Sentiment Analysis */}
        <div className="border-t border-l border-r border-[#252525] mb-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 relative">
              <img alt="Sentiment Analysis Dashboard" className="w-full h-[403px] object-cover " src="/lovable-uploads/d7f17d89-beef-45d8-9a70-5875feaa7be2.jpg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img alt="Sentiment Breakdown" className="max-w-[80%] max-h-[80%] object-contain" src="/lovable-uploads/cefc339e-1b57-499b-be6b-fc6405d707a3.png" />
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
                  Brand Perception Analytics
                </motion.h3>
                <motion.p 
                  className="text-[#717179] text-lg font-medium leading-[23.4px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Get deep insights into how AI systems perceive and represent your brand across different contexts and queries.
                </motion.p>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Zap size={20} className="text-[#EB894C] flex-shrink-0" />
                  <span className="text-white text-base font-medium">Sentiment scoring</span>
                </div>
                <div className="flex items-center gap-4">
                  <Zap size={20} className="text-[#EB894C] flex-shrink-0" />
                  <span className="text-white text-base font-medium">Context analysis</span>
                </div>
                <div className="flex items-center gap-4">
                  <Zap size={20} className="text-[#EB894C] flex-shrink-0" />
                  <span className="text-white text-base font-medium">Trend monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Content Section - Live AI Mentions */}
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
                  Live AI Mentions
                </motion.h3>
                <motion.p 
                  className="text-[#717179] text-lg font-medium leading-[23.4px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Monitor your brand mentions across AI platforms in real-time and receive instant alerts when your brand is discussed in AI-generated content.
                </motion.p>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Globe size={20} className="text-[#797BEC] flex-shrink-0" />
                  <span className="text-white text-base font-medium">Real-time brand monitoring</span>
                </div>
                <div className="flex items-center gap-4">
                  <Bell size={20} className="text-[#797BEC] flex-shrink-0" />
                  <span className="text-white text-base font-medium">Instant mention alerts</span>
                </div>
                <div className="flex items-center gap-4">
                  <TrendingUp size={20} className="text-[#797BEC] flex-shrink-0" />
                  <span className="text-white text-base font-medium">Mention frequency tracking</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 relative">
              <img alt="AI Dashboard Analytics" className="w-full h-[403px] object-cover " src="/lovable-uploads/d7f17d89-beef-45d8-9a70-5875feaa7be2.jpg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img alt="AI Mentions Chart" className="max-w-[80%] max-h-[80%] object-contain" src="/lovable-uploads/8212efc3-9d25-4b5d-a856-32f10dc0abff.png" />
              </div>
            </div>
          </div>
        </div>

        {/* Third Content Section - Referral Analytics */}
        <div className="border-t border-l border-r border-[#252525]">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 relative">
              <img alt="Referral Analytics Dashboard" className="w-full h-[403px] object-cover " src="/lovable-uploads/d7f17d89-beef-45d8-9a70-5875feaa7be2.jpg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img alt="AI Traffic Analytics" className="max-w-[80%] max-h-[80%] object-contain" src="/lovable-uploads/7d7505ec-772e-4b00-b619-d37f22301b0c.png" />
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
                  AI-Driven Traffic Intelligence
                </motion.h3>
                <motion.p 
                  className="text-[#717179] text-lg font-medium leading-[23.4px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Track and analyze traffic generated from AI recommendations, measuring the direct impact on your business metrics.
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
