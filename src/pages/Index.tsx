import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Features from "@/components/Features";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import UseCases from "@/components/UseCases";
import Blog from "@/components/Blog";
import OurTech from "@/components/OurTech";
import Technologies from "@/components/Technologies";
import Footer from "@/components/Footer";
import DigitalPassport from "@/components/DigitalPassport";
import Foundation from "@/components/Foundation";
import CTA from "@/components/CTA";
import ContactSheet from "@/components/ContactSheet";
import CookieConsentBanner from "@/components/CookieConsent";
import IndustriesSheet from "@/components/IndustriesSheet";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  const handleContactOpen = () => {
    setIsContactOpen(true);
  };

  const handleContactClose = () => {
    setIsContactOpen(false);
  };

  const handleEURegulationsClick = () => {
    setIsIndustriesOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <LogoMarquee />
        <DigitalPassport />
        <Features />
        <About />
        <Benefits />
        <Process />
        <UseCases />
        <Blog />
        <OurTech />
        <Technologies />
        <Foundation />
        <CTA onContactClick={handleContactOpen} />
      </main>
      <Footer />
      <ContactSheet isOpen={isContactOpen} onClose={handleContactClose} />
      <IndustriesSheet
        isOpen={isIndustriesOpen}
        onClose={() => setIsIndustriesOpen(false)}
        scrollToEU={true}
      />
      <CookieConsentBanner />
    </div>
  );
};

export default Index;
