import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import IndustryCard from './IndustryCard';
import EURegulationsSection from './EURegulationsSection';
import CTASection from './CTASection';
import TextilesSheet from './TextilesSheet';
import BatteriesSheet from './BatteriesSheet';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "@/components/ui/icons";

interface IndustriesSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const IndustriesSheet = ({ isOpen, onClose }: IndustriesSheetProps) => {
  const [activeSheet, setActiveSheet] = useState<'industries' | 'textiles' | 'batteries' | null>(isOpen ? 'industries' : null);

  const handleTextilesClick = () => {
    setActiveSheet('textiles');
  };

  const handleBatteriesClick = () => {
    setActiveSheet('batteries');
  };

  const handleSheetClose = () => {
    setActiveSheet('industries');
  };

  const handleMainSheetToggle = (open: boolean) => {
    if (!open) {
      onClose();
      setActiveSheet(null);
    } else {
      setActiveSheet('industries');
    }
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={handleMainSheetToggle}>
        <SheetContent 
          side="right" 
          className="!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl p-0 z-[999]"
        >
          <Button 
            variant="ghost" 
            onClick={onClose}
            className="fixed -left-12 top-4 hover:bg-gray-100 bg-white z-50 shadow-md"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>

          <div className="h-full flex flex-col pt-20">
            <div 
              className="relative mb-8 py-8 px-4"
              style={{
                backgroundImage: 'url("/lovable-uploads/4187353b-b062-491f-b38c-eaae240654cd.png")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '85% auto'
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h1 className="text-2xl font-semibold text-primary">Industries</h1>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary">Key Industries We Serve</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12 items-start">
              <div className="space-y-4">
                <IndustryCard 
                  title="Textiles"
                  description="Traced Systems' Digital Product Passport tackles supply chain gaps, ensures ethical sourcing, and drives circularity across the textile lifecycle."
                  imageSrc="/lovable-uploads/2320cd7d-0e5e-4635-b26a-2d2eaeb0aa50.png"
                  imageAlt="Textiles"
                  onClick={handleTextilesClick}
                />
              </div>
              
              <div className="space-y-4">
                <IndustryCard 
                  title="Batteries"
                  description="Traced Systems' Digital Product Passport streamlines battery management by enhancing transparency, ensuring compliance, and optimizing the full product lifecycle."
                  imageSrc="/lovable-uploads/efedcb76-b69e-4a52-8689-41020d02ede5.png"
                  imageAlt="Batteries"
                  onClick={handleBatteriesClick}
                />
              </div>
            </div>

            <EURegulationsSection />
            <CTASection />
            
            <div className="pb-[125px]"></div>
          </div>
        </SheetContent>
      </Sheet>

      <TextilesSheet 
        isOpen={activeSheet === 'textiles'}
        onClose={() => setActiveSheet('industries')}
        onBack={handleSheetClose}
      />

      <BatteriesSheet 
        isOpen={activeSheet === 'batteries'}
        onClose={() => setActiveSheet('industries')}
        onBack={handleSheetClose}
      />
    </>
  );
};

export default IndustriesSheet;
