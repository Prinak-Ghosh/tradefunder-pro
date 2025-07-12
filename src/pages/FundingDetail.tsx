import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { 
  ArrowLeft,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calendar,
  Clock,
  Star,
  BarChart3,
  Target,
  Users,
  Eye,
  Download,
  Share2,
  MessageCircle
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FundingDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data - replace with real data from Supabase
  const investment = {
    id: 1,
    idea: "TSLA Breakout Strategy",
    creator: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
      rating: 4.8,
      totalIdeas: 12,
      totalBackers: 456
    },
    category: "Stocks",
    amount: "$2,500",
    invested: "2024-01-15",
    currentValue: "$3,200",
    returns: "+$700",
    returnsPercent: "+28%",
    returnsType: "positive" as const,
    status: "ACTIVE",
    daysLeft: 45,
    rating: 4.8,
    target: "$5,000",
    totalRaised: "$3,200",
    totalBackers: 128,
    description: "Technical analysis based breakout strategy for Tesla stock with clear entry and exit points.",
    performance: [
      { date: "2024-01-15", value: 2500 },
      { date: "2024-01-20", value: 2650 },
      { date: "2024-01-25", value: 2800 },
      { date: "2024-01-30", value: 2950 },
      { date: "2024-02-05", value: 3100 },
      { date: "2024-02-10", value: 3200 },
    ],
    transactions: [
      {
        id: 1,
        type: "INVESTMENT",
        amount: "$2,500",
        date: "2024-01-15",
        description: "Initial investment in TSLA Breakout Strategy"
      },
      {
        id: 2,
        type: "RETURN",
        amount: "+$150",
        date: "2024-01-20",
        description: "First profit distribution"
      },
      {
        id: 3,
        type: "RETURN",
        amount: "+$200",
        date: "2024-01-25",
        description: "Second profit distribution"
      },
      {
        id: 4,
        type: "RETURN",
        amount: "+$350",
        date: "2024-02-10",
        description: "Latest profit distribution"
      }
    ],
    updates: [
      {
        id: 1,
        date: "2024-02-10",
        title: "Excellent Performance Update",
        content: "The TSLA strategy has exceeded expectations with a 28% return in just 3 weeks. The breakout signals have been very accurate."
      },
      {
        id: 2,
        date: "2024-01-25",
        title: "Strategy Adjustment",
        content: "Based on market conditions, we've slightly adjusted our entry criteria to improve success rate."
      },
      {
        id: 3,
        date: "2024-01-15",
        title: "Investment Started",
        content: "Your investment in the TSLA Breakout Strategy is now active. We'll provide regular updates on performance."
      }
    ],
    milestones: [
      {
        id: 1,
        title: "Strategy Development",
        date: "2024-01-10",
        status: "completed",
        description: "Strategy development and backtesting completed"
      },
      {
        id: 2,
        title: "Live Trading Begins",
        date: "2024-01-15",
        status: "completed",
        description: "Live trading with real capital started"
      },
      {
        id: 3,
        title: "First Profit Target",
        date: "2024-01-20",
        status: "completed",
        description: "Reached first 5% profit target"
      },
      {
        id: 4,
        title: "Second Profit Target",
        date: "2024-02-15",
        status: "pending",
        description: "Target: 15% total return"
      },
      {
        id: 5,
        title: "Strategy Completion",
        date: "2024-03-01",
        status: "pending",
        description: "Final profit distribution and strategy closure"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#000000] w-full">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/funding">
          <Button variant="outline" className="mb-6 bg-[#262626] border-[#333] text-white hover:bg-[#333]">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Funding
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <Card className="bg-[#1a1a1a] border-[#262626]">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="text-[#4a9489] border-[#4a9489]">
                      {investment.category}
                    </Badge>
                    <Badge variant={investment.status === "ACTIVE" ? "default" : "secondary"}>
                      {investment.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-[#262626] border-[#333] text-white hover:bg-[#333]"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-[#262626] border-[#333] text-white hover:bg-[#333]"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-white text-2xl mb-2">{investment.idea}</CardTitle>
                <CardDescription className="text-[#717179] text-lg">
                  by {investment.creator.name}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Performance Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-[#1a1a1a] border-[#262626]">
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-[#717179] mb-1">Invested</p>
                  <p className="text-xl font-bold text-white">{investment.amount}</p>
                </CardContent>
              </Card>
              <Card className="bg-[#1a1a1a] border-[#262626]">
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-[#717179] mb-1">Current Value</p>
                  <p className="text-xl font-bold text-white">{investment.currentValue}</p>
                </CardContent>
              </Card>
              <Card className="bg-[#1a1a1a] border-[#262626]">
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-[#717179] mb-1">Returns</p>
                  <p className={`text-xl font-bold ${
                    investment.returnsType === "positive" ? "text-green-500" : "text-red-500"
                  }`}>
                    {investment.returns}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#1a1a1a] border-[#262626]">
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-[#717179] mb-1">ROI</p>
                  <p className={`text-xl font-bold ${
                    investment.returnsType === "positive" ? "text-green-500" : "text-red-500"
                  }`}>
                    {investment.returnsPercent}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="bg-[#1a1a1a] border border-[#262626]">
                <TabsTrigger value="overview" className="text-white">Overview</TabsTrigger>
                <TabsTrigger value="performance" className="text-white">Performance</TabsTrigger>
                <TabsTrigger value="transactions" className="text-white">Transactions</TabsTrigger>
                <TabsTrigger value="updates" className="text-white">Updates</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card className="bg-[#1a1a1a] border-[#262626]">
                  <CardHeader>
                    <CardTitle className="text-white">Investment Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#717179] leading-relaxed mb-6">{investment.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-[#262626] rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="h-4 w-4 text-[#717179]" />
                          <span className="text-[#717179] text-sm">Invested Date</span>
                        </div>
                        <p className="text-white font-medium">{investment.invested}</p>
                      </div>
                      <div className="p-4 bg-[#262626] rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Clock className="h-4 w-4 text-[#717179]" />
                          <span className="text-[#717179] text-sm">Days Left</span>
                        </div>
                        <p className="text-white font-medium">{investment.daysLeft} days</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-white font-medium">Strategy Milestones</h4>
                      <div className="space-y-3">
                        {investment.milestones.map((milestone) => (
                          <div key={milestone.id} className="flex items-center space-x-3 p-3 bg-[#262626] rounded-lg">
                            <div className={`w-3 h-3 rounded-full ${
                              milestone.status === "completed" ? "bg-green-500" : "bg-[#717179]"
                            }`} />
                            <div className="flex-1">
                              <p className="text-white font-medium">{milestone.title}</p>
                              <p className="text-[#717179] text-sm">{milestone.description}</p>
                            </div>
                            <span className="text-[#717179] text-sm">{milestone.date}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="performance" className="space-y-6">
                <Card className="bg-[#1a1a1a] border-[#262626]">
                  <CardHeader>
                    <CardTitle className="text-white">Performance Chart</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-[#262626] rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="h-12 w-12 text-[#717179] mx-auto mb-2" />
                        <p className="text-[#717179]">Performance chart will be implemented with a charting library</p>
                        <p className="text-[#717179] text-sm">Showing value progression over time</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="transactions" className="space-y-6">
                <Card className="bg-[#1a1a1a] border-[#262626]">
                  <CardHeader>
                    <CardTitle className="text-white">Transaction History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {investment.transactions.map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-4 bg-[#262626] rounded-lg">
                          <div>
                            <p className="text-white font-medium">{transaction.description}</p>
                            <p className="text-[#717179] text-sm">{transaction.date}</p>
                          </div>
                          <div className="text-right">
                            <p className={`font-medium ${
                              transaction.type === "RETURN" ? "text-green-500" : "text-white"
                            }`}>
                              {transaction.amount}
                            </p>
                            <Badge variant="outline" className="text-[#717179] border-[#333]">
                              {transaction.type}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="updates" className="space-y-6">
                <Card className="bg-[#1a1a1a] border-[#262626]">
                  <CardHeader>
                    <CardTitle className="text-white">Strategy Updates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {investment.updates.map((update) => (
                        <div key={update.id} className="border-b border-[#262626] pb-4 last:border-b-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <Calendar className="h-4 w-4 text-[#717179]" />
                            <span className="text-[#717179] text-sm">{update.date}</span>
                          </div>
                          <h4 className="text-white font-medium mb-2">{update.title}</h4>
                          <p className="text-[#717179]">{update.content}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Creator Info */}
            <Card className="bg-[#1a1a1a] border-[#262626]">
              <CardHeader>
                <CardTitle className="text-white">Strategy Creator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={investment.creator.avatar} />
                    <AvatarFallback className="bg-[#4a9489] text-white">AC</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-white font-medium">{investment.creator.name}</h4>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-[#717179] text-sm">{investment.creator.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-white font-medium">{investment.creator.totalIdeas}</div>
                    <div className="text-[#717179] text-sm">Ideas</div>
                  </div>
                  <div>
                    <div className="text-white font-medium">{investment.creator.totalBackers}</div>
                    <div className="text-[#717179] text-sm">Backers</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Strategy Stats */}
            <Card className="bg-[#1a1a1a] border-[#262626]">
              <CardHeader>
                <CardTitle className="text-white">Strategy Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#717179]">Total Raised</span>
                    <span className="text-white font-medium">{investment.totalRaised}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#717179]">Target</span>
                    <span className="text-white font-medium">{investment.target}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#717179]">Total Backers</span>
                    <span className="text-white font-medium">{investment.totalBackers}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#717179]">Strategy Rating</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-white font-medium">{investment.rating}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-[#1a1a1a] border-[#262626]">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-[#4a9489] hover:bg-[#3d7a6f] text-white">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Creator
                </Button>
                <Button variant="outline" className="w-full bg-[#262626] border-[#333] text-white hover:bg-[#333]">
                  <Eye className="mr-2 h-4 w-4" />
                  View Strategy Details
                </Button>
                <Button variant="outline" className="w-full bg-[#262626] border-[#333] text-white hover:bg-[#333]">
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FundingDetail; 