
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return <nav className="w-full border-b border-[#262626] sticky top-0 z-50 bg-black">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="text-white font-bold text-xl">Webfluin</div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-white hover:text-[#4a9489] transition-colors text-sm font-medium">
              About
            </Link>
            <a href="/pricing" className="text-white hover:text-[#4a9489] transition-colors text-sm font-medium">
              Pricing
            </a>
            <a href="/changelog" className="text-white hover:text-[#4a9489] transition-colors text-sm font-medium">
              Changelog
            </a>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="bg-[#1a1a1a] border border-[#262626] text-white hover:bg-[#fffff] rounded-lg shadow-sm">
              Chat with sales
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};

export default Navigation;
