
import React from 'react';
import Button1 from '../ui/button-1';

interface IndustrySheetCTAProps {
  title: string;
  description: string;
}

const IndustrySheetCTA = ({ title, description }: IndustrySheetCTAProps) => {
  return (
    <div className="w-full bg-[#F2F1EE]">
      <div className="max-w-7xl mx-auto px-12 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-2/3 text-left">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {title}
            </h3>
            <p className="text-gray-600 mb-6">{description}</p>
            <Button1>
              Book Demo
            </Button1>
          </div>
          <div className="w-full md:w-1/3">
            <picture>
              <source 
                media="(min-width: 768px)" 
                srcSet="/lovable-uploads/1a2cdca0-9689-4954-b603-5fe8c1cce981.png"
              />
              <img 
                src="/lovable-uploads/73fb0791-7878-4102-a4df-ac7ce16350f1.png"
                alt="David Dolhomut"
                className="w-48 md:w-full h-auto rounded-lg shadow-lg object-cover mx-auto md:mx-0"
              />
            </picture>
            <div className="block md:hidden mt-4 text-center md:text-left">
              <h3 className="font-bold text-lg text-primary">David Dolhomut</h3>
              <p className="text-gray-600">Head of Partnerships & Business Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySheetCTA;
