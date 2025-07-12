import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Users,
  Star,
  Clock,
  Plus
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Ideas = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [performanceFilter, setPerformanceFilter] = useState("all");

  // Mock data - replace with real data from Supabase
  const ideas = [
    {
      id: 1,
      title: "TSLA Breakout Strategy",
      creator: "Alex Chen",
      category: "Stocks",
      performance: "+45.2%",
      performanceType: "positive" as const,
      backers: 128,
      target: "$5,000",
      raised: "$3,200",
      rating: 4.8,
      daysLeft: 15,
      description: "Technical analysis based breakout strategy for Tesla stock with clear entry and exit points.",
      tags: ["Breakout", "Technical Analysis", "Large Cap"]
    },
    {
      id: 2,
      title: "ETH/USD Scalping Bot",
      creator: "Sarah Rodriguez",
      category: "Crypto",
      performance: "+23.1%",
      performanceType: "positive" as const,
      backers: 89,
      target: "$3,000",
      raised: "$2,800",
      rating: 4.9,
      daysLeft: 8,
      description: "Automated scalping strategy for Ethereum with high-frequency trading algorithms.",
      tags: ["Scalping", "Automated", "High Frequency"]
    },
    {
      id: 3,
      title: "SPY Options Iron Condor",
      creator: "Mike Johnson",
      category: "Options",
      performance: "-5.2%",
      performanceType: "negative" as const,
      backers: 45,
      target: "$2,500",
      raised: "$1,100",
      rating: 4.2,
      daysLeft: 22,
      description: "Income-generating options strategy using iron condor spreads on SPY ETF.",
      tags: ["Options", "Income", "Iron Condor"]
    },
    {
      id: 4,
      title: "Gold Momentum Trading",
      creator: "Lisa Wang",
      category: "Commodities",
      performance: "+18.7%",
      performanceType: "positive" as const,
      backers: 67,
      target: "$4,000",
      raised: "$3,500",
      rating: 4.6,
      daysLeft: 12,
      description: "Momentum-based trading strategy for gold futures with risk management.",
      tags: ["Momentum", "Commodities", "Futures"]
    },
    {
      id: 5,
      title: "Forex EUR/USD Trend Following",
      creator: "David Kim",
      category: "Forex",
      performance: "+31.4%",
      performanceType: "positive" as const,
      backers: 156,
      target: "$6,000",
      raised: "$5,800",
      rating: 4.7,
      daysLeft: 5,
      description: "Trend-following strategy for EUR/USD currency pair with multiple timeframe analysis.",
      tags: ["Trend Following", "Forex", "Multi-timeframe"]
    },
    {
      id: 6,
      title: "AAPL Swing Trading",
      creator: "Emma Wilson",
      category: "Stocks",
      performance: "+12.3%",
      performanceType: "positive" as const,
      backers: 78,
      target: "$3,500",
      raised: "$2,900",
      rating: 4.4,
      daysLeft: 18,
      description: "Swing trading strategy for Apple stock with fundamental and technical analysis.",
      tags: ["Swing Trading", "Fundamental", "Tech"]
    }
  ];

  const filteredIdeas = ideas.filter(idea => {
    const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         idea.creator.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         idea.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || idea.category.toLowerCase() === categoryFilter.toLowerCase();
    const matchesPerformance = performanceFilter === "all" || 
      (performanceFilter === "positive" && idea.performanceType === "positive") ||
      (performanceFilter === "negative" && idea.performanceType === "negative");
    
    return matchesSearch && matchesCategory && matchesPerformance;
  });

  return (
    <div className="min-h-screen bg-[#000000] w-full">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <motion.h1 
              className="text-3xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Trading Ideas
            </motion.h1>
            <p className="text-[#717179]">Discover and fund the best trading strategies from top creators</p>
          </div>
          <Link to="/ideas/create">
            <Button className="bg-[#4a9489] hover:bg-[#3d7a6f] text-white mt-4 md:mt-0">
              <Plus className="mr-2 h-4 w-4" />
              Create Idea
            </Button>
          </Link>
        </div>

        {/* Filters and Search */}
        <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-[#717179]" />
              <Input
                placeholder="Search ideas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-[#262626] border-[#333] text-white placeholder:text-[#717179]"
              />
            </div>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="bg-[#262626] border-[#333] text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1a] border-[#262626]">
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="stocks">Stocks</SelectItem>
                <SelectItem value="crypto">Crypto</SelectItem>
                <SelectItem value="options">Options</SelectItem>
                <SelectItem value="forex">Forex</SelectItem>
                <SelectItem value="commodities">Commodities</SelectItem>
              </SelectContent>
            </Select>

            <Select value={performanceFilter} onValueChange={setPerformanceFilter}>
              <SelectTrigger className="bg-[#262626] border-[#333] text-white">
                <SelectValue placeholder="Performance" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1a] border-[#262626]">
                <SelectItem value="all">All Performance</SelectItem>
                <SelectItem value="positive">Positive</SelectItem>
                <SelectItem value="negative">Negative</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-[#4a9489] text-white" : "bg-[#262626] border-[#333] text-white hover:bg-[#333]"}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-[#4a9489] text-white" : "bg-[#262626] border-[#333] text-white hover:bg-[#333]"}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Ideas Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIdeas.map((idea, index) => (
              <motion.div
                key={idea.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-[#1a1a1a] border-[#262626] hover:border-[#4a9489] transition-colors cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="text-[#4a9489] border-[#4a9489]">
                        {idea.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-white text-sm">{idea.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white text-lg mb-2">{idea.title}</CardTitle>
                    <CardDescription className="text-[#717179] text-sm">
                      by {idea.creator}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#717179] text-sm mb-4 line-clamp-2">
                      {idea.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[#717179] text-sm">Performance</span>
                        <span className={`text-sm font-medium ${
                          idea.performanceType === "positive" ? "text-green-500" : "text-red-500"
                        }`}>
                          {idea.performance}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-[#717179] text-sm">Backers</span>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4 text-[#717179]" />
                          <span className="text-white text-sm">{idea.backers}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-[#717179] text-sm">Funding</span>
                        <span className="text-white text-sm">${idea.raised} / ${idea.target}</span>
                      </div>
                      
                      <div className="w-full bg-[#333] rounded-full h-2">
                        <div 
                          className="bg-[#4a9489] h-2 rounded-full"
                          style={{ width: `${(parseInt(idea.raised.replace('$', '').replace(',', '')) / parseInt(idea.target.replace('$', '').replace(',', ''))) * 100}%` }}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#717179]">{idea.daysLeft} days left</span>
                        <Link to={`/ideas/${idea.id}`}>
                          <Button size="sm" className="bg-[#4a9489] hover:bg-[#3d7a6f] text-white">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredIdeas.map((idea, index) => (
              <motion.div
                key={idea.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-[#1a1a1a] border-[#262626] hover:border-[#4a9489] transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-white font-medium text-lg">{idea.title}</h3>
                          <Badge variant="outline" className="text-[#4a9489] border-[#4a9489]">
                            {idea.category}
                          </Badge>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="text-white text-sm">{idea.rating}</span>
                          </div>
                        </div>
                        <p className="text-[#717179] text-sm mb-2">by {idea.creator}</p>
                        <p className="text-[#717179] text-sm mb-3">{idea.description}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className={`font-medium ${
                            idea.performanceType === "positive" ? "text-green-500" : "text-red-500"
                          }`}>
                            {idea.performance}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4 text-[#717179]" />
                            <span className="text-[#717179]">{idea.backers} backers</span>
                          </div>
                          <span className="text-[#717179]">${idea.raised} / ${idea.target}</span>
                          <span className="text-[#717179]">{idea.daysLeft} days left</span>
                        </div>
                      </div>
                      <Link to={`/ideas/${idea.id}`}>
                        <Button className="bg-[#4a9489] hover:bg-[#3d7a6f] text-white">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {filteredIdeas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#717179] text-lg">No ideas found matching your criteria</p>
            <Button 
              variant="outline" 
              className="mt-4 bg-[#262626] border-[#333] text-white hover:bg-[#333]"
              onClick={() => {
                setSearchQuery("");
                setCategoryFilter("all");
                setPerformanceFilter("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Ideas; 