
import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign } from "lucide-react";

const CreatorShowcase = () => {
  const creators = [
    {
      name: "Alex Thompson",
      title: "Options Trader",
      followers: "12.5K",
      returns: "+147%",
      earnings: "$24,500",
      specialty: "Day Trading"
    },
    {
      name: "Sarah Chen",
      title: "Swing Trader",
      followers: "8.9K",
      returns: "+89%",
      earnings: "$18,200",
      specialty: "Tech Stocks"
    },
    {
      name: "Mike Rodriguez",
      title: "Crypto Analyst",
      followers: "15.2K",
      returns: "+203%",
      earnings: "$31,800",
      specialty: "Cryptocurrency"
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
            Top Performing Creators
          </motion.h2>
          <motion.p 
            className="text-xl text-[#a1a1aa] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Meet our top-earning creators who are sharing their winning strategies
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <motion.div
              key={creator.name}
              className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-6 hover:border-[#4a9489] transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#4a9489] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {creator.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{creator.name}</h3>
                <p className="text-[#a1a1aa] text-sm">{creator.title}</p>
                <div className="inline-block bg-[#4a9489]/20 text-[#4a9489] px-3 py-1 rounded-full text-xs mt-2">
                  {creator.specialty}
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-[#4a9489] mr-2" />
                    <span className="text-[#a1a1aa] text-sm">Followers</span>
                  </div>
                  <span className="text-white font-semibold">{creator.followers}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 text-[#4a9489] mr-2" />
                    <span className="text-[#a1a1aa] text-sm">Returns</span>
                  </div>
                  <span className="text-[#4a9489] font-semibold">{creator.returns}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 text-[#4a9489] mr-2" />
                    <span className="text-[#a1a1aa] text-sm">Monthly Earnings</span>
                  </div>
                  <span className="text-white font-semibold">{creator.earnings}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorShowcase;
