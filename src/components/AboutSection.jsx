import React from "react";
import owner from '../assets/owner.jpg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CarouselSection from './CarouselSection';

const AboutSection = ({ onNavigate }) => {
  const { elementRef: mainContentRef, isVisible: mainContentVisible } = useScrollAnimation();

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
                Trident Luxury is dedicated to elevating the real estate experience value that transcends the ordinary.
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
                src="/hero2.jpg"
                alt="Luxury Waterfront Property - Horizon Hills Real Estate"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* What Sets Us Apart Section */}
        <CarouselSection />

          {/* Trusted Professionals Section */}
        <div className="rounded-3xl pt-8 px-6 sm:px-16 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-2 text-center lg:text-left">
              <h1 className="text-2xl sm:text-4xl font-bold text-black mb-2 leading-tight">
                TRUSTED PROFESSIONALS, DRIVING PROPERTY SUCCESS WITH CLARITY AND CARE.
              </h1>
            </div>
        
            {/* Team Member Cards */}
            <div className="lg:col-span-1 flex justify-center">
              {/* Team Member 1 */}
              <div className="bg-white rounded-2xl p-6 border border-[#7a8a6a] shadow-lg w-full max-w-xs sm:max-w-sm text-center">
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
