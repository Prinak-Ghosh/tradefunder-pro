import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const mockIdeas = [
  { id: 1, title: "TSLA Breakout", status: "Active", pnl: "+$320", funded: true },
  { id: 2, title: "AAPL Swing", status: "Closed", pnl: "-$50", funded: false },
  { id: 3, title: "ETH/USD Scalping", status: "Active", pnl: "+$120", funded: true },
];

const mockFunded = [
  { id: 1, idea: "BTC/USD Momentum", amount: "$500", status: "Active" },
  { id: 2, idea: "SPY Options", amount: "$200", status: "Closed" },
];

const Portfolio = () => {
  const [tab, setTab] = useState("ideas");

  return (
    <div className="min-h-screen bg-[#000000] w-full">
      <Navigation />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <motion.h1
          className="text-3xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Portfolio
        </motion.h1>
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="bg-[#1a1a1a] border border-[#262626] mb-6">
            <TabsTrigger value="ideas" className="text-white">Trade Ideas</TabsTrigger>
            <TabsTrigger value="funded" className="text-white">Funded Trades</TabsTrigger>
            <TabsTrigger value="charts" className="text-white">Performance</TabsTrigger>
          </TabsList>
          <TabsContent value="ideas">
            <Card className="bg-[#1a1a1a] border-[#262626] mb-8">
              <CardHeader>
                <CardTitle className="text-white">My Trade Ideas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left">
                    <thead>
                      <tr className="text-[#717179] border-b border-[#262626]">
                        <th className="py-2 px-4">Title</th>
                        <th className="py-2 px-4">Status</th>
                        <th className="py-2 px-4">P&L</th>
                        <th className="py-2 px-4">Funded</th>
                        <th className="py-2 px-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockIdeas.map((idea) => (
                        <tr key={idea.id} className="border-b border-[#262626]">
                          <td className="py-2 px-4 text-white">{idea.title}</td>
                          <td className="py-2 px-4">
                            <Badge variant={idea.status === "Active" ? "default" : "secondary"}>{idea.status}</Badge>
                          </td>
                          <td className={`py-2 px-4 ${idea.pnl.startsWith("+") ? "text-green-500" : "text-red-500"}`}>{idea.pnl}</td>
                          <td className="py-2 px-4">{idea.funded ? <Badge>Yes</Badge> : <Badge variant="secondary">No</Badge>}</td>
                          <td className="py-2 px-4">
                            <Button size="sm" variant="outline" className="bg-[#262626] border-[#333] text-white hover:bg-[#333]">
                              View
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="funded">
            <Card className="bg-[#1a1a1a] border-[#262626] mb-8">
              <CardHeader>
                <CardTitle className="text-white">My Funded Trades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left">
                    <thead>
                      <tr className="text-[#717179] border-b border-[#262626]">
                        <th className="py-2 px-4">Idea</th>
                        <th className="py-2 px-4">Amount</th>
                        <th className="py-2 px-4">Status</th>
                        <th className="py-2 px-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockFunded.map((fund) => (
                        <tr key={fund.id} className="border-b border-[#262626]">
                          <td className="py-2 px-4 text-white">{fund.idea}</td>
                          <td className="py-2 px-4">{fund.amount}</td>
                          <td className="py-2 px-4">
                            <Badge variant={fund.status === "Active" ? "default" : "secondary"}>{fund.status}</Badge>
                          </td>
                          <td className="py-2 px-4">
                            <Button size="sm" variant="outline" className="bg-[#262626] border-[#333] text-white hover:bg-[#333]">
                              View
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="charts">
            <Card className="bg-[#1a1a1a] border-[#262626] mb-8">
              <CardHeader>
                <CardTitle className="text-white">Performance Charts</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Placeholder for charts - replace with real chart components */}
                <div className="h-64 flex items-center justify-center text-[#717179]">
                  [Performance charts coming soon]
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

export default Portfolio; 