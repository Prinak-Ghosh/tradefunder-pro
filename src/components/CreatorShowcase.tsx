import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Star, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const CreatorShowcase = () => {
  const creators = [
    {
      name: "Alex Thompson",
      title: "Options Trader",
      followers: "12.5K",
      returns: "+147%",
      earnings: "$24,500",
      specialty: "Day Trading",
      rating: 4.9,
      strategies: 8,
      experience: "5 years"
    },
    {
      name: "Sarah Chen",
      title: "Swing Trader",
      followers: "8.9K",
      returns: "+89%",
      earnings: "$18,200",
      specialty: "Tech Stocks",
      rating: 4.8,
      strategies: 12,
      experience: "3 years"
    },
    {
      name: "Mike Rodriguez",
      title: "Crypto Analyst",
      followers: "15.2K",
      returns: "+203%",
      earnings: "$31,800",
      specialty: "Cryptocurrency",
      rating: 4.9,
      strategies: 6,
      experience: "4 years"
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
            Top Performing Creators
          </motion.h2>
          <motion.p 
            className="text-xl text-[#a1a1aa] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Meet our top-earning creators who are sharing their winning strategies and building successful trading communities
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <motion.div
              key={creator.name}
              className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-6 hover:border-[#4a9489] transition-all duration-300 hover:shadow-lg hover:shadow-[#4a9489]/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#4a9489] to-[#3d7a6f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">
                    {creator.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{creator.name}</h3>
                <p className="text-[#a1a1aa] text-sm mb-2">{creator.title}</p>
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-white text-sm">{creator.rating}</span>
                  </div>
                  <span className="text-[#717179]">•</span>
                  <span className="text-[#717179] text-sm">{creator.experience}</span>
                </div>
                <div className="inline-block bg-[#4a9489]/20 text-[#4a9489] px-3 py-1 rounded-full text-xs">
                  {creator.specialty}
                </div>
              </div>
              
              <div className="space-y-4">
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

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-[#4a9489] mr-2" />
                    <span className="text-[#a1a1aa] text-sm">Strategies</span>
                  </div>
                  <span className="text-white font-semibold">{creator.strategies}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#262626]">
                <Link to="/ideas">
                  <button className="w-full bg-[#4a9489] hover:bg-[#3d7a6f] text-white py-2 px-4 rounded-lg transition-colors duration-200">
                    View Strategies
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/ideas">
            <button className="bg-transparent border border-[#4a9489] text-[#4a9489] hover:bg-[#4a9489] hover:text-white px-8 py-3 rounded-lg transition-all duration-200">
              Discover More Creators
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorShowcase;
