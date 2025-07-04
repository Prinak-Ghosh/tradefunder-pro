
import { Button } from "@/components/ui/button";
import { Zap, Check } from "lucide-react";
import { motion } from "framer-motion";

const AlternatePricingSection = () => {
  return (
    <section className="w-full py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Simple Plans for Brand Monitoring
          </motion.h2>
          <motion.p 
            className="text-xl text-[#717179] max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose the plan that fits your brand monitoring needs.
          </motion.p>
        </div>

        {/* Pricing Cards Container - Desktop Row Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 max-w-6xl mx-auto border-t border-b border-[#252525]">
          
          {/* Solo Plan */}
          <div className="relative w-full lg:w-[375.34px] h-[624.78px] bg-[rgba(12.75,12.75,12.75,0.50)] overflow-hidden border border-[#252525] lg:border-r-0">
            {/* Header */}
            <div className="absolute left-8 top-8 w-[311.34px] h-[92.80px] overflow-hidden">
              <div className="absolute left-0 top-0 w-[86.13px] h-9 text-white text-2xl font-bold leading-9 font-inter">Solo</div>
              <div className="absolute left-0 top-[46.50px] w-[245.75px] h-[45.40px] text-[#717179] text-lg font-normal leading-[23.40px] font-inter">
                For individuals or small teams<br />beginning verification.
              </div>
            </div>
            
            {/* Price */}
            <div className="absolute left-8 top-[274.80px] w-[311.34px] h-[82.80px] overflow-hidden">
              <div className="absolute left-0 top-[-0.11px] w-[206px] h-[52px]">
                <span className="text-white text-[44px] font-bold leading-[52px] font-inter">$79</span>
                <span className="text-white text-2xl font-bold leading-[52px] font-inter">.99</span>
              </div>
              <div className="absolute left-0 top-[62px] w-[231.64px] h-[20.80px] text-[#717179] text-base font-normal leading-[20.80px] font-inter">
                Affordable for early-stage users
              </div>
            </div>
            
            {/* Features */}
            <div className="absolute left-8 top-[381.60px] w-[311.34px] h-[151.19px] overflow-hidden">
              <div className="absolute left-0 top-0 w-[311.34px] h-[20.80px] overflow-hidden">
                <div className="absolute left-0 top-[2.40px] w-4 h-4 overflow-hidden flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div className="absolute left-[26px] top-0 w-[284.29px] h-[20.80px] text-white text-base font-medium leading-[20.80px] font-inter">
                  Track income and invoices seamlessly
                </div>
              </div>
              <div className="absolute left-0 top-[32.79px] w-[311.34px] h-[20.80px] overflow-hidden">
                <div className="absolute left-0 top-[2.40px] w-4 h-4 overflow-hidden flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div className="absolute left-[26px] top-0 w-[229.79px] h-[20.80px] text-white text-base font-medium leading-[20.80px] font-inter">
                  Automated payment reminders
                </div>
              </div>
              <div className="absolute left-0 top-[65.59px] w-[311.34px] h-[20.80px] overflow-hidden">
                <div className="absolute left-0 top-[2.40px] w-4 h-4 overflow-hidden flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div className="absolute left-[26px] top-0 w-[201.76px] h-[20.80px] text-white text-base font-medium leading-[20.80px] font-inter">
                  Basic analytics and reports
                </div>
              </div>
              <div className="absolute left-0 top-[98.39px] w-[311.34px] h-[20.80px] overflow-hidden">
                <div className="absolute left-0 top-[2.40px] w-4 h-4 overflow-hidden flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div className="absolute left-[26px] top-0 w-[101.88px] h-[20.80px] text-white text-base font-medium leading-[20.80px] font-inter">
                  Email support
                </div>
              </div>
            </div>
            
            {/* Button */}
            <div className="absolute left-8 top-[556.78px] w-[311.34px] h-9">
              <Button variant="secondary" className="w-full h-full bg-[#171717] text-white hover:bg-[#262626] border-0 rounded-lg text-sm font-medium">
                Get Started
              </Button>
            </div>
          </div>

          {/* Growth Plan */}
          <div className="relative w-full lg:w-[375.34px] h-[624.78px] bg-[#0D0D0D] overflow-hidden border border-[#252525]">
            {/* Header */}
            <div className="absolute left-8 top-8 w-[311.34px] h-[92.80px] overflow-hidden">
              <div className="absolute left-0 top-0 w-[84.52px] h-9 text-white text-2xl font-bold leading-9 font-inter">Growth</div>
              <div className="absolute left-0 top-[46.50px] w-[252.28px] h-[45.40px] text-[#717179] text-lg font-normal leading-[23.40px] font-inter">
                For growing organizations and<br />collaborative team usage.
              </div>
            </div>
            
            {/* Price */}
            <div className="absolute left-8 top-[274.80px] w-[311.34px] h-[82.80px] overflow-hidden">
              <div className="absolute left-[-0.34px] top-[-0.11px] w-[216px] h-[52px]">
                <span className="text-white text-[44px] font-bold leading-[52px] font-inter">$197</span>
                <span className="text-white text-2xl font-bold leading-[52px] font-inter">.99</span>
              </div>
              <div className="absolute left-0 top-[62px] w-[189.07px] h-[20.80px] text-[#717179] text-base font-normal leading-[20.80px] font-inter">
                Perfect for growing teams
              </div>
            </div>
            
            {/* Features */}
            <div className="absolute left-8 top-[381.60px] w-[311.34px] h-[151.19px] overflow-hidden">
              <div className="absolute left-0 top-0 w-[311.34px] h-[20.80px] overflow-hidden">
                <div className="absolute left-0 top-[2.40px] w-4 h-4 overflow-hidden flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div className="absolute left-[26px] top-0 w-[142.69px] h-[20.80px] text-white text-base font-medium leading-[20.80px] font-inter">
                  All Startup features
                </div>
              </div>
              <div className="absolute left-0 top-[32.79px] w-[311.34px] h-[20.80px] overflow-hidden">
                <div className="absolute left-0 top-[2.40px] w-4 h-4 overflow-hidden flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div className="absolute left-[26px] top-0 w-[133.32px] h-[20.80px] text-white text-base font-medium leading-[20.80px] font-inter">
                  Multi-user access
                </div>
              </div>
              <div className="absolute left-0 top-[65.59px] w-[311.34px] h-[20.80px] overflow-hidden">
                <div className="absolute left-0 top-[2.40px] w-4 h-4 overflow-hidden flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div className="absolute left-[26px] top-0 w-[240.91px] h-[20.80px] text-white text-base font-medium leading-[20.80px] font-inter">
                  Advanced reporting and insights
                </div>
              </div>
              <div className="absolute left-0 top-[98.39px] w-[311.34px] h-[20.80px] overflow-hidden">
                <div className="absolute left-0 top-[2.40px] w-4 h-4 overflow-hidden flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div className="absolute left-[26px] top-0 w-[114.87px] h-[20.80px] text-white text-base font-medium leading-[20.80px] font-inter">
                  Priority support
                </div>
              </div>
            </div>
            
            {/* Button */}
            <div className="absolute left-8 top-[556.78px] w-[311.34px] h-9">
              <Button className="w-full h-full bg-white text-[#0D0D0D] hover:bg-gray-100 border-0 rounded-lg text-sm font-medium">
                <Zap className="mr-2 h-4 w-4" />
                Start Free Trial
              </Button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="relative w-full lg:w-[375.34px] h-[624.78px] bg-[rgba(12.75,12.75,12.75,0.50)] overflow-hidden border border-[#252525] lg:border-l-0">
            {/* Header */}
            <div className="absolute left-8 top-8 w-[311.34px] h-[92.80px] overflow-hidden">
              <div className="absolute left-0 top-0 w-[118.13px] h-9 text-white text-2xl font-bold leading-9 font-inter">Enterprise</div>
              <div className="absolute left-0 top-[46.50px] w-[267.19px] h-[45.40px] text-[#717179] text-lg font-normal leading-[23.40px] font-inter">
                Essential security, performance,<br />monitoring, and support.
              </div>
            </div>
            
            {/* Price */}
            <div className="absolute left-8 top-[274.80px] w-[311.34px] h-[82.80px] overflow-hidden">
              <div className="absolute left-0 top-0 w-[164.85px] h-[52px]">
                <span className="text-white text-[44px] font-bold leading-[52px] font-inter">$479</span>
                <span className="text-white text-2xl font-bold leading-[52px] font-inter">.99</span>
              </div>
              <div className="absolute left-0 top-[62px] w-[237.95px] h-[20.80px] text-[#717179] text-base font-normal leading-[20.80px] font-inter">
                Tailored solutions for enterprises
              </div>
            </div>
            
            {/* Features */}
            <div className="absolute left-8 top-[381.60px] w-[311.34px] h-[151.19px] overflow-hidden">
              <div className="absolute left-0 top-0 w-[311.34px] h-[20.80px] overflow-hidden">
                <div className="absolute left-0 top-[2.40px] w-4 h-4 overflow-hidden flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div className="absolute left-[26px] top-0 w-[141.66px] h-[20.80px] text-white text-base font-medium leading-[20.80px] font-inter">
                  All Growth features
                </div>
              </div>
              <div className="absolute left-0 top-[32.79px] w-[311.34px] h-[20.80px] overflow-hidden">
                <div className="absolute left-0 top-[2.40px] w-4 h-4 overflow-hidden flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div className="absolute left-[26px] top-0 w-[149.63px] h-[20.80px] text-white text-base font-medium leading-[20.80px] font-inter">
                  Custom integrations
                </div>
              </div>
              <div className="absolute left-0 top-[65.59px] w-[311.34px] h-[20.80px] overflow-hidden">
                <div className="absolute left-0 top-[2.40px] w-4 h-4 overflow-hidden flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div className="absolute left-[26px] top-0 w-[211.30px] h-[20.80px] text-white text-base font-medium leading-[20.80px] font-inter">
                  Dedicated account manager
                </div>
              </div>
              <div className="absolute left-0 top-[98.39px] w-[311.34px] h-[20.80px] overflow-hidden">
                <div className="absolute left-0 top-[2.40px] w-4 h-4 overflow-hidden flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div className="absolute left-[26px] top-0 w-[164.59px] h-[20.80px] text-white text-base font-medium leading-[20.80px] font-inter">
                  24/7 premium support
                </div>
              </div>
            </div>
            
            {/* Button */}
            <div className="absolute left-8 top-[556.78px] w-[311.34px] h-9">
              <Button variant="secondary" className="w-full h-full bg-[#171717] text-white hover:bg-[#262626] border-0 rounded-lg text-sm font-medium">
                Get Started
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AlternatePricingSection;
