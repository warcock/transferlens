import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useScrollAnimation } from '../../hooks/useAnimation'

const Card = ({ 
  children, 
  variant = 'default', 
  interactive = false, 
  className = '', 
  ...props 
}) => {
  const cardRef = useRef(null)
  useScrollAnimation(cardRef)

  const baseClasses = 'bg-surface border rounded-xl transition-all duration-300'
  
  const variantClasses = {
    default: 'border-border shadow-card',
    elevated: 'border-border shadow-floating',
    interactive: 'border-border shadow-card cursor-pointer hover:shadow-floating hover:-translate-y-1',
    subtle: 'border-border-subtle shadow-subtle'
  }

  const cardClasses = `${baseClasses} ${variantClasses[interactive ? 'interactive' : variant]} ${className}`

  return (
    <motion.div
      ref={cardRef}
      className={cardClasses}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card