import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Users, TrendingUp, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GetStartedSection = () => {
  const steps = [
    {
      icon: Users,
      title: "Create Profile",
      description: "Set up your trader profile, showcase your expertise, and connect your trading history to build credibility with followers."
    },
    {
      icon: TrendingUp,
      title: "Share Strategies",
      description: "Post insights, analysis, and trading calls with flexible pricing. Build your audience by sharing valuable market knowledge."
    },
    {
      icon: DollarSign,
      title: "Earn Revenue",
      description: "Monetize your expertise with subscriptions, individual content sales, and performance-based rewards from your community."
    }
  ];

  return (
    <section className="w-full py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Start Your Creator Journey
          </motion.h2>
          <motion.p 
            className="text-xl text-[#a1a1aa] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join thousands of traders already monetizing their expertise on TradeFunder. 
            Turn your trading knowledge into a profitable business in just three simple steps.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="text-center bg-[#1a1a1a] border border-[#262626] rounded-xl p-8 hover:border-[#4a9489] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#4a9489] to-[#3d7a6f] rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-[#4a9489] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              </div>
              <p className="text-[#a1a1aa] leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/register">
            <Button className="bg-[#4a9489] text-white hover:bg-[#3d7a6f] rounded-lg shadow-sm px-8 py-3 text-lg">
              Start Your Creator Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-[#717179] text-sm mt-4">Free to start • No setup fees • Instant access</p>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedSection;
