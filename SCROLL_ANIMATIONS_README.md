# Scroll Animation System

This project includes a comprehensive scroll animation system that automatically animates text elements when they come into view using Intersection Observer API.

## 🚀 Features

- **Automatic Text Animation**: All text elements (h1-h6, p, span, div, etc.) automatically get scroll animations
- **Multiple Animation Types**: fade-up, fade-left, fade-right, fade-scale, fade-zoom
- **Performance Optimized**: Uses CSS transitions and Intersection Observer for smooth performance
- **Smart Detection**: Automatically skips elements that already have animations
- **Staggered Timing**: Multiple elements animate with staggered delays
- **Accessibility**: Respects `prefers-reduced-motion` user preference
- **SPA Ready**: Automatically handles route changes and new content

## 🎯 How It Works

### 1. Global Automatic Animation
The `useGlobalScrollAnimation` hook automatically applies animations to all text elements on the page:

```tsx
import { useGlobalScrollAnimation } from './hooks/useGlobalScrollAnimation';

function App() {
  const { refreshAnimations } = useGlobalScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px',
    triggerOnce: true,
    animationTypes: ['fade-up', 'fade-left', 'fade-right', 'fade-scale', 'fade-zoom'],
    delay: 200,
    staggerDelay: 0.1
  });

  // Animations are automatically applied to all text elements
}
```

### 2. Section-Specific Animation
Use the `AutoScrollWrapper` component to animate specific sections:

```tsx
import AutoScrollWrapper from './components/AutoScrollWrapper';

<AutoScrollWrapper 
  className="my-section"
  animationTypes={['fade-up', 'fade-scale']}
>
  <h1>This will animate</h1>
  <p>This will also animate</p>
  <span>And this too!</span>
</AutoScrollWrapper>
```

### 3. Manual Animation Control
Use the existing `useScrollAnimation` hook for individual elements:

```tsx
import { useScrollAnimation } from './hooks/useScrollAnimation';

function MyComponent() {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={elementRef} 
      className={`scroll-animate ${isVisible ? 'animate' : ''}`}
    >
      This element uses manual scroll animation
    </div>
  );
}
```

## 🎨 Animation Types

### Available Animations
- **fade-up**: Slides up from below with fade
- **fade-left**: Slides in from the left with fade
- **fade-right**: Slides in from the right with fade
- **fade-scale**: Scales up with fade
- **fade-zoom**: Combines scale and slide up with fade

### CSS Classes
The system automatically applies these classes:
- `.auto-animate`: Base animation class
- `.auto-fade-up`, `.auto-fade-left`, etc.: Specific animation types
- `.animate`: Trigger class that starts the animation

## ⚙️ Configuration Options

### Global Animation Options
```tsx
useGlobalScrollAnimation({
  threshold: 0.1,        // When to trigger (0-1)
  rootMargin: '0px',     // Margin around viewport
  triggerOnce: true,     // Only animate once
  animationTypes: [...], // Available animation types
  delay: 200,            // Initial delay before applying
  staggerDelay: 0.1      // Delay between multiple elements
});
```

### Section Wrapper Options
```tsx
<AutoScrollWrapper
  className="my-class"
  threshold={0.1}
  rootMargin="0px"
  triggerOnce={true}
  animationTypes={['fade-up', 'fade-scale']}
>
  {/* Content */}
</AutoScrollWrapper>
```

## 🔧 Customization

### Adding New Animation Types
1. Add CSS classes in `src/index.css`:
```css
.auto-fade-custom {
  transform: translateY(60px) rotate(5deg);
  transition: all 1s ease-out;
}

.auto-fade-custom.animate {
  transform: translateY(0) rotate(0deg);
}
```

2. Include in animation types array:
```tsx
animationTypes: ['fade-up', 'fade-custom']
```

### Performance Tuning
- Adjust `threshold` for earlier/later triggering
- Modify `staggerDelay` for different timing
- Use `rootMargin` to trigger before elements enter viewport

## 🚫 What Gets Skipped

The system automatically skips:
- Elements with existing animation classes
- Hidden or invisible elements
- Very short text (less than 2 characters)
- Elements inside already-animated sections
- Elements with `data-scroll-animated` attribute

## 📱 Mobile Considerations

- Animations are optimized for mobile performance
- Reduced motion preferences are respected
- Touch scrolling doesn't interfere with animations

## 🎭 Best Practices

1. **Don't Overuse**: Let some elements remain static for visual hierarchy
2. **Consistent Timing**: Use similar animation types for related content
3. **Performance**: Avoid animating too many elements simultaneously
4. **Accessibility**: Respect user motion preferences
5. **Testing**: Test on different devices and scroll speeds

## 🔍 Debugging

### Check if animations are working:
1. Open browser dev tools
2. Look for `.auto-animate` classes on text elements
3. Verify `.animate` class is added when scrolling
4. Check CSS transitions are applied

### Common Issues:
- **No animations**: Check if Intersection Observer is supported
- **Performance issues**: Reduce number of animated elements
- **Timing issues**: Adjust `delay` and `staggerDelay` values

## 📚 Examples

See `ScrollAnimationDemo.tsx` for complete usage examples and `App.tsx` for global implementation.

## 🆘 Troubleshooting

If animations aren't working:
1. Ensure the hooks are properly imported
2. Check browser console for errors
3. Verify CSS classes are loaded
4. Test with a simple element first
5. Check if elements are visible in DOM

## 🔄 Updates and Maintenance

The system automatically:
- Handles new content added dynamically
- Refreshes animations on route changes
- Cleans up observers when components unmount
- Adapts to window resize events
