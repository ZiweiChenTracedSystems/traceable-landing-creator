import React from 'react';

const EURegulationsSection = () => {
  return (
    <div className="bg-white rounded-xl p-8 mb-12 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)]">
      <h2 className="text-2xl font-bold text-center mb-6">
        Meet Today's EU Regulations, Stay Ready for Tomorrow's
      </h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <p className="text-gray-600 mb-4">
            Our Digital Product Passport (DPP) streamlines compliance for a wide range of industries, ensuring seamless adaptation to evolving EU regulations. From the Ecodesign for Sustainable Products Regulation (ESPR) to the Right to Repair (R2R) Framework and Circular Economy Legislation, we help businesses enhance transparency, improve sustainability, and stay ahead of legislative demands.
          </p>
          <p className="text-gray-600">
            Powered by secure, tamper-proof technology, our DPP empowers you to monitor and update product data so you can adjust quickly to new or revised regulations. This future-proof approach not only meets today's requirements but also positions your organization to thrive in tomorrow's policy landscape, making it the ideal solution for your company and the entire industry value chain.
          </p>
        </div>
        <img 
          src="/lovable-uploads/388a3ea5-e78d-4f2c-a979-646e50aa5de4.png" 
          alt="EU Regulations" 
          className="w-full md:w-1/3 rounded-lg"
        />
      </div>
    </div>
  );
};

export default EURegulationsSection;