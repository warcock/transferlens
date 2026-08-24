import { useSpring, animated } from '@react-spring/web'

// Spring physics-based animations
export const useSpringHover = () => {
  const [spring, setSpring] = useSpring(() => ({
    scale: 1,
    opacity: 1,
    config: { tension: 300, friction: 10 }
  }))

  const onMouseEnter = () => {
    setSpring({
      scale: 1.05,
      opacity: 0.9
    })
  }

  const onMouseLeave = () => {
    setSpring({
      scale: 1,
      opacity: 1
    })
  }

  return { spring, onMouseEnter, onMouseLeave }
}

export const useSpringPress = () => {
  const [spring, setSpring] = useSpring(() => ({
    scale: 1,
    config: { tension: 400, friction: 15 }
  }))

  const onMouseDown = () => {
    setSpring({ scale: 0.95 })
  }

  const onMouseUp = () => {
    setSpring({ scale: 1 })
  }

  return { spring, onMouseDown, onMouseUp }
}

export const useSpringSlide = (direction = 'up') => {
  const [spring, setSpring] = useSpring(() => ({
    transform: 'translateY(0px)',
    opacity: 1,
    config: { tension: 280, friction: 20 }
  }))

  const enter = () => {
    const translate = direction === 'up' ? 'translateY(-20px)' : 
                    direction === 'down' ? 'translateY(20px)' :
                    direction === 'left' ? 'translateX(-20px)' : 'translateX(20px)'
    
    setSpring({
      transform: translate,
      opacity: 0
    })
  }

  const reset = () => {
    setSpring({
      transform: 'translateY(0px)',
      opacity: 1
    })
  }

  return { spring, enter, reset }
}

export const useSpringBounce = () => {
  const [spring, setSpring] = useSpring(() => ({
    y: 0,
    config: { tension: 200, friction: 8 }
  }))

  const bounce = () => {
    setSpring({
      y: -10,
      onRest: () => setSpring({ y: 0 })
    })
  }

  return { spring, bounce }
}

export const useSpringRotate = () => {
  const [spring, setSpring] = useSpring(() => ({
    rotate: 0,
    config: { tension: 300, friction: 12 }
  }))

  const onMouseEnter = () => {
    setSpring({ rotate: 5 })
  }

  const onMouseLeave = () => {
    setSpring({ rotate: 0 })
  }

  return { spring, onMouseEnter, onMouseLeave }
}

export const useSpringFade = () => {
  const [spring, setSpring] = useSpring(() => ({
    opacity: 1,
    config: { tension: 280, friction: 20 }
  }))

  const fadeIn = () => setSpring({ opacity: 1 })
  const fadeOut = () => setSpring({ opacity: 0 })

  return { spring, fadeIn, fadeOut }
}

export const useSpringScale = () => {
  const [spring, setSpring] = useSpring(() => ({
    scale: 1,
    config: { tension: 300, friction: 10 }
  }))

  const scaleUp = (scale = 1.1) => setSpring({ scale })
  const scaleDown = (scale = 0.9) => setSpring({ scale })
  const reset = () => setSpring({ scale: 1 })

  return { spring, scaleUp, scaleDown, reset }
}

export const AnimatedWrapper = animated