import React from 'react';

interface ServicesPageProps {
  onBack: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onBack }) => {
  const services = [
    {
      id: 1,
      title: "Real Estate Advisory",
      description: "Providing strategic insights and expert guidance for well-informed decisions.",
      image: "/services/1.jpg",
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Buying & Selling Assistance",
      description: "Helping clients navigate property transactions to maximize value.",
      image: "/services/2.jpg",
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Leasing Solutions",
      description: "Connecting landlords with reliable tenants and streamlining lease agreements.",
      image: "/services/3.jpg",
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Investment Consulting",
      description: "Identifying high-yield real estate investment opportunities.",
      image: "/services/4.jpg",
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Legal & Financial Support",
      description: "Partnering with top legal firms, banks, and conveyancing providers for seamless transactions.",
      image: "/services/5.jpg",
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Golden Visa Assistance",
      description: "Helping investors secure long-term residency benefits through property investment.",
      image: "/services/6.jpg",
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 7,
      title: "Tenant Screening & Property Management",
      description: "Ensuring stress-free property management with reliable tenant screening.",
      image: "/services/7.jpg",
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      

      {/* Hero Section with Image and Text */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="/hero1.jpg" 
            alt="Services - Horizon Hills Real Estate" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight archivo-black">
            Our Services,<br />
            Your Advantage
          </h1>
        </div>
      </section>

      {/* Services Content Section */}
      <section className="py-24 bg-[#fef2e6]">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-black rounded-full mr-3"></div>
              <span className="text-sm font-semibold text-black uppercase tracking-wider">SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Helping You Make the Right Move
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white  rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Service Image with Overlapping Text Box */}
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlapping Text Box - Smaller width and better positioning */}
                  <div className="absolute bottom-0 left-4 right-4 bg-[#262A10] rounded-t-2xl p-6 shadow-lg">
                    <div className="flex items-center mb-3">
                      
                      <h3 className="text-xl font-bold text-[#899878]">{service.title}</h3>
                    </div>
                    <p className="text-white leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* What Sets Us Apart Section */}
         <div className="rounded-3xl p-16 mt-24">
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

         {/* Services Row - Three Icons in Single Row */}
          <div className="mt-24 bg-black py-16 rounded-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Horizon Hills?
              </h2>
              {/* <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We specialize in buying, selling, leasing, and investment consulting, ensuring seamless transactions and expert guidance in Dubai.
              </p> */}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20 justify-items-center">
              {/* Service 1 - Proven Investment Expertise */}
              <div className="text-center group">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img 
                      src="https://horizonhillsrealestate.com/wp-content/uploads/2025/03/analytics-ezgif.com-optimize.gif.webp" 
                      alt="Proven Investment Expertise"
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-white leading-tight mb-2">
                  Proven Investment Expertise
                </h3>
                {/* <p className="text-sm text-gray-300 max-w-[200px]">
                  Strategic insights and market expertise for high-yield real estate investments
                </p> */}
              </div>

              {/* Service 2 - Seamless Property Transactions */}
              <div className="text-center group">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img 
                      src="https://horizonhillsrealestate.com/wp-content/uploads/2025/03/keys-ezgif.com-optimize.gif.webp" 
                      alt="Seamless Property Transactions"
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-white leading-tight mb-2">
                  Seamless Property Transactions
                </h3>
                {/* <p className="text-sm text-gray-300 max-w-[200px]">
                  End-to-end solutions for buying, selling, and leasing properties with confidence
                </p> */}
              </div>

              {/* Service 3 - Trusted Real Estate Advisory */}
              <div className="text-center group">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img 
                      src="https://horizonhillsrealestate.com/wp-content/uploads/2025/03/shield1-ezgif.com-optimize.gif.webp" 
                      alt="Trusted Real Estate Advisory"
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-white leading-tight mb-2">
                  Trusted Real Estate Advisory
                </h3>
                {/* <p className="text-sm text-gray-300 max-w-[200px]">
                  Expert guidance and personalized solutions for your real estate journey
                </p> */}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative text-center mt-16 rounded-2xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="/hero2.jpg" 
                alt="Ready to Get Started Background" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            {/* Content Overlay */}
            <div className="relative z-10 py-16 px-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Ready to Get Started?
              </h3>
              <button className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Us Today
              </button>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
