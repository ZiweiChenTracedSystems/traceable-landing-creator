import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-auto md:h-[420px] lg:h-[270px] xl:h-[240px]">
      <Tabs defaultValue="mission" className="flex flex-col md:flex-row h-full">
        <TabsList className="flex md:flex-col h-auto md:h-full w-full md:w-[40%] space-y-0 bg-[#F5F5F5] md:bg-[#f3f3f3] rounded-none p-0">
          {["mission", "focus", "solution"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="w-full flex-1 flex items-center px-6 py-3 md:py-4 rounded-none border-b-2 md:border-l-4 md:border-b-0 border-transparent data-[state=active]:bg-[#204850] data-[state=active]:text-white data-[state=active]:w-full data-[state=active]:border-[#204850] transition-all"
            >
              <span className="text-base md:text-lg font-medium capitalize">
                {tab}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="relative w-full md:w-[80%] flex-grow !mt-0">
          {["mission", "focus", "solution"].map((tab) => (
            <TabsContent
              key={tab}
              value={tab}
              className="overflow-hidden md:h-full md:absolute md:inset-0 !mt-0"
            >
              <div className="relative h-full !mt-0">
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={
                      tab === "focus"
                        ? "/lovable-uploads/5f3a96ab-793d-4332-8f53-403309de85cf.png"
                        : tab === "solution"
                        ? "/lovable-uploads/82288ca1-a71b-4e6d-be31-fc4db3f8778d.png"
                        : "/lovable-uploads/aa6a2a37-d9f1-44a7-8d11-a32893b35db5.png"
                    }
                    alt={tab}
                    className="w-full h-full object-cover brightness-[0.3] md:brightness-100 absolute inset-0"
                  />
                </div>

                <div className="relative md:absolute inset-0 bg-[#204850]/95 md:bg-black/60 flex items-start md:items-center justify-start p-6 md:p-8">
                  <p className="text-white text-sm md:text-base font-normal md:text-center text-left leading-relaxed">
                    {tab === "mission" ? (
                      <>
                        <strong className="block mb-3 text-base md:text-base">
                          Our mission is to transform supply chain efficiency
                          and engagement by leveraging blockchain technology to
                          enhance transparency, collaboration, and customer
                          loyalty.
                        </strong>{" "}
                        From raw materials to recycling, we empower businesses
                        to optimize workflows, build stronger brand connections,
                        and deliver sustainable value to every stakeholder in
                        the chain.
                      </>
                    ) : tab === "focus" ? (
                      <>
                        <strong className="block mb-3 text-base md:text-base">
                          Our focus is on helping companies stay ahead of
                          evolving regulations while ensuring a tangible return
                          on investment.
                        </strong>{" "}
                        We guide organizations in targeting and engaging the
                        right audiences (from legislators to end consumers)
                        across both B2B and B2C environments. By employing a
                        progressive, future-proof approach, we enable companies
                        to meet (and exceed) their sustainability goals without
                        compromising budgets or growth.
                      </>
                    ) : (
                      <>
                        <strong className="block mb-3 text-base md:text-base">
                          Our platform goes beyond mere compliance.
                        </strong>{" "}
                        By identifying and collaborating with key partners in
                        the value chain, we help businesses integrate a truly
                        circular approach that aligns with European values and
                        environmental objectives. Whether you're seeking to
                        reduce waste, boost resource efficiency, or enhance
                        brand loyalty, our solution puts you at the forefront of
                        sustainable innovation today and into the future.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default TabsSection;
