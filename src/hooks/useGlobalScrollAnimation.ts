import { useEffect, useRef } from 'react';

interface UseGlobalScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  animationTypes?: string[];
  delay?: number;
  staggerDelay?: number;
}

export const useGlobalScrollAnimation = (options: UseGlobalScrollAnimationOptions = {}) => {
  const { 
    threshold = 0.1, 
    rootMargin = '0px', 
    triggerOnce = true,
    animationTypes = ['fade-up', 'fade-left', 'fade-right', 'fade-scale', 'fade-zoom'],
    delay = 100,
    staggerDelay = 0.1
  } = options;
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  const processedElements = useRef<Set<Element>>(new Set());

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
          // Skip if already processed
          if (processedElements.current.has(element)) {
            return;
          }

          const htmlElement = element as HTMLElement;
          
          // Skip if element already has animation classes or is not visible
          if (htmlElement.classList.contains('scroll-animate') || 
              htmlElement.classList.contains('auto-animate') ||
              htmlElement.offsetParent === null ||
              htmlElement.style.display === 'none' ||
              htmlElement.style.visibility === 'hidden') {
            return;
          }

          // Skip if element is inside a component that already has scroll animations
          if (htmlElement.closest('[data-scroll-animated]')) {
            return;
          }

          // Skip very small text elements (likely decorative)
          if (htmlElement.textContent && htmlElement.textContent.trim().length < 2) {
            return;
          }

          // Randomly select animation type
          const randomAnimation = animationTypes[Math.floor(Math.random() * animationTypes.length)];
          
          // Add animation classes
          htmlElement.classList.add('auto-animate', `auto-${randomAnimation}`);
          
          // Add stagger delay for multiple elements
          if (index > 0) {
            const calculatedDelay = Math.min(index * staggerDelay, 1.0);
            htmlElement.style.transitionDelay = `${calculatedDelay}s`;
          }

          // Mark as processed
          processedElements.current.add(element);

          // Observe the element
          observerRef.current?.observe(htmlElement);
        });
      });
    };

    // Apply animations after a delay to ensure DOM is ready
    const timer = setTimeout(applyAnimationsToTextElements, delay);

    // Also apply on window load and resize
    window.addEventListener('load', applyAnimationsToTextElements);
    window.addEventListener('resize', applyAnimationsToTextElements);

    // Apply on route changes (for SPAs)
    const handleRouteChange = () => {
      setTimeout(applyAnimationsToTextElements, 200);
    };

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', handleRouteChange);

    // Custom event for route changes
    window.addEventListener('routeChange', handleRouteChange);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', applyAnimationsToTextElements);
      window.removeEventListener('resize', applyAnimationsToTextElements);
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('routeChange', handleRouteChange);
      
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, triggerOnce, animationTypes, delay, staggerDelay]);

  // Function to manually trigger animations for new content
  const refreshAnimations = () => {
    processedElements.current.clear();
    setTimeout(() => {
      const textSelectors = [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', 'span', 'div', 'a', 'li', 'td', 'th',
        'label', 'button', 'input', 'textarea'
      ];

      textSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          if (!processedElements.current.has(element)) {
            const htmlElement = element as HTMLElement;
            if (!htmlElement.classList.contains('auto-animate')) {
              const randomAnimation = animationTypes[Math.floor(Math.random() * animationTypes.length)];
              htmlElement.classList.add('auto-animate', `auto-${randomAnimation}`);
              processedElements.current.add(element);
              observerRef.current?.observe(htmlElement);
            }
          }
        });
      });
    }, 100);
  };

  return { refreshAnimations };
};
