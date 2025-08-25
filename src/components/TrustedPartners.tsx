import React from "react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TrustedPartners: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation();
  
  const partners = [
    {
      name: "Emaar Properties",
      logo: "https://cdn.pixabay.com/photo/2017/01/31/13/39/company-2024125_1280.png",
      website: "#"
    },
    {
      name: "DAMAC Properties",
      logo: "https://cdn.pixabay.com/photo/2017/01/31/13/39/company-2024125_1280.png",
      website: "#"
    },
    {
      name: "Nakheel",
      logo: "https://cdn.pixabay.com/photo/2017/01/31/13/39/company-2024125_1280.png",
      website: "#"
    },
    {
      name: "Sobha Realty",
      logo: "https://cdn.pixabay.com/photo/2017/01/31/13/39/company-2024125_1280.png",
      website: "#"
    },
    {
      name: "Meraas",
      logo: "https://cdn.pixabay.com/photo/2017/01/31/13/39/company-2024125_1280.png",
      website: "#"
    },
    {
      name: "Azizi Developments",
      logo: "https://cdn.pixabay.com/photo/2017/01/31/13/39/company-2024125_1280.png",
      website: "#"
    },
    {
      name: "Select Group",
      logo: "https://cdn.pixabay.com/photo/2017/01/31/13/39/company-2024125_1280.png",
      website: "#"
    },
    {
      name: "Binghatti",
      logo: "https://cdn.pixabay.com/photo/2017/01/31/13/39/company-2024125_1280.png",
      website: "#"
    },
    {
      name: "Omniyat",
      logo: "https://cdn.pixabay.com/photo/2017/01/31/13/39/company-2024125_1280.png",
      website: "#"
    },
    {
      name: "Al Habtoor Group",
      logo: "https://cdn.pixabay.com/photo/2017/01/31/13/39/company-2024125_1280.png",
      website: "#"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-animate ${headerVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Trusted by Leading
            <span className="text-black"> Developers</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            We maintain strong partnerships with Dubai's most prestigious property developers, 
            ensuring our clients have access to the finest real estate opportunities.
          </p>
        </div>

        {/* Partners Grid */}
        <div ref={gridRef} className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 scroll-animate-scale ${gridVisible ? 'animate' : ''}`}>
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => window.open(partner.website, '_blank')}
            >
              {/* Logo Container */}
              <div className="relative overflow-hidden rounded-xl bg-gray-50 p-4 h-24 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#899878]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                                  <div className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  Partner
                </div>
                </div>
              </div>

              {/* Company Name */}
              <div className="mt-4 text-center">
                <h3 className="text-sm font-semibold text-black group-hover:text-black transition-colors duration-300">
                  {partner.name}
                </h3>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-black/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-black mb-6">
            Ready to explore properties from these trusted developers?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;


