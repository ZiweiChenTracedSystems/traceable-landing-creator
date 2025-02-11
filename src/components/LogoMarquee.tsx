
import React from 'react';

const LogoMarquee = () => {
  const logos = [
    { src: '/lovable-uploads/872f4e62-69fe-401b-9c71-a0c2074f0690.png', alt: 'BLK DNM', className: 'h-8' },
    { src: '/lovable-uploads/53733f77-0c96-43ec-b9a3-8cfc7930500f.png', alt: 'Cling', className: 'h-8' },
    { src: '/lovable-uploads/447b6eb2-3642-4845-80fd-9da6b5535c71.png', alt: 'EBSI', className: 'h-8' },
    { src: '/lovable-uploads/bfe45d2d-c864-4265-9fd4-f2f7a5535d20.png', alt: 'European Commission', className: 'h-8' },
    { src: '/lovable-uploads/bc8afa74-fc37-4f23-860b-8398744afb82.png', alt: 'Bonsai Technology', className: 'h-8' },
    { src: '/lovable-uploads/f598ac7e-9946-4f9f-97d4-155b5c8c69b9.png', alt: 'ChromaWay', className: 'h-8' },
    { src: '/lovable-uploads/5c94b0f7-f120-441c-b444-27981375b6db.png', alt: 'BatteriRetur', className: 'h-8' },
    { src: '/lovable-uploads/7d0b8c20-af74-4f1d-9ffd-e9167b84b41a.png', alt: 'Instagrid', className: 'h-8' },
    { src: '/lovable-uploads/2071f390-3376-41c9-8cbc-18f014beee68.png', alt: 'BatteriRetur Updated', className: 'h-8' },
    { src: '/lovable-uploads/bf4e9036-3a2e-4cf1-b119-6d0164e9a37a.png', alt: 'Instagrid Updated', className: 'h-8' },
    { src: '/lovable-uploads/df6ee42e-2ed3-4ac0-813d-acddb23c80da.png', alt: 'Bonsai New', className: 'h-8' },
    { src: '/lovable-uploads/caf46b2d-6ab3-4727-82f8-3429f3bc5f77.png', alt: 'Chromia New', className: 'h-8' }
  ];

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="relative py-12 z-10">
        <div className="flex overflow-hidden">
          <div 
            className="flex animate-infinite-scroll"
            style={{
              gap: '3rem',
            }}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0 w-32 h-16"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className={`${logo.className} object-contain`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto transform translate-y-1 rotate-180"
          preserveAspectRatio="none"
          style={{ 
            filter: 'drop-shadow(0 -2px 4px rgba(0,0,0,0.05))',
            minHeight: '160px'
          }}
        >
          <path
            fill="#F7F7F5"
            fillOpacity="0.9"
            d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,165.3C960,149,1056,139,1152,144C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,165.3C960,149,1056,139,1152,144C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,165.3C960,149,1056,139,1152,144C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </path>
        </svg>
      </div>
    </div>
  );
};

export default LogoMarquee;

