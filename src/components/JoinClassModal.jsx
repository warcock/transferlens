import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const JoinClassModal = ({ isOpen, onClose, onJoin }) => {
  const [classCode, setClassCode] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (isOpen) {
      setClassCode('')
      setError('')
    }
  }, [isOpen])

  const handleSubmit = (e) => {
    e.preventDefault()

    const code = classCode.trim()

    if (!code) {
      setError('Please enter a class code.')
      return
    }

    if (code.length < 4) {
      setError('Please enter a valid class code.')
      return
    }

    onJoin?.(code)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-full max-w-md bg-surface rounded-2xl border border-border shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      school
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-text-primary">
                      Join a Class
                    </h2>
                    <p className="text-sm text-text-secondary mt-0.5">
                      Enter the code provided by your teacher.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-text-tertiary hover:text-text-primary hover:bg-surface-alt transition-colors"
                  aria-label="Close"
                >
                  <span className="material-symbols-outlined">
                    close
                  </span>
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 pb-6">
              <label
                htmlFor="class-code"
                className="block text-sm font-semibold text-text-primary mb-2"
              >
                Class Code
              </label>

              <input
                id="class-code"
                type="text"
                value={classCode}
                onChange={(e) => {
                  setClassCode(e.target.value)
                  setError('')
                }}
                placeholder="e.g. MATH-7K2P"
                autoFocus
                className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-text-primary placeholder:text-text-tertiary outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
              />

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-error flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-base">
                    error
                  </span>
                  {error}
                </motion.p>
              )}

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-3 rounded-xl border border-border text-text-primary font-semibold hover:bg-surface-alt transition-colors"
                >
                  Cancel
                </button>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 btn-primary px-4 py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                  Join Class
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default JoinClassModal