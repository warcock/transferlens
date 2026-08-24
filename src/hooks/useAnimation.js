import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useAnimation = () => {
  const animationsRef = useRef([])

  const addAnimation = (animation) => {
    animationsRef.current.push(animation)
  }

  useEffect(() => {
    return () => {
      // Clean up all animations on unmount
      animationsRef.current.forEach(animation => {
        if (animation.kill) {
          animation.kill()
        }
      })
      animationsRef.current = []
    }
  }, [])

  return { addAnimation }
}

export const useScrollAnimation = (elementRef, options = {}) => {
  const { addAnimation } = useAnimation()

  useEffect(() => {
    if (!elementRef.current) return

    const animation = gsap.from(elementRef.current, {
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        ...options.scrollTrigger
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      ...options
    })

    addAnimation(animation)

    return () => {
      animation.kill()
    }
  }, [elementRef, addAnimation, options])
}

export const useStaggerAnimation = (elementsRef, options = {}) => {
  const { addAnimation } = useAnimation()

  useEffect(() => {
    if (!elementsRef.current || elementsRef.current.length === 0) return

    const animation = gsap.from(elementsRef.current, {
      scrollTrigger: {
        trigger: elementsRef.current[0],
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        ...options.scrollTrigger
      },
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
      ...options
    })

    addAnimation(animation)

    return () => {
      animation.kill()
    }
  }, [elementsRef, addAnimation, options])
}

export const useParallax = (elementRef, options = {}) => {
  useEffect(() => {
    if (!elementRef.current) return

    const animation = gsap.to(elementRef.current, {
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        ...options.scrollTrigger
      },
      y: options.y || 50,
      ...options
    })

    return () => {
      animation.kill()
    }
  }, [elementRef, options])
}

export const useCounterAnimation = (elementRef, endValue, options = {}) => {
  useEffect(() => {
    if (!elementRef.current) return

    const animation = gsap.to(elementRef.current, {
      innerHTML: endValue,
      duration: options.duration || 2,
      ease: options.ease || 'power2.out',
      snap: { innerHTML: 1 },
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top 85%',
        ...options.scrollTrigger
      },
      ...options
    })

    return () => {
      animation.kill()
    }
  }, [elementRef, endValue, options])
}