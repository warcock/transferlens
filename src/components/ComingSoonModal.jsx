import { motion } from 'framer-motion'

const ComingSoonModal = ({ isOpen, onClose, featureName }) => {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="card p-6 md:p-8 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-2xl">construction</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-text-primary">Coming Soon</h3>
        </div>

        <p className="text-sm md:text-base text-text-secondary mb-6 leading-relaxed">
          <span className="font-semibold text-text-primary">{featureName}</span> is currently under development and will be available in a future release.
        </p>

        <div className="p-4 bg-surface-alt rounded-xl border border-border mb-6">
          <div className="flex items-center gap-2 text-xs md:text-sm text-text-tertiary">
            <span className="material-symbols-outlined text-sm">info</span>
            <span>This is a prototype/demo. Features are simulated for demonstration purposes.</span>
          </div>
        </div>

        <motion.button
          onClick={onClose}
          className="btn-primary w-full"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Got it
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default ComingSoonModal
