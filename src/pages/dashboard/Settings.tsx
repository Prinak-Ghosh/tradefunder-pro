import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { User, Bell, Shield, Palette, Save, Camera } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="min-h-screen bg-[#000000] w-full">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.h1
          className="text-3xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Settings
        </motion.h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-[#1a1a1a] border border-[#262626]">
            <TabsTrigger value="profile" className="text-white">Profile</TabsTrigger>
            <TabsTrigger value="notifications" className="text-white">Notifications</TabsTrigger>
            <TabsTrigger value="security" className="text-white">Security</TabsTrigger>
            <TabsTrigger value="preferences" className="text-white">Preferences</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card className="bg-[#1a1a1a] border-[#262626]">
              <CardHeader>
                <CardTitle className="text-white">Profile Information</CardTitle>
                <CardDescription className="text-[#717179]">
                  Update your personal information and profile picture
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300" />
                    <AvatarFallback className="bg-[#4a9489] text-white text-lg">AC</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" className="bg-[#262626] border-[#333] text-white hover:bg-[#333]">
                      <Camera className="mr-2 h-4 w-4" />
                      Change Photo
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">First Name</Label>
                    <Input
                      id="firstName"
                      defaultValue="Alex"
                      className="bg-[#262626] border-[#333] text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">Last Name</Label>
                    <Input
                      id="lastName"
                      defaultValue="Chen"
                      className="bg-[#262626] border-[#333] text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="alex@example.com"
                    className="bg-[#262626] border-[#333] text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-white">Bio</Label>
                  <Input
                    id="bio"
                    defaultValue="Quantitative trader with 10+ years of experience in algorithmic trading and risk management."
                    className="bg-[#262626] border-[#333] text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role" className="text-white">Role</Label>
                  <Select defaultValue="trader">
                    <SelectTrigger className="bg-[#262626] border-[#333] text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-[#262626]">
                      <SelectItem value="trader">Trader</SelectItem>
                      <SelectItem value="funder">Funder</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="bg-[#4a9489] hover:bg-[#3d7a6f] text-white">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card className="bg-[#1a1a1a] border-[#262626]">
              <CardHeader>
                <CardTitle className="text-white">Notification Preferences</CardTitle>
                <CardDescription className="text-[#717179]">
                  Choose how you want to be notified about important events
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-white">Email Notifications</Label>
                    <p className="text-sm text-[#717179]">Receive notifications via email</p>
                  </div>
                  <Switch
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-white">Push Notifications</Label>
                    <p className="text-sm text-[#717179]">Receive notifications in your browser</p>
                  </div>
                  <Switch
                    checked={pushNotifications}
                    onCheckedChange={setPushNotifications}
                  />
                </div>

                <div className="space-y-4">
                  <h4 className="text-white font-medium">Email Notifications</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="trade-updates" defaultChecked className="rounded" />
                      <Label htmlFor="trade-updates" className="text-white">Trade updates and performance</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="funding-opportunities" defaultChecked className="rounded" />
                      <Label htmlFor="funding-opportunities" className="text-white">New funding opportunities</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="market-alerts" className="rounded" />
                      <Label htmlFor="market-alerts" className="text-white">Market alerts and news</Label>
                    </div>
                  </div>
                </div>

                <Button className="bg-[#4a9489] hover:bg-[#3d7a6f] text-white">
                  <Save className="mr-2 h-4 w-4" />
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card className="bg-[#1a1a1a] border-[#262626]">
              <CardHeader>
                <CardTitle className="text-white">Security Settings</CardTitle>
                <CardDescription className="text-[#717179]">
                  Manage your account security and privacy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword" className="text-white">Current Password</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    className="bg-[#262626] border-[#333] text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword" className="text-white">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    className="bg-[#262626] border-[#333] text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white">Confirm New Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    className="bg-[#262626] border-[#333] text-white"
                  />
                </div>

                <Button className="bg-[#4a9489] hover:bg-[#3d7a6f] text-white">
                  <Shield className="mr-2 h-4 w-4" />
                  Update Password
                </Button>

                <div className="border-t border-[#262626] pt-6">
                  <h4 className="text-white font-medium mb-4">Two-Factor Authentication</h4>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-white">Enable 2FA</Label>
                      <p className="text-sm text-[#717179]">Add an extra layer of security to your account</p>
                    </div>
                    <Button variant="outline" className="bg-[#262626] border-[#333] text-white hover:bg-[#333]">
                      Setup 2FA
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-6">
            <Card className="bg-[#1a1a1a] border-[#262626]">
              <CardHeader>
                <CardTitle className="text-white">App Preferences</CardTitle>
                <CardDescription className="text-[#717179]">
                  Customize your trading experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-white">Dark Mode</Label>
                    <p className="text-sm text-[#717179]">Use dark theme for the application</p>
                  </div>
                  <Switch
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone" className="text-white">Timezone</Label>
                  <Select defaultValue="utc">
                    <SelectTrigger className="bg-[#262626] border-[#333] text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-[#262626]">
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="est">Eastern Time</SelectItem>
                      <SelectItem value="pst">Pacific Time</SelectItem>
                      <SelectItem value="gmt">GMT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currency" className="text-white">Default Currency</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger className="bg-[#262626] border-[#333] text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-[#262626]">
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="gbp">GBP (£)</SelectItem>
                      <SelectItem value="jpy">JPY (¥)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="bg-[#4a9489] hover:bg-[#3d7a6f] text-white">
                  <Save className="mr-2 h-4 w-4" />
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Settings; 