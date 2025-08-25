import React from 'react';

const AboutCarousel: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" stroke="#FF6B35" strokeWidth="2" fill="none"/>
          <circle cx="32" cy="20" r="8" stroke="#FF6B35" strokeWidth="2" fill="none"/>
          <path d="M16 48c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#FF6B35" strokeWidth="2" fill="none"/>
          <path d="M28 16l8 0l0 8l-8 0z" stroke="#FF6B35" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: "DEEP MARKET KNOWLEDGE",
      description: "We know Dubai — from its bustling communities to emerging investment hotspots."
    },
    {
      id: 2,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 48l16-16l16 16" stroke="#FF6B35" strokeWidth="2" fill="none"/>
          <path d="M16 48l0-24h32v24" stroke="#FF6B35" strokeWidth="2" fill="none"/>
          <path d="M24 32h16" stroke="#FF6B35" strokeWidth="2" fill="none"/>
          <path d="M24 36h16" stroke="#FF6B35" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: "LEGAL EXPERTISE IN-HOUSE",
      description: "Our legal background means zero surprises during documentation, transfers, or compliance."
    },
    {
      id: 3,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 32c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#FF6B35" strokeWidth="2" fill="none"/>
          <path d="M20 32c0 6.627 5.373 12 12 12s12-5.373 12-12" stroke="#FF6B35" strokeWidth="2" fill="none"/>
          <path d="M32 20v24" stroke="#FF6B35" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: "TRUSTED DEVELOPER PARTNERSHIPS",
      description: "We work with top names like Emaar, DAMAC, Nakheel, and Sobha, giving our clients access to Dubai's best properties."
    },
    {
      id: 4,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="16" width="32" height="32" rx="4" stroke="#FF6B35" strokeWidth="2" fill="none"/>
          <path d="M24 24h16" stroke="#FF6B35" strokeWidth="2" fill="none"/>
          <path d="M24 28h16" stroke="#FF6B35" strokeWidth="2" fill="none"/>
          <path d="M24 32h12" stroke="#FF6B35" strokeWidth="2" fill="none"/>
          <path d="M24 36h8" stroke="#FF6B35" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: "TAILORED INVESTMENT ADVICE",
      description: "From proper growth, we lead smartly and efficiently."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why Horizon Hills Real Estate is your trusted partner in Dubai's dynamic real estate market
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 group"
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

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-200 mb-16"></div>

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
