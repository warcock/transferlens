import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// GSAP Animation Presets
export const fadeInUp = (element, options = {}) => {
  const defaults = {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out',
    ...options
  }
  return gsap.from(element, defaults)
}

export const fadeInDown = (element, options = {}) => {
  const defaults = {
    opacity: 0,
    y: -30,
    duration: 0.8,
    ease: 'power3.out',
    ...options
  }
  return gsap.from(element, defaults)
}

export const fadeInLeft = (element, options = {}) => {
  const defaults = {
    opacity: 0,
    x: -30,
    duration: 0.8,
    ease: 'power3.out',
    ...options
  }
  return gsap.from(element, defaults)
}

export const fadeInRight = (element, options = {}) => {
  const defaults = {
    opacity: 0,
    x: 30,
    duration: 0.8,
    ease: 'power3.out',
    ...options
  }
  return gsap.from(element, defaults)
}

export const scaleIn = (element, options = {}) => {
  const defaults = {
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    ease: 'back.out(1.7)',
    ...options
  }
  return gsap.from(element, defaults)
}

export const staggerChildren = (elements, options = {}) => {
  const defaults = {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out',
    ...options
  }
  return gsap.from(elements, defaults)
}

// Scroll-triggered animations
export const scrollReveal = (element, options = {}) => {
  const defaults = {
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power3.out',
    ...options
  }
  return gsap.from(element, defaults)
}

export const parallaxElement = (element, options = {}) => {
  const defaults = {
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    },
    y: 50,
    ...options
  }
  return gsap.to(element, defaults)
}

export const pinSection = (element, options = {}) => {
  const defaults = {
    scrollTrigger: {
      trigger: element,
      start: 'top top',
      end: '+=200%',
      pin: true,
      scrub: 1
    },
    ...options
  }
  return gsap.to(element, defaults)
}

// Text reveal animations
export const textReveal = (element, options = {}) => {
  const defaults = {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: 'power2.out',
    ...options
  }
  return gsap.from(element, defaults)
}

export const textRevealLine = (element, options = {}) => {
  const defaults = {
    width: 0,
    duration: 0.8,
    ease: 'power3.inOut',
    ...options
  }
  return gsap.from(element, defaults)
}

// Mask reveal animations
export const maskReveal = (element, options = {}) => {
  const defaults = {
    clipPath: 'inset(0 100% 0 0)',
    duration: 1,
    ease: 'power4.inOut',
    ...options
  }
  return gsap.from(element, defaults)
}

// Card hover effects
export const cardLift = (element, options = {}) => {
  const defaults = {
    y: -8,
    duration: 0.3,
    ease: 'power2.out',
    ...options
  }
  return gsap.to(element, defaults)
}

export const cardReset = (element, options = {}) => {
  const defaults = {
    y: 0,
    duration: 0.3,
    ease: 'power2.out',
    ...options
  }
  return gsap.to(element, defaults)
}

// Magnetic button effect
export const magneticButton = (button, strength = 0.3) => {
  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    gsap.to(button, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: 'power2.out'
    })
  })
  
  button.addEventListener('mouseleave', () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)'
    })
  })
}

// Counter animation
export const animateCounter = (element, endValue, options = {}) => {
  const defaults = {
    duration: 2,
    ease: 'power2.out',
    snap: { innerHTML: 1 },
    ...options
  }
  
  return gsap.to(element, {
    innerHTML: endValue,
    ...defaults
  })
}

// Clean up all ScrollTriggers
export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
}