import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import AboutUsPage from './components/AboutUsPage';
import ServicesPage from './components/ServicesPage';
import ContactUsPage from './components/ContactUsPage';

import VideoSection from './components/VideoSection';
import TrustedPartners from './components/TrustedPartners';
import ScrollingBanner from './components/ScrollingBanner';
import ProcessSection from './components/ProcessSection';
import Footer from './components/Footer';
import { useGlobalScrollAnimation } from './hooks/useGlobalScrollAnimation';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Initialize global scroll animations for all text elements
  const { refreshAnimations } = useGlobalScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px',
    triggerOnce: true,
    animationTypes: ['fade-up', 'fade-left', 'fade-right', 'fade-scale', 'fade-zoom'],
    delay: 200,
    staggerDelay: 0.1
  });

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Refresh animations after page change to animate new content
    setTimeout(() => {
      refreshAnimations();
    }, 300);
  }, [currentPage, refreshAnimations]);

  // Custom navigation function that ensures scroll to top
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // Additional scroll to top for immediate effect
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutUsPage onBack={() => handleNavigate('home')} onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onBack={() => handleNavigate('home')} onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactUsPage onBack={() => handleNavigate('home')} />;
      default:
        return (
          <>
            <HeroSlider onNavigate={handleNavigate} />
            <ServicesSection />
            <AboutSection onNavigate={handleNavigate} />
            <VideoSection />
            <TrustedPartners onNavigate={handleNavigate} />
            <ScrollingBanner />
            <ProcessSection />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="overflow-x-hidden">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
