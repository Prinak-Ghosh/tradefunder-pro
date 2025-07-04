
import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Shield, BarChart3, Star } from "lucide-react";

const TradingFeatures = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Transparent performance metrics with verified trading history and real-time P&L tracking."
    },
    {
      icon: Users,
      title: "Social Trading",
      description: "Follow top performers, engage with the community, and discover profitable strategies."
    },
    {
      icon: DollarSign,
      title: "Flexible Monetization",
      description: "Set your own prices for insights, analysis, and exclusive content. Keep 80-85% of earnings."
    },
    {
      icon: Shield,
      title: "Verified Accounts",
      description: "All trading performance is verified through secure broker API integrations."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Detailed analytics for creators to optimize content and track audience engagement."
    },
    {
      icon: Star,
      title: "Premium Tools",
      description: "Access advanced charting tools, market data, and professional trading resources."
    }
  ];

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Built for Serious Traders
          </motion.h2>
          <motion.p 
            className="text-xl text-[#a1a1aa] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Professional-grade tools and features designed to help traders succeed and creators thrive
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-6 hover:border-[#4a9489] transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-[#4a9489] rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-[#a1a1aa] text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingFeatures;
