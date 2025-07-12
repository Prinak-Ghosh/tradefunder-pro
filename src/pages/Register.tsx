import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, User, Github, Chrome, TrendingUp, DollarSign } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState<"trader" | "funder">("trader");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // TODO: Implement Supabase registration
    // const { data, error } = await supabase.auth.signUp({
    //   email: email,
    //   password: password,
    //   options: {
    //     data: {
    //       role: role,
    //       full_name: fullName,
    //     }
    //   }
    // });

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, navigate to dashboard
      navigate("/dashboard");
    }, 1500);
  };

  const handleOAuthRegister = (provider: "google" | "github") => {
    // TODO: Implement OAuth registration
    console.log(`Registering with ${provider}`);
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
                Create your account
              </CardTitle>
              <CardDescription className="text-[#717179] text-center">
                Join TradeFunder and start your journey
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
                  <Label htmlFor="fullName" className="text-white">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-[#717179]" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      className="pl-10 bg-[#262626] border-[#333] text-white placeholder:text-[#717179]"
                      required
                    />
                  </div>
                </div>

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
                  <Label className="text-white">I want to be a</Label>
                  <RadioGroup
                    value={role}
                    onValueChange={(value) => setRole(value as "trader" | "funder")}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="trader" id="trader" className="text-[#4a9489]" />
                      <Label htmlFor="trader" className="flex items-center text-white cursor-pointer">
                        <TrendingUp className="mr-2 h-4 w-4" />
                        Trader
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="funder" id="funder" className="text-[#4a9489]" />
                      <Label htmlFor="funder" className="flex items-center text-white cursor-pointer">
                        <DollarSign className="mr-2 h-4 w-4" />
                        Funder
                      </Label>
                    </div>
                  </RadioGroup>
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
                      placeholder="Create a password"
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

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-[#717179]" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="pl-10 pr-10 bg-[#262626] border-[#333] text-white placeholder:text-[#717179]"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-3 text-[#717179] hover:text-white"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={agreeToTerms}
                    onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                    required
                  />
                  <Label htmlFor="terms" className="text-sm text-[#717179]">
                    I agree to the{" "}
                    <Link to="/terms" className="text-[#4a9489] hover:text-[#3d7a6f]">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-[#4a9489] hover:text-[#3d7a6f]">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#4a9489] hover:bg-[#3d7a6f] text-white"
                  disabled={isLoading || !agreeToTerms}
                >
                  {isLoading ? "Creating account..." : "Create account"}
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
                  onClick={() => handleOAuthRegister("google")}
                  className="bg-[#262626] border-[#333] text-white hover:bg-[#333]"
                >
                  <Chrome className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleOAuthRegister("github")}
                  className="bg-[#262626] border-[#333] text-white hover:bg-[#333]"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>

              <div className="text-center text-sm text-[#717179]">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#4a9489] hover:text-[#3d7a6f] transition-colors font-medium"
                >
                  Sign in
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

export default Register; 