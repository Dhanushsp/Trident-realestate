import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Footer: React.FC = () => {
  const { elementRef: footerRef, isVisible: footerVisible } = useScrollAnimation();
  
  return (
    <footer className="bg-[#262A10] text-white">
      <div ref={footerRef} className={`container mx-auto px-4 py-16 scroll-animate-up ${footerVisible ? 'animate' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="Horizon Hills Real Estate" 
                  className="h-12 w-auto rounded-xl"
                />
                <div>
                  <h2 className="text-lg font-bold text-white" style={{ fontFamily: 'Avenir Next Arabic, Arial, sans-serif' }}>
                    TRIDENT LUXURY
                  </h2>
                  <p className="text-sm text-[#899878] font-semibold" style={{ fontFamily: 'Avenir Next Arabic, Arial, sans-serif' }}>
                    Luxury Real Estate, Redefined
                  </p>
                </div>
              </div>
              {/* <p className="text-gray-200 leading-relaxed max-w-md">
                Horizon Hills Real Estate - Where Expertise Meets Integrity. We specialize in buying, selling, leasing, and investment consulting, ensuring seamless transactions and expert guidance in Dubai.
              </p> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-200 hover:text-[#899878] transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-200 hover:text-[#899878] transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-200 hover:text-[#899878] transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-200 hover:text-[#899878] transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#899878] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Horizon Hills Real Estate. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-[#899878] text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-[#899878] text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

