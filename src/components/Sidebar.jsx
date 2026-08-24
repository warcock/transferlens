import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useUserRole } from '../contexts/UserRoleContext'

const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { role } = useUserRole()

  const studentNavItems = [
    { path: '/student-dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: '/assessment/intro', icon: 'assignment', label: 'Assessments' },
    { path: '/transfer-analysis', icon: 'analytics', label: 'Transfer Analysis' },
    { path: '/concept-explorer', icon: 'account_tree', label: 'Concept Explorer' },
  ]

  const teacherNavItems = [
    { path: '/teacher-dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: '/teacher-analytics', icon: 'insights', label: 'Analytics' },
    { path: '/concept-explorer', icon: 'account_tree', label: 'Concept Explorer' },
  ]

  const navItems = role === 'student' ? studentNavItems : teacherNavItems

  const isActive = (path) => {
    if (path === '/student-dashboard') {
      return location.pathname === '/' || location.pathname === '/student-dashboard'
    }
    if (path === '/teacher-dashboard') {
      return location.pathname === '/teacher-dashboard'
    }
    if (path === '/teacher-analytics') {
      return location.pathname === '/teacher-analytics'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="bg-surface/95 backdrop-blur-xl border-r border-border fixed left-0 top-0 h-full w-[280px] flex flex-col z-20">
      {/* Logo */}
      <div className="flex items-center gap-4 px-8 py-8 border-b border-border">
        <motion.div 
          className="relative w-10 h-10 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center shadow-elevated"
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="material-symbols-outlined text-text-inverse text-2xl">school</span>
          <motion.div 
            className="absolute -inset-1 bg-primary/20 rounded-xl blur-lg"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <div>
          <motion.div 
            className="text-xl font-bold text-text-primary tracking-tight"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            TransferLens
          </motion.div>
          <motion.div 
            className="text-xs text-text-tertiary tracking-wider uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            EdTech Platform
          </motion.div>
        </div>
      </div>

      {/* New Assessment Button - Only for students */}
      <AnimatePresence>
        {role === 'student' && (
          <motion.div 
            className="px-6 py-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button 
              onClick={() => navigate('/assessment/intro')}
              className="btn-primary w-full flex items-center justify-center gap-2 shadow-elevated"
              whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(15, 23, 42, 0.15)' }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span 
                className="material-symbols-outlined text-lg"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                add
              </motion.span>
              New Assessment
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Items */}
      <div className="flex flex-col flex-grow px-4 py-4 space-y-1">
        <motion.div 
          className="text-xs font-semibold text-text-tertiary uppercase tracking-widest px-4 py-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {role === 'student' ? 'Learning' : 'Teaching'}
        </motion.div>
        {navItems.map((item, index) => (
          <motion.button
            key={item.path}
            onClick={() => navigate(item.path)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.08 }}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              isActive(item.path) 
                ? 'bg-primary/10 text-primary' 
                : 'text-text-secondary hover:bg-surface-alt hover:text-text-primary'
            }`}
          >
            <motion.div 
              className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary rounded-r-full"
              animate={{ height: isActive(item.path) ? '60%' : 0 }}
              transition={{ duration: 0.3 }}
            />
            <span 
              className="material-symbols-outlined text-[22px] transition-transform group-hover:scale-110"
              style={{ fontVariationSettings: isActive(item.path) ? 'FILL 1' : 'FILL 0' }}
            >
              {item.icon}
            </span>
            <span className="relative">
              {item.label}
              {isActive(item.path) && (
                <motion.div 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                  layoutId="activeNav"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Footer Items */}
      <div className="border-t border-border px-4 py-6 space-y-1">
        <motion.div 
          className="text-xs font-semibold text-text-tertiary uppercase tracking-widest px-4 py-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Account
        </motion.div>
        <motion.button 
          className="group flex items-center gap-3 px-4 py-3 text-text-secondary hover:bg-surface-alt hover:text-text-primary transition-all rounded-xl text-sm font-medium w-full"
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <span className="material-symbols-outlined text-[22px] group-hover:rotate-12 transition-transform">settings</span>
          Settings
        </motion.button>
        <motion.button 
          className="group flex items-center gap-3 px-4 py-3 text-text-secondary hover:bg-surface-alt hover:text-text-primary transition-all rounded-xl text-sm font-medium w-full"
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <span className="material-symbols-outlined text-[22px] group-hover:rotate-12 transition-transform">person</span>
          Profile
        </motion.button>
      </div>
    </nav>
  )
}

export default Sidebar
