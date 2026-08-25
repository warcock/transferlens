import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useCounterAnimation } from '../hooks/useAnimation'
import { useNavigate } from 'react-router-dom'

const TopicAnalytics = () => {
  const navigate = useNavigate()
  const assessedRef = useRef(null)
  const masteryRef = useRef(null)
  const transferRef = useRef(null)
  const gapRef = useRef(null)

  useCounterAnimation(assessedRef, 28, { duration: 1.5 })
  useCounterAnimation(masteryRef, 86, { duration: 1.5 })
  useCounterAnimation(transferRef, 51, { duration: 1.5 })
  useCounterAnimation(gapRef, 35, { duration: 1.5 })

  const stagePerformance = [
    { stage: 'Familiar', score: 86 },
    { stage: 'Near Transfer', score: 67 },
    { stage: 'Far Transfer', score: 51 },
    { stage: 'Reasoning', score: 58 },
  ]

  const commonBarriers = [
    { barrier: 'Context Recognition', percentage: 43 },
    { barrier: 'Method Selection', percentage: 29 },
    { barrier: 'Reasoning', percentage: 18 },
    { barrier: 'Concept Understanding', percentage: 10 },
  ]

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <motion.button
            onClick={() => navigate('/dashboard/class-overview')}
            className="btn-outline flex items-center gap-2 text-sm px-3 py-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back
          </motion.button>
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Topic Analytics</span>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-3 tracking-tight">Ratio & Proportion</h1>
        <p className="text-base md:text-lg text-text-secondary">
          M3/2 Mathematics • Topic Performance Analysis
        </p>
      </motion.div>

      {/* Overview Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8"
      >
        <div className="card p-4 md:p-6">
          <div className="text-xs md:text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Students Assessed</div>
          <div ref={assessedRef} className="text-2xl md:text-4xl font-bold text-text-primary">28</div>
          <div className="text-xs md:text-sm text-text-tertiary">/ 32 total</div>
        </div>
        <div className="card p-4 md:p-6 border-l-4 border-l-secondary">
          <div className="text-xs md:text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Average Mastery</div>
          <div ref={masteryRef} className="text-2xl md:text-4xl font-bold text-text-primary mb-3">86%</div>
          <div className="w-full bg-surface-alt h-2 rounded-full overflow-hidden">
            <motion.div
              className="bg-secondary h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '86%' }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
        <div className="card p-4 md:p-6 border-l-4 border-l-primary">
          <div className="text-xs md:text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Average Transfer</div>
          <div ref={transferRef} className="text-2xl md:text-4xl font-bold text-text-primary mb-3">51%</div>
          <div className="w-full bg-surface-alt h-2 rounded-full overflow-hidden">
            <motion.div
              className="bg-primary h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '51%' }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
        <div className="card p-4 md:p-6 border-l-4 border-l-error bg-error-light/30">
          <div className="text-xs md:text-sm font-semibold text-error uppercase tracking-wider mb-2">Average Gap</div>
          <div ref={gapRef} className="text-2xl md:text-4xl font-bold text-error mb-1">35 pts</div>
          <div className="text-xs md:text-sm text-text-tertiary">86% mastery vs 51% transfer</div>
        </div>
      </motion.div>

      {/* Stage Performance */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="card p-6 md:p-8 mb-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-xl">timeline</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-text-primary">Stage Performance</h3>
        </div>

        <div className="space-y-4">
          {stagePerformance.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-4 bg-surface-alt rounded-xl"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm md:text-base font-semibold text-text-primary">{item.stage}</span>
                <span className={`text-sm md:text-lg font-bold ${item.score < 60 ? 'text-error' : 'text-text-primary'}`}>{item.score}%</span>
              </div>
              <div className="w-full bg-surface h-2 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${item.score < 60 ? 'bg-error' : 'bg-primary'}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.score}%` }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Common Transfer Barriers */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="card p-6 md:p-8 mb-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-error/10 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-error text-xl">warning</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-text-primary">Common Transfer Barriers</h3>
        </div>

        <div className="space-y-4">
          {commonBarriers.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="p-4 bg-surface-alt rounded-xl"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm md:text-base font-semibold text-text-primary">{item.barrier}</span>
                <span className="text-sm md:text-lg font-bold text-error">{item.percentage}%</span>
              </div>
              <div className="w-full bg-surface h-2 rounded-full overflow-hidden">
                <motion.div
                  className="bg-error h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${item.percentage}%` }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-6 p-4 bg-surface border border-border rounded-xl"
        >
          <div className="flex items-center gap-2 text-xs text-text-tertiary">
            <span className="material-symbols-outlined text-sm">info</span>
            <span>Prototype Data</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default TopicAnalytics
