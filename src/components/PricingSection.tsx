
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Basic platform access",
        "Follow up to 5 creators",
        "Limited content access",
        "Community discussions"
      ],
      highlighted: false
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "month",
      description: "For serious traders",
      features: [
        "Unlimited creator follows",
        "Enhanced discovery features",
        "Priority customer support",
        "Advanced filtering tools",
        "Mobile app access"
      ],
      highlighted: true
    },
    {
      name: "Creator Plus",
      price: "$19.99",
      period: "month",
      description: "For content creators",
      features: [
        "All Pro features included",
        "Advanced creator analytics",
        "Custom branding options",
        "Premium creator tools",
        "Revenue optimization insights",
        "Direct creator support"
      ],
      highlighted: false
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
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            className="text-xl text-[#a1a1aa] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Choose the plan that fits your trading journey. Upgrade anytime.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-[#1a1a1a] border rounded-xl p-8 ${
                plan.highlighted 
                  ? 'border-[#4a9489] shadow-xl shadow-[#4a9489]/10' 
                  : 'border-[#262626]'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#4a9489] text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-[#a1a1aa] ml-2">/{plan.period}</span>
                </div>
                <p className="text-[#a1a1aa] text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-[#a1a1aa]">
                    <Check className="h-4 w-4 text-[#4a9489] mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.highlighted 
                    ? 'bg-[#4a9489] hover:bg-[#3d7a6f] text-white' 
                    : 'bg-[#262626] hover:bg-[#333] text-white'
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-[#666] mb-4">
            Platform fees: 15% on content purchases • 5% on subscriptions
          </p>
          <p className="text-xs text-[#666]">
            All plans include secure payment processing and 24/7 platform monitoring
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
