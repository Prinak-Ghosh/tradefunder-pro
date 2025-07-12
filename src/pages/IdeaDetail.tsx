import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { 
  ArrowLeft,
  Star,
  Users,
  Clock,
  DollarSign,
  TrendingUp,
  TrendingDown,
  MessageCircle,
  Share2,
  Heart,
  Calendar,
  Target,
  BarChart3
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const IdeaDetail = () => {
  const { id } = useParams();
  const [fundingAmount, setFundingAmount] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data - replace with real data from Supabase
  const idea = {
    id: 1,
    title: "TSLA Breakout Strategy",
    creator: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
      rating: 4.8,
      totalIdeas: 12,
      totalBackers: 456
    },
    category: "Stocks",
    performance: "+45.2%",
    performanceType: "positive" as const,
    backers: 128,
    target: "$5,000",
    raised: "$3,200",
    rating: 4.8,
    daysLeft: 15,
    description: "Technical analysis based breakout strategy for Tesla stock with clear entry and exit points. This strategy leverages key support and resistance levels to identify high-probability breakout opportunities.",
    longDescription: `
      <h3>Strategy Overview</h3>
      <p>This TSLA breakout strategy is designed to capitalize on Tesla's volatile price movements by identifying key breakout levels and executing trades with proper risk management.</p>
      
      <h3>Entry Criteria</h3>
      <ul>
        <li>Price breaks above key resistance level with volume confirmation</li>
        <li>RSI above 50 and trending upward</li>
        <li>MACD showing bullish crossover</li>
        <li>Support level within 5% of current price</li>
      </ul>
      
      <h3>Exit Strategy</h3>
      <ul>
        <li>Take profit at 2:1 risk-reward ratio</li>
        <li>Stop loss at recent support level</li>
        <li>Trailing stop for extended moves</li>
      </ul>
      
      <h3>Risk Management</h3>
      <p>Maximum risk per trade: 2% of allocated capital. Position sizing based on volatility and account size.</p>
    `,
    tags: ["Breakout", "Technical Analysis", "Large Cap", "Momentum"],
    timeline: [
      { date: "2024-01-15", event: "Strategy Development Complete" },
      { date: "2024-01-20", event: "Backtesting Phase" },
      { date: "2024-02-01", event: "Live Trading Begins" },
      { date: "2024-02-15", event: "First Funding Round" }
    ],
    updates: [
      {
        id: 1,
        date: "2024-02-15",
        title: "Strategy Performance Update",
        content: "The TSLA breakout strategy has shown excellent performance in recent market conditions, with 8 out of 10 trades being profitable."
      },
      {
        id: 2,
        date: "2024-02-10",
        title: "Market Analysis Update",
        content: "Tesla's technical setup looks promising for potential breakout opportunities in the coming week."
      }
    ],
    comments: [
      {
        id: 1,
        user: "Sarah Rodriguez",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?auto=format&fit=crop&q=80&w=300&h=300",
        content: "Great strategy! I've been following Alex's trades and the results are impressive.",
        date: "2 hours ago",
        likes: 12
      },
      {
        id: 2,
        user: "Mike Johnson",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300",
        content: "What's your take on the current TSLA support levels?",
        date: "1 day ago",
        likes: 8
      }
    ]
  };

  const handleFund = () => {
    // TODO: Implement funding logic with Supabase
    console.log("Funding amount:", fundingAmount);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="min-h-screen bg-[#000000] w-full">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/ideas">
          <Button variant="outline" className="mb-6 bg-[#262626] border-[#333] text-white hover:bg-[#333]">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Ideas
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
                      {idea.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-white text-sm">{idea.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleLike}
                      className={`bg-[#262626] border-[#333] text-white hover:bg-[#333] ${
                        isLiked ? "text-red-500 border-red-500" : ""
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
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
                <CardTitle className="text-white text-2xl mb-2">{idea.title}</CardTitle>
                <CardDescription className="text-[#717179] text-lg">
                  by {idea.creator.name}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="bg-[#1a1a1a] border border-[#262626]">
                <TabsTrigger value="overview" className="text-white">Overview</TabsTrigger>
                <TabsTrigger value="strategy" className="text-white">Strategy</TabsTrigger>
                <TabsTrigger value="updates" className="text-white">Updates</TabsTrigger>
                <TabsTrigger value="discussion" className="text-white">Discussion</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card className="bg-[#1a1a1a] border-[#262626]">
                  <CardHeader>
                    <CardTitle className="text-white">About This Strategy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#717179] leading-relaxed mb-6">{idea.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center p-4 bg-[#262626] rounded-lg">
                        <div className="text-2xl font-bold text-white mb-1">{idea.performance}</div>
                        <div className="text-sm text-[#717179]">Performance</div>
                      </div>
                      <div className="text-center p-4 bg-[#262626] rounded-lg">
                        <div className="text-2xl font-bold text-white mb-1">{idea.backers}</div>
                        <div className="text-sm text-[#717179]">Backers</div>
                      </div>
                      <div className="text-center p-4 bg-[#262626] rounded-lg">
                        <div className="text-2xl font-bold text-white mb-1">{idea.daysLeft}</div>
                        <div className="text-sm text-[#717179]">Days Left</div>
                      </div>
                      <div className="text-center p-4 bg-[#262626] rounded-lg">
                        <div className="text-2xl font-bold text-white mb-1">{idea.creator.totalIdeas}</div>
                        <div className="text-sm text-[#717179]">Creator Ideas</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-white font-medium">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {idea.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-[#262626] text-[#717179]">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="strategy" className="space-y-6">
                <Card className="bg-[#1a1a1a] border-[#262626]">
                  <CardHeader>
                    <CardTitle className="text-white">Strategy Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div 
                      className="text-[#717179] leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: idea.longDescription }}
                    />
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
                      {idea.updates.map((update) => (
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

              <TabsContent value="discussion" className="space-y-6">
                <Card className="bg-[#1a1a1a] border-[#262626]">
                  <CardHeader>
                    <CardTitle className="text-white">Discussion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-6">
                      <div className="flex space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300" />
                          <AvatarFallback className="bg-[#4a9489] text-white">AC</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <Input
                            placeholder="Add a comment..."
                            className="bg-[#262626] border-[#333] text-white placeholder:text-[#717179]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {idea.comments.map((comment) => (
                        <div key={comment.id} className="flex space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={comment.avatar} />
                            <AvatarFallback className="bg-[#4a9489] text-white">
                              {comment.user.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-white font-medium">{comment.user}</span>
                              <span className="text-[#717179] text-sm">{comment.date}</span>
                            </div>
                            <p className="text-[#717179] mb-2">{comment.content}</p>
                            <div className="flex items-center space-x-4">
                              <button className="flex items-center space-x-1 text-[#717179] hover:text-white transition-colors">
                                <Heart className="h-4 w-4" />
                                <span className="text-sm">{comment.likes}</span>
                              </button>
                              <button className="text-[#717179] hover:text-white transition-colors text-sm">
                                Reply
                              </button>
                            </div>
                          </div>
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
                <CardTitle className="text-white">Creator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={idea.creator.avatar} />
                    <AvatarFallback className="bg-[#4a9489] text-white">AC</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-white font-medium">{idea.creator.name}</h4>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-[#717179] text-sm">{idea.creator.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-white font-medium">{idea.creator.totalIdeas}</div>
                    <div className="text-[#717179] text-sm">Ideas</div>
                  </div>
                  <div>
                    <div className="text-white font-medium">{idea.creator.totalBackers}</div>
                    <div className="text-[#717179] text-sm">Backers</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Funding Widget */}
            <Card className="bg-[#1a1a1a] border-[#262626]">
              <CardHeader>
                <CardTitle className="text-white">Fund This Strategy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">${idea.raised}</div>
                  <div className="text-[#717179] text-sm">raised of ${idea.target} goal</div>
                </div>
                
                <div className="w-full bg-[#333] rounded-full h-3">
                  <div 
                    className="bg-[#4a9489] h-3 rounded-full"
                    style={{ width: `${(parseInt(idea.raised.replace('$', '').replace(',', '')) / parseInt(idea.target.replace('$', '').replace(',', ''))) * 100}%` }}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-white font-medium">{idea.backers}</div>
                    <div className="text-[#717179] text-sm">Backers</div>
                  </div>
                  <div>
                    <div className="text-white font-medium">{idea.daysLeft}</div>
                    <div className="text-[#717179] text-sm">Days Left</div>
                  </div>
                  <div>
                    <div className="text-white font-medium">{idea.performance}</div>
                    <div className="text-[#717179] text-sm">Performance</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={fundingAmount}
                    onChange={(e) => setFundingAmount(e.target.value)}
                    className="bg-[#262626] border-[#333] text-white placeholder:text-[#717179]"
                  />
                  <Button 
                    className="w-full bg-[#4a9489] hover:bg-[#3d7a6f] text-white"
                    onClick={handleFund}
                  >
                    <DollarSign className="mr-2 h-4 w-4" />
                    Fund Strategy
                  </Button>
                </div>

                <div className="text-center text-sm text-[#717179]">
                  <p>• Secure escrow protection</p>
                  <p>• Performance-based returns</p>
                  <p>• Transparent tracking</p>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="bg-[#1a1a1a] border-[#262626]">
              <CardHeader>
                <CardTitle className="text-white">Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {idea.timeline.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-[#4a9489] rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium text-sm">{item.event}</div>
                        <div className="text-[#717179] text-sm">{item.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IdeaDetail; 