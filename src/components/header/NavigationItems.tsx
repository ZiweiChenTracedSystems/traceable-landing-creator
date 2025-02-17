
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavigationItemsProps {
  handleSheetOpen: (
    sheet:
      | "industries"
      | "useCases"
      | "contact"
      | "values"
      | "vision"
      | "people"
      | "blog"
  ) => void;
}

const NavigationItems = ({ handleSheetOpen }: NavigationItemsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="hidden lg:flex items-center space-x-10 relative z-[1001]">
      <a href="#" className="text-base text-[#173A44] hover:text-[#066985]">
        Home
      </a>
      <button
        onClick={() => handleSheetOpen("industries")}
        className="text-base text-[#173A44] hover:text-[#066985]"
      >
        Industries
      </button>
      <button
        onClick={() => handleSheetOpen("useCases")}
        className="text-base text-[#173A44] hover:text-[#066985]"
      >
        Use Cases
      </button>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className="text-base text-[#173A44] font-normal hover:text-primary transition-colors bg-transparent hover:text-[#066985] [&>svg]:hidden"
              onClick={() => setIsOpen(!isOpen)}
              onPointerEnter={e => e.preventDefault()}
              onPointerLeave={e => e.preventDefault()}
              open={isOpen}
            >
              About Us
            </NavigationMenuTrigger>
            <NavigationMenuContent 
              onPointerEnter={e => e.preventDefault()}
              onPointerLeave={e => e.preventDefault()}
              className="w-48 py-1 bg-[#f7f7f7]"
            >
              <button
                onClick={() => {
                  handleSheetOpen("values");
                  setIsOpen(false);
                }}
                className="w-full text-left text-[#173A44] px-3 py-2 text-sm rounded hover:bg-gray-100"
              >
                Our Values
              </button>
              <button
                onClick={() => {
                  handleSheetOpen("vision");
                  setIsOpen(false);
                }}
                className="w-full text-left text-[#173A44] px-3 py-2 text-sm rounded hover:bg-gray-100"
              >
                Our Vision
              </button>
              <button
                onClick={() => {
                  handleSheetOpen("people");
                  setIsOpen(false);
                }}
                className="w-full text-left text-[#173A44] px-3 py-2 text-sm rounded hover:bg-gray-100"
              >
                Our People
              </button>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <button
        onClick={() => handleSheetOpen("blog")}
        className="text-base text-[#173A44] hover:text-[#066985]"
      >
        Blog
      </button>
      <button
        onClick={() => handleSheetOpen("contact")}
        className="text-base font-normal text-[#173A44] hover:text-[#066985]"
      >
        Contact Us
      </button>
    </nav>
  );
};

export default NavigationItems;
