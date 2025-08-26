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
      image: "/hero1.jpg", // You can replace with actual service images
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
      image: "/hero2.jpg",
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
      image: "/hero3.jpg",
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
      image: "/who-we-are.jpg",
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
      image: "/who-we-are.jpg",
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
      image: "/who-we-are.jpg",
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
      image: "/who-we-are.jpg",
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
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{ fontFamily: '"Archivo Black", sans-serif' }}>
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
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlapping Text Box - Smaller width and better positioning */}
                  <div className="absolute bottom-0 left-4 right-4 bg-white rounded-t-2xl p-6 shadow-lg">
                    <div className="flex items-center mb-3">
                      
                      <h3 className="text-xl font-bold text-black">{service.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services Section */}
          <div className="mt-24 bg-white rounded-3xl p-16 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-black mb-4">
                Why Choose Our Services?
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine local market expertise with international standards to deliver exceptional results for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-black mb-2">Expert Guidance</h4>
                <p className="text-gray-600">Professional advice from experienced real estate specialists</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-black mb-2">Fast Results</h4>
                <p className="text-gray-600">Efficient processes to get you the outcomes you need</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-black mb-2">Personal Touch</h4>
                <p className="text-gray-600">Tailored solutions that match your unique requirements</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-black mb-6">
              Ready to Get Started?
            </h3>
            <button className="bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
