import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const AssessmentIntro = () => {
  const navigate = useNavigate()

  const stages = [
    { num: '01', label: 'Familiar', icon: 'task_alt', description: 'Standard problems' },
    { num: '02', label: 'Near Transfer', icon: 'compare_arrows', description: 'Related contexts' },
    { num: '03', label: 'Far Transfer', icon: 'explore', description: 'Novel scenarios' },
    { num: '04', label: 'Reasoning', icon: 'psychology', description: 'Deep analysis' }
  ]

  return (
    <div className="w-full flex justify-center items-center bg-background min-h-[calc(100vh-72px)]">
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="max-w-[800px] w-full card card-elevated p-12 relative overflow-hidden"
      >
        {/* Background decoration */}
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="relative z-10">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-10"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              Assessment
            </motion.div>
            <h1 className="text-5xl font-bold text-text-primary mb-4 tracking-tight">Ratio & Proportion</h1>
            <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
              Test your ability to apply this concept across different contexts and scenarios.
            </p>
          </motion.div>

          {/* Explanation Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-surface-alt to-surface border border-border rounded-2xl p-8 mb-10"
          >
            <div className="flex items-start gap-4">
              <motion.div 
                className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="material-symbols-outlined text-primary text-2xl">info</span>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-3">How this works</h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  You'll solve problems starting from familiar contexts, then gradually apply the same concept to new situations. This measures your true understanding beyond memorization.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Structure Visualization */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-10"
          >
            <div className="text-sm font-bold text-text-tertiary uppercase tracking-widest mb-6">Assessment stages</div>
            <div className="grid grid-cols-4 gap-4">
              {stages.map((stage, index) => (
                <motion.div
                  key={stage.num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-surface border border-border rounded-2xl p-6 text-center cursor-pointer hover:border-primary/50 hover:shadow-subtle transition-all"
                >
                  <div className="w-10 h-10 bg-surface-alt rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-light transition-colors">
                    <span className="material-symbols-outlined text-text-tertiary group-hover:text-primary transition-colors">{stage.icon}</span>
                  </div>
                  <div className="text-sm font-bold text-text-primary mb-1">{stage.num}</div>
                  <div className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2">{stage.label}</div>
                  <div className="text-xs text-text-tertiary">{stage.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats & Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-between pt-8 border-t border-border"
          >
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3 text-text-tertiary">
                <span className="material-symbols-outlined text-xl">assignment</span>
                <div>
                  <div className="text-2xl font-bold text-text-primary">6</div>
                  <div className="text-xs uppercase tracking-wider">Questions</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-text-tertiary">
                <span className="material-symbols-outlined text-xl">schedule</span>
                <div>
                  <div className="text-2xl font-bold text-text-primary">~4</div>
                  <div className="text-xs uppercase tracking-wider">Minutes</div>
                </div>
              </div>
            </div>
            <motion.button 
              onClick={() => navigate('/assessment/familiar')}
              className="btn-primary group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Begin Assessment
              <motion.span 
                className="material-symbols-outlined text-lg ml-2"
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

export default AssessmentIntro
