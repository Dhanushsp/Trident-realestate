import React from "react";

const ScrollingBanner: React.FC = () => {
  const text = "REAL ESTATE WITH EXPERTISE * NAVIGATING REAL ESTATE WITH EXPERTISE * ";
  
  return (
    <section className="py-8 bg white overflow-hidden">
      <div className="relative">
        {/* Scrolling Text Container */}
        <div className="flex whitespace-nowrap">
          {/* First set of text */}
          <div className="flex items-center animate-scroll">
            {Array.from({ length: 3 }, (_, index) => (
              <span key={index} className="inline-flex items-center mx-8 text-2xl md:text-3xl font-bold">
                <span className="text-[#262A10] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                  REAL ESTATE WITH EXPERTISE
                </span>
                <span className="mx-4 text-black">*</span>
                <span className="text-[#262A10] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                  NAVIGATING REAL ESTATE WITH EXPERTISE
                </span>
                <span className="mx-4 text-black">*</span>
              </span>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center animate-scroll">
            {Array.from({ length: 3 }, (_, index) => (
              <span key={index} className="inline-flex items-center mx-8 text-2xl md:text-3xl font-bold">
                <span className="text-[#262A10] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                  REAL ESTATE WITH EXPERTISE
                </span>
                <span className="mx-4 text-black">*</span>
                <span className="text-[#262A10] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                  NAVIGATING REAL ESTATE WITH EXPERTISE
                </span>
                <span className="mx-4 text-black">*</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingBanner;


