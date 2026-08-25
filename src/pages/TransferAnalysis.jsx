import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useCounterAnimation } from '../hooks/useAnimation'

const TransferAnalysis = () => {
  const [revealStage, setRevealStage] = useState(0)
  const [showFinalMessage, setShowFinalMessage] = useState(false)

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

  const reasoningBreakdown = [
    { skill: 'Concept Identification', score: 82 },
    { skill: 'Context Recognition', score: 38 },
    { skill: 'Method Selection', score: 55 },
    { skill: 'Explanation Quality', score: 44 },
  ]

  const scoreRefs = transferData.map(() => useRef(null))
  
  useEffect(() => {
    const stages = [0, 1, 2, 3, 4, 5, 6]
    let currentStage = 0
    
    const interval = setInterval(() => {
      if (currentStage < stages.length) {
        setRevealStage(stages[currentStage])
        currentStage++
      } else {
        clearInterval(interval)
        setTimeout(() => setShowFinalMessage(true), 1000)
      }
    }, 800)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (revealStage >= 1) {
      transferData.forEach((item, index) => {
        if (index < revealStage) {
          useCounterAnimation(scoreRefs[index], item.score, { delay: 0, duration: 1 })
        }
      })
    }
  }, [revealStage])

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

      {/* Animated Reveal Section */}
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
              <AnimatePresence key={index}>
                {revealStage > index && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
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
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
              <AnimatePresence key={index}>
                {revealStage > 4 + index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
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
                            transition={{ duration: 0.8 }}
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
                            transition={{ duration: 0.8 }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Final Summary */}
      <AnimatePresence>
        {showFinalMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="card card-elevated p-6 md:p-8 text-center"
          >
            <div className="grid grid-cols-3 gap-4 md:gap-8 mb-6">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">92%</div>
                <div className="text-sm md:text-base text-text-tertiary uppercase tracking-wider">Mastery</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">38%</div>
                <div className="text-sm md:text-base text-text-tertiary uppercase tracking-wider">Transfer</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-error mb-2">54 pts</div>
                <div className="text-sm md:text-base text-text-tertiary uppercase tracking-wider">Transfer Gap</div>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl font-semibold text-text-primary"
            >
              Your performance changes when the context changes.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reasoning Analysis Section */}
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
        
        <div className="mb-6">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">44%</div>
          <div className="text-sm text-text-tertiary uppercase tracking-wider mb-4">Reasoning Quality</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {reasoningBreakdown.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="p-4 bg-surface-alt rounded-xl"
            >
              <div className="text-2xl font-bold text-text-primary mb-1">{item.score}%</div>
              <div className="text-xs text-text-tertiary">{item.skill}</div>
            </motion.div>
          ))}
        </div>

        <div className="bg-error/5 border border-error/20 rounded-xl p-4 md:p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-error">warning</span>
            <span className="font-bold text-error">PRIMARY TRANSFER BARRIER</span>
          </div>
          <div className="text-lg font-bold text-text-primary mb-2">Context Recognition</div>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed">
            The student can perform proportional calculations but has difficulty recognizing when proportional reasoning applies in unfamiliar situations.
          </p>
          <div className="mt-3 text-xs text-text-tertiary italic">
            AI-assisted diagnostic insight
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default TransferAnalysis
