import { useEffect, useRef } from 'react';

interface UseAutoScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  animationTypes?: string[];
}

export const useAutoScrollAnimation = (options: UseAutoScrollAnimationOptions = {}) => {
  const { 
    threshold = 0.1, 
    rootMargin = '0px', 
    triggerOnce = true,
    animationTypes = ['fade-up', 'fade-left', 'fade-right', 'fade-scale', 'fade-zoom']
  } = options;
  
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            
            // Add animation class
            element.classList.add('animate');
            
            // If triggerOnce is true, stop observing
            if (triggerOnce) {
              observerRef.current?.unobserve(element);
            }
          } else if (!triggerOnce) {
            // Remove animation class if not triggerOnce
            const element = entry.target as HTMLElement;
            element.classList.remove('animate');
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Function to apply animations to text elements
    const applyAnimationsToTextElements = () => {
      const textSelectors = [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', 'span', 'div', 'a', 'li', 'td', 'th',
        'label', 'button', 'input', 'textarea'
      ];

      textSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
          const htmlElement = element as HTMLElement;
          
          // Skip if element already has animation classes or is not visible
          if (htmlElement.classList.contains('scroll-animate') || 
              htmlElement.classList.contains('auto-animate') ||
              htmlElement.offsetParent === null) {
            return;
          }

          // Skip if element is inside a component that already has scroll animations
          if (htmlElement.closest('[data-scroll-animated]')) {
            return;
          }

          // Randomly select animation type
          const randomAnimation = animationTypes[Math.floor(Math.random() * animationTypes.length)];
          
          // Add animation classes
          htmlElement.classList.add('auto-animate', `auto-${randomAnimation}`);
          
          // Add stagger delay for multiple elements
          if (index > 0) {
            const staggerDelay = Math.min(index * 0.1, 1.0); // Max 1 second delay
            htmlElement.style.transitionDelay = `${staggerDelay}s`;
          }

          // Observe the element
          observerRef.current?.observe(htmlElement);
        });
      });
    };

    // Apply animations after a short delay to ensure DOM is ready
    const timer = setTimeout(applyAnimationsToTextElements, 100);

    // Also apply on window load and resize
    window.addEventListener('load', applyAnimationsToTextElements);
    window.addEventListener('resize', applyAnimationsToTextElements);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', applyAnimationsToTextElements);
      window.removeEventListener('resize', applyAnimationsToTextElements);
      
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, triggerOnce, animationTypes]);

  return { observerRef: observerRef.current };
};
