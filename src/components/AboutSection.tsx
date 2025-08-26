import React, { useState, useEffect } from "react";
import owner from '../assets/owner.png';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const { elementRef: missionRef, isVisible: missionVisible } = useScrollAnimation();
  const { elementRef: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { elementRef: teamRef, isVisible: teamVisible } = useScrollAnimation();

  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#899878]" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.333 32c-0.367 0-0.667-0.3-0.667-0.667 0-2.573 2.093-4.667 4.667-4.667 0.367 0 0.667 0.3 0.667 0.667s-0.3 0.667-0.667 0.667c-1.839 0-3.333 1.495-3.333 3.333 0 0.367-0.3 0.667-0.667 0.667zM30.667 32c-0.367 0-0.667-0.3-0.667-0.667 0-1.839-1.495-3.333-3.333-3.333-0.367 0-0.667-0.3-0.667-0.667s0.3-0.667 0.667-0.667c2.573 0 4.667 2.093 4.667 4.667 0 0.367-0.3 0.667-0.667 0.667zM20 30.667c-3.085 0-5.432-3.509-5.648-6.832-0.623-0.335-1.019-1.116-1.019-1.835v-1.333c0-0.476 0-1.647 1.333-1.935v-1.528c0-1.688 0.203-3.2 2.667-3.2h5.333c2.464 0 2.667 1.516 2.667 3.2v1.528c1.333 0.289 1.333 1.459 1.333 1.935v1.333c0 0.719-0.396 1.5-1.019 1.835-0.216 3.323-2.563 6.832-5.648 6.832z"/>
        </svg>
      ),
      title: "DEEP MARKET KNOWLEDGE",
      description: "We know Dubai — from its bustling communities to emerging investment hotspots."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#899878]" fill="currentColor" viewBox="0 0 32 32">
          <path d="M28.667 32.001h-9.333c-0.367 0-0.667-0.299-0.667-0.667v-8.667h-5.333v8.667c0 0.368-0.299 0.667-0.667 0.667h-9.333c-0.368 0-0.667-0.299-0.667-0.667v-16.667h-2c-0.277 0-0.527-0.172-0.624-0.433s-0.023-0.553 0.187-0.737l15.333-13.333c0.251-0.219 0.624-0.219 0.875 0l3.563 3.099v-2.596c0-0.368 0.3-0.667 0.667-0.667h5.333c0.367 0 0.667 0.299 0.667 0.667v8.393l5.104 4.437c0.208 0.184 0.284 0.476 0.187 0.737-0.097 0.26-0.347 0.433-0.624 0.433h-2v16.667c0 0.368-0.3 0.667-0.667 0.667z"/>
        </svg>
      ),
      title: "LEGAL EXPERTISE IN-HOUSE",
      description: "Our legal background means zero surprises during documentation, transfers, or compliance."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#899878]" fill="currentColor" viewBox="0 0 32 32">
          <path d="M15.796 25.284c-0.756 0-1.476-0.289-1.899-0.568-0.719-0.472-5.948-4.844-6.543-5.341l-1.813-1.527c-0.281-0.237-0.316-0.659-0.079-0.94 0.235-0.28 0.656-0.317 0.94-0.081l1.809 1.524c2.855 2.389 5.976 4.959 6.419 5.251 0.32 0.211 0.889 0.393 1.34 0.341 0.383-0.047 0.5-0.239 0.559-0.401 0.076-0.208 0.251-0.365 0.469-0.417 0.219-0.055 0.443 0.005 0.609 0.155 0.393 0.36 1.008 0.392 1.415 0.233 0.203-0.080 0.455-0.241 0.481-0.552 0.025-0.253 0.191-0.472 0.427-0.563s0.505-0.037 0.693 0.137c0.191 0.175 0.641 0.169 1.009-0.013 0.204-0.101 0.54-0.336 0.497-0.749-0.028-0.259 0.097-0.511 0.321-0.644 0.221-0.133 0.503-0.123 0.719 0.025 0.196 0.137 0.448 0.029 0.601-0.103 0.249-0.212 0.425-0.62 0.18-1.133-0.759-1.579-4.811-5.424-7.305-7.168l-0.021 0.007c-0.708 0.257-0.785 0.28-1.311 0.332-0.661 0.96-1.977 2.6-3.943 1.951-0.623-0.205-1.048-0.673-1.199-1.32-0.337-1.448 0.744-3.459 1.656-4.355 1.5-1.471 4.249-2.743 7.059-1.483 2.601 1.164 4.221 1.644 4.237 1.649 0.355 0.104 0.557 0.473 0.453 0.827s-0.472 0.557-0.827 0.452c-0.069-0.020-1.713-0.507-4.408-1.712-2.199-0.983-4.381 0.041-5.583 1.219-0.736 0.724-1.477 2.297-1.289 3.099 0.045 0.196 0.135 0.297 0.317 0.357 0.996 0.329 1.732-0.403 2.595-1.691 0.111-0.165 0.289-0.272 0.487-0.292l0.245-0.024c0.444-0.043 0.444-0.043 1.053-0.264l0.344-0.125c0.197-0.071 0.421-0.044 0.597 0.073 2.412 1.608 7.071 5.869 8.040 7.889 0.472 0.983 0.271 2.052-0.515 2.723-0.388 0.332-0.847 0.503-1.305 0.484-0.188 0.484-0.572 0.901-1.104 1.167-0.552 0.273-1.161 0.344-1.692 0.221-0.232 0.361-0.587 0.648-1.037 0.823-0.695 0.268-1.484 0.232-2.141-0.068-0.305 0.319-0.725 0.52-1.229 0.579-0.109 0.012-0.22 0.017-0.331 0.017z"/>
        </svg>
      ),
      title: "TRUSTED DEVELOPER PARTNERSHIPS",
      description: "We work with top names like Emaar, DAMAC, Nakheel, and Sobha, giving our clients access to Dubai's best properties."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#899878]" fill="currentColor" viewBox="0 0 32 32">
          <path d="M7.411 27.688c-2.289 0-4.521-0.14-6.827-0.432-0.335-0.043-0.584-0.327-0.584-0.663v-16.003c0-0.191 0.083-0.373 0.225-0.5s0.332-0.187 0.524-0.161c2.251 0.284 4.433 0.421 6.668 0.421 3.048 0 5.831-0.26 8.521-0.511 2.721-0.256 5.535-0.519 8.647-0.519 2.292 0 4.524 0.141 6.828 0.431 0.337 0.041 0.587 0.325 0.587 0.661v16c0 0.193-0.084 0.373-0.227 0.5-0.143 0.128-0.333 0.188-0.524 0.161-2.252-0.285-4.435-0.42-6.669-0.42-3.049 0-5.833 0.259-8.524 0.513-2.72 0.253-5.533 0.52-8.645 0.52z"/>
        </svg>
      ),
      title: "TAILORED INVESTMENT ADVICE",
      description: "From property flipping to portfolio growth, we help you build wealth — smartly and sustainably."
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, features.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
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
         <div ref={featuresRef} className={`rounded-3xl p-16 mt-24 scroll-animate ${featuresVisible ? 'animate' : ''}`}>
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-end mb-12">
             <div className="lg:col-span-3">
               <p className="text-lg text-black mb-4">What Sets Us Apart</p>
               <h2 className="text-4xl font-bold text-black mb-8">
                 BUILT DIFFERENT, TRUSTED ALWAYS
               </h2>
             </div>
             {/* <div className="lg:col-span-1">
               <a 
                 href="#services"
                 className="inline-flex items-center bg-[#899878] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#7a8a6a] transition-all duration-200"
               >
                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M4 6h16M4 10h16M4 14h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
                 Services
               </a>
             </div> */}
           </div>

         {/* Core Values Carousel */}
         <div className="relative w-full">
           <div className="carousel h-80 overflow-hidden">
             <div className="carousel-body h-full flex transition-transform duration-300 ease-in-out">
               {/* Slide 1 - Transparency */}
               <div className="carousel-slide px-1 flex-shrink-0 w-full lg:w-1/3">
                 <div className="bg-gray-100 flex h-full justify-center p-6 rounded-lg w-full">
                   <div className="text-center">
                     <div className="w-16 h-16 bg-black/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                       <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                       </svg>
                     </div>
                     <h3 className="text-lg font-bold text-black mb-2">Transparency</h3>
                     <p className="text-sm text-black">Clear communication at every step, so you always know where you stand.</p>
                   </div>
                 </div>
               </div>
               
               {/* Slide 2 - Reliability */}
               <div className="carousel-slide px-1 flex-shrink-0 w-full lg:w-1/3">
                 <div className="bg-white flex h-full justify-center p-6 rounded-lg border border-gray-200 w-full">
                   <div className="text-center">
                     <div className="w-16 h-16 bg-black/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                       <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                     </div>
                     <h3 className="text-lg font-bold text-black mb-2">Reliability</h3>
                     <p className="text-sm text-black">Your goals are our priority, count on us long after the deal is closed.</p>
                   </div>
                 </div>
               </div>
               
               {/* Slide 3 - Legal Precision */}
               <div className="carousel-slide px-1 flex-shrink-0 w-full lg:w-1/3">
                 <div className="bg-gray-100 flex h-full justify-center p-6 rounded-lg w-full">
                   <div className="text-center">
                     <div className="w-16 h-16 bg-black/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                       <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                       </svg>
                     </div>
                     <h3 className="text-lg font-bold text-black mb-2">Legal Precision</h3>
                     <p className="text-sm text-black">We deliver peace of mind through meticulous legal oversight and a seamless, secure process.</p>
                   </div>
                 </div>
               </div>
               
               {/* Slide 4 - Client Commitment */}
               <div className="carousel-slide px-1 flex-shrink-0 w-full lg:w-1/3">
                 <div className="bg-white flex h-full justify-center p-6 rounded-lg border border-gray-200 w-full">
                   <div className="text-center">
                     <div className="w-16 h-16 bg-black/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                       <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                       </svg>
                     </div>
                     <h3 className="text-lg font-bold text-black mb-2">Client Commitment</h3>
                     <p className="text-sm text-black">Your vision drives our approach. We prioritize your objectives with unwavering dedication and tailored service.</p>
                   </div>
                 </div>
               </div>
               
               {/* Slide 5 - Market Expertise */}
               <div className="carousel-slide px-1 flex-shrink-0 w-full lg:w-1/3">
                 <div className="bg-gray-100 flex h-full justify-center p-6 rounded-lg w-full">
                   <div className="text-center">
                     <div className="w-16 h-16 bg-black/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                       <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                       </svg>
                     </div>
                     <h3 className="text-lg font-bold text-black mb-2">Market Expertise</h3>
                     <p className="text-sm text-black">Powered by data and insight, our strategies are guided by in-depth research and real-time market intelligence.</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* Previous Slide Button */}
           <button 
             type="button" 
             className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 z-10"
             onClick={() => {
               const carouselBody = document.querySelector('.carousel-body');
               if (carouselBody instanceof HTMLElement) {
                 const currentTransform = carouselBody.style.transform;
                 const translateX = currentTransform.includes('translateX') 
                   ? parseInt(currentTransform.match(/translateX\(([-\d.]+)px\)/)?.[1] || '0') 
                   : 0;
                 const slideWidth = window.innerWidth >= 1024 ? 33.333 : 100; // lg: 1/3, xs: full
                 const newTranslateX = Math.min(translateX + slideWidth, 0);
                 carouselBody.style.transform = `translateX(${newTranslateX}%)`;
               }
             }}
           >
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
             </svg>
             <span className="sr-only">Previous</span>
           </button>
           
           {/* Next Slide Button */}
           <button 
             type="button" 
             className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 z-10"
             onClick={() => {
               const carouselBody = document.querySelector('.carousel-body');
               if (carouselBody instanceof HTMLElement) {
                 const currentTransform = carouselBody.style.transform;
                 const translateX = currentTransform.includes('translateX') 
                   ? parseInt(currentTransform.match(/translateX\(([-\d.]+)px\)/)?.[1] || '0') 
                   : 0;
                 const slideWidth = window.innerWidth >= 1024 ? 33.333 : 100; // lg: 1/3, xs: full
                 const maxTranslateX = window.innerWidth >= 1024 ? -66.666 : -400; // lg: show 3, xs: show 1
                 const newTranslateX = Math.max(translateX - slideWidth, maxTranslateX);
                 carouselBody.style.transform = `translateX(${newTranslateX}%)`;
               }
             }}
           >
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
             </svg>
             <span className="sr-only">Next</span>
           </button>
         </div>

         </div>

         {/* Trusted Professionals Section */}
         <div ref={teamRef} className={`rounded-3xl p-16 mt-24 scroll-animate ${teamVisible ? 'animate' : ''}`}>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
             <div className="lg:col-span-2">
               <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8 leading-tight">
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
                     src={owner}
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
   );
 };

export default AboutSection;
