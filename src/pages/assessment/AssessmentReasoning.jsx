import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'

const AssessmentReasoning = () => {
  const navigate = useNavigate()
  const [reasoning, setReasoning] = useState('')

  const handleSubmit = () => {
    navigate('/dashboard/transfer-analysis')
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
            scale: [1, 1.2, 1],
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
                <span className="material-symbols-outlined text-primary text-xl">looks_4</span>
              </div>
              <div>
                <div className="text-sm font-bold text-primary uppercase tracking-wider">Stage 4</div>
                <div className="text-xs text-text-tertiary">Reasoning Capture</div>
              </div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div 
                    key={i} 
                    className={`w-2 h-2 rounded-full ${i === 6 ? 'bg-primary' : 'bg-surface-alt'}`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-text-secondary">Question 6 of 6</span>
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
            <span className="text-sm font-mono font-bold text-text-primary">0:45</span>
          </div>
        </motion.div>

        {/* Explanation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-surface-alt to-surface border border-border rounded-2xl p-8 mb-10"
        >
          <div className="flex items-start gap-4">
            <motion.div 
              className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="material-symbols-outlined text-primary text-2xl">psychology</span>
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Explain Your Thinking</h3>
              <p className="text-base text-text-secondary leading-relaxed">
                We're interested in how you approached these problems, not just the answers. What patterns or methods did you notice across the different scenarios?
              </p>
            </div>
          </div>
        </motion.div>

        {/* Text Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <label className="block text-sm font-semibold text-text-primary mb-3">
            Your reasoning
          </label>
          <textarea
            value={reasoning}
            onChange={(e) => setReasoning(e.target.value)}
            placeholder="Describe your approach to solving these problems. Did you notice any similarities between the recipe, business scaling, and bus logistics scenarios?"
            className="w-full h-48 p-4 rounded-xl border-2 border-border bg-surface text-text-primary text-base resize-none focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary-light transition-all"
          />
          <p className="text-sm text-text-tertiary mt-2">
            {reasoning.length} / 500 characters
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-between items-center pt-8 border-t border-border"
        >
          <motion.button 
            onClick={() => navigate('/dashboard/assessment/far-transfer')}
            className="flex items-center gap-2 text-text-tertiary hover:text-text-primary font-medium transition-colors"
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back to far transfer
          </motion.button>
          <motion.button 
            onClick={handleSubmit}
            disabled={!reasoning.trim()}
            className={`px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all ${
              reasoning.trim()
                ? 'btn-primary shadow-elevated'
                : 'bg-surface-alt text-text-tertiary cursor-not-allowed'
            }`}
            whileHover={reasoning.trim() ? { scale: 1.02 } : {}}
            whileTap={reasoning.trim() ? { scale: 0.98 } : {}}
          >
            Complete Assessment
            <motion.span 
              className="material-symbols-outlined"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              check
            </motion.span>
          </motion.button>
        </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default AssessmentReasoning
