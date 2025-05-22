
import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-gray-800/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo/>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#resume" className="text-sm font-medium hover:text-primary transition-colors">
              Resume
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About Me
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Theme Toggle and Download CV Button */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button size="sm" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button onClick={toggleMenu} className="p-2 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <a href="#" className="block text-sm font-medium hover:text-primary transition-colors py-2">
              Home
            </a>
            <a href="#services" className="block text-sm font-medium hover:text-primary transition-colors py-2">
              Services
            </a>
            <a href="#portfolio" className="block text-sm font-medium hover:text-primary transition-colors py-2">
              Portfolio
            </a>
            <a href="#resume" className="block text-sm font-medium hover:text-primary transition-colors py-2">
              Resume
            </a>
            <a href="#about" className="block text-sm font-medium hover:text-primary transition-colors py-2">
              About Me
            </a>
            <a href="#contact" className="block text-sm font-medium hover:text-primary transition-colors py-2">
              Contact
            </a>
            <Button size="sm" variant="outline" className="w-full rounded-full border-primary text-primary hover:bg-primary hover:text-white">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
