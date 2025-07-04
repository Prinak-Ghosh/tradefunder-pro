
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Better insights. Zero friction.{" "}
            <span className="block">Integrated experience.</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-[#a1a1aa] mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Intelligent billing, streamlined project tracking, and unified business operations — everything in one platform.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <Button size="lg" variant="secondary" className="text-white px-6 py-3 rounded-lg shadow-sm bg-neutral-900 hover:bg-neutral-800">
              Try for free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button size="lg" className="bg-slate-50 text-slate-950 hover:bg-gray-100 rounded-lg shadow-sm border border-[#4a9489] px-6 py-3">
              <Zap className="mr-2 h-4 w-4" />
              Chat with sales
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
