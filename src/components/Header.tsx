import React from 'react';
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import IndustriesSheet from './IndustriesSheet';
import UseCasesSheet from './UseCasesSheet';
import ContactUsSheet from './ContactUsSheet';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <img
              src="/lovable-uploads/973d9db4-a05a-4a45-af13-2f7b06166f5b.png"
              alt="Logo"
              className="h-12"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost">Industries</Button>
              </SheetTrigger>
              <IndustriesSheet />
            </Sheet>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost">Use Cases</Button>
              </SheetTrigger>
              <UseCasesSheet />
            </Sheet>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost">Contact Us</Button>
              </SheetTrigger>
              <ContactUsSheet />
            </Sheet>
          </nav>

          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="bg-[#F4A261] hover:bg-[#E76F51] text-white">
                  Book Demo
                </Button>
              </SheetTrigger>
              <ContactUsSheet />
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;