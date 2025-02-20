import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SheetBackButton from "./shared/SheetBackButton";
import IndustrySheetCTA from "./shared/IndustrySheetCTA";
import { UseCase } from "@/types/useCase";
interface UseCaseSubsheetProps {
  isOpen: boolean;
  onClose: () => void;
  useCase: UseCase;
}
const UseCaseSubsheet = ({
  isOpen,
  onClose,
  useCase
}: UseCaseSubsheetProps) => {
  return <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl p-0 z-[995]">
        <SheetBackButton onBack={onClose} />

        <div className="h-full flex flex-col">
          <div className="pt-24 px-8">
            <div className="max-w-4xl mx-auto">
              {useCase.fullContent ? <>
                  <div className="flex items-center gap-2 mb-6">
                    <img src="/lovable-uploads/5ce2f433-ac13-4162-97af-4ed813cff152.png" alt="Traced Systems" className="w-6 h-6" />
                    <span className="text-gray-600">
                      {useCase.title.includes("BLK DNM") ? <>
                          Written by Traced Systems x{" "}
                          <a href="https://chromia.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 underline">
                            Chromia
                          </a>{" "}
                          x{" "}
                          <a href="https://digital.blkdnm.com/?ref=blog.chromia.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 underline">
                            BLK DNM
                          </a>
                        </> : <>
                          Written by Traced Systems x{" "}
                          <a href="https://www.clingsystems.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 underline">
                            Cling
                          </a>{" "}
                          x{" "}
                          <a href="https://batteriretur.no/hoyenergibatterier/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 underline">
                            BatteriRetur
                          </a>{" "}
                          x{" "}
                          <a href="https://instagrid.co/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 underline">
                            Instagrid
                          </a>
                        </>}
                    </span>
                  </div>
                  <div className="mb-8">
                    <h1 className="text-4xl font-bold text-primary mb-4">
                      {useCase.fullContent.title}
                    </h1>
                  </div>
                  <div className="flex justify-center">
                    <img src={useCase.image} alt={useCase.title} className="w-[70vw] lg:w-[45vw] object-cover rounded-lg mb-8" />
                  </div>

                  <div className="prose max-w-none mb-12">
                    <p className="text-gray-600 mb-8 text-lg">
                      {useCase.fullContent.introduction}
                    </p>

                    {useCase.fullContent.content.map((section, index) => <div key={index} className="mb-8">
                        <h2 className="text-2xl font-bold text-primary mb-4">
                          {section.heading}
                        </h2>
                        <div className="text-gray-600 whitespace-pre-line">
                          {section.text}
                        </div>
                      </div>)}
                  </div>
                </> : <>
                  <div className="mb-8">
                    <h1 className="text-4xl font-bold text-primary mb-4">
                      {useCase.title}
                    </h1>
                  </div>

                  <div className="flex justify-center">
                    <img src={useCase.image} alt={useCase.title} className="w-[70vw] lg:w-[45vw] object-cover rounded-lg mb-8" />
                  </div>

                  <div className="prose max-w-none mb-12">
                    <p className="text-gray-600 mb-4">{useCase.description}</p>

                    <h2 className="text-2xl font-bold text-primary mb-4">
                      The Challenge
                    </h2>
                    <p className="text-gray-600 mb-4">Global supply chains are increasingly complex, regulations are tightening, and consumers expect transparency. Without the right tools, businesses face higher costs, reputational risks, and lost opportunities.</p>

                    <h2 className="text-2xl font-bold text-primary mb-4">
                      The Solution
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mb-4">
                      The Results
                    </h2>
                    <p className="text-gray-600 mb-4">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident.
                    </p>
                  </div>
                </>}
            </div>
          </div>

          <div className="mt-auto w-full">
            <IndustrySheetCTA title="Want to Learn More About Our Solutions?" description="Discover how our digital product passport can transform your business operations and help you meet sustainability goals." />
          </div>
        </div>
      </SheetContent>
    </Sheet>;
};
export default UseCaseSubsheet;