import { useNavigate } from 'react-router-dom'
import { useUserRole } from '../contexts/UserRoleContext'
import { motion } from 'framer-motion'

const Header = () => {
  const navigate = useNavigate()
  const { role, toggleRole, setRole } = useUserRole()

  const handleToggle = () => {
    toggleRole()
    // Navigate to appropriate dashboard based on new role
    if (role === 'student') {
      navigate('/dashboard/teacher-dashboard')
    } else {
      navigate('/dashboard/student-dashboard')
    }
  }

  const handleSignOut = () => {
    setRole(null)
    localStorage.removeItem('transferlens_role')
    navigate('/')
  }

  return (
    <header className="bg-surface/80 backdrop-blur-lg border-b border-border fixed top-0 right-0 h-[72px] w-[calc(100%-280px)] flex justify-between items-center px-8 z-30">
      {/* Left side - Page title could go here */}
      <div className="flex-1">
        <motion.div 
          className="h-8 w-1 bg-gradient-to-b from-primary to-transparent rounded-full"
          initial={{ height: 0 }}
          animate={{ height: 32 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-4">
        {/* Student/Teacher Toggle */}
        <motion.button 
          onClick={handleToggle}
          className="group flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors"
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="material-symbols-outlined text-lg group-hover:rotate-180 transition-transform duration-500">
            swap_horiz
          </span>
          <span className="relative">
            Switch to {role === 'student' ? 'Teacher' : 'Student'}
            <motion.span 
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
              initial={{ width: 0 }}
            />
          </span>
        </motion.button>

        <div className="w-px h-6 bg-border"></div>

        {/* Icon Actions */}
        <div className="flex items-center gap-1">
          <motion.button 
            className="relative text-text-secondary hover:text-primary transition-colors p-2.5 rounded-xl hover:bg-surface-alt"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="material-symbols-outlined text-xl">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </motion.button>
          <motion.button 
            className="text-text-secondary hover:text-primary transition-colors p-2.5 rounded-xl hover:bg-surface-alt"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="material-symbols-outlined text-xl">help_outline</span>
          </motion.button>
        </div>

        <div className="w-px h-6 bg-border"></div>

        {/* Role Badge */}
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="badge badge-primary">
            {role === 'student' ? 'Student' : 'Teacher'}
          </span>
        </motion.div>

        {/* Sign Out */}
        <motion.button 
          onClick={handleSignOut}
          className="text-text-secondary hover:text-error transition-colors text-sm font-medium"
          whileHover={{ x: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign out
        </motion.button>
      </div>
    </header>
  )
}

export default Header
