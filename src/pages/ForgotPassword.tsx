import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // TODO: Implement Supabase password reset
    // const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    //   redirectTo: `${window.location.origin}/reset-password`,
    // });

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
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
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-[#4a9489] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Check your email</h2>
                  <p className="text-[#717179]">
                    We've sent a password reset link to <strong>{email}</strong>
                  </p>
                  <p className="text-sm text-[#717179]">
                    If you don't see it, check your spam folder or{" "}
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="text-[#4a9489] hover:text-[#3d7a6f] transition-colors"
                    >
                      try again
                    </button>
                  </p>
                  <div className="pt-4">
                    <Link
                      to="/login"
                      className="inline-flex items-center text-[#4a9489] hover:text-[#3d7a6f] transition-colors"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to login
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <Footer />
      </div>
    );
  }

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
                Forgot your password?
              </CardTitle>
              <CardDescription className="text-[#717179] text-center">
                Enter your email address and we'll send you a link to reset your password
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="pl-10 bg-[#262626] border-[#333] text-white placeholder:text-[#717179]"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#4a9489] hover:bg-[#3d7a6f] text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send reset link"}
                </Button>
              </form>

              <div className="text-center">
                <Link
                  to="/login"
                  className="inline-flex items-center text-[#4a9489] hover:text-[#3d7a6f] transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to login
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

export default ForgotPassword; 