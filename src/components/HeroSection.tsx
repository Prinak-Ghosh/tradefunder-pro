
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
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
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-[#1a1a1a] border border-[#262626] rounded-full text-sm text-[#4a9489] mb-6"
            variants={itemVariants}
          >
            <TrendingUp className="mr-2 h-4 w-4" />
            OnlyFans for Traders
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Monetize Your Trading{" "}
            <span className="block text-[#4a9489]">Expertise</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-[#a1a1aa] mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Join the gamified social finance platform where top traders share exclusive insights, followers discover profitable strategies, and everyone wins together.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <Button size="lg" className="bg-[#4a9489] text-white hover:bg-[#3d7a6f] rounded-lg shadow-sm px-6 py-3">
              Start Creating
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button size="lg" variant="secondary" className="text-white px-6 py-3 rounded-lg shadow-sm bg-neutral-900 hover:bg-neutral-800 border border-[#262626]">
              Discover Strategies
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center text-sm text-[#a1a1aa]"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center space-x-8">
              <div>
                <div className="text-2xl font-bold text-white">10K+</div>
                <div>Active Traders</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">$2M+</div>
                <div>Creator Earnings</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">95%</div>
                <div>Success Rate</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
