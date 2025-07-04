
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const GetStartedSection = () => {
  const steps = [
    {
      icon: Users,
      title: "Create Your Profile",
      description: "Set up your trader profile and connect your trading history"
    },
    {
      icon: TrendingUp,
      title: "Share Your Strategies",
      description: "Post insights, analysis, and trading calls with flexible pricing"
    },
    {
      icon: DollarSign,
      title: "Earn Revenue",
      description: "Monetize your expertise with subscriptions and individual content sales"
    }
  ];

  return (
    <section className="w-full py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Start Earning in 3 Simple Steps
          </motion.h2>
          <motion.p 
            className="text-xl text-[#a1a1aa] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join thousands of traders already monetizing their expertise on TradeFunder
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-[#4a9489] rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
              <p className="text-[#a1a1aa]">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-[#4a9489] text-white hover:bg-[#3d7a6f] rounded-lg shadow-sm px-8 py-3 text-lg">
            Start Your Creator Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
