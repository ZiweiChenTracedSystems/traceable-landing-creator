import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import TextilesSheet from "./TextilesSheet";
import BatteriesSheet from "./BatteriesSheet";
import IndustriesSheet from "./IndustriesSheet";

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
      hoverContent:
        "By tracking origin, durability, and recyclability, the DPP encourages circular practices—repairing, reusing, and recycling. It's a vital step toward reducing waste and achieving sustainability in the fashion and textile industries.",
    },
    {
      id: "batteries-card",
      title: "Batteries",
      description: "Electric Vehicle Solutions",
      image: "/lovable-uploads/973d7c66-1d01-4e1e-89ce-2dee7a7c3dae.png",
      icon: "/lovable-uploads/LogoBatteries.png",
      hoverContent:
        "As the demand for batteries grows, particularly in electric vehicles and renewable energy storage, the Digital Product Passport (DPP) ensures compliance with sustainability regulations, supporting industries in meeting environmental standards and driving eco-efficient innovations.",
    },
    {
      id: "espr-card",
      title: "Supporting Sectors",
      description: "Across EU Regulations",
      image: "/lovable-uploads/a4205a69-444a-4317-be96-d4751706d608.png",
      icon: "/lovable-uploads/LogoEUR.png",
      hoverContent:
        "Our Digital Product Passport (DPP) streamlines compliance for various industries, ensuring seamless adaptation to evolving EU regulations. From the Ecodesign for Sustainable Products Regulation (ESPR) to the Right to Repair (R2R) Framework and Circular Economy Legislation, we help businesses enhance transparency, improve sustainability, and stay ahead of legislative demands.",
    },
  ];

  const handleCardClick = (id: string) => {
    if (id === "textile-card") {
      setActiveSheet("textiles");
    } else if (id === "batteries-card") {
      setActiveSheet("batteries");
    } else if (id === "espr-card") {
      setActiveSheet("industries");
    }
  };

  const handleSheetClose = () => {
    setActiveSheet(null);
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="inline-block text-center mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Digital Product Passport – Key Sectors
            </h2>
            <Separator className="my-4 h-1 bg-[#D4904E]" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {features.map((feature) => (
              <div
                key={feature.id}
                id={feature.id}
                className="group relative h-[340px] rounded-2xl overflow-hidden cursor-pointer [perspective:1000px] hover:scale-105 transition-transform duration-300 hover:shadow-lg"
                onClick={() => handleCardClick(feature.id)}
              >
                <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 [backface-visibility:hidden]">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${feature.image})` }}
                    />

                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="flex items-center space-x-2">
                        <img
                          src={feature.icon}
                          alt={feature.title}
                          className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <div className="text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {feature.title}
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <div className="w-10 h-10 rounded-full bg-[#E4AC70] flex items-center justify-center hover:scale-110 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="w-2.5 h-2.5 border-r-2 border-t-2 border-white transform rotate-45 mr-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-[#f7f7f7] [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-2xl shadow-lg">
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="space-y-0">
                        <div className="flex items-center space-x-2">
                          <img
                            src={feature.icon}
                            alt={feature.title}
                            className="w-16"
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
                        <div className="text-[#173A44] flex items-center gap-2">
                          Know More
                          <ArrowRight className="w-5 h-5" />
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
      />
    </>
  );
};

export default Features;
