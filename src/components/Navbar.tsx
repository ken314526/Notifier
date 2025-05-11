
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-brand-blue text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold flex items-center">
            <svg 
              className="w-6 h-6 mr-2 md:w-8 md:h-8"
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M14 3L4 9V21L14 15L24 21V9L14 3Z" 
                fill="currentColor" 
                fillOpacity="0.8"
              />
            </svg>
            <span className="text-base md:text-xl">Lookscout</span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-gray-200 transition-colors">
            Home
          </Link>
          <Link to="/products" className="hover:text-gray-200 transition-colors">
            Our Products
          </Link>
          <Link to="/resources" className="hover:text-gray-200 transition-colors">
            Resources
          </Link>
          <Link to="/contact" className="hover:text-gray-200 transition-colors">
            Contacts
          </Link>
        </nav>
        
        {/* Desktop auth buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:text-gray-200 hover:bg-brand-darkBlue">
            Log in
          </Button>
          <Button variant="outline" className="bg-white text-brand-blue hover:bg-gray-100">
            Sign up
          </Button>
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-blue border-t border-white/10 mt-4">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-3 py-3">
              <Link 
                to="/" 
                className="hover:text-gray-200 transition-colors py-2" 
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="hover:text-gray-200 transition-colors py-2" 
                onClick={toggleMenu}
              >
                Our Products
              </Link>
              <Link 
                to="/resources" 
                className="hover:text-gray-200 transition-colors py-2" 
                onClick={toggleMenu}
              >
                Resources
              </Link>
              <Link 
                to="/contact" 
                className="hover:text-gray-200 transition-colors py-2" 
                onClick={toggleMenu}
              >
                Contacts
              </Link>
              <div className="flex space-x-4 pt-2">
                <Button variant="ghost" className="text-white hover:text-gray-200 hover:bg-brand-darkBlue w-full">
                  Log in
                </Button>
                <Button variant="outline" className="bg-white text-brand-blue hover:bg-gray-100 w-full">
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
