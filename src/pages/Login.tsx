import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Github, Chrome } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // TODO: Implement Supabase authentication
    // const { data, error } = await supabase.auth.signInWithPassword({
    //   email: email,
    //   password: password,
    // });

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, navigate to dashboard
      navigate("/dashboard");
    }, 1500);
  };

  const handleOAuthLogin = (provider: "google" | "github") => {
    // TODO: Implement OAuth authentication
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="min-h-screen bg-[#000000] w-full">
      <Navigation />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="bg-[#1a1a1a] border-[#262626]">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-white text-center">
                Welcome back
              </CardTitle>
              <CardDescription className="text-[#717179] text-center">
                Sign in to your TradeFunder account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-[#717179]" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 bg-[#262626] border-[#333] text-white placeholder:text-[#717179]"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-[#717179]" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10 bg-[#262626] border-[#333] text-white placeholder:text-[#717179]"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-[#717179] hover:text-white"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    />
                    <Label htmlFor="remember" className="text-sm text-[#717179]">
                      Remember me
                    </Label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-[#4a9489] hover:text-[#3d7a6f] transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#4a9489] hover:bg-[#3d7a6f] text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[#1a1a1a] px-2 text-[#717179]">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  onClick={() => handleOAuthLogin("google")}
                  className="bg-[#262626] border-[#333] text-white hover:bg-[#333]"
                >
                  <Chrome className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleOAuthLogin("github")}
                  className="bg-[#262626] border-[#333] text-white hover:bg-[#333]"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>

              <div className="text-center text-sm text-[#717179]">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-[#4a9489] hover:text-[#3d7a6f] transition-colors font-medium"
                >
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Login; 