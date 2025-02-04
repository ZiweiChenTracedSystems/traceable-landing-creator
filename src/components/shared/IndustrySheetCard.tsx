import React from 'react';
import { ArrowRight } from "lucide-react";

interface IndustrySheetCardProps {
  title: string;
  content: string;
  iconSrc: string;
}

const IndustrySheetCard = ({ title, content, iconSrc }: IndustrySheetCardProps) => {
  return (
    <div className="group relative bg-white rounded-xl p-6 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] min-h-[400px] overflow-hidden cursor-pointer transition-all duration-300">
      <div className="flex flex-col items-center group-hover:opacity-0 transition-opacity duration-300 absolute inset-0 p-6">
        <img src={iconSrc} alt={title} className="w-16 h-16 mb-6" />
        <h3 className="text-xl font-semibold text-center text-primary">{title}</h3>
      </div>
      
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full flex flex-col">
        <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>
        <p className="text-gray-600 flex-grow">{content}</p>
        <div className="flex justify-end mt-4">
          <ArrowRight className="w-5 h-5 text-[#E1B382]" />
        </div>
      </div>
    </div>
  );
};

export default IndustrySheetCard;