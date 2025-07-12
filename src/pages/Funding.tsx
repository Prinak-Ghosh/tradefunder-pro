import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Users,
  Clock,
  Star,
  Eye,
  BarChart3,
  Calendar,
  Target,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Funding = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data - replace with real data from Supabase
  const metrics = [
    {
      title: "Total Invested",
      value: "$12,450.00",
      change: "+$2,340",
      changeType: "positive" as const,
      icon: DollarSign,
    },
    {
      title: "Active Investments",
      value: "8",
      change: "+2",
      changeType: "positive" as const,
      icon: Users,
    },
    {
      title: "Total Returns",
      value: "$3,210.00",
      change: "+18.5%",
      changeType: "positive" as const,
      icon: TrendingUp,
    },
    {
      title: "Avg. ROI",
      value: "25.8%",
      change: "+2.3%",
      changeType: "positive" as const,
      icon: BarChart3,
    },
  ];

  const activeInvestments = [
    {
      id: 1,
      idea: "TSLA Breakout Strategy",
      creator: "Alex Chen",
      amount: "$2,500",
      invested: "2024-01-15",
      currentValue: "$3,200",
      returns: "+$700",
      returnsPercent: "+28%",
      returnsType: "positive" as const,
      status: "ACTIVE",
      daysLeft: 45,
      rating: 4.8,
    },
    {
      id: 2,
      idea: "ETH/USD Scalping Bot",
      creator: "Sarah Rodriguez",
      amount: "$1,800",
      invested: "2024-01-20",
      currentValue: "$1,950",
      returns: "+$150",
      returnsPercent: "+8.3%",
      returnsType: "positive" as const,
      status: "ACTIVE",
      daysLeft: 32,
      rating: 4.9,
    },
    {
      id: 3,
      idea: "Gold Momentum Trading",
      creator: "Lisa Wang",
      amount: "$3,200",
      invested: "2024-01-10",
      currentValue: "$2,880",
      returns: "-$320",
      returnsPercent: "-10%",
      returnsType: "negative" as const,
      status: "ACTIVE",
      daysLeft: 18,
      rating: 4.6,
    },
  ];

  const completedInvestments = [
    {
      id: 4,
      idea: "AAPL Swing Trading",
      creator: "Mike Johnson",
      amount: "$1,500",
      invested: "2023-12-01",
      completed: "2024-01-15",
      finalValue: "$1,875",
      returns: "+$375",
      returnsPercent: "+25%",
      returnsType: "positive" as const,
      rating: 4.7,
    },
    {
      id: 5,
      idea: "SPY Options Iron Condor",
      creator: "David Kim",
      amount: "$2,000",
      invested: "2023-11-15",
      completed: "2024-01-10",
      finalValue: "$1,800",
      returns: "-$200",
      returnsPercent: "-10%",
      returnsType: "negative" as const,
      rating: 4.2,
    },
  ];

  const fundingOpportunities = [
    {
      id: 1,
      title: "Crypto Trading Strategy",
      creator: "Alex Chen",
      target: "$10,000",
      raised: "$7,500",
      backers: 45,
      daysLeft: 12,
      rating: 4.8,
      category: "Crypto",
      description: "Advanced cryptocurrency trading strategy with AI-powered signals.",
    },
    {
      id: 2,
      title: "Options Trading Masterclass",
      creator: "Sarah Rodriguez",
      target: "$5,000",
      raised: "$4,200",
      backers: 28,
      daysLeft: 5,
      rating: 4.9,
      category: "Options",
      description: "Comprehensive options trading course with live mentoring.",
    },
    {
      id: 3,
      title: "Day Trading Fundamentals",
      creator: "Mike Johnson",
      target: "$8,000",
      raised: "$3,100",
      backers: 32,
      daysLeft: 18,
      rating: 4.6,
      category: "Stocks",
      description: "Learn the fundamentals of day trading with proven strategies.",
    },
  ];

  const filteredActiveInvestments = activeInvestments.filter(investment => {
    if (filterStatus === "all") return true;
    if (filterStatus === "positive") return investment.returnsType === "positive";
    if (filterStatus === "negative") return investment.returnsType === "negative";
    return true;
  });

  return (
    <div className="min-h-screen bg-[#000000] w-full">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <motion.h1 
            className="text-3xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Funding Dashboard
          </motion.h1>
          <p className="text-[#717179]">Manage your investments and discover new opportunities</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-[#1a1a1a] border-[#262626]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#717179] mb-1">{metric.title}</p>
                      <p className="text-2xl font-bold text-white">{metric.value}</p>
                      <div className="flex items-center mt-2">
                        {metric.changeType === "positive" ? (
                          <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                        )}
                        <span className={`text-sm ${
                          metric.changeType === "positive" ? "text-green-500" : "text-red-500"
                        }`}>
                          {metric.change}
                        </span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-[#4a9489] rounded-lg flex items-center justify-center">
                      <metric.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-[#1a1a1a] border border-[#262626]">
            <TabsTrigger value="overview" className="text-white">Overview</TabsTrigger>
            <TabsTrigger value="active" className="text-white">Active Investments</TabsTrigger>
            <TabsTrigger value="completed" className="text-white">Completed</TabsTrigger>
            <TabsTrigger value="opportunities" className="text-white">Opportunities</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Active Investments Summary */}
              <Card className="bg-[#1a1a1a] border-[#262626]">
                <CardHeader>
                  <CardTitle className="text-white">Active Investments</CardTitle>
                  <CardDescription className="text-[#717179]">
                    Your current portfolio performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeInvestments.slice(0, 3).map((investment) => (
                      <div key={investment.id} className="flex items-center justify-between p-3 bg-[#262626] rounded-lg">
                        <div>
                          <p className="text-white font-medium">{investment.idea}</p>
                          <p className="text-[#717179] text-sm">by {investment.creator}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium">{investment.currentValue}</p>
                          <p className={`text-sm ${
                            investment.returnsType === "positive" ? "text-green-500" : "text-red-500"
                          }`}>
                            {investment.returns}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link to="/funding?tab=active">
                      <Button variant="outline" className="w-full bg-[#262626] border-[#333] text-white hover:bg-[#333]">
                        View All Active
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Opportunities */}
              <Card className="bg-[#1a1a1a] border-[#262626]">
                <CardHeader>
                  <CardTitle className="text-white">New Opportunities</CardTitle>
                  <CardDescription className="text-[#717179]">
                    Trending strategies to consider
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {fundingOpportunities.slice(0, 3).map((opportunity) => (
                      <div key={opportunity.id} className="p-3 bg-[#262626] rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-white font-medium">{opportunity.title}</h4>
                            <p className="text-[#717179] text-sm">by {opportunity.creator}</p>
                            <div className="flex items-center space-x-4 mt-2">
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 text-yellow-500" />
                                <span className="text-white text-sm">{opportunity.rating}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Users className="h-4 w-4 text-[#717179]" />
                                <span className="text-[#717179] text-sm">{opportunity.backers}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4 text-[#717179]" />
                                <span className="text-[#717179] text-sm">{opportunity.daysLeft} days</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-medium">${opportunity.raised}</p>
                            <p className="text-[#717179] text-sm">of ${opportunity.target}</p>
                            <div className="w-20 h-2 bg-[#333] rounded-full mt-2">
                              <div 
                                className="h-2 bg-[#4a9489] rounded-full"
                                style={{ width: `${(parseInt(opportunity.raised.replace('$', '').replace(',', '')) / parseInt(opportunity.target.replace('$', '').replace(',', ''))) * 100}%` }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <Link to={`/ideas/${opportunity.id}`}>
                            <Button size="sm" className="w-full bg-[#4a9489] hover:bg-[#3d7a6f] text-white">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="active" className="space-y-6">
            <Card className="bg-[#1a1a1a] border-[#262626]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Active Investments</CardTitle>
                    <CardDescription className="text-[#717179]">
                      Track your current investments and performance
                    </CardDescription>
                  </div>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-40 bg-[#262626] border-[#333] text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-[#262626]">
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="positive">Profitable</SelectItem>
                      <SelectItem value="negative">Losing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredActiveInvestments.map((investment) => (
                    <div key={investment.id} className="flex items-center justify-between p-4 bg-[#262626] rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-white font-medium">{investment.idea}</h3>
                          <Badge variant={investment.status === "ACTIVE" ? "default" : "secondary"}>
                            {investment.status}
                          </Badge>
                        </div>
                        <p className="text-[#717179] text-sm mb-2">by {investment.creator}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4 text-[#717179]" />
                            <span className="text-[#717179]">Invested: {investment.invested}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4 text-[#717179]" />
                            <span className="text-[#717179]">{investment.daysLeft} days left</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="text-white">{investment.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="mb-2">
                          <p className="text-white font-medium">{investment.currentValue}</p>
                          <p className="text-[#717179] text-sm">Current Value</p>
                        </div>
                        <div>
                          <p className={`font-medium ${
                            investment.returnsType === "positive" ? "text-green-500" : "text-red-500"
                          }`}>
                            {investment.returns}
                          </p>
                          <p className={`text-sm ${
                            investment.returnsType === "positive" ? "text-green-500" : "text-red-500"
                          }`}>
                            {investment.returnsPercent}
                          </p>
                        </div>
                      </div>
                      <div className="ml-4">
                        <Link to={`/funding/${investment.id}`}>
                          <Button size="sm" variant="outline" className="bg-[#262626] border-[#333] text-white hover:bg-[#333]">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="completed" className="space-y-6">
            <Card className="bg-[#1a1a1a] border-[#262626]">
              <CardHeader>
                <CardTitle className="text-white">Completed Investments</CardTitle>
                <CardDescription className="text-[#717179]">
                  Your investment history and final returns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {completedInvestments.map((investment) => (
                    <div key={investment.id} className="flex items-center justify-between p-4 bg-[#262626] rounded-lg">
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-2">{investment.idea}</h3>
                        <p className="text-[#717179] text-sm mb-2">by {investment.creator}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4 text-[#717179]" />
                            <span className="text-[#717179]">Invested: {investment.invested}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4 text-[#717179]" />
                            <span className="text-[#717179]">Completed: {investment.completed}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="text-white">{investment.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="mb-2">
                          <p className="text-white font-medium">{investment.finalValue}</p>
                          <p className="text-[#717179] text-sm">Final Value</p>
                        </div>
                        <div>
                          <p className={`font-medium ${
                            investment.returnsType === "positive" ? "text-green-500" : "text-red-500"
                          }`}>
                            {investment.returns}
                          </p>
                          <p className={`text-sm ${
                            investment.returnsType === "positive" ? "text-green-500" : "text-red-500"
                          }`}>
                            {investment.returnsPercent}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-6">
            <Card className="bg-[#1a1a1a] border-[#262626]">
              <CardHeader>
                <CardTitle className="text-white">Funding Opportunities</CardTitle>
                <CardDescription className="text-[#717179]">
                  Discover new strategies to invest in
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fundingOpportunities.map((opportunity) => (
                    <div key={opportunity.id} className="p-4 bg-[#262626] rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-white font-medium">{opportunity.title}</h3>
                            <Badge variant="outline" className="text-[#4a9489] border-[#4a9489]">
                              {opportunity.category}
                            </Badge>
                          </div>
                          <p className="text-[#717179] text-sm mb-2">by {opportunity.creator}</p>
                          <p className="text-[#717179] text-sm mb-3">{opportunity.description}</p>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-500" />
                              <span className="text-white text-sm">{opportunity.rating}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4 text-[#717179]" />
                              <span className="text-[#717179] text-sm">{opportunity.backers} backers</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4 text-[#717179]" />
                              <span className="text-[#717179] text-sm">{opportunity.daysLeft} days left</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right ml-4">
                          <p className="text-white font-medium">${opportunity.raised}</p>
                          <p className="text-[#717179] text-sm">of ${opportunity.target}</p>
                          <div className="w-24 h-2 bg-[#333] rounded-full mt-2">
                            <div 
                              className="h-2 bg-[#4a9489] rounded-full"
                              style={{ width: `${(parseInt(opportunity.raised.replace('$', '').replace(',', '')) / parseInt(opportunity.target.replace('$', '').replace(',', ''))) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link to={`/ideas/${opportunity.id}`}>
                          <Button className="w-full bg-[#4a9489] hover:bg-[#3d7a6f] text-white">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Funding; 