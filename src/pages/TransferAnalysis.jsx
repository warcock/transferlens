import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useCounterAnimation } from '../hooks/useAnimation'

const TransferAnalysis = () => {
  const transferData = [
    { stage: 'Familiar', score: 95, context: 'Recipe ratios', time: '45s', color: 'secondary' },
    { stage: 'Near Transfer', score: 78, context: 'Business scaling', time: '1:20', color: 'primary' },
    { stage: 'Far Transfer', score: 52, context: 'Bus logistics', time: '2:15', color: 'tertiary' },
    { stage: 'Reasoning Quality', score: 65, context: 'Structural mapping', time: '3:00', color: 'primary' },
  ]

  const conceptBreakdown = [
    { concept: 'Ratio recognition', mastery: 92, transfer: 45, gap: 47 },
    { concept: 'Proportional reasoning', mastery: 88, transfer: 52, gap: 36 },
    { concept: 'Cross-domain application', mastery: 75, transfer: 38, gap: 37 },
  ]

  const scoreRefs = transferData.map(() => useRef(null))
  transferData.forEach((item, index) => {
    useCounterAnimation(scoreRefs[index], item.score, { delay: 0.5 + index * 0.1, duration: 1.5 })
  })

  return (
    <div className="max-w-[1400px] mx-auto space-y-6 md:space-y-8">
      {/* Page Header with unique composition */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.div 
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Performance Analysis</span>
        </motion.div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-text-primary mb-3 tracking-tight">Transfer Analysis</h1>
        <p className="text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed">
          Detailed breakdown of your transfer performance across different contexts and reasoning stages.
        </p>
      </motion.div>

      {/* Transfer Performance by Stage with unique layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="col-span-1 lg:col-span-7 card p-4 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 md:mb-8">
            <h3 className="text-lg md:text-2xl font-bold text-text-primary">Performance by Stage</h3>
            <div className="flex items-center gap-2 text-xs md:text-sm text-text-tertiary">
              <span className="material-symbols-outlined">timeline</span>
              <span>Progressive difficulty</span>
            </div>
          </div>
          
          <div className="space-y-6">
            {transferData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 md:gap-3 mb-1">
                      <div className={`w-6 h-6 md:w-8 md:h-8 rounded-lg ${item.color === 'secondary' ? 'bg-secondary/10' : item.color === 'tertiary' ? 'bg-tertiary/10' : 'bg-primary/10'} flex items-center justify-center`}>
                        <span className={`material-symbols-outlined text-xs md:text-sm ${item.color === 'secondary' ? 'text-secondary' : item.color === 'tertiary' ? 'text-tertiary' : 'text-primary'}`}>
                          {index === 0 ? 'looks_one' : index === 1 ? 'looks_two' : index === 2 ? 'looks_3' : 'looks_4'}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm md:text-base font-bold text-text-primary">{item.stage}</div>
                        <div className="text-xs md:text-sm text-text-tertiary">{item.context}</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right md:ml-6">
                    <div ref={scoreRefs[index]} className={`text-2xl md:text-3xl font-bold ${item.score >= 80 ? 'text-secondary' : item.score >= 60 ? 'text-primary' : 'text-tertiary'}`}>
                      {item.score}%
                    </div>
                    <div className="text-xs md:text-sm text-text-tertiary">{item.time}</div>
                  </div>
                </div>
                <div className="relative h-3 bg-surface-alt rounded-full overflow-hidden">
                  <motion.div 
                    className={`absolute top-0 left-0 h-full rounded-full ${item.score >= 80 ? 'bg-secondary' : item.score >= 60 ? 'bg-primary' : 'bg-tertiary'}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${item.score}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transfer Gap Visualization with unique design */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="col-span-1 lg:col-span-5 card p-4 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-error/10 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-error text-lg md:text-xl">insights</span>
            </div>
            <h3 className="text-lg md:text-2xl font-bold text-text-primary">Transfer Gap Analysis</h3>
          </div>
          
          <div className="space-y-4 md:space-y-5">
            {conceptBreakdown.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-4 md:p-5 bg-surface-alt rounded-xl border border-border hover:border-error/30 transition-all"
              >
                <div className="flex justify-between items-center mb-3 md:mb-4">
                  <div className="text-xs md:text-sm font-bold text-text-primary">{item.concept}</div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-error text-xs md:text-sm">trending_down</span>
                    <span className="text-xs md:text-sm font-bold text-error">-{item.gap} pt</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-text-tertiary font-medium uppercase tracking-wider">Mastery</span>
                      <span className="font-semibold text-text-primary">{item.mastery}%</span>
                    </div>
                    <div className="w-full bg-surface h-2 rounded-full overflow-hidden">
                      <motion.div 
                        className="bg-primary h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${item.mastery}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-text-tertiary font-medium uppercase tracking-wider">Transfer</span>
                      <span className="font-semibold text-text-primary">{item.transfer}%</span>
                    </div>
                    <div className="w-full bg-surface h-2 rounded-full overflow-hidden">
                      <motion.div 
                        className="bg-secondary h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${item.transfer}%` }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Insights with card-based layout */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="card p-4 md:p-8"
      >
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-lg md:text-xl">psychology</span>
          </div>
          <h3 className="text-lg md:text-2xl font-bold text-text-primary">Reasoning Analysis</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-4 md:p-6 bg-gradient-to-br from-secondary-light to-surface-alt rounded-xl border border-secondary/20"
          >
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-lg md:text-xl">check_circle</span>
              </div>
              <span className="text-xs md:text-sm font-bold text-secondary uppercase tracking-wider">Strength</span>
            </div>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
              Strong pattern recognition in familiar contexts. You quickly identify ratio structures in standard problems.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="p-4 md:p-6 bg-gradient-to-br from-primary-light to-surface-alt rounded-xl border border-primary/20"
          >
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-lg md:text-xl">lightbulb</span>
              </div>
              <span className="text-xs md:text-sm font-bold text-primary uppercase tracking-wider">Recommendation</span>
            </div>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
              Practice identifying underlying mathematical structures across different real-world scenarios. Focus on "why" rather than "how."
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default TransferAnalysis
