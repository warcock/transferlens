import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './Sidebar'
import Header from './Header'
import SmoothScroll from './SmoothScroll'

const pageVariants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.98 }
}

const pageTransition = {
  duration: 0.4,
  ease: [0.4, 0, 0.2, 1]
}

const Layout = () => {
  const location = useLocation()

  return (
    <div className="bg-background min-h-screen flex">
      <SmoothScroll />
      <Sidebar />
      <div className="flex-1 flex flex-col ml-[280px]">
        <Header />
        <main className="flex-1 mt-[72px] p-[40px] overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

export default Layout
