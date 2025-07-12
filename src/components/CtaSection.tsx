import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CtaSection = () => {
  const handleChatWithSales = () => {
    // TODO: Implement chat modal or redirect to contact form
    console.log("Opening chat with sales...");
    // Placeholder for chat modal implementation
    alert("Chat with sales feature coming soon!");
  };

  return <section className="w-full py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto bg-[#1a1a1a] border border-[#262626] relative overflow-hidden px-8 py-[65px] rounded-3xl">
        {/* Decorative borders */}
        <div className="absolute inset-y-0 left-0 w-px bg-[#262626]"></div>
        <div className="absolute inset-y-0 right-0 w-px bg-[#262626]"></div>
        
        {/* Corner dots */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-transparent"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 border border-[#4a9489] rounded-full bg-[#4a9489]"></div>
        
        {/* Content */}
        <div className="text-center py-8">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Discover What We Can Do
          </motion.h2>
          <motion.p 
            className="text-lg text-[#a1a1aa] font-medium mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to start your trading creator journey? Join thousands of traders already monetizing their expertise on TradeFunder.
          </motion.p>
          
          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/register">
              <Button className="bg-[#4a9489] text-white hover:bg-[#3d7a6f] px-8 py-3 text-lg font-medium">
                Try for Free
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="bg-[#262626] text-white border border-[#333] hover:bg-[#333] px-8 py-3 text-lg font-medium shadow-sm"
              onClick={handleChatWithSales}
            >
              Chat with Sales
            </Button>
          </motion.div>
        </div>
        
        {/* Decorative cards */}
        <div className="absolute left-4 lg:left-20 bottom-4 w-32 h-14 border-2 border-[#262626] rounded-xl opacity-50 hidden sm:block">
          <div className="p-4 flex flex-col gap-1">
            <div className="w-8 h-1 bg-[#4a9489] opacity-30 rounded"></div>
            <div className="w-18 h-1 bg-[#717179] opacity-20 rounded"></div>
          </div>
        </div>
        
        <div className="absolute right-4 lg:right-20 top-4 w-32 h-14 border-2 border-[#262626] rounded-xl opacity-50 hidden sm:block">
          <div className="p-4 flex flex-col gap-1">
            <div className="w-8 h-1 bg-[#4a9489] opacity-30 rounded"></div>
            <div className="w-18 h-1 bg-[#717179] opacity-20 rounded"></div>
          </div>
        </div>
      </div>
    </section>;
};

export default CtaSection;
