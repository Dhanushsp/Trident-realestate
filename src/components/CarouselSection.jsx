import React, { useEffect, useRef, useState } from 'react';

const CarouselSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const headerRef = useRef(null);
  const boxesRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const scrollLeft = container.scrollLeft;
      const scrollPercent = (scrollLeft / scrollWidth) * 100;
      setScrollPercent(scrollPercent);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -470, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 470, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-12 bg-[rgba(191,245,121,0.1)] overflow-hidden">
      {/* Header */}
      <div 
        ref={headerRef}
        className={`text-center mb-12 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-lg text-black mb-4 cmu-serif">
          WHAT SETS US APART
        </p>
        <h2 className="text-4xl font-bold text-black archivo-black">
          BUILT DIFFERENT, TRUSTED ALWAYS
        </h2>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[rgba(137,152,18,0.3)] hover:bg-[rgba(137,152,18,0.6)] border-none text-3xl p-2 cursor-pointer z-10 rounded transition-all duration-300 text-white"
          onClick={scrollLeft}
        >
          &#10094;
        </button>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[rgba(137,152,18,0.3)] hover:bg-[rgba(137,152,18,0.6)] border-none text-3xl p-2 cursor-pointer z-10 rounded transition-all duration-300 text-white"
          onClick={scrollRight}
        >
          &#10095;
        </button>

        {/* Carousel Container */}
        <div 
          ref={containerRef}
          className="flex gap-5 overflow-x-auto scroll-snap-x mandatory -webkit-overflow-scrolling-touch pb-2 scroll-smooth snap-x"
        >
          {/* Transparency Box */}
          <div 
            ref={boxesRef}
            className={`flex-none w-[450px] min-h-[350px] border-2 border-[#262A10] p-8 rounded-2xl flex flex-col justify-center gap-5 transition-all duration-800 ease-out snap-start hover:scale-95 hover:shadow-lg ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ backgroundColor: '#7a8a6a', transitionDelay: '200ms' }}
          >
            <div className="flex justify-center mb-2">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white archivo-black text-center">Transparency</h3>
            <p className="text-lg text-white leading-relaxed cmu-serif text-center">Clear communication at every step, so you always know where you stand.</p>
          </div>

          {/* Reliability Box */}
          <div 
            className={`flex-none w-[450px] min-h-[350px] border-2 border-[#262A10] p-8 rounded-2xl flex flex-col justify-center gap-5 transition-all duration-800 ease-out snap-start hover:scale-95 hover:shadow-lg ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ backgroundColor: '#7a8a6a', transitionDelay: '400ms' }}
          >
            <div className="flex justify-center mb-2">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white archivo-black text-center">Reliability</h3>
            <p className="text-lg text-white leading-relaxed cmu-serif text-center">Your goals are our priority, count on us long after the deal is closed.</p>
          </div>

          {/* Legal Precision Box */}
          <div 
            className={`flex-none w-[450px] min-h-[350px] border-2 border-[#262A10] p-8 rounded-2xl flex flex-col justify-center gap-5 transition-all duration-800 ease-out snap-start hover:scale-95 hover:shadow-lg ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ backgroundColor: '#7a8a6a', transitionDelay: '600ms' }}
          >
            <div className="flex justify-center mb-2">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white archivo-black text-center">Legal Precision</h3>
            <p className="text-lg text-white leading-relaxed cmu-serif text-center">We deliver peace of mind through meticulous legal oversight and a seamless, secure process.</p>
          </div>

          {/* Client Commitment Box */}
          <div 
            className={`flex-none w-[450px] min-h-[350px] border-2 border-[#262A10] p-8 rounded-2xl flex flex-col justify-center gap-5 transition-all duration-800 ease-out snap-start hover:scale-95 hover:shadow-lg ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ backgroundColor: '#7a8a6a', transitionDelay: '800ms' }}
          >
            <div className="flex justify-center mb-2">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white archivo-black text-center">Client Commitment</h3>
            <p className="text-lg text-white leading-relaxed cmu-serif text-center">Your vision drives our approach. We prioritize your objectives with unwavering dedication and tailored service.</p>
          </div>

          {/* Market Expertise Box */}
          <div 
            className={`flex-none w-[450px] min-h-[350px] border-2 border-[#262A10] p-8 rounded-2xl flex flex-col justify-center gap-5 transition-all duration-800 ease-out snap-start hover:scale-95 hover:shadow-lg ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ backgroundColor: '#7a8a6a', transitionDelay: '1000ms' }}
          >
            <div className="flex justify-center mb-2">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white archivo-black text-center">Market Expertise</h3>
            <p className="text-lg text-white leading-relaxed cmu-serif text-center">Powered by data and insight, our strategies are guided by in-depth research and real-time market intelligence.</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[rgba(0,0,0,0.1)] rounded">
          <div 
            className="h-full bg-[#899878] rounded transition-all duration-200 ease-out"
            style={{ width: `${scrollPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Custom CSS for carousel */}
      <style>{`
        .carousel-container {
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }
        .carousel-container::-webkit-scrollbar {
          display: none;
        }
        .carousel-item {
          scroll-snap-align: start;
        }
      `}</style>
    </section>
  );
};

export default CarouselSection;
