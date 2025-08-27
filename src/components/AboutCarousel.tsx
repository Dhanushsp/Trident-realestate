import React, { useState } from 'react';

const AboutCarousel: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="30" stroke="#FF6B35" strokeWidth="2" />
          <circle cx="32" cy="20" r="8" stroke="#FF6B35" strokeWidth="2" />
          <path d="M16 48c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#FF6B35" strokeWidth="2" />
          <path d="M28 16h8v8h-8z" stroke="#FF6B35" strokeWidth="2" />
        </svg>
      ),
      title: "DEEP MARKET KNOWLEDGE",
      description: "We know Dubai — from its bustling communities to emerging investment hotspots."
    },
    {
      id: 2,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <path d="M16 48l16-16 16 16" stroke="#FF6B35" strokeWidth="2" />
          <path d="M16 48V24h32v24" stroke="#FF6B35" strokeWidth="2" />
          <path d="M24 32h16M24 36h16" stroke="#FF6B35" strokeWidth="2" />
        </svg>
      ),
      title: "LEGAL EXPERTISE IN-HOUSE",
      description: "Our legal background means zero surprises during documentation, transfers, or compliance."
    },
    {
      id: 3,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <path d="M20 32c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#FF6B35" strokeWidth="2" />
          <path d="M20 32c0 6.627 5.373 12 12 12s12-5.373 12-12" stroke="#FF6B35" strokeWidth="2" />
          <path d="M32 20v24" stroke="#FF6B35" strokeWidth="2" />
        </svg>
      ),
      title: "TRUSTED DEVELOPER PARTNERSHIPS",
      description: "We work with top names like Emaar, DAMAC, Nakheel, and Sobha, giving our clients access to Dubai's best properties."
    },
    {
      id: 4,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <rect x="16" y="16" width="32" height="32" rx="4" stroke="#FF6B35" strokeWidth="2" />
          <path d="M24 24h16M24 28h16M24 32h12M24 36h8" stroke="#FF6B35" strokeWidth="2" />
        </svg>
      ),
      title: "TAILORED INVESTMENT ADVICE",
      description: "From proper growth, we lead smartly and efficiently."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1; // small screens
      if (window.innerWidth < 1024) return 2; // medium
    }
    return 4; // large
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= services.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? services.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why Trident Luxury Real Estate is your trusted partner in Dubai's dynamic real estate market
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView())}%)`,
              width: `${(services.length * 100) / itemsPerView()}%`,
            }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 p-6 text-center rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-4 tracking-wide">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-200 my-16"></div>

        {/* Additional Content Placeholder */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            More content below the divider line...
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCarousel;
