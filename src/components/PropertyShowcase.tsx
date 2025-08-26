import React, { useState, useEffect } from 'react';

const PropertyShowcase: React.FC = () => {
  const [currentProperty, setCurrentProperty] = useState(0);

  const properties = [
    {
      id: 1,
      name: "Skyvue Solar",
      image: "https://horizonhillsrealestate.com/wp-content/uploads/2025/04/Untitled-design-2025-04-02T120958.803-png.webp",
      location: "Nad al Sheba",
      area: "2,289 sq.ft",
      completion: "March 2029",
      price: "AED 1.8M",
      logo: "https://horizonhillsrealestate.com/wp-content/uploads/2025/04/dr-suliman-al-habib-seeklogo.pdf-1-png.webp"
    },
    {
      id: 2,
      name: "340 Riverside Crescent",
      image: "https://horizonhillsrealestate.com/wp-content/uploads/2025/04/Untitled-design-2025-04-02T133258.752-png.webp",
      location: "Nad al Sheba",
      area: "1,811 sq.ft",
      completion: "December 2027",
      price: "AED 1.5M",
      logo: "https://horizonhillsrealestate.com/wp-content/uploads/2025/04/dr-suliman-al-habib-seeklogo.pdf-2-png.webp"
    },
    {
      id: 3,
      name: "Sky Scape",
      image: "https://horizonhillsrealestate.com/wp-content/uploads/2025/04/Untitled-design-2025-04-02T133258.752-png.webp",
      location: "Nad al Sheba",
      area: "2,790 sq.ft",
      completion: "December 2028",
      price: "AED 1.7M",
      logo: "https://horizonhillsrealestate.com/wp-content/uploads/2025/04/dr-suliman-al-habib-seeklogo.pdf-3-png.webp"
    },
    {
      id: 4,
      name: "Sobha Hartland",
      image: "https://horizonhillsrealestate.com/wp-content/uploads/2025/04/Untitled-design-2025-04-07T153017.073-png.webp",
      location: "Hartland II",
      area: "47,323 sq.ft",
      completion: "December 2026",
      price: "AED 25.7M",
      logo: "https://horizonhillsrealestate.com/wp-content/uploads/2025/04/dr-suliman-al-habib-seeklogo.pdf-4-png.webp"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProperty((prev) => (prev + 1) % properties.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [properties.length]);

  const goToProperty = (index: number) => {
    setCurrentProperty(index);
  };

  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-6">
            <div className="w-6 h-6 bg-primary rounded-full"></div>
          </div>
          <h6 className="text-primary font-semibold mb-4">INVESTOR'S CHOICE</h6>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Most Trusted Real Estate Partnerships
          </h2>
        </div>

        {/* Property Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Property Display */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            {properties.map((property, index) => (
              <div
                key={property.id}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentProperty ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div className="relative h-96 md:h-[500px]">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Property Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl md:text-4xl font-bold">{property.name}</h3>
                      <img 
                        src={property.logo} 
                        alt="Developer Logo" 
                        className="h-12 w-auto opacity-80"
                      />
                    </div>
                    
                    {/* Property Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <img 
                          src="https://horizonhillsrealestate.com/wp-content/uploads/2025/04/land-layer-location-png.webp" 
                          alt="Location" 
                          className="w-6 h-6"
                        />
                        <span className="text-lg">{property.location}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <img 
                          src="https://horizonhillsrealestate.com/wp-content/uploads/2025/04/land-layers-png.webp" 
                          alt="Area" 
                          className="w-6 h-6"
                        />
                        <span className="text-lg">{property.area}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <img 
                          src="https://horizonhillsrealestate.com/wp-content/uploads/2025/04/time-watch-calendar-png.webp" 
                          alt="Completion" 
                          className="w-6 h-6"
                        />
                        <span className="text-lg">{property.completion}</span>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg text-gray-300 mb-1">Starting From:</p>
                        <p className="text-3xl font-bold text-accent">{property.price}</p>
                      </div>
                      <a
                        href="https://tridentluxury.com/contact-us/"
                        className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors duration-200"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {properties.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProperty(index)}
                className={`w-4 h-4 rounded-full transition-all duration-200 ${
                  index === currentProperty 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 hover:bg-primary/50'
                }`}
                aria-label={`Go to property ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => goToProperty((currentProperty - 1 + properties.length) % properties.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 z-20"
            aria-label="Previous property"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => goToProperty((currentProperty + 1) % properties.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 z-20"
            aria-label="Next property"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
                            href="https://tridentluxury.com/contact-us/"
            className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-all duration-200 group"
          >
            <span>View All Properties</span>
            <svg 
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;


