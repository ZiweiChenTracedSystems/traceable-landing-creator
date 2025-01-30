import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto">
        <div className="flex items-center h-16">
          <div className="flex items-center space-x-12 w-full">
            <a href="/" className="text-xl font-bold text-primary">Traced</a>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Industries</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Use Cases</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">About Us</a>
            </nav>
            
            <Button className="hidden md:inline-flex bg-blue-500 hover:bg-blue-600 text-white rounded-md px-6">
              Book Demo
            </Button>
          </div>

          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;