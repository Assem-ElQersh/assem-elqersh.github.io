// Performance Enhancement Module
// Advanced optimizations for faster loading and better UX

class PerformanceOptimizer {
  constructor() {
    this.init();
  }

  init() {
    this.setupIntersectionObservers();
    this.optimizeImages();
    this.preloadCriticalResources();
    this.setupServiceWorkerUpdates();
    this.measurePerformance();
  }

  // Advanced Intersection Observer for better performance
  setupIntersectionObservers() {
    // Lazy load images with better performance
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          
          // Progressive image loading
          if (img.dataset.src) {
            const tempImage = new Image();
            tempImage.onload = () => {
              img.src = tempImage.src;
              img.classList.add('loaded');
            };
            tempImage.src = img.dataset.src;
            
            observer.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    // Observe all lazy images
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });

    // Animate sections on scroll with performance optimization
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Stop observing once animated
          sectionObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe sections only on larger screens for performance
    if (window.innerWidth > 768) {
      document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
      });
    }
  }

  // Image optimization and WebP detection
  optimizeImages() {
    const supportsWebP = this.checkWebPSupport();
    
    if (supportsWebP) {
      // Replace image sources with WebP versions if available
      document.querySelectorAll('img[src]').forEach(img => {
        const webpSrc = img.src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
        
        // Test if WebP version exists
        this.testImageExists(webpSrc).then(exists => {
          if (exists) {
            img.src = webpSrc;
          }
        });
      });
    }

    // Add proper sizing attributes to prevent layout shift
    document.querySelectorAll('img').forEach(img => {
      if (!img.hasAttribute('width') || !img.hasAttribute('height')) {
        img.addEventListener('load', () => {
          img.setAttribute('width', img.naturalWidth);
          img.setAttribute('height', img.naturalHeight);
        });
      }
    });
  }

  // Check WebP support
  checkWebPSupport() {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('webp') !== -1;
  }

  // Test if image exists
  async testImageExists(url) {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  }

  // Preload critical resources
  preloadCriticalResources() {
    const criticalResources = [
      { href: '/css/style.css', as: 'style' },
      { href: '/js/projects.js', as: 'script' },
      { href: '/img/profile.jpg', as: 'image' }
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      
      if (resource.as === 'style') {
        link.onload = () => {
          link.onload = null;
          link.rel = 'stylesheet';
        };
      }
      
      document.head.appendChild(link);
    });

    // DNS prefetch for external resources
    const dnsPrefetch = [
      '//fonts.googleapis.com',
      '//github.com'
    ];

    dnsPrefetch.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }

  // Service Worker update handling
  setupServiceWorkerUpdates() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          // Check for updates periodically
          setInterval(() => {
            registration.update();
          }, 60000); // Check every minute

          // Handle waiting service worker
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                this.showUpdateNotification();
              }
            });
          });
        });

      // Handle service worker messages
      navigator.serviceWorker.addEventListener('message', event => {
        if (event.data && event.data.type === 'CACHE_UPDATED') {
          console.log('Cache updated');
        }
      });
    }
  }

  // Show update notification
  showUpdateNotification() {
    const notification = document.createElement('div');
    notification.className = 'update-notification';
    notification.innerHTML = `
      <div class="update-content">
        <span>New version available!</span>
        <button onclick="window.location.reload()">Refresh</button>
      </div>
    `;
    
    notification.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(24, 185, 207, 0.9);
      color: white;
      padding: 1rem;
      text-align: center;
      z-index: 9999;
      transform: translateY(-100%);
      transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
      notification.style.transform = 'translateY(0)';
    });
  }

  // Performance measurement
  measurePerformance() {
    // Measure Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getLCP, getFID, getCLS }) => {
        getLCP(console.log);
        getFID(console.log);
        getCLS(console.log);
      });
    }

    // Measure custom metrics
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0];
      
      const metrics = {
        loadTime: perfData.loadEventEnd - perfData.loadEventStart,
        domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
        firstPaint: performance.getEntriesByType('paint')[0]?.startTime,
        firstContentfulPaint: performance.getEntriesByType('paint')[1]?.startTime
      };

      console.log('Performance Metrics:', metrics);
      
      // Report to analytics (if implemented)
      this.reportMetrics(metrics);
    });
  }

  // Report metrics to analytics
  reportMetrics(metrics) {
    // Implement analytics reporting here
    if (window.gtag) {
      gtag('event', 'performance_metrics', {
        custom_parameter: JSON.stringify(metrics)
      });
    }
  }

  // Optimize font loading
  optimizeFonts() {
    // Use font-display: swap for better loading performance
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'GeneralSans';
        font-display: swap;
      }
      @font-face {
        font-family: 'Satoshi';
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
  }

  // Debounced resize handler
  setupResizeHandler() {
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // Handle resize logic
        this.handleResize();
      }, 250);
    });
  }

  handleResize() {
    // Refresh intersection observers on resize if needed
    if (window.innerWidth <= 768) {
      document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      });
    }
  }
}

// Memory management utilities
class MemoryManager {
  static cleanup() {
    // Clean up unused event listeners
    const unusedElements = document.querySelectorAll('[data-cleanup]');
    unusedElements.forEach(el => {
      el.removeEventListener('click', el._clickHandler);
      el.remove();
    });
  }

  static throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  static debounce(func, wait, immediate) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', () => {
  new PerformanceOptimizer();
});

// Clean up on page unload
window.addEventListener('beforeunload', () => {
  MemoryManager.cleanup();
});

export { MemoryManager, PerformanceOptimizer };
