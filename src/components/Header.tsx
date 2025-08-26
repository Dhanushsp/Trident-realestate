import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById('home');
      
      if (heroSection) {
        const heroTop = heroSection.offsetTop;
        const heroHeight = heroSection.offsetHeight;
        
        // Apply background when scrolled past the hero section
        if (scrollPosition > heroTop + heroHeight * 0.8) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
        <header className={`fixed top-0 left-0 right-0 z-50 text-white border-b transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#262A10] border-[#899878]' 
            : 'bg-transparent border-transparent'
        }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-4">
            <img 
              src="/logo.png" 
              alt="Trident Luxury Real Estate" 
              className="h-10 sm:h-12 w-auto rounded-xl"
            />
            <div>
              <h1 className="text-base sm:text-xl font-bold text-white archivo-black">
                TRIDENT LUXURY
              </h1>
              <p className="text-xs sm:text-sm text-white cmu-serif">
                Luxury Real Estate, Redefined
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden text-white md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="hover:text-[#899878] transition-colors duration-200 font-medium cursor-pointer"
              onClick={() => handleNavigation('home')}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="hover:text-[#899878] transition-colors duration-200 font-medium cursor-pointer"
              onClick={() => handleNavigation('services')}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="hover:text-[#899878] transition-colors duration-200 font-medium cursor-pointer"
              onClick={() => handleNavigation('about')}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="hover:text-[#899878] transition-colors duration-200 font-medium cursor-pointer"
              onClick={() => handleNavigation('contact')}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 text-white hover:text-[#899878] transition-colors duration-200 z-50 relative bg-black/20 rounded-lg hover:bg-black/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`md:hidden fixed inset-0 z-50 transition-all duration-500 ease-in-out ${
            isMenuOpen 
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Background Overlay */}
          <div 
            className={`absolute inset-0 bg-[#262A10]/95 backdrop-blur-sm transition-all duration-500 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Navigation Content */}
          <div className={`relative h-full flex items-center justify-center transition-all duration-700 ease-out ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <nav className="text-center space-y-8">
              <a 
                href="#home" 
                className={`block text-3xl font-bold text-white hover:text-[#899878] transition-all duration-500 transform hover:scale-110 ${
                  isMenuOpen ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: '0.1s' }}
                onClick={() => handleNavigation('home')}
              >
                Home
              </a>
              <a 
                href="#services" 
                className={`block text-3xl font-bold text-white hover:text-[#899878] transition-all duration-500 transform hover:scale-110 ${
                  isMenuOpen ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: '0.2s' }}
                onClick={() => handleNavigation('services')}
              >
                Services
              </a>
              <a 
                href="#about" 
                className={`block text-3xl font-bold text-white hover:text-[#899878] transition-all duration-500 transform hover:scale-110 ${
                  isMenuOpen ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: '0.3s' }}
                onClick={() => handleNavigation('about')}
              >
                About
              </a>
              <a 
                href="#contact" 
                className={`block text-3xl font-bold text-white hover:text-[#899878] transition-all duration-500 transform hover:scale-110 ${
                  isMenuOpen ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: '0.4s' }}
                onClick={() => handleNavigation('contact')}
              >
                Contact
              </a>
              
              {/* Call to Action Button */}
              <div className={`pt-8 ${isMenuOpen ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.5s' }}>
                <button 
                  onClick={() => {
                    onNavigate('contact');
                    setIsMenuOpen(false);
                  }}
                  className="inline-block bg-[#899878] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#7a8a6a] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Contact Us
                </button>
              </div>
            </nav>
          </div>
          
          {/* Close Button */}
          <button
            className={`absolute top-6 right-6 p-3 text-white hover:text-[#899878] transition-all duration-300 transform hover:scale-110 ${
              isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
            }`}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;