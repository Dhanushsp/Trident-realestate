import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="relative py-32 bg-[#262A10] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source 
            src="/video.mp4"
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Light Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Invest. Grow. Succeed.
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Simplifying real estate transactions with clarity and trust.
          </p>
        </div>
      </div>

      {/* Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          className="w-full h-16 text-white" 
          viewBox="0 0 1000 100" 
          preserveAspectRatio="none"
        >
          <polygon 
            points="0,100 1000,100 1000,0 500,50 0,0" 
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default VideoSection;


