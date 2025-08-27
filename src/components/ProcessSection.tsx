import React from "react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProcessSection: React.FC = () => {
  const { elementRef: processRef, isVisible: processVisible } = useScrollAnimation();
  
  const processSteps = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4C16 5.11 15.11 6 14 6C12.89 6 12 5.11 12 4C12 2.89 12.89 2 14 2C15.11 2 16 2.89 16 4M20 22V16H22V22H20M22 14H20V12H22V14M6 12C6 9.79 7.79 8 10 8S14 9.79 14 12C14 14.21 12.21 16 10 16S6 14.21 6 12M10 18C5.58 18 2 15.42 2 12C2 8.58 5.58 6 10 6C14.42 6 18 8.58 18 12C18 15.42 14.42 18 10 18Z"/>
        </svg>
      ),
      title: "Consultation",
      description: "Understanding your real estate goals and expectations."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.59 15.41 11.11 16 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3M9.5 5C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5M7 8H8V9H7V8M7 10H8V11H7V10M7 12H8V13H7V12M10 8H11V9H10V8M10 10H11V11H10V10M10 12H11V13H10V12M13 8H14V9H13V8M13 10H14V11H13V10M13 12H14V13H13V12Z"/>
        </svg>
      ),
      title: "Market Analysis",
      description: "Providing tailored insights and property options."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7L12 12L22 7L12 2M2 17L12 22L22 17V7L12 12L2 7V17M12 22V12"/>
        </svg>
      ),
      title: "Property Selection",
      description: "Identifying the best opportunities that align with your needs."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8L14 2M18 20H6V4H13V9H18V20M15 13H9V11H15V13M15 17H9V15H15V17Z"/>
        </svg>
      ),
      title: "Paperwork & Terms",
      description: "Ensuring a seamless transaction process."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7M9 7L10.5 5.5L16 11L14.5 12.5L9 7Z"/>
        </svg>
      ),
      title: "Post-Sale Support",
      description: "Offering continuous guidance beyond the purchase or sale."
    }
  ];

  return (
    <section className="py-16 mt-4 relative overflow-hidden">
  {/* Background City Skyline */}
  <div className="absolute inset-0 z-0">
    <img
      src="/hero1.jpg"
      alt="City Skyline"
      className="w-full h-full object-cover"
    />
    {/* Dark overlay for better text visibility */}
    <div className="absolute inset-0 bg-black/40"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="flex justify-center">
      {/* Single Our Process Card */}
      <div
        ref={processRef}
        className={`max-w-4xl w-full scroll-animate ${
          processVisible ? "animate" : ""
        }`}
      >
        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/30">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Our Process
          </h2>

          <p className="text-sm sm:text-base text-white leading-relaxed mb-12">
            Our structured process ensures a smooth real estate experience—from
            understanding your goals and analyzing market trends to securing the
            best property, handling negotiations, and providing ongoing support
            even after the deal is done.
          </p>

          {/* Process Steps */}
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={index}>
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                       style={{ backgroundColor: "#7a8a6a" }}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Divider Line */}
                {index < processSteps.length - 1 && (
                  <div className="ml-16 mt-6 h-px bg-white/40"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default ProcessSection;
