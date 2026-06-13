/* ========================================
   MATRIX/TERMINAL CV - JAVASCRIPT
   Interactive features and animations
   ======================================== */

// ========================================
// CONFIGURATION
// ========================================

const config = {
  animationDuration: 600,
  scrollOffset: 80,
  observerThreshold: 0.1,
  typewriterSpeed: 50,
};

// ========================================
// SMOOTH SCROLL NAVIGATION
// ========================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    
    // Skip if it's just a "#" or empty
    if (!targetId || targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - config.scrollOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  });
});

// ========================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ========================================

const observerOptions = {
  threshold: config.observerThreshold,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add visible class to trigger animations
      entry.target.classList.add('visible');
      
      // Optionally stop observing after animation
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections and major elements
document.querySelectorAll('section, .experience-item, .skill-category, .certification, .education-item').forEach((element) => {
  observer.observe(element);
});

// ========================================
// TYPEWRITER EFFECT FOR HERO
// ========================================

function typewriterEffect() {
  const typewriterElement = document.querySelector('.typewriter');
  
  if (!typewriterElement) return;
  
  const text = 'whoami';
  typewriterElement.textContent = '';
  
  let index = 0;
  
  function type() {
    if (index < text.length) {
      typewriterElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, config.typewriterSpeed);
    }
  }
  
  // Start typing after page load
  type();
}

// ========================================
// DYNAMIC GLOW EFFECT ON HOVER
// ========================================

function addGlowEffect() {
  const glowElements = document.querySelectorAll(
    '.nav-link, .social-link, .skill-tag, .certification, .contact-item'
  );
  
  glowElements.forEach((element) => {
    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      element.style.setProperty('--mouse-x', `${x}px`);
      element.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// ========================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// ========================================

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollY >= sectionTop - config.scrollOffset - 50) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
}

// ========================================
// PARALLAX EFFECT FOR HERO
// ========================================

function addParallaxEffect() {
  const hero = document.querySelector('.hero');
  const heroContent = document.querySelector('.hero-content');
  
  if (!hero || !heroContent) return;
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const heroHeight = hero.offsetHeight;
    
    if (scrollPosition < heroHeight) {
      heroContent.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      heroContent.style.opacity = 1 - scrollPosition / heroHeight * 0.3;
    }
  });
}

// ========================================
// TERMINAL COMMAND ANIMATION
// ========================================

function animateTerminalCommands() {
  const commands = document.querySelectorAll('.command');
  
  commands.forEach((cmd, index) => {
    const text = cmd.textContent;
    cmd.textContent = '';
    
    setTimeout(() => {
      let i = 0;
      function type() {
        if (i < text.length) {
          cmd.textContent += text.charAt(i);
          i++;
          setTimeout(type, 30);
        }
      }
      type();
    }, index * 200);
  });
}

// ========================================
// COPY TO CLIPBOARD FOR CONTACT INFO
// ========================================

function enableContactCopy() {
  const contactLinks = document.querySelectorAll('.contact-link');
  
  contactLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      // Don't prevent default for actual links (email, social)
      if (this.href.startsWith('mailto:') || this.target === '_blank') {
        return;
      }
      
      e.preventDefault();
      const text = this.textContent;
      
      navigator.clipboard.writeText(text).then(() => {
        const originalText = this.textContent;
        this.textContent = '✓ Copied!';
        this.style.color = '#0f0';
        
        setTimeout(() => {
          this.textContent = originalText;
          this.style.color = '';
        }, 2000);
      });
    });
  });
}

// ========================================
// KEYBOARD NAVIGATION ENHANCEMENT
// ========================================

function enhanceKeyboardNavigation() {
  const interactiveElements = document.querySelectorAll(
    'a, button, [tabindex]'
  );
  
  interactiveElements.forEach((element) => {
    element.addEventListener('focus', () => {
      element.style.outline = '2px solid #0ff';
      element.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', () => {
      element.style.outline = '';
      element.style.outlineOffset = '';
    });
  });
}

// ========================================
// ACCESSIBILITY: SKIP TO MAIN CONTENT LINK
// ========================================

function addSkipLink() {
  const skipLink = document.createElement('a');
  skipLink.href = '#about';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'skip-link';
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #0f0;
    color: #0a0e27;
    padding: 8px 16px;
    text-decoration: none;
    z-index: 100;
    font-weight: bold;
  `;
  
  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
  });
  
  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });
  
  document.body.insertBefore(skipLink, document.body.firstChild);
}

// ========================================
// EXPERIENCE TIMELINE ANIMATION
// ========================================

function animateExperienceTimeline() {
  const experienceItems = document.querySelectorAll('.experience-item');
  
  experienceItems.forEach((item, index) => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          item.style.animation = `slideIn 0.6s ease-out ${index * 0.1}s both`;
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(item);
  });
}

// ========================================
// REDUCE MOTION PREFERENCE
// ========================================

function respectReducedMotion() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Disable animations
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    `;
    document.head.appendChild(style);
  }
}

// ========================================
// PERFORMANCE OPTIMIZATION: LAZY LOAD
// ========================================

function initLazyLoad() {
  // Modern browsers support Intersection Observer API
  if ('IntersectionObserver' in window) {
    const lazyElements = document.querySelectorAll('[data-lazy]');
    
    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          element.src = element.dataset.lazy;
          element.removeAttribute('data-lazy');
          lazyObserver.unobserve(element);
        }
      });
    });
    
    lazyElements.forEach((element) => {
      lazyObserver.observe(element);
    });
  }
}

// ========================================
// HIGHLIGHT FEATURED SECTIONS
// ========================================

function highlightFeaturedContent() {
  const featuredBadges = document.querySelectorAll('.featured-tag, .primary-tag, .leadership-badge');
  
  featuredBadges.forEach((badge) => {
    badge.addEventListener('mouseenter', () => {
      badge.style.transform = 'scale(1.1)';
      badge.style.textShadow = '0 0 10px currentColor';
    });
    
    badge.addEventListener('mouseleave', () => {
      badge.style.transform = '';
      badge.style.textShadow = '';
    });
  });
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  // Run all initialization functions
  typewriterEffect();
  addGlowEffect();
  updateActiveNavLink();
  addParallaxEffect();
  animateTerminalCommands();
  enableContactCopy();
  enhanceKeyboardNavigation();
  addSkipLink();
  animateExperienceTimeline();
  respectReducedMotion();
  initLazyLoad();
  highlightFeaturedContent();
  
  // Log initialization (can be removed in production)
  console.log('✓ Portfolio initialized successfully');
  console.log('✓ Dark theme active');
  console.log('✓ Matrix aesthetic engaged');
});

// ========================================
// WINDOW RESIZE HANDLER
// ========================================

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Re-run any layout-dependent calculations
    console.log('✓ Window resized, recalculating layout');
  }, 250);
});

// ========================================
// UNLOAD HANDLER (Clean up)
// ========================================

window.addEventListener('beforeunload', () => {
  // Clean up any persistent connections or timers if needed
  console.log('✓ Portfolio session ended');
});

// ========================================
// PERFORMANCE MONITORING (Optional)
// ========================================

if (window.performance && window.performance.timing) {
  window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    
    console.log(`✓ Page load time: ${pageLoadTime}ms`);
  });
}
