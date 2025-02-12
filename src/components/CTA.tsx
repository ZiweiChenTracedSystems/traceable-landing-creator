import React from "react";
import Button1 from "./ui/button-1";

interface CTAProps {
  onContactClick: () => void;
}

const CTA = ({ onContactClick }: CTAProps) => {
  return (
    <section className="relative bg-[#f2f1ee] pt-24 pb-5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
          <h3 className="text-3xl font-medium text-[#1E293B]">
            Trace Your Impact, Reward Your Actions, Sustain Our Planet.
          </h3>
          <Button1
            className="rounded-full border-2 border-[#E4AC70] bg-[#F2F1EE] text-[#143A44] flex items-center gap-2 px-9 hover:bg-[#EEEADF]"
            onClick={onContactClick}
          >
            Get in touch
          </Button1>
        </div>
      </div>
    </section>
  );
};

export default CTA;
