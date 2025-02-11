
import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SheetBackButton from './shared/SheetBackButton';
import AboutCTA from './shared/AboutCTA';
import VisionHeader from './vision/VisionHeader';
import KeyChallenges from './vision/KeyChallenges';
import SuccessSection from './vision/SuccessSection';

interface OurVisionSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const OurVisionSheet = ({ isOpen, onClose }: OurVisionSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] p-0"
      >
        <SheetBackButton onBack={onClose} />

        <div className="h-full flex flex-col pt-20">
          <div className="px-8 space-y-16">
            <VisionHeader />

            {/* Transparency Section with Factory Image */}
            <div className="relative h-[330px]">
              <img 
                src="/lovable-uploads/3b2f9435-b454-4680-aa2b-e440791a0138.png" 
                alt="Factory" 
                className="absolute right-0 w-72 h-[363px] object-cover rounded-lg" 
              />
              <div className="absolute left-0 right-72 top-[33px] bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Overcoming Transparency and Traceability Barriers in Circular Economies</h3>
                <p className="text-gray-600">
                  Modern industries face growing pressure to reduce negative environmental impact. Through our innovative solutions, we work to make data-driven eco-responsibility a key asset rather than a burden. Companies often struggle with accurate emission tracking - our platform changes that, offering precise data at each stage in a sustainable workflow.
                </p>
              </div>
            </div>

            <KeyChallenges />

            {/* Making a Difference Section with Business Card Image */}
            <div className="relative h-[330px]">
              <img 
                src="/lovable-uploads/fe7649b5-4a75-4e41-86b0-935ace011244.png" 
                alt="Business" 
                className="absolute left-0 w-72 h-[363px] object-cover rounded-lg" 
              />
              <div className="absolute left-72 right-0 top-[33px] bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">How We're Making a Difference</h3>
                <p className="text-gray-600 text-center">
                  Through our blockchain-powered solutions, we seek to address the growing challenges of sustainable production. Our platform offers verified data, track records, and clear guidance from production to end-of-life.
                </p>
              </div>
            </div>

            {/* Vision for Future Section with Green Image */}
            <div className="relative h-[330px]">
              <img 
                src="/lovable-uploads/96f9bedc-23c9-439f-a0a6-225820086c01.png" 
                alt="Green" 
                className="absolute right-0 w-72 h-[363px] object-cover rounded-lg" 
              />
              <div className="absolute left-0 right-72 top-[33px] bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Our Vision for the Future</h3>
                <p className="text-gray-600">
                  Our goal is to lead industry toward a future where sustainability and profitability work hand in hand. We're doing this by providing a transparent yet adaptable framework that empowers businesses to implement and maintain responsible programs for themselves, their consumers, and society at large.
                </p>
              </div>
            </div>

            <SuccessSection />
            <div className="w-full">
              <AboutCTA onClose={onClose} />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default OurVisionSheet;
