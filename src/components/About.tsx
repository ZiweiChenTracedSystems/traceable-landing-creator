import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import OurValuesSheet from "./OurValuesSheet";
import { ChevronRight } from "lucide-react";

const About = () => {
  const [isValuesOpen, setIsValuesOpen] = useState(false);

  return (
    <section className="py-20" style={{ backgroundColor: "#F2F1EE" }}>
      <div className="container mx-auto pl-12 lg:pl-8 pr-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-medium text-[#173A44]">
                Who are we?
              </h2>
              <Separator className="my-4 h-1 w-[100px] bg-[#D4904E]" />
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our journey began as part of a ChromaWay project with the European
              Blockchain Services Infrastructure (EBSI), an EU-led effort to
              explore the transformative potential of blockchain and distributed
              ledger technologies (DLTs). Since 2021, we have been deeply
              involved in shaping this vision, partnering with the EU in a
              multi-phased approach that combined rigorous research,
              technological development, and field testing.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, Traced Systems is more than just a digital record or a
              platform for tracking product lifecycles. We represent the
              culmination of years of dedicated research, cutting-edge
              technology, and a commitment to sustainability and compliance by
              leveraging the power of Chromia technology.
            </p>
            <Button
              variant="secondary"
              className="rounded-full border-2 border-[#E4AC70] bg-[#F2F1EE] text-[#143A44] flex items-center gap-2 pl-7 pr-6 hover:bg-[#EEEADF]"
              onClick={() => setIsValuesOpen(true)}
            >
              Know More
              <ChevronRight className="w-5 h-5 text-[#143A44]" />
            </Button>
          </div>

          <div className="relative">
            <img
              src="/lovable-uploads/1d18330c-949f-4cc8-82f9-a78eb2ca5fc6.png"
              alt="Analytics Dashboard"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </div>

      <OurValuesSheet
        isOpen={isValuesOpen}
        onClose={() => setIsValuesOpen(false)}
      />
    </section>
  );
};

export default About;
