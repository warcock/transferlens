import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useCounterAnimation } from '../hooks/useAnimation'

const TeacherAnalytics = () => {
  const totalAssessmentsRef = useRef(null)
  const completionRateRef = useRef(null)
  const conceptsRef = useRef(null)

  useCounterAnimation(totalAssessmentsRef, 156, { duration: 1.5 })
  useCounterAnimation(completionRateRef, 94, { duration: 1.5 })
  useCounterAnimation(conceptsRef, 12, { duration: 1.5 })

  const classMetrics = {
    totalAssessments: 156,
    avgCompletionRate: 94,
    avgTimePerAssessment: '4.2 min',
    conceptsCovered: 12
  }

  const studentPerformance = [
    { name: 'Narin M3', mastery: 91, transfer: 43, gap: 48, trend: 'down' },
    { name: 'Mali S', mastery: 84, transfer: 68, gap: 16, trend: 'up' },
    { name: 'Fah K', mastery: 78, transfer: 55, gap: 23, trend: 'stable' },
    { name: 'Ploy R', mastery: 95, transfer: 20, gap: 75, trend: 'down' },
    { name: 'Beam T', mastery: 67, transfer: 45, gap: 22, trend: 'up' },
    { name: 'Tan W', mastery: 72, transfer: 58, gap: 14, trend: 'up' },
  ]

  const conceptPerformance = [
    { concept: 'Ratio & Proportion', classAvg: 68, difficulty: 'Medium', completion: 94 },
    { concept: 'Linear Equations', classAvg: 72, difficulty: 'Hard', completion: 89 },
    { concept: 'Geometry Basics', classAvg: 81, difficulty: 'Easy', completion: 97 },
    { concept: 'Statistics', classAvg: 64, difficulty: 'Hard', completion: 91 },
  ]

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
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Analytics Dashboard</span>
        </motion.div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-text-primary mb-3 tracking-tight">Teacher Analytics</h1>
        <p className="text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed">
          Comprehensive analytics for class performance and individual student insights to inform teaching decisions.
        </p>
      </motion.div>

      {/* Class Overview Metrics with refined design */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="card p-4 md:p-6 border-l-4 border-l-primary"
        >
          <div className="text-xs md:text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Total Assessments</div>
          <div ref={totalAssessmentsRef} className="text-2xl md:text-4xl font-bold text-text-primary mb-1">156</div>
          <div className="text-xs md:text-sm text-text-tertiary">This semester</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="card p-4 md:p-6 border-l-4 border-l-secondary"
        >
          <div className="text-xs md:text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Avg Completion Rate</div>
          <div className="flex items-baseline gap-2 mb-1">
            <span ref={completionRateRef} className="text-2xl md:text-4xl font-bold text-text-primary">94</span>
            <span className="text-lg md:text-2xl font-bold text-text-primary">%</span>
          </div>
          <div className="text-xs md:text-sm text-secondary font-medium">+5% from last month</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="card p-4 md:p-6 border-l-4 border-l-primary"
        >
          <div className="text-xs md:text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Avg Time</div>
          <div className="text-2xl md:text-4xl font-bold text-text-primary mb-1">4.2<span className="text-base md:text-xl font-normal text-text-tertiary ml-1">min</span></div>
          <div className="text-xs md:text-sm text-text-tertiary">Per assessment</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="card p-4 md:p-6 border-l-4 border-l-tertiary"
        >
          <div className="text-xs md:text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Concepts Covered</div>
          <div ref={conceptsRef} className="text-2xl md:text-4xl font-bold text-text-primary mb-1">12</div>
          <div className="text-sm text-text-tertiary">Mathematics curriculum</div>
        </motion.div>
      </div>

      {/* AI-Assisted Diagnostic Insights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="card p-6 md:p-8 bg-gradient-to-r from-primary-light to-surface-alt border border-primary/20 mb-6 md:mb-8"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white/50 p-4 md:p-6 rounded-xl border border-border">
            <div className="font-bold text-error mb-2">Primary Transfer Barrier: Context Recognition</div>
            <p className="text-sm text-text-secondary mb-3">
              Class-wide analysis shows that students perform well on familiar problems but struggle to recognize the same underlying concept in unfamiliar contexts.
            </p>
            <div className="text-xs text-text-tertiary">Affects 67% of students</div>
          </div>

          <div className="bg-white/50 p-4 md:p-6 rounded-xl border border-border">
            <div className="font-bold text-primary mb-2">Suggested Intervention</div>
            <p className="text-sm text-text-secondary mb-3">
              Implement cross-context practice sessions. Present the same mathematical concept in varied real-world scenarios before introducing procedural methods.
            </p>
            <div className="text-xs text-text-tertiary">Estimated impact: +15% transfer score</div>
          </div>
        </div>
      </motion.div>

      {/* Student Performance Table and Concept Performance */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="card overflow-hidden"
      >
        <div className="p-4 md:p-6 border-b border-border flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-lg md:text-xl">trending_up</span>
            </div>
            <h3 className="text-base md:text-xl font-bold text-text-primary">Student Performance Trends</h3>
          </div>
          <motion.button 
            className="text-xs md:text-sm font-semibold text-primary hover:underline flex items-center gap-1"
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Students
            <span className="material-symbols-outlined text-xs md:text-sm">arrow_forward</span>
          </motion.button>
        </div>
        <div className="p-4 md:p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border text-text-tertiary text-xs md:text-sm font-semibold uppercase tracking-wider">
                  <th className="py-3 md:py-4 px-2 md:px-4 font-normal">Student</th>
                  <th className="py-3 md:py-4 px-2 md:px-4 text-right font-normal">Mastery</th>
                  <th className="py-3 md:py-4 px-2 md:px-4 text-right font-normal">Transfer</th>
                  <th className="py-3 md:py-4 px-2 md:px-4 text-right font-normal">Gap</th>
                  <th className="py-3 md:py-4 px-2 md:px-4 text-center font-normal">Trend</th>
                </tr>
              </thead>
              <tbody>
                {studentPerformance.map((student, index) => (
                  <motion.tr 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="border-b border-border hover:bg-surface-alt transition-colors group cursor-pointer"
                  >
                    <td className="py-3 md:py-4 px-2 md:px-4">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-surface-alt rounded-lg flex items-center justify-center">
                          <span className="material-symbols-outlined text-text-tertiary text-xs md:text-sm">person</span>
                        </div>
                        <span className="text-xs md:text-sm font-semibold text-text-primary group-hover:text-primary transition-colors">{student.name}</span>
                      </div>
                    </td>
                    <td className="py-3 md:py-4 px-2 md:px-4 text-right font-semibold text-xs md:text-sm text-text-primary">{student.mastery}%</td>
                    <td className={`py-3 md:py-4 px-2 md:px-4 text-right font-semibold text-xs md:text-sm ${student.transfer < 50 ? 'text-error' : 'text-text-primary'}`}>
                      {student.transfer}%
                    </td>
                    <td className="py-3 md:py-4 px-2 md:px-4 text-right">
                      <span className={`text-xs md:text-sm font-bold ${student.gap > 30 ? 'text-error' : 'text-text-primary'}`}>
                        {student.gap > 0 ? `-${student.gap}` : `+${Math.abs(student.gap)}`} pt
                      </span>
                    </td>
                    <td className="py-3 md:py-4 px-2 md:px-4 text-center">
                      <motion.span 
                        className={`material-symbols-outlined text-base md:text-lg ${student.trend === 'up' ? 'text-secondary' : student.trend === 'down' ? 'text-error' : 'text-text-tertiary'}`}
                        whileHover={{ scale: 1.2, rotate: student.trend === 'up' ? -20 : student.trend === 'down' ? 20 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {student.trend === 'up' ? 'trending_up' : student.trend === 'down' ? 'trending_down' : 'trending_flat'}
                      </motion.span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* Concept Performance and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="col-span-1 lg:col-span-7 card p-4 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-lg md:text-xl">bar_chart</span>
            </div>
            <h3 className="text-lg md:text-2xl font-bold text-text-primary">Concept Performance</h3>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            {conceptPerformance.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <div>
                    <div className="text-sm md:text-base font-bold text-text-primary mb-1">{item.concept}</div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${
                        item.difficulty === 'Easy' ? 'bg-secondary-light text-secondary' : 
                        item.difficulty === 'Medium' ? 'bg-primary-light text-primary' : 'bg-error-light text-error'
                      }`}>
                        {item.difficulty}
                      </span>
                      <span className="text-text-tertiary">•</span>
                      <span className="text-xs md:text-sm text-text-tertiary">{item.completion}% completion</span>
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-text-primary">{item.classAvg}%</div>
                </div>
                <div className="relative h-3 bg-surface-alt rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.classAvg}%` }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="col-span-1 lg:col-span-5 card p-4 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-tertiary/10 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary text-lg md:text-xl">recommend</span>
            </div>
            <h3 className="text-lg md:text-2xl font-bold text-text-primary">Intervention Recommendations</h3>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="p-4 md:p-5 bg-gradient-to-r from-error-light to-surface-alt rounded-xl border border-error/30"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-error text-lg md:text-xl">priority_high</span>
                <span className="text-xs md:text-sm font-bold text-error uppercase tracking-wider">Immediate Action</span>
              </div>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                4 students (Ploy, Narin, Mali, Fah) show transfer gaps &gt; 40pts. Schedule targeted remediation sessions focusing on cross-domain application.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="p-4 md:p-5 bg-gradient-to-r from-primary-light to-surface-alt rounded-xl border border-primary/20"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-primary text-lg md:text-xl">tips_and_updates</span>
                <span className="text-xs md:text-sm font-bold text-primary uppercase tracking-wider">Suggested Focus</span>
              </div>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                Statistics unit showing lowest class average (64%). Consider additional practice problems and real-world data examples.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="p-4 md:p-5 bg-gradient-to-r from-secondary-light to-surface-alt rounded-xl border border-secondary/20"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-secondary text-lg md:text-xl">celebration</span>
                <span className="text-xs md:text-sm font-bold text-secondary uppercase tracking-wider">Positive Note</span>
              </div>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                Geometry Basics performing well (81% avg). Consider using similar teaching methods for more challenging concepts.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TeacherAnalytics
