import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AboutCarousel from './AboutCarousel';
import owner from '../assets/owner.png';

interface AboutUsPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ onBack, onNavigate }) => {
  // Individual element animations
  const { elementRef: heroTitleRef, isVisible: heroTitleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { elementRef: heroButtonRef, isVisible: heroButtonVisible } = useScrollAnimation<HTMLButtonElement>();
  const { elementRef: missionIconRef, isVisible: missionIconVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: missionTitleRef, isVisible: missionTitleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { elementRef: missionTextRef, isVisible: missionTextVisible } = useScrollAnimation<HTMLParagraphElement>();
  const { elementRef: visionIconRef, isVisible: visionIconVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: visionTitleRef, isVisible: visionTitleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { elementRef: visionTextRef, isVisible: visionTextVisible } = useScrollAnimation<HTMLParagraphElement>();
  const { elementRef: whoWeAreTitleRef, isVisible: whoWeAreTitleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { elementRef: whoWeAreTextRef, isVisible: whoWeAreTextVisible } = useScrollAnimation<HTMLParagraphElement>();
  const { elementRef: whoWeAreImageRef, isVisible: whoWeAreImageVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: trustedProfessionalsRef, isVisible: trustedProfessionalsVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: teamMemberRef, isVisible: teamMemberVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div id="about" className="min-h-screen">
      {/* Hero Section with Image and Text */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="/banner1.jpg" 
            alt="About Us - Trident Luxury Real Estate" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 
            ref={heroTitleRef}
            className={`text-2xl md:text-4xl font-bold mb-8 leading-tight archivo-black scroll-animate ${heroTitleVisible ? 'animate' : ''}`}
          >
            Behind Every Investment,<br />
            A Trusted Partner
          </h1>
          
          <button 
            ref={heroButtonRef}
            onClick={() => onNavigate('contact')}
            className={`bg-white text-black px-4 py-2 rounded-xl font-bold text-sm hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl scroll-animate ${heroButtonVisible ? 'animate' : ''}`}
          >
            Let's Talk
          </button>
        </div>
      </section>

      {/* About Us Content */}
      <section  className="py-24  bg-white">
        <div className="container mx-auto px-4">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Left Column - MISSION and VISION Cards */}
            <div className="lg:col-span-2 order-2 lg:order-1 space-y-8">
              {/* MISSION Card */}
              <div className="bg-[#7a8a6a] rounded-3xl p-8 shadow-lg" style={{ backgroundColor: '#7a8a6a' }}>
                <div 
                  ref={missionIconRef}
                  className={`w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 scroll-animate ${missionIconVisible ? 'animate' : ''}`}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h2 
                  ref={missionTitleRef}
                  className={`text-2xl font-bold text-white mb-4 scroll-animate ${missionTitleVisible ? 'animate' : ''}`}
                >
                  MISSION
                </h2>
                <p 
                  ref={missionTextRef}
                  className={`text-sm text-white leading-relaxed scroll-animate ${missionTextVisible ? 'animate' : ''}`}
                >
                  Trident Luxury is dedicated to elevating the real estate experience into a journey of trust, clarity, and sophistication. We go beyond transactions, offering tailored strategies, insider knowledge, and unrivaled expertise to guide investors and homebuyers toward exceptional opportunities. With a foundation built on discretion, integrity, and precision, we craft lasting relationships while delivering value that transcends the ordinary.
                </p>
              </div>

              {/* VISION Card */}
              <div className="bg-[#7a8a6a] rounded-3xl p-8 shadow-lg" style={{ backgroundColor: '#7a8a6a' }}>
                <div 
                  ref={visionIconRef}
                  className={`w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 scroll-animate ${visionIconVisible ? 'animate' : ''}`}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 
                  ref={visionTitleRef}
                  className={`text-2xl font-bold text-white mb-4 scroll-animate ${visionTitleVisible ? 'animate' : ''}`}
                >
                  VISION
                </h2>
                <p 
                  ref={visionTextRef}
                  className={`text-sm text-white leading-relaxed scroll-animate ${visionTextVisible ? 'animate' : ''}`}
                >
                  To be the definitive name in luxury real estate. Trident Luxury envisions a real estate experience defined by excellence, where every client is empowered to make confident, informed decisions through bespoke service and world-class advisory.
                </p>
              </div>
            </div>
            
            {/* Right Column - WHO WE ARE Content and Image */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {/* WHO WE ARE Text Section */}
              <div className="mb-8">
                <h1 
                  ref={whoWeAreTitleRef}
                  className={`text-2xl sm:text-4xl font-bold text-black mb-6 scroll-animate ${whoWeAreTitleVisible ? 'animate' : ''}`}
                >
                  WHO WE ARE
                </h1>
                <p 
                  ref={whoWeAreTextRef}
                  className={`text-base text-gray-700 leading-relaxed max-w-2xl scroll-animate ${whoWeAreTextVisible ? 'animate' : ''}`}
                >
                  Trident Luxury Real Estate is a Dubai-based brokerage firm helping clients buy, sell, and invest with clarity and peace of mind. With legal professionals and real estate experts under one roof, we provide smooth, compliant transactions and tailored advisory that puts your goals first.
                </p>
              </div>
              
              {/* Large Image Below Text */}
              <div 
                ref={whoWeAreImageRef}
                className={`relative rounded-3xl overflow-hidden shadow-2xl scroll-animate ${whoWeAreImageVisible ? 'animate' : ''}`}
              >
                <img 
                  src="/hero2.jpg" 
                  alt="Luxury Waterfront Property - Trident Luxury Real Estate" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* About Carousel Section */}
          <AboutCarousel />

          {/* Trusted Professionals Section */}
<div ref={trustedProfessionalsRef} className={`rounded-3xl px-6 sm:px-16 scroll-animate ${trustedProfessionalsVisible ? 'animate' : ''}`}>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
    <div className="lg:col-span-2 text-center lg:text-left">
      <h1 className="text-2xl sm:text-4xl font-bold text-black mb-8 leading-tight">
        TRUSTED PROFESSIONALS, DRIVING PROPERTY SUCCESS WITH CLARITY AND CARE.
      </h1>
    </div>

    {/* Team Member Cards */}
    <div className="lg:col-span-1 flex justify-center">
      {/* Team Member 1 */}
      <div ref={teamMemberRef} className={`bg-white rounded-2xl p-6 border border-[#7a8a6a] shadow-lg w-full max-w-xs sm:max-w-sm text-center scroll-animate ${teamMemberVisible ? 'animate' : ''}`}>
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
          className="inline-flex items-center bg-[#738064] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#7a8a6a] transition-all duration-200"
        >
          Contact
        </button>
      </div>
    </div>
  </div>
</div>

        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
