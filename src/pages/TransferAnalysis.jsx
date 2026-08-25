import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useCounterAnimation } from '../hooks/useAnimation'

const TransferAnalysis = () => {
  const masteryRef = useRef(null)
  const transferRef = useRef(null)
  const gapRef = useRef(null)

  useCounterAnimation(masteryRef, 92, { duration: 1.5 })
  useCounterAnimation(transferRef, 38, { duration: 1.5 })
  useCounterAnimation(gapRef, 54, { duration: 1.5 })

  const transferData = [
    { stage: 'Familiar', score: 92, context: 'Recipe ratios', time: '45s', color: 'secondary' },
    { stage: 'Near Transfer', score: 67, context: 'Business scaling', time: '1:20', color: 'primary' },
    { stage: 'Far Transfer', score: 38, context: 'Bus logistics', time: '2:15', color: 'tertiary' },
    { stage: 'Reasoning Quality', score: 44, context: 'Structural mapping', time: '3:00', color: 'primary' },
  ]

  const conceptBreakdown = [
    { concept: 'Ratio Recognition', mastery: 94, transfer: 76, gap: 18 },
    { concept: 'Proportional Reasoning', mastery: 91, transfer: 48, gap: 43 },
    { concept: 'Cross-Domain Application', mastery: 89, transfer: 31, gap: 58 },
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

      {/* Summary Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8"
      >
        <div className="card p-4 md:p-6 border-l-4 border-l-secondary">
          <div className="text-xs md:text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Mastery</div>
          <div ref={masteryRef} className="text-3xl md:text-4xl font-bold text-text-primary mb-3">92%</div>
          <div className="w-full bg-surface-alt h-2 rounded-full overflow-hidden">
            <motion.div 
              className="bg-secondary h-full rounded-full" 
              initial={{ width: 0 }}
              animate={{ width: '92%' }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
        <div className="card p-4 md:p-6 border-l-4 border-l-primary">
          <div className="text-xs md:text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Transfer</div>
          <div ref={transferRef} className="text-3xl md:text-4xl font-bold text-text-primary mb-3">38%</div>
          <div className="w-full bg-surface-alt h-2 rounded-full overflow-hidden">
            <motion.div 
              className="bg-primary h-full rounded-full" 
              initial={{ width: 0 }}
              animate={{ width: '38%' }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
        <div className="card p-4 md:p-6 border-l-4 border-l-error bg-error-light/30">
          <div className="text-xs md:text-sm font-semibold text-error uppercase tracking-wider mb-2">Transfer Gap</div>
          <div ref={gapRef} className="text-3xl md:text-4xl font-bold text-error mb-1">54 pts</div>
          <div className="text-xs md:text-sm text-text-tertiary">92% mastery vs 38% transfer</div>
        </div>
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

        {/* Transfer Gap Visualization */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="col-span-1 lg:col-span-5 card p-4 md:p-8"
        >
          <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-error/10 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-error text-lg md:text-xl">trending_down</span>
            </div>
            <h3 className="text-lg md:text-2xl font-bold text-text-primary">Transfer Gap Analysis</h3>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            {conceptBreakdown.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-3 md:p-4 bg-surface-alt rounded-xl"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm md:text-base font-semibold text-text-primary">{item.concept}</span>
                  <span className="text-xs md:text-sm font-bold text-error">{item.gap} pts gap</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-text-tertiary">Mastery</span>
                    <span className="font-semibold text-text-primary">{item.mastery}%</span>
                  </div>
                  <div className="h-1.5 bg-surface rounded-full overflow-hidden">
                    <motion.div 
                      className="bg-secondary h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${item.mastery}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    />
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-text-tertiary">Transfer</span>
                    <span className="font-semibold text-text-primary">{item.transfer}%</span>
                  </div>
                  <div className="h-1.5 bg-surface rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full rounded-full ${item.transfer < 50 ? 'bg-error' : 'bg-primary'}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.transfer}%` }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-6 p-4 bg-primary-light border border-primary/20 rounded-xl"
          >
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-xl">info</span>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                Performance remains strong when proportional relationships are directly visible, but decreases when the student must recognize the relationship in an unfamiliar context.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Reasoning Analysis Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="card p-6 md:p-8 mb-6 md:mb-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-tertiary/10 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-tertiary text-xl">psychology</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-text-primary">Reasoning Analysis</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="text-center p-4 bg-surface-alt rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1">44%</div>
            <div className="text-xs md:text-sm text-text-tertiary">Reasoning Quality</div>
          </div>
          <div className="text-center p-4 bg-surface-alt rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1">82%</div>
            <div className="text-xs md:text-sm text-text-tertiary">Concept Identification</div>
          </div>
          <div className="text-center p-4 bg-surface-alt rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-error mb-1">38%</div>
            <div className="text-xs md:text-sm text-text-tertiary">Context Recognition</div>
          </div>
          <div className="text-center p-4 bg-surface-alt rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1">55%</div>
            <div className="text-xs md:text-sm text-text-tertiary">Method Selection</div>
          </div>
          <div className="text-center p-4 bg-surface-alt rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1">44%</div>
            <div className="text-xs md:text-sm text-text-tertiary">Explanation Quality</div>
          </div>
        </div>

        <div className="bg-error-light/30 border border-error/30 rounded-xl p-4 md:p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-error/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-error">warning</span>
            </div>
            <div>
              <div className="font-bold text-error mb-2">Primary Transfer Barrier: Context Recognition</div>
              <p className="text-sm text-text-secondary mb-3">
                The student can perform proportional calculations but has difficulty recognizing when proportional reasoning applies in unfamiliar situations.
              </p>
              <div className="flex items-center gap-2 text-xs text-text-tertiary">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                <span>AI-assisted diagnostic insight</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default TransferAnalysis
