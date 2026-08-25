import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AssessmentFarTransfer = () => {
  const navigate = useNavigate()
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const handleSubmit = () => {
    navigate('/dashboard/assessment/reasoning')
  }

  const options = [
    { id: 'a', text: '6', letter: 'A' },
    { id: 'b', text: '8', letter: 'B' },
    { id: 'c', text: '10', letter: 'C' },
    { id: 'd', text: '12', letter: 'D' }
  ]

  return (
    <div className="w-full flex justify-center items-center bg-background min-h-[calc(100vh-72px)]">
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="max-w-[1000px] w-full mx-4 md:mx-0 card card-elevated p-6 md:p-12 relative overflow-hidden"
      >
        {/* Background decoration */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="relative z-10">
        {/* Progress Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 md:mb-10"
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-tertiary/10 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary text-lg md:text-xl">looks_3</span>
              </div>
              <div>
                <div className="text-xs md:text-sm font-bold text-tertiary uppercase tracking-wider">Stage 3</div>
                <div className="text-xs text-text-tertiary">Far Transfer</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-8 bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div 
                    key={i} 
                    className={`w-2 h-2 rounded-full ${i <= 5 ? 'bg-tertiary' : 'bg-surface-alt'}`}
                  />
                ))}
              </div>
              <span className="text-xs md:text-sm font-medium text-text-secondary">Question 5 of 6</span>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-surface-alt rounded-xl">
            <motion.span 
              className="material-symbols-outlined text-text-tertiary"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              timer
            </motion.span>
            <span className="text-sm font-mono font-bold text-text-primary">1:15</span>
          </div>
        </motion.div>

        {/* Context Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-block px-3 py-1 bg-tertiary-light text-tertiary text-xs md:text-sm font-bold uppercase tracking-wider rounded-md mb-4 md:mb-6"
        >
          Far Transfer: Transportation / Operations
        </motion.div>

        {/* Question */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 md:mb-10"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary leading-relaxed max-w-3xl">
            A bus company operates on a schedule where 2 maintenance crews are assigned for every 3 buses in service. If the fleet expands to 15 buses, how many maintenance crews are needed to maintain the same operational ratio?
          </h2>
        </motion.div>

        {/* Answer Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
          {options.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              onClick={() => setSelectedAnswer(option.id)}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`group relative p-4 md:p-6 rounded-2xl border-2 text-left transition-all ${
                selectedAnswer === option.id
                  ? 'border-tertiary bg-tertiary-light shadow-elevated'
                  : 'border-border hover:border-tertiary/50 hover:bg-surface-alt'
              }`}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <motion.div 
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-bold text-base md:text-lg ${
                    selectedAnswer === option.id 
                      ? 'bg-tertiary text-text-inverse' 
                      : 'bg-surface-alt text-text-tertiary group-hover:bg-tertiary-light group-hover:text-tertiary'
                  }`}
                  animate={selectedAnswer === option.id ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {option.letter}
                </motion.div>
                <span className={`text-base md:text-lg font-medium ${selectedAnswer === option.id ? 'text-tertiary' : 'text-text-primary'}`}>
                  {option.text}
                </span>
              </div>
              <AnimatePresence>
                {selectedAnswer === option.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute top-4 right-4"
                  >
                    <span className="material-symbols-outlined text-tertiary text-2xl">check_circle</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>

        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 pt-6 md:pt-8 border-t border-border"
        >
          <motion.button 
            onClick={() => navigate('/dashboard/assessment/near-transfer')}
            className="flex items-center gap-2 text-text-tertiary hover:text-text-primary font-medium transition-colors text-sm md:text-base"
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back to near transfer
          </motion.button>
          <motion.button 
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className={`px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold flex items-center gap-3 transition-all text-sm md:text-base ${
              selectedAnswer
                ? 'btn-primary shadow-elevated'
                : 'bg-surface-alt text-text-tertiary cursor-not-allowed'
            }`}
            whileHover={selectedAnswer ? { scale: 1.02 } : {}}
            whileTap={selectedAnswer ? { scale: 0.98 } : {}}
          >
            Continue
            <motion.span 
              className="material-symbols-outlined"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              arrow_forward
            </motion.span>
          </motion.button>
        </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default AssessmentFarTransfer
