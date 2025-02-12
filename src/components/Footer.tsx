import React from "react";
import { Twitter, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer
      className="relative text-[#f2f1ee] py-20 w-full border-none m-0 
             bg-[#173A44] md:bg-[#173A44] lg:bg-[#F2F1EE] lg:pt-[11
             %] px-12 md:px-16 lg:px-[220px]"
    >
      {/* Background Image - Only Visible on Large Screens */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage: "url('/lovable-uploads/BGfooter.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9, // Ensures background doesn’t overpower content
        }}
      ></div>

      {/* Content Wrapper (Ensures Text is Visible) */}
      <div className="container mx-auto px-4 relative z-10 lg:mt-12 pt-8">
        {/* First Section: "Traced" on the left, Socials on the right */}
        <div className="flex justify-between items-center pb-1">
          {/* Left - "Traced" */}
          <img
            src="/lovable-uploads/TracedLightLogo.svg"
            alt="Traced Logo"
            className="h-[29.45px] w-[120px] min-w-[120px] min-h-[29.45px] object-contain"
          />

          {/* Right - "Follow us" and Social Icons */}
          <div className="flex items-center justify-center space-x-4 self-end h-2">
            <span className="text-sm text-[#EBE6D5]">Follow us</span>

            {/* Twitter Link */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/lovable-uploads/TwitterLogo.svg"
                alt="Twitter Logo"
                className="w-6 h-6 cursor-pointer"
              />
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/company/traced-systems"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/lovable-uploads/LindkinLogo.svg"
                alt="LinkedIn Logo"
                className="w-6 h-6 cursor-pointer"
              />
            </a>
          </div>
        </div>

        {/* Second Section: Thin Separator Line */}
        <Separator className="my-6 bg-[#EBE6D5] h-[1px] relative" />

        {/* Third Section: Footer Text and Copyright */}
        <div className="flex justify-between items-center relative">
          {/* Left - Description Text */}
          <p className="text-base text-left text-[#EBE6D5]">
            Traced Systems powered by Chromia is transforming industries with
            blockchain-based digital product passports.
          </p>

          {/* Right - Copyright */}
          <p className="text-xs text-right text-[#EBE6D5]">
            © 2025 Traced System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
