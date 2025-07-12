import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { 
  Users,
  TrendingUp,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  BarChart3,
  Calendar,
  Target,
  Star
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data - replace with real data from Supabase
  const metrics = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+156",
      changeType: "positive" as const,
      icon: Users,
    },
    {
      title: "Active Ideas",
      value: "342",
      change: "+23",
      changeType: "positive" as const,
      icon: TrendingUp,
    },
    {
      title: "Total Funding",
      value: "$1.2M",
      change: "+$89K",
      changeType: "positive" as const,
      icon: DollarSign,
    },
    {
      title: "Pending Reviews",
      value: "12",
      change: "-3",
      changeType: "negative" as const,
      icon: AlertTriangle,
    },
  ];

  const pendingIdeas = [
    {
      id: 1,
      title: "Advanced Crypto Arbitrage Bot",
      creator: "Alex Chen",
      submitted: "2024-02-15",
      category: "Crypto",
      target: "$15,000",
      status: "pending",
    },
    {
      id: 2,
      title: "Options Trading Masterclass",
      creator: "Sarah Rodriguez",
      submitted: "2024-02-14",
      category: "Education",
      target: "$8,000",
      status: "pending",
    },
    {
      id: 3,
      title: "Forex Scalping Strategy",
      creator: "Mike Johnson",
      submitted: "2024-02-13",
      category: "Forex",
      target: "$12,000",
      status: "pending",
    },
  ];

  const recentUsers = [
    {
      id: 1,
      name: "John Smith",
      email: "john@example.com",
      joined: "2024-02-15",
      status: "active",
      ideas: 2,
      investments: 5,
    },
    {
      id: 2,
      name: "Emily Davis",
      email: "emily@example.com",
      joined: "2024-02-14",
      status: "active",
      ideas: 0,
      investments: 3,
    },
    {
      id: 3,
      name: "David Wilson",
      email: "david@example.com",
      joined: "2024-02-13",
      status: "pending",
      ideas: 1,
      investments: 0,
    },
  ];

  const platformStats = [
    {
      title: "Monthly Active Users",
      value: "1,847",
      change: "+12%",
      changeType: "positive" as const,
    },
    {
      title: "Ideas Created",
      value: "156",
      change: "+8%",
      changeType: "positive" as const,
    },
    {
      title: "Total Investments",
      value: "$89K",
      change: "+15%",
      changeType: "positive" as const,
    },
    {
      title: "Success Rate",
      value: "78%",
      change: "+3%",
      changeType: "positive" as const,
    },
  ];

  const handleApproveIdea = (id: number) => {
    // TODO: Implement approval logic with Supabase
    console.log("Approving idea:", id);
  };

  const handleRejectIdea = (id: number) => {
    // TODO: Implement rejection logic with Supabase
    console.log("Rejecting idea:", id);
  };

  const handleViewIdea = (id: number) => {
    // TODO: Navigate to idea details
    console.log("Viewing idea:", id);
  };

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
            Admin Dashboard
          </motion.h1>
          <p className="text-[#717179]">Platform management and analytics</p>
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
                      <p className={`text-sm ${
                        metric.changeType === "positive" ? "text-green-500" : "text-red-500"
                      }`}>
                        {metric.change}
                      </p>
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
            <TabsTrigger value="moderation" className="text-white">Moderation</TabsTrigger>
            <TabsTrigger value="users" className="text-white">Users</TabsTrigger>
            <TabsTrigger value="analytics" className="text-white">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Pending Reviews */}
              <Card className="bg-[#1a1a1a] border-[#262626]">
                <CardHeader>
                  <CardTitle className="text-white">Pending Reviews</CardTitle>
                  <CardDescription className="text-[#717179]">
                    Ideas awaiting approval
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingIdeas.slice(0, 3).map((idea) => (
                      <div key={idea.id} className="flex items-center justify-between p-3 bg-[#262626] rounded-lg">
                        <div>
                          <p className="text-white font-medium">{idea.title}</p>
                          <p className="text-[#717179] text-sm">by {idea.creator}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-[#4a9489] border-[#4a9489]">
                              {idea.category}
                            </Badge>
                            <span className="text-[#717179] text-sm">{idea.target}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            onClick={() => handleViewIdea(idea.id)}
                            className="bg-[#4a9489] hover:bg-[#3d7a6f] text-white"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => handleApproveIdea(idea.id)}
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => handleRejectIdea(idea.id)}
                            className="bg-red-600 hover:bg-red-700 text-white"
                          >
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Users */}
              <Card className="bg-[#1a1a1a] border-[#262626]">
                <CardHeader>
                  <CardTitle className="text-white">Recent Users</CardTitle>
                  <CardDescription className="text-[#717179]">
                    New platform registrations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentUsers.map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-3 bg-[#262626] rounded-lg">
                        <div>
                          <p className="text-white font-medium">{user.name}</p>
                          <p className="text-[#717179] text-sm">{user.email}</p>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-[#717179] text-sm">{user.ideas} ideas</span>
                            <span className="text-[#717179] text-sm">{user.investments} investments</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={user.status === "active" ? "default" : "secondary"}>
                            {user.status}
                          </Badge>
                          <p className="text-[#717179] text-sm mt-1">{user.joined}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="moderation" className="space-y-6">
            <Card className="bg-[#1a1a1a] border-[#262626]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Content Moderation</CardTitle>
                    <CardDescription className="text-[#717179]">
                      Review and approve submitted ideas
                    </CardDescription>
                  </div>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-40 bg-[#262626] border-[#333] text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-[#262626]">
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingIdeas.map((idea) => (
                    <div key={idea.id} className="flex items-center justify-between p-4 bg-[#262626] rounded-lg">
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-2">{idea.title}</h3>
                        <p className="text-[#717179] text-sm mb-2">by {idea.creator}</p>
                        <div className="flex items-center space-x-4">
                          <Badge variant="outline" className="text-[#4a9489] border-[#4a9489]">
                            {idea.category}
                          </Badge>
                          <span className="text-[#717179] text-sm">Target: {idea.target}</span>
                          <span className="text-[#717179] text-sm">Submitted: {idea.submitted}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          onClick={() => handleViewIdea(idea.id)}
                          className="bg-[#4a9489] hover:bg-[#3d7a6f] text-white"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleApproveIdea(idea.id)}
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleRejectIdea(idea.id)}
                          className="bg-red-600 hover:bg-red-700 text-white"
                        >
                          <XCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="bg-[#1a1a1a] border-[#262626]">
              <CardHeader>
                <CardTitle className="text-white">User Management</CardTitle>
                <CardDescription className="text-[#717179]">
                  Manage platform users and their activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 bg-[#262626] rounded-lg">
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-2">{user.name}</h3>
                        <p className="text-[#717179] text-sm mb-2">{user.email}</p>
                        <div className="flex items-center space-x-4">
                          <span className="text-[#717179] text-sm">Joined: {user.joined}</span>
                          <span className="text-[#717179] text-sm">{user.ideas} ideas created</span>
                          <span className="text-[#717179] text-sm">{user.investments} investments made</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={user.status === "active" ? "default" : "secondary"}>
                          {user.status}
                        </Badge>
                        <div className="mt-2">
                          <Button size="sm" variant="outline" className="bg-[#262626] border-[#333] text-white hover:bg-[#333]">
                            View Profile
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Platform Stats */}
              <Card className="bg-[#1a1a1a] border-[#262626]">
                <CardHeader>
                  <CardTitle className="text-white">Platform Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {platformStats.map((stat) => (
                      <div key={stat.title} className="flex items-center justify-between p-3 bg-[#262626] rounded-lg">
                        <div>
                          <p className="text-white font-medium">{stat.title}</p>
                          <p className={`text-sm ${
                            stat.changeType === "positive" ? "text-green-500" : "text-red-500"
                          }`}>
                            {stat.change}
                          </p>
                        </div>
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Chart Placeholder */}
              <Card className="bg-[#1a1a1a] border-[#262626]">
                <CardHeader>
                  <CardTitle className="text-white">Growth Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-[#262626] rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-[#717179] mx-auto mb-2" />
                      <p className="text-[#717179]">Analytics charts will be implemented</p>
                      <p className="text-[#717179] text-sm">User growth, revenue, engagement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard; 