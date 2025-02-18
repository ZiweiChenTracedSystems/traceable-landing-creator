import React from "react";

const LogoMarquee = () => {
  const logos = [
    {
      src: "/lovable-uploads/872f4e62-69fe-401b-9c71-a0c2074f0690.png",
      alt: "BLK DNM",
      link: "https://www.blkdnm.com/", // Placeholder link
    },
    {
      src: "/lovable-uploads/53733f77-0c96-43ec-b9a3-8cfc7930500f.png",
      alt: "Cling",
      link: "https://www.clingsystems.com/blog-post/tech-dive-blockchain-x-batteries",
    },
    {
      src: "/lovable-uploads/447b6eb2-3642-4845-80fd-9da6b5535c71.png",
      alt: "EBSI",
      link: "#",
    },
    {
      src: "/lovable-uploads/bfe45d2d-c864-4265-9fd4-f2f7a5535d20.png",
      alt: "European Commission",
      link: "#",
    },
    {
      src: "/lovable-uploads/bonsai-technology_logo_rev-20230126-07.png",
      alt: "Bonsai Technology",
      link: "https://www.bonsaitechnology.it/?srsltid=AfmBOooc1uDwps7FTauS91CSe-XilJGtr2sQh8968BgJ3DF47uhVWQ2e",
    },

    {
      src: "/lovable-uploads/BatterireturAvdHoyenergi_staaende_RGB1.png",
      alt: "BatteriRetur",
      link: "https://batteriretur.no/en/",
    },
    {
      src: "/lovable-uploads/LOGO-instagrid-red-black-RGB.png",
      alt: "Instagrid",
      link: "https://instagrid.co/?srsltid=AfmBOooxzpfpDfhOwpWGVeNBJ-VveO9pUgnC3X9u1Oz2lgnvWF2W0YhV",
    },
    {
      src: "/lovable-uploads/1000002907.png",
      alt: "ChromaWay",
      link: "https://chromaway.com/",
    },
    {
      src: "/lovable-uploads/1000002905.png",
      alt: "Chromia Logo",
      link: "https://chromia.com/",
    },
  ];

  return (
    <div className="relative w-full" style={{ paddingTop: "16.8%" }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/lovable-uploads/BGforBrands.png')] bg-cover bg-center"
        style={{ height: "100%", width: "auto" }}
      ></div>

      {/* Content Layer */}
      <div className="absolute inset-0 flex items-center justify-center pb-12">
        <div className="flex overflow-hidden mb-14 bg-[rgba(242,241,238,0.9)]">
          <div className="flex animate-infinite-scroll" style={{ gap: "7rem" }}>
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <a
                key={index}
                href={logo.link} // Makes the image clickable
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center flex-shrink-0 w-auto h-20"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 w-auto object-cover transition-opacity hover:opacity-75"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
