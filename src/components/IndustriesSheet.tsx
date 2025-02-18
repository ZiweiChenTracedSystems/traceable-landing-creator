import React, { useState, useEffect, useRef } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import IndustryCard from "./IndustryCard";
import EURegulationsSection from "./EURegulationsSection";
import CTASection from "./CTASection";
import TextilesSheet from "./TextilesSheet";
import BatteriesSheet from "./BatteriesSheet";
import SheetBackButton from "./shared/SheetBackButton";
import Button1 from "./ui/button-1";
import TitleBanner from "@/components/shared/TitleBanner";

interface IndustriesSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onBack?: () => void;
  scrollToEU?: boolean; // 🔥 New prop to control scrolling
}

const IndustriesSheet = ({
  isOpen,
  onClose,
  onBack = onClose,
  scrollToEU = false, // Default is false to prevent unwanted scrolling
}: IndustriesSheetProps) => {
  const [activeSheet, setActiveSheet] = useState<
    "industries" | "textiles" | "batteries" | null
  >(null);

  const euSectionRef = useRef<HTMLDivElement | null>(null);

  // 🔥 Scroll to EURegulationsSection when opening from Features
  useEffect(() => {
    if (isOpen && scrollToEU && euSectionRef.current) {
      euSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isOpen, scrollToEU]);

  React.useEffect(() => {
    if (isOpen) {
      setActiveSheet("industries");
    } else {
      setActiveSheet(null);
    }
  }, [isOpen]);

  const handleTextilesClick = () => {
    setActiveSheet("textiles");
  };

  const handleBatteriesClick = () => {
    setActiveSheet("batteries");
  };

  const handleSheetClose = () => {
    setActiveSheet("industries");
  };

  const handleMainSheetToggle = (open: boolean) => {
    if (!open) {
      onClose();
      setActiveSheet(null);
    }
  };

  return (
    <>
      <Sheet
        open={isOpen && activeSheet === "industries"}
        onOpenChange={handleMainSheetToggle}
      >
        <SheetContent
          side="right"
          className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl p-0 z-[999]"
        >
          <div className="h-full flex flex-col relative">
            <SheetBackButton onBack={onBack} />

            <TitleBanner title="Industries" />

            <div className="text-center mb-12 pt-20">
              <h2 className="text-2xl text-[#173A44] font-medium ">
                Key Industries We Serve
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-20 mb-24 px-20 xs:px-16">
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

            {/* 🔥 Scroll to this only when `scrollToEU === true` */}
            <div ref={euSectionRef}>
              <EURegulationsSection />
            </div>

            <CTASection>
              <div className="text-center mt-6 px-8">
                <div>
                  <h2 className="text-2xl font-medium text-center mb-2 text-[#173A44]">
                    A Unified Traceability Platform
                  </h2>
                  <h3 className="text-xl text-center mb-6 text-[#173A44]">
                    From Source to Sustainability
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Our comprehensive platform integrates seamlessly across your
                  entire value chain, providing real-time visibility and control
                  over your product lifecycle.
                </p>
                <img
                  src="/lovable-uploads/c0da0885-a0e1-4ac0-b309-a464bcd66b53.png"
                  alt="Unified Platform"
                  className="w-full max-w-4xl mx-auto pt-4 mb-12 rounded-lg"
                />
                <div className="flex justify-center">
                  <Button1 className="px-8">Get in touch</Button1>
                </div>
              </div>
            </CTASection>

            <div className="pb-[100px]"></div>
          </div>
        </SheetContent>
      </Sheet>

      <TextilesSheet
        isOpen={activeSheet === "textiles"}
        onClose={() => setActiveSheet("industries")}
        onBack={handleSheetClose}
      />

      <BatteriesSheet
        isOpen={activeSheet === "batteries"}
        onClose={() => setActiveSheet("industries")}
        onBack={handleSheetClose}
      />
    </>
  );
};

export default IndustriesSheet;
