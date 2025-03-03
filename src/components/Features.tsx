import React, { useState } from "react";
import TextilesSheet from "./TextilesSheet";
import BatteriesSheet from "./BatteriesSheet";
import IndustriesSheet from "./IndustriesSheet";
import { ChevronRight } from "lucide-react";

const Features = () => {
  const [activeSheet, setActiveSheet] = useState<
    "textiles" | "batteries" | "industries" | null
  >(null);

  const features = [
    {
      id: "textile-card",
      title: "Textiles",
      description: "Sustainable Fashion",
      image: "/lovable-uploads/7db51ad9-4f3d-4085-b9e9-2004e66476b4.png",
      icon: "/lovable-uploads/LogoTextiles.png",
      mobileOrder: 2,
      hoverContent:
        "By tracking origin, durability, and recyclability, the DPP encourages circular practices—repairing, reusing, and recycling. It's a vital step toward reducing waste and achieving sustainability in the fashion and textile industries.",
    },
    {
      id: "batteries-card",
      title: "Batteries",
      description: "Electric Vehicle Solutions",
      image: "/lovable-uploads/973d7c66-1d01-4e1e-89ce-2dee7a7c3dae.png",
      icon: "/lovable-uploads/LogoBatteries.png",
      mobileOrder: 1,
      hoverContent:
        "As the demand for batteries grows, particularly in electric vehicles and renewable energy storage, the Digital Product Passport (DPP) ensures compliance with sustainability regulations, supporting industries in meeting environmental standards and driving eco-efficient innovations.",
    },
    {
      id: "espr-card",
      title: "Supporting Sectors",
      description: "Across EU Regulations",
      image: "/lovable-uploads/a4205a69-444a-4317-be96-d4751706d608.png",
      icon: "/lovable-uploads/LogoEUR.png",
      mobileOrder: 3,
      hoverContent:
        "Our Digital Product Passport (DPP) streamlines compliance for various industries, ensuring seamless adaptation to evolving EU regulations. From the Ecodesign for Sustainable Products Regulation (ESPR) to the Right to Repair (R2R) Framework and Circular Economy Legislation, we help businesses enhance transparency, improve sustainability, and stay ahead of legislative demands.",
    },
  ];

  const [scrollToEU, setScrollToEU] = useState(false);

  const handleCardClick = (id: string) => {
    if (id === "textile-card") {
      setActiveSheet("textiles");
      setScrollToEU(false);
    } else if (id === "batteries-card") {
      setActiveSheet("batteries");
      setScrollToEU(false);
    } else if (id === "espr-card") {
      setActiveSheet("industries");
      setScrollToEU(true); // Ensure scrolling happens when opening IndustriesSheet
    }
  };

  const handleSheetClose = () => {
    setActiveSheet(null);
  };

  // Sort features for mobile view
  const sortedFeatures = [...features].sort((a, b) => {
    return window.innerWidth < 768 ? a.mobileOrder - b.mobileOrder : 0;
  });

  return (
    <>
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <h2 className="text-3xl md:text-3xl font-medium text-[#173A44] text-center mb-6">
              Digital Product Passport - Key Sectors
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {sortedFeatures.map((feature) => (
              <div
                key={feature.id}
                id={feature.id}
                className="group relative h-[340px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-lg md:order-none"
                style={{
                  order: window.innerWidth < 768 ? feature.mobileOrder : 0,
                }}
                onClick={() => handleCardClick(feature.id)}
              >
                <div className="relative w-full h-full transition-all duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 [backface-visibility:hidden]">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                      style={{ backgroundImage: `url(${feature.image})` }}
                    />

                    <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-b from-transparent to-black/50">
                      <div className="flex items-center space-x-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        <img
                          src={feature.icon}
                          alt={feature.title}
                          className="w-6 h-6 object-contain"
                        />
                        <div className="text-white text-2xl font-semibold">
                          {feature.title}
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <div className="w-10 h-10 rounded-full bg-[#E4AC70] flex items-center justify-center transition-all duration-500 ease-in-out hover:scale-105 shadow-lg hover:shadow-xl">
                          <div className="w-2.5 h-2.5 border-r-2 border-t-2 border-white transform rotate-45 mr-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-[#f7f7f7] [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-2xl shadow-lg">
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <img
                            src={feature.icon}
                            alt={feature.title}
                            className="w-15 h-12 object-contain"
                          />
                          <h3 className="text-2xl font-semibold text-[#173A44]">
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-[#173A44] text-sm leading-relaxed">
                          {feature.hoverContent}
                        </p>
                      </div>

                      <div className="flex justify-end">
                        <div className="text-[#D4904E] text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-500 ease-in-out">
                          Know More
                          <ChevronRight className="text-[#E1B382] w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TextilesSheet
        isOpen={activeSheet === "textiles"}
        onClose={handleSheetClose}
        onBack={handleSheetClose}
      />

      <BatteriesSheet
        isOpen={activeSheet === "batteries"}
        onClose={handleSheetClose}
        onBack={handleSheetClose}
      />

      <IndustriesSheet
        isOpen={activeSheet === "industries"}
        onClose={handleSheetClose}
        onBack={handleSheetClose}
        scrollToEU={scrollToEU} // Pass the state
      />
    </>
  );
};

export default Features;
