import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AssessmentNearTransfer = () => {
  const navigate = useNavigate()
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const handleSubmit = () => {
    navigate('/dashboard/assessment/far-transfer')
  }

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
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
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
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl">looks_two</span>
              </div>
              <div>
                <div className="text-sm font-bold text-primary uppercase tracking-wider">Stage 2</div>
                <div className="text-xs text-text-tertiary">Near Transfer</div>
              </div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div 
                    key={i} 
                    className={`w-2 h-2 rounded-full ${i <= 3 ? 'bg-primary' : 'bg-surface-alt'}`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-text-secondary">Question 3 of 6</span>
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
            <span className="text-sm font-mono font-bold text-text-primary">2:30</span>
          </div>
        </motion.div>

        {/* Context Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-block px-3 py-1 bg-primary-light text-primary text-sm font-bold uppercase tracking-wider rounded-md mb-6"
        >
          New Context: Business Scaling
        </motion.div>

        {/* Question */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-text-primary leading-relaxed max-w-3xl">
            A startup has 2 engineers for every 3 sales representatives. If the company scales to 18 engineers, how many sales representatives should they hire to maintain the same ratio?
          </h2>
        </motion.div>

        {/* Answer Options */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          {[
            { id: 'a', text: '24 sales representatives', letter: 'A' },
            { id: 'b', text: '27 sales representatives', letter: 'B' },
            { id: 'c', text: '21 sales representatives', letter: 'C' },
            { id: 'd', text: '30 sales representatives', letter: 'D' }
          ].map((option, index) => (
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
                  ? 'border-primary bg-primary-light shadow-elevated'
                  : 'border-border hover:border-primary/50 hover:bg-surface-alt'
              }`}
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                    selectedAnswer === option.id 
                      ? 'bg-primary text-text-inverse' 
                      : 'bg-surface-alt text-text-tertiary group-hover:bg-primary-light group-hover:text-primary'
                  }`}
                  animate={selectedAnswer === option.id ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {option.letter}
                </motion.div>
                <span className={`text-lg font-medium ${selectedAnswer === option.id ? 'text-primary' : 'text-text-primary'}`}>
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
                    <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
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
            onClick={() => navigate('/dashboard/assessment/familiar')}
            className="flex items-center gap-2 text-text-tertiary hover:text-text-primary font-medium transition-colors"
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back to familiar
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

export default AssessmentNearTransfer
