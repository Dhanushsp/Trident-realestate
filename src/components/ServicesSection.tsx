import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServicesSection: React.FC = () => {
  const { elementRef: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { elementRef: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
  
  const services = [
    {
      id: 1,
      icon: "https://horizonhillsrealestate.com/wp-content/uploads/2025/03/analytics-ezgif.com-optimize.gif.webp",
      title: "Proven Investment Expertise",
      description: "Strategic insights and market expertise for high-yield real estate investments"
    },
    {
      id: 2,
      icon: "https://horizonhillsrealestate.com/wp-content/uploads/2025/03/keys-ezgif.com-optimize.gif.webp",
      title: "Seamless Property Transactions",
      description: "End-to-end solutions for buying, selling, and leasing properties with confidence"
    },
    {
      id: 3,
      icon: "https://horizonhillsrealestate.com/wp-content/uploads/2025/03/shield1-ezgif.com-optimize.gif.webp",
      title: "Trusted Real Estate Advisory",
      description: "Expert guidance and personalized solutions for your real estate journey"
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-black via-black to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('https://horizonhillsrealestate.com/wp-content/uploads/2025/03/Add-a-heading-4-png.webp')" }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Main Heading */}
        <div ref={headingRef} className={`text-center mb-16 scroll-animate ${headingVisible ? 'animate' : ''}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight max-w-4xl mx-auto">
            Trident Luxury Real Estate specializes in buying, selling, leasing, and investment consulting, ensuring seamless transactions and expert guidance in Dubai.
          </h2>
        </div>

        {/* Services Row - Three Icons in Single Row */}
        <div ref={servicesRef} className={`grid grid-cols-3 gap-8 md:gap-12 lg:gap-20 justify-items-center scroll-animate ${servicesVisible ? 'animate' : ''}`}>
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="text-center group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Service Icon - White Outline Style */}
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>
              </div>

              {/* Service Title - Single Line Text */}
              <h3 className="text-sm md:text-base lg:text-lg font-medium text-white leading-tight max-w-[120px] md:max-w-none">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div ref={ctaRef} className={`text-center mt-16 scroll-animate ${ctaVisible ? 'animate' : ''}`}>
          <a
                            href="https://tridentluxury.com/contact-us/"
            className="inline-flex items-center bg-white text-[#262A10] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 group"
          >
            <span>Get Expert Consultation</span>
            <svg 
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;




