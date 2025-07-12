import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="w-full border-b border-[#262626] sticky top-0 z-50 bg-black">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="text-white font-bold text-xl">TradeFunder</div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-white hover:text-[#4a9489] transition-colors text-sm font-medium">
              About
            </Link>
            <Link to="/ideas" className="text-white hover:text-[#4a9489] transition-colors text-sm font-medium">
              Ideas
            </Link>
            <Link to="/funding" className="text-white hover:text-[#4a9489] transition-colors text-sm font-medium">
              Funding
            </Link>
            <Link to="/dashboard" className="text-white hover:text-[#4a9489] transition-colors text-sm font-medium">
              Dashboard
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            <Link to="/login">
              <Button variant="outline" size="sm" className="bg-[#1a1a1a] border border-[#262626] text-white hover:bg-[#262626] rounded-lg shadow-sm">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-[#4a9489] hover:bg-[#3d7a6f] text-white rounded-lg shadow-sm">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
