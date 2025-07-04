
import { motion } from "framer-motion";

const MetricsSection = () => {
  const metrics = [
    {
      number: "160+",
      description: "Our software is used by people in over 160 countries worldwide."
    }, 
    {
      number: "$7000",
      description: "Save $7000 in billable hours each year with our innovative solutions."
    }, 
    {
      number: "30M+",
      description: "More than 30 million businesses have benefited from our services."
    }
  ];

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {metrics.map((metric, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              variants={itemVariants}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {metric.number}
              </h2>
              <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-xs mx-auto">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsSection;
