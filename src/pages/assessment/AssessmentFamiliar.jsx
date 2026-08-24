import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AssessmentFamiliar = () => {
  const navigate = useNavigate()
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const handleSubmit = () => {
    navigate('/dashboard/assessment/near-transfer')
  }

  const options = [
    { id: 'a', text: '4 cups', letter: 'A' },
    { id: 'b', text: '9 cups', letter: 'B' },
    { id: 'c', text: '8 cups', letter: 'C' },
    { id: 'd', text: '6 cups', letter: 'D' }
  ]

  return (
    <div className="w-full flex justify-center items-center bg-background min-h-[calc(100vh-72px)]">
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="max-w-[1000px] w-full card card-elevated p-12 relative overflow-hidden"
      >
        {/* Background decoration */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
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
            className="flex items-center justify-between mb-10"
          >
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-xl">looks_one</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-secondary uppercase tracking-wider">Stage 1</div>
                  <div className="text-xs text-text-tertiary">Familiar Context</div>
                </div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div 
                      key={i} 
                      className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-secondary' : 'bg-surface-alt'}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-text-secondary">Question 1 of 6</span>
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
              <span className="text-sm font-mono font-bold text-text-primary">3:45</span>
            </div>
          </motion.div>

          {/* Question */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-light text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <span className="material-symbols-outlined text-sm">calculate</span>
              Ratio Problem
            </div>
            <h2 className="text-3xl font-bold text-text-primary leading-relaxed max-w-3xl">
              A recipe calls for 2 cups of flour for every 3 cups of sugar. If you use 6 cups of flour, how many cups of sugar do you need?
            </h2>
          </motion.div>

          {/* Answer Options */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            {options.map((option, index) => (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                onClick={() => setSelectedAnswer(option.id)}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`group relative p-6 rounded-2xl border-2 text-left transition-all ${
                  selectedAnswer === option.id
                    ? 'border-secondary bg-secondary-light shadow-elevated'
                    : 'border-border hover:border-primary/50 hover:bg-surface-alt'
                }`}
              >
                <div className="flex items-center gap-4">
                  <motion.div 
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                      selectedAnswer === option.id 
                        ? 'bg-secondary text-text-inverse' 
                        : 'bg-surface-alt text-text-tertiary group-hover:bg-primary-light group-hover:text-primary'
                    }`}
                    animate={selectedAnswer === option.id ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {option.letter}
                  </motion.div>
                  <span className={`text-lg font-medium ${selectedAnswer === option.id ? 'text-secondary' : 'text-text-primary'}`}>
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
                      <span className="material-symbols-outlined text-secondary text-2xl">check_circle</span>
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
            className="flex justify-between items-center pt-8 border-t border-border"
          >
            <motion.button 
              onClick={() => navigate('/dashboard/student-dashboard')}
              className="flex items-center gap-2 text-text-tertiary hover:text-text-primary font-medium transition-colors"
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back to dashboard
            </motion.button>
            <motion.button 
              onClick={handleSubmit}
              disabled={!selectedAnswer}
              className={`px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all ${
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

export default AssessmentFamiliar
