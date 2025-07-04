
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CtaSection = () => {
  return <section className="w-full py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto bg-white relative overflow-hidden px-8 py-[65px]">
        {/* Decorative borders */}
        <div className="absolute inset-y-0 left-0 w-px bg-[#E7E7E7]"></div>
        <div className="absolute inset-y-0 right-0 w-px bg-[#E7E7E7]"></div>
        
        {/* Corner dots */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-transparent"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 border border-[#D9D9D9] rounded-full bg-white"></div>
        
        {/* Content */}
        <div className="text-center py-8">
          <motion.h2 
            className="text-4xl font-bold text-[#09090B] mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Discover What we Can Do
          </motion.h2>
          <motion.p 
            className="text-lg text-[#717179] font-medium mb-8 max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Schedule a call with our team and learn how we can help you get ahead.
          </motion.p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2 text-sm font-medium">
              Try for free
            </Button>
            <Button variant="outline" className="bg-white text-[#09090B] border border-gray-200 hover:bg-gray-50 px-6 py-2 text-sm font-medium shadow-sm">
              Chat with sales
            </Button>
          </div>
        </div>
        
        {/* Decorative cards */}
        <div className="absolute left-4 lg:left-20 bottom-4 w-32 h-14 border-2 border-[#D9D9D9] rounded-xl opacity-50 hidden sm:block">
          <div className="p-4 flex flex-col gap-1">
            <div className="w-8 h-1 bg-[#1B1B1B] opacity-15 rounded"></div>
            <div className="w-18 h-1 bg-[#727272] opacity-10 rounded"></div>
          </div>
        </div>
        
        <div className="absolute right-4 lg:right-20 top-4 w-32 h-14 border-2 border-[#D9D9D9] rounded-xl opacity-50 hidden sm:block">
          <div className="p-4 flex flex-col gap-1">
            <div className="w-8 h-1 bg-[#1B1B1B] opacity-15 rounded"></div>
            <div className="w-18 h-1 bg-[#727272] opacity-10 rounded"></div>
          </div>
        </div>
      </div>
    </section>;
};

export default CtaSection;
