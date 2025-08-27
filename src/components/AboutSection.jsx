import React, { useState, useEffect } from "react";
import owner from '../assets/owner.png';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const { elementRef: missionRef, isVisible: missionVisible } = useScrollAnimation();
  const { elementRef: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { elementRef: teamRef, isVisible: teamVisible } = useScrollAnimation();
  const { elementRef: mainContentRef, isVisible: mainContentVisible } = useScrollAnimation();

  const features = [
    {
      title: "Transparency",
      description: "Clear communication at every step, so you always know where you stand.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Reliability",
      description: "Your goals are our priority, count on us long after the deal is closed.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Legal Precision",
      description: "We deliver peace of mind through meticulous legal oversight and a seamless, secure process.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      title: "Client Commitment",
      description: "Your vision drives our approach. We prioritize your objectives with unwavering dedication and tailored service.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Market Expertise",
      description: "Powered by data and insight, our strategies are guided by in-depth research and real-time market intelligence.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % features.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, features.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Content Grid */}
        <div ref={mainContentRef} className={`grid grid-cols-1 lg:grid-cols-5 gap-16 items-start scroll-animate ${mainContentVisible ? 'animate' : ''}`}>
          {/* Left Column - MISSION and VISION Cards */}
          <div className="lg:col-span-2 order-2 lg:order-1 space-y-8">
            {/* MISSION Card */}
            <div className="bg-[#7a8a6a] rounded-3xl p-8 shadow-lg" style={{ backgroundColor: '#7a8a6a' }}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">MISSION</h2>
              <p className="text-sm sm:text-base text-white leading-relaxed">
                Trident Luxury is dedicated to elevating the real estate experience into a journey of trust, clarity, and sophistication. We go beyond transactions, offering tailored strategies, insider knowledge, and unrivaled expertise to guide investors and homebuyers toward exceptional opportunities. With a foundation built on discretion, integrity, and precision, we craft lasting relationships while delivering value that transcends the ordinary.
              </p>
            </div>

            {/* VISION Card */}
            <div className="bg-[#7a8a6a] rounded-3xl p-8 shadow-lg" style={{ backgroundColor: '#7a8a6a' }}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">VISION</h2>
              <p className="text-sm sm:text-base text-white leading-relaxed">
                To be the definitive name in luxury real estate. Trident Luxury envisions a real estate experience defined by excellence, where every client is empowered to make confident, informed decisions through bespoke service and world-class advisory.
              </p>
            </div>
          </div>

          {/* Right Column - WHO WE ARE Content and Image */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {/* WHO WE ARE Text Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6">
                WHO WE ARE
              </h1>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl">
                Horizon Hills Real Estate is a Dubai-based brokerage firm helping clients buy, sell, and invest with clarity and peace of mind. With legal professionals and real estate experts under one roof, we provide smooth, compliant transactions and tailored advisory that puts your goals first.
              </p>
            </div>

            {/* Large Image Below Text */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/who-we-are.jpg"
                alt="Luxury Waterfront Property - Horizon Hills Real Estate"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* What Sets Us Apart Section */}
        <div ref={featuresRef} className={`rounded-3xl pt-16 px-16 scroll-animate ${featuresVisible ? 'animate' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-end mb-12">
            <div className="lg:col-span-3">
              <p className="text-lg text-black mb-4">What Sets Us Apart</p>
              <h2 className="text-4xl font-bold text-black mb-8">
                BUILT DIFFERENT, TRUSTED ALWAYS
              </h2>
            </div>
          </div>

          {/* Core Values Carousel */}
          <div className="relative w-full bg-[#7a8a6a] rounded-3xl p-8" style={{ backgroundColor: '#7a8a6a' }}>
            <div className="carousel h-80 overflow-hidden">
              <div className="carousel-body h-full flex transition-transform duration-300 ease-in-out">
                {features.map((feature, index) => (
                  <div key={index} className="carousel-slide px-1 flex-shrink-0 w-full lg:w-1/3">
                    <div className="bg-white/10 flex h-full justify-center p-6 rounded-lg w-full border border-white/20">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                          {feature.icon}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-sm text-white">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="sr-only">Previous</span>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="sr-only">Next</span>
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

          {/* Trusted Professionals Section */}
        <div className="rounded-3xl pt-16 px-6 sm:px-16 mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-2 text-center lg:text-left">
              <h1 className="text-2xl sm:text-4xl font-bold text-black mb-8 leading-tight">
                TRUSTED PROFESSIONALS, DRIVING PROPERTY SUCCESS WITH CLARITY AND CARE.
              </h1>
            </div>
        
            {/* Team Member Cards */}
            <div className="lg:col-span-1 flex justify-center">
              {/* Team Member 1 */}
              <div className="bg-[#9baa8e] rounded-2xl p-6 border border-[#7a8a6a] shadow-lg w-full max-w-xs sm:max-w-sm text-center">
                <div className="w-auto h-auto rounded-xl overflow-hidden mb-4 mx-auto">
                  <img 
                    src={owner}
                    alt="Rahul Zaveri"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-black mb-2">Rahul Zaveri</h4>
                <p className="text-black mb-2">Founder of Trident Luxury</p>
                <p className="text-sm italic mb-4">Premium Real Estate Sales Strategist</p>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center bg-[#657058] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#7a8a6a] transition-all duration-200"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
