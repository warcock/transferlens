import { motion } from 'framer-motion'

const Badge = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide uppercase border'
  
  const variantClasses = {
    primary: 'bg-primary-light text-primary border-primary/20',
    secondary: 'bg-secondary-light text-secondary border-secondary/20',
    tertiary: 'bg-tertiary-light text-tertiary border-tertiary/20',
    error: 'bg-error-light text-error border-error/20',
    neutral: 'bg-surface-alt text-text-secondary border-border'
  }

  const badgeClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  return (
    <motion.span
      className={badgeClasses}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.span>
  )
}

export default Badge