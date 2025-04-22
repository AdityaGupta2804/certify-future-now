import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-indigo rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">CF</span>
            </div>
            <span className="text-xl font-bold text-brand-blue">CertifyFuture</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-brand-blue transition-colors">About</Link>
            <a href="#how-it-works" className="text-gray-700 hover:text-brand-blue transition-colors">How It Works</a>
            <a href="#verify" className="text-gray-700 hover:text-brand-blue transition-colors">Verify</a>
            
            {/* Sign Up Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hover:text-brand-blue">Sign Up</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem>
                  <a href="/signup/student" className="w-full">Student</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/signup/organization" className="w-full">Organization</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Login Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                  Login
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem>
                  <a href="/login/student" className="w-full">Student</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/login/organization" className="w-full">Organization</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu />
          </Button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t py-4 px-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/about" className="text-gray-700 hover:text-brand-blue transition-colors py-2">About</Link>
              <a href="#how-it-works" className="text-gray-700 hover:text-brand-blue transition-colors py-2">How It Works</a>
              <a href="#verify" className="text-gray-700 hover:text-brand-blue transition-colors py-2">Verify</a>
              
              <div className="py-2 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-2">Sign Up As:</p>
                <div className="flex space-x-2">
                  <a href="/signup/student" className="text-brand-blue hover:underline">Student</a>
                  <span className="text-gray-300">|</span>
                  <a href="/signup/organization" className="text-brand-blue hover:underline">Organization</a>
                </div>
              </div>
              
              <div className="py-2 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-2">Login As:</p>
                <div className="flex space-x-2">
                  <a href="/login/student" className="text-brand-blue hover:underline">Student</a>
                  <span className="text-gray-300">|</span>
                  <a href="/login/organization" className="text-brand-blue hover:underline">Organization</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
