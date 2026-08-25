import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Sidebar from './Sidebar'
import Header from './Header'

gsap.registerPlugin(ScrollTrigger)

const Layout = () => {
  const location = useLocation()
  const lenisRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    // Store Lenis instance on window for access from LandingPage
    // @ts-ignore
    window.lenis = lenis

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
      // @ts-ignore
      delete window.lenis
    }
  }, [])

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0)
    }
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <main className="ml-0 lg:ml-[280px] pt-[72px] min-h-[calc(100vh-72px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-4 md:p-6 lg:p-8"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default Layout
