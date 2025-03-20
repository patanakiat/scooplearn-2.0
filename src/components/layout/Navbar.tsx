
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Lock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Pricing", path: "/pricing" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleComingSoon = () => {
    toast({
      title: "Coming Soon",
      description: "This feature is under development and will be available soon!",
      duration: 3000,
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="relative z-10 flex items-center space-x-2"
          aria-label="ScoopLearn Logo"
        >
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-scoop-600 to-scoop-500 bg-clip-text text-transparent transition-all duration-300">
            ScoopLearn
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive(link.path)
                  ? "text-scoop-600 bg-scoop-50"
                  : "text-gray-700 hover:text-scoop-600 hover:bg-scoop-50/50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="font-medium flex items-center"
            onClick={handleComingSoon}
          >
            <Lock className="mr-1 h-3.5 w-3.5" />
            Login
            <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full">Soon</span>
          </Button>
          <Button
            size="sm"
            className="bg-scoop-500/70 hover:bg-scoop-600 text-white font-medium flex items-center"
            onClick={handleComingSoon}
          >
            <Lock className="mr-1 h-3.5 w-3.5" />
            Sign Up
            <span className="ml-2 text-xs bg-scoop-600 text-white/90 px-1.5 py-0.5 rounded-full">Soon</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-10 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute inset-x-0 top-0 z-0 bg-white shadow-lg rounded-b-xl py-20 px-6 animate-slide-down">
            <nav className="flex flex-col space-y-3 mb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-md text-base font-medium transition-all ${
                    isActive(link.path)
                      ? "text-scoop-600 bg-scoop-50"
                      : "text-gray-700 hover:text-scoop-600 hover:bg-scoop-50/50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-center flex items-center"
                onClick={handleComingSoon}
              >
                <Lock className="mr-1 h-4 w-4" />
                Login
                <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full">Soon</span>
              </Button>
              <Button 
                className="w-full justify-center bg-scoop-500/70 hover:bg-scoop-600 flex items-center"
                onClick={handleComingSoon}
              >
                <Lock className="mr-1 h-4 w-4" />
                Sign Up
                <span className="ml-2 text-xs bg-scoop-600 text-white/90 px-1.5 py-0.5 rounded-full">Soon</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
