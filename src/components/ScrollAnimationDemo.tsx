import React from 'react';
import AutoScrollWrapper from './AutoScrollWrapper';

const ScrollAnimationDemo: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <AutoScrollWrapper 
          className="text-center mb-12"
          animationTypes={['fade-up', 'fade-scale']}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Scroll Animation Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            This section demonstrates how text elements automatically animate when scrolled into view.
            Each text element gets a random animation type and staggered timing.
          </p>
        </AutoScrollWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AutoScrollWrapper 
            className="bg-white p-6 rounded-lg shadow-md"
            animationTypes={['fade-left', 'fade-up']}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Left Animation
            </h2>
            <p className="text-gray-600 mb-4">
              This card uses fade-left and fade-up animations. The text will slide in from the left
              and fade up when it comes into view.
            </p>
            <span className="text-sm text-blue-600 font-medium">
              Animated span element
            </span>
          </AutoScrollWrapper>

          <AutoScrollWrapper 
            className="bg-white p-6 rounded-lg shadow-md"
            animationTypes={['fade-right', 'fade-scale']}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Right Animation
            </h2>
            <p className="text-gray-600 mb-4">
              This card uses fade-right and fade-scale animations. The text will slide in from the right
              and scale up when it comes into view.
            </p>
            <span className="text-sm text-green-600 font-medium">
              Another animated span
            </span>
          </AutoScrollWrapper>
        </div>

        <AutoScrollWrapper 
          className="mt-12 text-center"
          animationTypes={['fade-zoom', 'fade-up']}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Performance Optimized
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            All animations are optimized for performance with CSS transitions, Intersection Observer,
            and proper cleanup. The system automatically detects and skips elements that already have
            animations applied.
          </p>
        </AutoScrollWrapper>
      </div>
    </div>
  );
};

export default ScrollAnimationDemo;
