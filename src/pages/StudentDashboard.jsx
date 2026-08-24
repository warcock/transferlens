import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useScrollAnimation, useCounterAnimation } from '../hooks/useAnimation'
import { useRef } from 'react'
import LearningProgressChart from '../components/LearningProgressChart'

const StudentDashboard = () => {
  const navigate = useNavigate()
  const masteryRef = useRef(null)
  const transferRef = useRef(null)
  const gapRef = useRef(null)

  useCounterAnimation(masteryRef, 91, { duration: 1.5 })
  useCounterAnimation(transferRef, 43, { duration: 1.5 })
  useCounterAnimation(gapRef, 48, { duration: 1.5 })

  const recentConcepts = [
    { name: 'Ratio & Proportion', mastery: 91, transfer: 43 },
    { name: 'Linear Relationships', mastery: 84, transfer: 68 },
    { name: 'Force & Motion', mastery: 88, transfer: 51 },
  ]

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Page Header with cinematic reveal */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="mb-12"
      >
        <motion.div 
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Student Dashboard</span>
        </motion.div>
        <h1 className="text-5xl font-bold text-text-primary mb-3 tracking-tight">
          Welcome back, <span className="text-primary">Narin</span>
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
          Continue your learning journey. You're making progress in applying mathematical concepts across different contexts.
        </p>
      </motion.div>

      {/* Main Layout with asymmetric grid */}
      <div className="grid grid-cols-12 gap-8">
        {/* Left Column - Hero Section */}
        <div className="col-span-8 flex flex-col gap-8">
          {/* Main Focus Card with elevated design */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="card card-elevated p-8 relative overflow-hidden"
          >
            <motion.div 
              className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <motion.div 
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-light text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                    Current Focus
                  </motion.div>
                  <h2 className="text-3xl font-bold text-text-primary mb-4 tracking-tight">Ratio & Proportion</h2>
                  <p className="text-base text-text-secondary mb-8 max-w-xl leading-relaxed">
                    Test your ability to apply this concept across different contexts and scenarios. Your mastery is strong, but transfer needs improvement.
                  </p>
                  <motion.button 
                    onClick={() => navigate('/assessment/intro')}
                    className="btn-primary group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Assessment
                    <motion.span 
                      className="material-symbols-outlined text-lg ml-2"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      arrow_forward
                    </motion.span>
                  </motion.button>
                </div>
                <motion.div 
                  className="flex-shrink-0 relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-hover rounded-2xl flex items-center justify-center shadow-elevated">
                    <span className="material-symbols-outlined text-5xl text-text-inverse">calculate</span>
                  </div>
                  <motion.div 
                    className="absolute -inset-2 bg-primary/20 rounded-2xl blur-xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.4, 0.6, 0.4]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Metrics with refined typography */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: 'Mastery', value: '91%', subtext: 'Strong foundation', color: 'secondary', ref: masteryRef },
              { label: 'Transfer', value: '43%', subtext: 'Needs practice', color: 'tertiary', ref: transferRef },
              { label: 'Transfer Gap', value: '48 pts', subtext: 'Focus area', color: 'error', ref: gapRef }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className={`card p-6 border-l-4 ${metric.color === 'error' ? 'border-l-error' : metric.color === 'secondary' ? 'border-l-secondary' : 'border-l-tertiary'}`}
              >
                <div className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">{metric.label}</div>
                <div ref={metric.ref} className={`text-4xl font-bold ${metric.color === 'error' ? 'text-error' : metric.color === 'secondary' ? 'text-secondary' : 'text-tertiary'} mb-1`}>
                  {metric.value}
                </div>
                <div className="text-sm text-text-secondary">{metric.subtext}</div>
              </motion.div>
            ))}
          </div>

          {/* Learning Progress with actual chart */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="card p-8 flex-1 min-h-[400px]"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-text-primary">Learning Progress</h3>
              <span className="text-sm text-text-tertiary font-medium">Last 8 weeks</span>
            </div>
            <div className="flex-1 h-[320px]">
              <LearningProgressChart />
            </div>
          </motion.div>
        </div>

        {/* Right Column - Recent Work */}
        <div className="col-span-4 flex flex-col gap-8">
          {/* Recent Concepts with refined table */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="card flex-1 flex flex-col"
          >
            <div className="p-6 border-b border-border">
              <h3 className="text-xl font-bold text-text-primary">Recent Work</h3>
            </div>
            <div className="p-6 flex-1">
              <div className="space-y-4">
                {recentConcepts.map((concept, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="group p-4 rounded-xl hover:bg-surface-alt transition-all cursor-pointer border border-transparent hover:border-border"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-text-primary group-hover:text-primary transition-colors">{concept.name}</span>
                      <span className="text-sm text-text-tertiary">{concept.mastery}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex-1 mr-4">
                        <div className="w-full bg-surface h-1.5 rounded-full overflow-hidden">
                          <motion.div 
                            className={`h-full rounded-full ${concept.transfer < 60 ? 'bg-error' : 'bg-secondary'}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${concept.transfer}%` }}
                            transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                          />
                        </div>
                      </div>
                      <span className={`text-sm font-medium ${concept.transfer < 60 ? 'text-error' : 'text-secondary'}`}>
                        {concept.transfer}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Insight Card with gradient */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gradient-to-br from-primary-light to-surface-alt border border-primary/20 rounded-xl p-6"
          >
            <div className="flex gap-4">
              <motion.div 
                className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="material-symbols-outlined text-primary">lightbulb</span>
              </motion.div>
              <div>
                <h4 className="font-semibold text-text-primary mb-2">Understanding Transfer</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Transfer measures your ability to apply knowledge to new situations, not just answer familiar questions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard
