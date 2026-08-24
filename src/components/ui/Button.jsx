import { motion } from 'framer-motion'
import { useSpringHover, useSpringPress } from '../../hooks/useSpringAnimation'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const { spring: hoverSpring, onMouseEnter, onMouseLeave } = useSpringHover()
  const { spring: pressSpring, onMouseDown, onMouseUp } = useSpringPress()

  const baseClasses = 'font-medium transition-all duration-200 relative overflow-hidden'
  
  const variantClasses = {
    primary: 'bg-primary text-text-inverse hover:bg-primary-hover hover:shadow-elevated',
    secondary: 'bg-secondary text-text-inverse hover:bg-secondary-hover hover:shadow-elevated',
    tertiary: 'bg-tertiary text-text-inverse hover:bg-tertiary-hover hover:shadow-elevated',
    outline: 'bg-transparent border-2 border-border text-text-primary hover:border-primary hover:text-primary hover:bg-primary-light',
    ghost: 'bg-transparent text-text-secondary hover:bg-surface-alt hover:text-text-primary'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl'
  }

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  return (
    <motion.button
      className={buttonClasses}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

export default Button