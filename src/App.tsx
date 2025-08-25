import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';

import VideoSection from './components/VideoSection';
import TrustedPartners from './components/TrustedPartners';
import ScrollingBanner from './components/ScrollingBanner';
import ProcessSection from './components/ProcessSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSlider />
        <ServicesSection />
        <AboutSection />
        
        <VideoSection />
        <TrustedPartners />
        <ScrollingBanner />
        <ProcessSection />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
