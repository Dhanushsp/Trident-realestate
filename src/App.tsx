import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import AboutUsPage from './components/AboutUsPage';
import ServicesPage from './components/ServicesPage';
import VideoSection from './components/VideoSection';
import TrustedPartners from './components/TrustedPartners';
import ScrollingBanner from './components/ScrollingBanner';
import ProcessSection from './components/ProcessSection';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutUsPage onBack={() => setCurrentPage('home')} />;
      case 'services':
        return <ServicesPage onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <>
            <HeroSlider />
            <ServicesSection />
            <AboutSection />
            <VideoSection />
            <TrustedPartners />
            <ScrollingBanner />
            <ProcessSection />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="overflow-x-hidden">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
