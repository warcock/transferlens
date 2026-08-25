import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useCounterAnimation } from '../hooks/useAnimation'
import { useNavigate } from 'react-router-dom'

const StudentAnalytics = () => {
  const navigate = useNavigate()
  const totalAssessmentsRef = useRef(null)
  const completionRateRef = useRef(null)
  const avgTimeRef = useRef(null)
  const conceptsRef = useRef(null)
  const avgMasteryRef = useRef(null)
  const avgTransferRef = useRef(null)
  const avgGapRef = useRef(null)

  useCounterAnimation(totalAssessmentsRef, 8, { duration: 1.5 })
  useCounterAnimation(completionRateRef, 94, { duration: 1.5 })
  useCounterAnimation(avgTimeRef, 252, { duration: 1.5 })
  useCounterAnimation(conceptsRef, 6, { duration: 1.5 })
  useCounterAnimation(avgMasteryRef, 89, { duration: 1.5 })
  useCounterAnimation(avgTransferRef, 52, { duration: 1.5 })
  useCounterAnimation(avgGapRef, 37, { duration: 1.5 })

  const transferProfile = [
    { metric: 'Concept Recognition', score: 82 },
    { metric: 'Context Recognition', score: 41 },
    { metric: 'Information Selection', score: 58 },
    { metric: 'Reasoning', score: 47 },
    { metric: 'Application', score: 39 },
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
            onClick={() => navigate('/dashboard/teacher-dashboard')}
            className="btn-outline flex items-center gap-2 text-sm px-3 py-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back
          </motion.button>
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Student Analytics</span>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-3 tracking-tight">Narin</h1>
        <p className="text-base md:text-lg text-text-secondary">
          M3/2 Mathematics • Grade M3
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
          <div className="text-xs md:text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Total Assessments</div>
          <div ref={totalAssessmentsRef} className="text-2xl md:text-4xl font-bold text-text-primary">8</div>
        </div>
        <div className="card p-4 md:p-6">
          <div className="text-xs md:text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Completion Rate</div>
          <div ref={completionRateRef} className="text-2xl md:text-4xl font-bold text-text-primary">94%</div>
        </div>
        <div className="card p-4 md:p-6">
          <div className="text-xs md:text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Average Time</div>
          <div ref={avgTimeRef} className="text-2xl md:text-4xl font-bold text-text-primary">4m 12s</div>
        </div>
        <div className="card p-4 md:p-6">
          <div className="text-xs md:text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Concepts Covered</div>
          <div ref={conceptsRef} className="text-2xl md:text-4xl font-bold text-text-primary">6</div>
        </div>
      </motion.div>

      {/* Performance Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8"
      >
        <div className="card p-4 md:p-6 border-l-4 border-l-secondary">
          <div className="text-xs md:text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Average Mastery</div>
          <div ref={avgMasteryRef} className="text-3xl md:text-4xl font-bold text-text-primary mb-3">89%</div>
          <div className="w-full bg-surface-alt h-2 rounded-full overflow-hidden">
            <motion.div
              className="bg-secondary h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '89%' }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
        <div className="card p-4 md:p-6 border-l-4 border-l-primary">
          <div className="text-xs md:text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Average Transfer</div>
          <div ref={avgTransferRef} className="text-3xl md:text-4xl font-bold text-text-primary mb-3">52%</div>
          <div className="w-full bg-surface-alt h-2 rounded-full overflow-hidden">
            <motion.div
              className="bg-primary h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '52%' }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
        <div className="card p-4 md:p-6 border-l-4 border-l-error bg-error-light/30">
          <div className="text-xs md:text-sm font-semibold text-error uppercase tracking-wider mb-2">Average Transfer Gap</div>
          <div ref={avgGapRef} className="text-3xl md:text-4xl font-bold text-error mb-1">37 pts</div>
          <div className="text-xs md:text-sm text-text-tertiary">89% mastery vs 52% transfer</div>
        </div>
      </motion.div>

      {/* Transfer Profile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="card p-6 md:p-8 mb-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-xl">insights</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-text-primary">Transfer Profile</h3>
        </div>

        <div className="space-y-4">
          {transferProfile.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="p-4 bg-surface-alt rounded-xl"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm md:text-base font-semibold text-text-primary">{item.metric}</span>
                <span className={`text-sm md:text-lg font-bold ${item.score < 50 ? 'text-error' : 'text-text-primary'}`}>{item.score}%</span>
              </div>
              <div className="w-full bg-surface h-2 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${item.score < 50 ? 'bg-error' : 'bg-primary'}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.score}%` }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* AI-Assisted Diagnostic Insights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="card p-6 md:p-8 bg-gradient-to-r from-primary-light to-surface-alt border border-primary/20"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-xl">auto_awesome</span>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-text-primary">AI-Assisted Diagnostic Insights</h3>
            <div className="flex items-center gap-2 text-xs text-text-tertiary mt-1">
              <span className="material-symbols-outlined text-sm">info</span>
              <span>Prototype data - Not for clinical use</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/50 p-4 md:p-6 rounded-xl border border-border">
            <div className="font-bold text-error mb-2">Primary Transfer Barrier: Context Recognition</div>
            <p className="text-sm text-text-secondary mb-3">
              Narin consistently performs well on familiar problems but shows lower performance when the same concept appears in a different domain.
            </p>
          </div>

          <div className="bg-white/50 p-4 md:p-6 rounded-xl border border-border">
            <div className="font-bold text-primary mb-2">Suggested Intervention</div>
            <p className="text-sm text-text-secondary">
              Provide opportunities to identify proportional relationships without explicitly naming the concept or procedure. Use varied contexts and ask students to recognize the underlying structure before solving.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default StudentAnalytics
