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
      containerRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 420, behavior: 'smooth' });
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
            className={`flex-none w-[400px] min-h-[350px] border-2 border-[#262A10] p-8 rounded-2xl flex flex-col justify-center gap-5 transition-all duration-800 ease-out snap-start hover:scale-95 hover:shadow-lg ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ backgroundColor: '#7a8a6a', transitionDelay: '200ms' }}
          >
            <h3 className="text-2xl font-bold text-white archivo-black">Transparency</h3>
            <p className="text-lg text-white leading-relaxed cmu-serif">Clear communication at every step, so you always know where you stand.</p>
          </div>

          {/* Reliability Box */}
          <div 
            className={`flex-none w-[400px] min-h-[350px] border-2 border-[#262A10] p-8 rounded-2xl flex flex-col justify-center gap-5 transition-all duration-800 ease-out snap-start hover:scale-95 hover:shadow-lg ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ backgroundColor: '#7a8a6a', transitionDelay: '400ms' }}
          >
            <h3 className="text-2xl font-bold text-white archivo-black">Reliability</h3>
            <p className="text-lg text-white leading-relaxed cmu-serif">Your goals are our priority, count on us long after the deal is closed.</p>
          </div>

          {/* Legal Precision Box */}
          <div 
            className={`flex-none w-[400px] min-h-[350px] border-2 border-[#262A10] p-8 rounded-2xl flex flex-col justify-center gap-5 transition-all duration-800 ease-out snap-start hover:scale-95 hover:shadow-lg ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ backgroundColor: '#7a8a6a', transitionDelay: '600ms' }}
          >
            <h3 className="text-2xl font-bold text-white archivo-black">Legal Precision</h3>
            <p className="text-lg text-white leading-relaxed cmu-serif">We deliver peace of mind through meticulous legal oversight and a seamless, secure process.</p>
          </div>

          {/* Client Commitment Box */}
          <div 
            className={`flex-none w-[400px] min-h-[350px] border-2 border-[#262A10] p-8 rounded-2xl flex flex-col justify-center gap-5 transition-all duration-800 ease-out snap-start hover:scale-95 hover:shadow-lg ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ backgroundColor: '#7a8a6a', transitionDelay: '800ms' }}
          >
            <h3 className="text-2xl font-bold text-white archivo-black">Client Commitment</h3>
            <p className="text-lg text-white leading-relaxed cmu-serif">Your vision drives our approach. We prioritize your objectives with unwavering dedication and tailored service.</p>
          </div>

          {/* Market Expertise Box */}
          <div 
            className={`flex-none w-[400px] min-h-[350px] border-2 border-[#262A10] p-8 rounded-2xl flex flex-col justify-center gap-5 transition-all duration-800 ease-out snap-start hover:scale-95 hover:shadow-lg ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ backgroundColor: '#7a8a6a', transitionDelay: '1000ms' }}
          >
            <h3 className="text-2xl font-bold text-white archivo-black">Market Expertise</h3>
            <p className="text-lg text-white leading-relaxed cmu-serif">Powered by data and insight, our strategies are guided by in-depth research and real-time market intelligence.</p>
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
