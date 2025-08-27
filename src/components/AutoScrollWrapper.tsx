import React, { useEffect, useRef } from 'react';

interface AutoScrollWrapperProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  animationTypes?: string[];
}

const AutoScrollWrapper: React.FC<AutoScrollWrapperProps> = ({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
  animationTypes = ['fade-up', 'fade-left', 'fade-right', 'fade-scale', 'fade-zoom']
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    // Create Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const wrapper = entry.target as HTMLElement;
            
            // Find all text elements within the wrapper
            const textSelectors = [
              'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
              'p', 'span', 'div', 'a', 'li', 'td', 'th',
              'label', 'button', 'input', 'textarea'
            ];

            textSelectors.forEach(selector => {
              const elements = wrapper.querySelectorAll(selector);
              elements.forEach((element, index) => {
                const htmlElement = element as HTMLElement;
                
                // Skip if element already has animation classes
                if (htmlElement.classList.contains('scroll-animate') || 
                    htmlElement.classList.contains('auto-animate')) {
                  return;
                }

                // Randomly select animation type
                const randomAnimation = animationTypes[Math.floor(Math.random() * animationTypes.length)];
                
                // Add animation classes
                htmlElement.classList.add('auto-animate', `auto-${randomAnimation}`);
                
                // Add stagger delay for multiple elements
                if (index > 0) {
                  const staggerDelay = Math.min(index * 0.1, 1.0);
                  htmlElement.style.transitionDelay = `${staggerDelay}s`;
                }

                // Trigger animation after a short delay
                setTimeout(() => {
                  htmlElement.classList.add('animate');
                }, 50 + (index * 100));
              });
            });

            // If triggerOnce is true, stop observing
            if (triggerOnce) {
              observerRef.current?.unobserve(wrapper);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Observe the wrapper
    observerRef.current.observe(wrapperRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, triggerOnce, animationTypes]);

  return (
    <div 
      ref={wrapperRef} 
      className={className}
      data-scroll-animated="true"
    >
      {children}
    </div>
  );
};

export default AutoScrollWrapper;
