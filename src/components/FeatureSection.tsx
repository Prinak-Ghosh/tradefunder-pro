
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

const FeatureSection = () => {
  const features = [
    {
      title: "Customizable Dashboard",
      description: "Design a dashboard that highlights the financial data most important to your business.",
      image: "/lovable-uploads/f34b8c76-b7ef-449b-a865-e696160e3132.png"
    }, 
    {
      title: "Smart Analytics",
      description: "Get insights into your financial performance with our advanced analytics tools.",
      image: "/lovable-uploads/a4d6f5bb-d27b-496a-8738-9da9e145ff67.png"
    }, 
    {
      title: "Automated Workflows",
      description: "Streamline your processes with intelligent automation that saves time and reduces errors.",
      image: "/lovable-uploads/d7548ea8-ab44-4e01-b366-5b1b24af72df.png"
    }, 
    {
      title: "Real-time Collaboration",
      description: "Work together seamlessly with your team in real-time across all your projects.",
      image: "/lovable-uploads/ffcae411-32b8-4bd7-882e-5dcef6326338.png"
    }
  ];

  // Border classes for each card position to create shared grid lines
  const cardBorders = [
    "", // Top-left: no borders
    "border-l border-[#252525]", // Top-right: left border only
    "border-t border-[#252525]", // Bottom-left: top border only
    "border-l border-t border-[#252525]" // Bottom-right: left and top borders
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay in control, work smarter
          </h1>
          <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto">
            Powerful tools to manage your finances effortlessly, so you can focus on what matters.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Seamless 2x2 Grid Container with outer border */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 md:gap-0 bg-[#0D0D0D] border border-[#252525] rounded-lg overflow-hidden h-auto md:h-[900px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`flex flex-col justify-between h-full md:h-[450px] bg-[#0D0D0D] ${cardBorders[index]}`}
              >
                <div className="h-64 md:h-1/2 overflow-visible bg-transparent">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="mt-4 mb-4 border-0" 
                    style={{border: 'none', outline: 'none'}} 
                  />
                </div>
                <motion.div 
                  className="flex flex-col justify-end p-5 pb-5 pl-5 bg-transparent"
                  variants={textVariants}
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
