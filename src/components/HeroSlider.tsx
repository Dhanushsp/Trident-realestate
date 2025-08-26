import React, { useState, useEffect } from 'react';

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/hero1.jpg",
      overlayColor: "#000000",
      title: "Turning Your Property Goals into Reality",
      description: "From dream homes to high-yield investments, we offer advisory and end-to-end solutions for a seamless real estate journey.",
      textColor: "text-white"
    },
    {
      id: 2,
      image: "/hero2.jpg",
      overlayColor: "#000000",
      title: "Luxury Living Awaits You",
      description: "Explore for finest villas and apartments designed for modern lifestyles",
      textColor: "text-white"
    },
    {
      id: 3,
      image: "/hero3.jpg",
      overlayColor: "#000000",
      title: "Invest Smart. Buy Right. Sell with Confidence",
      description: "Horizon Hills Real Estate ensures strategic insights, market expertise, and a hassle-free experience for buyers, sellers, and investors.",
      textColor: "text-white"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen sm:h-screen lg:min-h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
          />
        </div>
      ))}

  {/* Fullscreen Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#262A10]/90 to-transparent z-10"></div>
  
  {/* Top Navigation Overlay */}
  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#262A10]/80 to-transparent z-15"></div>

      {/* Content */}
  <div
    className={`
      z-20 p-4
      absolute bottom-4 left-4 w-[90%]     /* 📱 Small screens: bottom edge with padding */
      sm:bottom-8 sm:left-8
      lg:absolute lg:left-8 lg:top-1/2 lg:-translate-y-1/2 lg:w-2/3 lg:p-8
    `}
  >
    <h1
      className={`text-2xl sm:text-3xl lg:text-6xl font-bold mb-3 lg:mb-6 leading-tight ${slides[currentSlide].textColor} animate-fade-in-up`}
      style={{ animationDelay: '0.2s' }}
    >
            {slides[currentSlide].title}
          </h1>
    <p
      className={`text-sm sm:text-base lg:text-xl mb-4 lg:mb-8 max-w-xl leading-relaxed ${slides[currentSlide].textColor} animate-fade-in-up`}
      style={{ animationDelay: '0.4s' }}
    >
            {slides[currentSlide].description}
          </p>
    <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://horizonhillsrealestate.com/contact-us/"
        className="border rounded-lg border-white text-white px-5 py-2 sm:px-6 sm:py-2.5 lg:px-8 lg:py-3 rounded-lg font-semibold hover:bg-[#7a8a6a] transition-all duration-200 inline-block text-center text-sm sm:text-base lg:text-lg"
            >
              Contact Now
            </a>
          </div>
        </div>
</section>


  );
};

export default HeroSlider;

