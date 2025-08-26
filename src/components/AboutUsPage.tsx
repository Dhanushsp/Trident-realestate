import React, { useState, useEffect, useRef } from 'react';

interface AboutUsPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ onBack, onNavigate }) => {
  const [missionVisible, setMissionVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);

  const missionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === missionRef.current) {
              setMissionVisible(true);
            } else if (entry.target === featuresRef.current) {
              setFeaturesVisible(true);
            } else if (entry.target === teamRef.current) {
              setTeamVisible(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (missionRef.current) observer.observe(missionRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (teamRef.current) observer.observe(teamRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      

      {/* Hero Section with Image and Text */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="/who-we-are.jpg" 
            alt="About Us - Trident Luxury Real Estate" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight archivo-black">
            Behind Every Investment,<br />
            A Trusted Partner
          </h1>
          
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Let's Talk
          </button>
        </div>
      </section>

      {/* About Us Content */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Left Column - MISSION and VISION Cards */}
            <div className="lg:col-span-2 order-2 lg:order-1 space-y-8">
              {/* MISSION Card */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-black mb-4">MISSION</h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Trident Luxury is dedicated to elevating the real estate experience into a journey of trust, clarity, and sophistication. We go beyond transactions, offering tailored strategies, insider knowledge, and unrivaled expertise to guide investors and homebuyers toward exceptional opportunities. With a foundation built on discretion, integrity, and precision, we craft lasting relationships while delivering value that transcends the ordinary.
                </p>
              </div>

              {/* VISION Card */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-black mb-4">VISION</h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  To be the definitive name in luxury real estate. Trident Luxury envisions a real estate experience defined by excellence, where every client is empowered to make confident, informed decisions through bespoke service and world-class advisory.
                </p>
              </div>
            </div>
            
            {/* Right Column - WHO WE ARE Content and Image */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {/* WHO WE ARE Text Section */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-black mb-6">
                  WHO WE ARE
                </h1>
                <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
                  Trident Luxury Real Estate is a Dubai-based brokerage firm helping clients buy, sell, and invest with clarity and peace of mind. With legal professionals and real estate experts under one roof, we provide smooth, compliant transactions and tailored advisory that puts your goals first.
                </p>
              </div>
              
              {/* Large Image Below Text */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/who-we-are.jpg" 
                  alt="Luxury Waterfront Property - Trident Luxury Real Estate" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* What Sets Us Apart Section */}
          <div ref={featuresRef} className={`bg-gradient-to-br from-[#fef2e6] via-[#fff9f7] to-[#fef2e6] rounded-3xl p-16 mt-24 scroll-animate ${featuresVisible ? 'animate' : ''}`}>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-end mb-12">
              <div className="lg:col-span-3">
                <p className="text-lg text-black mb-4">What Sets Us Apart</p>
                <h2 className="text-4xl font-bold text-black mb-8">
                  BUILT DIFFERENT, TRUSTED ALWAYS
                </h2>
              </div>
            </div>

            {/* Core Values Vertical List */}
            <div className="w-full">
              <div className="space-y-6">
                {/* Value 1 - Transparency */}
                <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-black/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-2">Transparency</h3>
                      <p className="text-black leading-relaxed">Clear communication at every step, so you always know where you stand.</p>
                    </div>
                  </div>
                </div>
                
                {/* Value 2 - Reliability */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-black/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-2">Reliability</h3>
                      <p className="text-black leading-relaxed">Your goals are our priority, count on us long after the deal is closed.</p>
                    </div>
                  </div>
                </div>
                
                {/* Value 3 - Legal Precision */}
                <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-black/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-2">Legal Precision</h3>
                      <p className="text-black leading-relaxed">We deliver peace of mind through meticulous legal oversight and a seamless, secure process.</p>
                    </div>
                  </div>
                </div>
                
                {/* Value 4 - Client Commitment */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-black/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-2">Client Commitment</h3>
                      <p className="text-black leading-relaxed">Your vision drives our approach. We prioritize your objectives with unwavering dedication and tailored service.</p>
                    </div>
                  </div>
                </div>
                
                {/* Value 5 - Market Expertise */}
                <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-black/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-2">Market Expertise</h3>
                      <p className="text-black leading-relaxed">Powered by data and insight, our strategies are guided by in-depth research and real-time market intelligence.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted Professionals Section */}
          <div ref={teamRef} className={`bg-gradient-to-br from-[#fef2e6] via-[#fff9f7] to-[#fef2e6] rounded-3xl p-16 mt-24 scroll-animate ${teamVisible ? 'animate' : ''}`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
              <div className="lg:col-span-2">
                <h1 className="text-5xl font-bold text-black mb-8 leading-tight">
                  TRUSTED
                  PROFESSIONALS,
                  DRIVING PROPERTY
                  SUCCESS WITH CLARITY AND CARE.
                </h1>
              </div>

              {/* Team Member Cards */}
              <div className="lg:col-span-1 space-y-6">
                {/* Team Member 1 */}
                <div className="bg-white rounded-2xl p-6 border border-[#899878]/15 shadow-lg">
                  <div className="w-52 h-64 rounded-xl overflow-hidden mb-4 mx-auto">
                    <img 
                      src="/owner.jpg" 
                      alt="Rahul Zaveri"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-black mb-2">Rahul Zaveri</h4>
                  <p className="text-black mb-4">Founder of Trident Luxury</p>
                  <p className="text-sm italic mb-4">Premium Real Estate Sales Strategist</p>
                  <a 
                    href="#"
                    className="inline-flex items-center bg-[#899878] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#7a8a6a] transition-all duration-200"
                  >
                    Contact
                  </a>
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
