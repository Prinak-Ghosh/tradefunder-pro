import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { SubscriptionStatus } from "@/components/SubscriptionStatus";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Eye, 
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Star
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data - replace with real data from Supabase
  const metrics = [
    {
      title: "Total Portfolio Value",
      value: "$12,450.00",
      change: "+12.5%",
      changeType: "positive" as const,
      icon: DollarSign,
    },
    {
      title: "Active Trades",
      value: "8",
      change: "+2",
      changeType: "positive" as const,
      icon: TrendingUp,
    },
    {
      title: "Total Followers",
      value: "1,234",
      change: "+45",
      changeType: "positive" as const,
      icon: Users,
    },
    {
      title: "Profile Views",
      value: "5,678",
      change: "-12",
      changeType: "negative" as const,
      icon: Eye,
    },
  ];

  const recentTrades = [
    {
      id: 1,
      title: "TSLA Long Position",
      type: "LONG",
      amount: "$2,500",
      status: "ACTIVE",
      pnl: "+$450",
      pnlType: "positive" as const,
      date: "2 hours ago",
    },
    {
      id: 2,
      title: "AAPL Short Position",
      type: "SHORT",
      amount: "$1,800",
      status: "CLOSED",
      pnl: "-$120",
      pnlType: "negative" as const,
      date: "1 day ago",
    },
    {
      id: 3,
      title: "NVDA Long Position",
      type: "LONG",
      amount: "$3,200",
      status: "ACTIVE",
      pnl: "+$890",
      pnlType: "positive" as const,
      date: "3 days ago",
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
    },
  ];

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
            Dashboard
          </motion.h1>
          <p className="text-[#717179]">Welcome back! Here's what's happening with your account.</p>
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
            <TabsTrigger value="trades" className="text-white">Recent Trades</TabsTrigger>
            <TabsTrigger value="funding" className="text-white">Funding</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Trades */}
              <Card className="bg-[#1a1a1a] border-[#262626]">
                <CardHeader>
                  <CardTitle className="text-white">Recent Trades</CardTitle>
                  <CardDescription className="text-[#717179]">
                    Your latest trading activity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentTrades.slice(0, 3).map((trade) => (
                      <div key={trade.id} className="flex items-center justify-between p-3 bg-[#262626] rounded-lg">
                        <div>
                          <p className="text-white font-medium">{trade.title}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant={trade.type === "LONG" ? "default" : "secondary"}>
                              {trade.type}
                            </Badge>
                            <Badge variant={trade.status === "ACTIVE" ? "default" : "outline"}>
                              {trade.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium">{trade.amount}</p>
                          <p className={`text-sm ${
                            trade.pnlType === "positive" ? "text-green-500" : "text-red-500"
                          }`}>
                            {trade.pnl}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link to="/dashboard/portfolio">
                      <Button variant="outline" className="w-full bg-[#262626] border-[#333] text-white hover:bg-[#333]">
                        View All Trades
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-[#1a1a1a] border-[#262626]">
                <CardHeader>
                  <CardTitle className="text-white">Quick Actions</CardTitle>
                  <CardDescription className="text-[#717179]">
                    Get started with trading
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link to="/ideas/create">
                    <Button className="w-full bg-[#4a9489] hover:bg-[#3d7a6f] text-white">
                      <Plus className="mr-2 h-4 w-4" />
                      Create Trade Idea
                    </Button>
                  </Link>
                  <Link to="/ideas">
                    <Button variant="outline" className="w-full bg-[#262626] border-[#333] text-white hover:bg-[#333]">
                      <Eye className="mr-2 h-4 w-4" />
                      Browse Ideas
                    </Button>
                  </Link>
                  <Link to="/funding">
                    <Button variant="outline" className="w-full bg-[#262626] border-[#333] text-white hover:bg-[#333]">
                      <DollarSign className="mr-2 h-4 w-4" />
                      Funding Opportunities
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trades" className="space-y-6">
            <Card className="bg-[#1a1a1a] border-[#262626]">
              <CardHeader>
                <CardTitle className="text-white">All Recent Trades</CardTitle>
                <CardDescription className="text-[#717179]">
                  Complete list of your trading activity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTrades.map((trade) => (
                    <div key={trade.id} className="flex items-center justify-between p-4 bg-[#262626] rounded-lg">
                      <div>
                        <p className="text-white font-medium">{trade.title}</p>
                        <p className="text-[#717179] text-sm">{trade.date}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant={trade.type === "LONG" ? "default" : "secondary"}>
                            {trade.type}
                          </Badge>
                          <Badge variant={trade.status === "ACTIVE" ? "default" : "outline"}>
                            {trade.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-medium">{trade.amount}</p>
                        <p className={`text-sm ${
                          trade.pnlType === "positive" ? "text-green-500" : "text-red-500"
                        }`}>
                          {trade.pnl}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="funding" className="space-y-6">
            <Card className="bg-[#1a1a1a] border-[#262626]">
              <CardHeader>
                <CardTitle className="text-white">Funding Opportunities</CardTitle>
                <CardDescription className="text-[#717179]">
                  Discover creators to fund
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fundingOpportunities.map((opportunity) => (
                    <div key={opportunity.id} className="p-4 bg-[#262626] rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-white font-medium">{opportunity.title}</h3>
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
                              <span className="text-[#717179] text-sm">{opportunity.daysLeft} days left</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
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
                        <Link to={`/funding/${opportunity.id}`}>
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

          {/* Subscription Status */}
          <div className="lg:col-span-2">
            <SubscriptionStatus />
          </div>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard; 