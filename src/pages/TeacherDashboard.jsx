import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useCounterAnimation } from '../hooks/useAnimation'

const TeacherDashboard = () => {
  const studentsRef = useRef(null)
  const masteryRef = useRef(null)
  const transferRef = useRef(null)
  const gapRef = useRef(null)

  useCounterAnimation(studentsRef, 32, { duration: 1.5 })
  useCounterAnimation(masteryRef, 86, { duration: 1.5 })
  useCounterAnimation(transferRef, 51, { duration: 1.5 })
  useCounterAnimation(gapRef, 35, { duration: 1.5 })

  const students = [
    { name: 'Mint', mastery: 85, transfer: 88, risk: false },
    { name: 'Tan', mastery: 30, transfer: 80, risk: false },
    { name: 'Beam', mastery: 40, transfer: 30, risk: false },
    { name: 'Korn', mastery: 30, transfer: 20, risk: false },
    { name: 'Narin', mastery: 90, transfer: 30, risk: true, gap: 60 },
    { name: 'Mali', mastery: 80, transfer: 40, risk: true, gap: 40 },
    { name: 'Ploy', mastery: 95, transfer: 20, risk: true, gap: 75 },
    { name: 'Fah', mastery: 85, transfer: 45, risk: true, gap: 40 },
  ]

  const atRiskStudents = students.filter(s => s.risk)

  const getCoordinates = (mastery, transfer) => {
    const x = 50 + (mastery * 9) // Scale: 0-100 maps to 50-950
    const y = 520 - (transfer * 5) // Scale: 0-100 maps to 520-20
    return { x, y }
  }

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Page Header with cinematic reveal */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8 md:mb-12"
      >
        <div>
          <motion.div 
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Teacher Dashboard</span>
          </motion.div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-text-primary mb-3 tracking-tight">Class Overview</h1>
          <div className="flex items-center gap-2 md:gap-3 text-text-secondary text-base md:text-lg">
            <motion.span 
              className="material-symbols-outlined text-xl md:text-2xl"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              group
            </motion.span>
            <span className="font-medium">Class M3/2</span>
            <span className="text-text-tertiary">•</span>
            <span ref={studentsRef} className="font-bold text-text-primary">32</span>
            <span>students</span>
          </div>
        </div>
        <div className="flex gap-3 md:gap-4">
          <motion.button 
            className="btn-outline flex items-center gap-2 text-sm md:text-base px-3 md:px-4 py-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span 
              className="material-symbols-outlined text-base md:text-lg"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              download
            </motion.span>
            Export
          </motion.button>
          <motion.button 
            className="btn-outline flex items-center gap-2 text-sm md:text-base px-3 md:px-4 py-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span 
              className="material-symbols-outlined text-base md:text-lg"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              filter_list
            </motion.span>
            Filter
          </motion.button>
        </div>
      </motion.div>

      {/* Metrics Row with refined design */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        {/* Metric Card 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="card p-4 md:p-6 border-l-4 border-l-primary"
        >
          <div className="text-xs md:text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Students Assessed</div>
          <div ref={studentsRef} className="text-2xl md:text-4xl font-bold text-text-primary flex items-baseline gap-2">
            32
            <span className="text-sm md:text-lg text-text-tertiary font-normal">/ 32</span>
          </div>
        </motion.div>

        {/* Metric Card 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="card p-4 md:p-6 border-l-4 border-l-secondary"
        >
          <div className="text-xs md:text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Avg Mastery</div>
          <div ref={masteryRef} className="text-2xl md:text-4xl font-bold text-text-primary mb-3">86%</div>
          <div className="w-full bg-surface-alt h-2 rounded-full overflow-hidden">
            <motion.div 
              className="bg-secondary h-full rounded-full" 
              initial={{ width: 0 }}
              animate={{ width: '86%' }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            ></motion.div>
          </div>
        </motion.div>

        {/* Metric Card 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="card p-4 md:p-6 border-l-4 border-l-primary"
        >
          <div className="text-xs md:text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Avg Transfer</div>
          <div ref={transferRef} className="text-2xl md:text-4xl font-bold text-text-primary mb-3">51%</div>
          <div className="w-full bg-surface-alt h-2 rounded-full overflow-hidden">
            <motion.div 
              className="bg-primary h-full rounded-full" 
              initial={{ width: 0 }}
              animate={{ width: '51%' }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            ></motion.div>
          </div>
        </motion.div>

        {/* Metric Card 4 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="card p-4 md:p-6 border-l-4 border-l-error bg-error-light/30"
        >
          <div className="text-xs md:text-sm font-semibold text-error uppercase tracking-wider mb-2">Avg Transfer Gap</div>
          <div ref={gapRef} className="text-2xl md:text-4xl font-bold text-error mb-1">35 pts</div>
          <div className="text-xs md:text-sm text-text-tertiary">86% mastery vs 51% transfer</div>
        </motion.div>
      </div>

      {/* Main Visualization Canvas with premium design */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="card card-elevated flex flex-col"
      >
        {/* Canvas Header */}
        <div className="px-4 md:px-8 py-4 md:py-6 border-b border-border flex flex-col md:flex-row md:justify-between md:items-start gap-2">
          <div>
            <h3 className="text-lg md:text-2xl font-bold text-text-primary mb-1">Mastery vs Transfer</h3>
            <p className="text-xs md:text-sm text-text-tertiary">Student performance distribution</p>
          </div>
          <div className="flex items-center gap-4 md:gap-6 flex-wrap">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary shadow-subtle"></div>
              <span className="text-xs md:text-sm font-medium text-text-secondary">Typical Performance</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-error shadow-subtle"></div>
              <span className="text-xs md:text-sm font-medium text-error">Risk Area</span>
            </div>
          </div>
        </div>

        {/* Visualization + Sidebar */}
        <div className="flex flex-col lg:flex-row">
          {/* SVG Scatter Plot Area */}
          <div className="flex-1 p-4 md:p-8 relative min-h-[400px] md:min-h-[640px] border-r border-border bg-gradient-to-br from-surface to-surface-alt">
            <svg className="w-full h-full text-text-tertiary text-[11px] md:text-[13px]" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 600">
              {/* Definitions */}
              <defs>
                <pattern id="grid" width="100" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeDasharray="3,3" strokeWidth="0.5" className="text-border-subtle opacity-40"></path>
                </pattern>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Plot Area Background */}
              <rect fill="url(#grid)" height="520" width="900" x="50" y="40"></rect>

              {/* Quadrant Backgrounds with subtle gradients */}
              <rect fill="#f1f5f9" height="260" opacity="0.4" width="450" x="500" y="40"></rect>
              <rect fill="#fef2f2" height="260" opacity="0.15" width="450" x="500" y="300"></rect>

              {/* Axes */}
              <path className="text-text-primary" d="M 50 560 L 950 560" stroke="currentColor" strokeWidth="2.5"></path>
              <path className="text-text-primary" d="M 50 560 L 50 40" stroke="currentColor" strokeWidth="2.5"></path>

              {/* Median Lines */}
              <path className="text-border-subtle" d="M 500 40 L 500 560" stroke="currentColor" strokeDasharray="6,4" strokeWidth="2"></path>
              <path className="text-border-subtle" d="M 50 300 L 950 300" stroke="currentColor" strokeDasharray="6,4" strokeWidth="2"></path>

              {/* X Axis Labels */}
              <text textAnchor="middle" x="50" y="580" className="font-medium">0%</text>
              <text textAnchor="middle" x="275" y="580" className="font-medium">25%</text>
              <text textAnchor="middle" x="500" y="580" className="font-semibold text-text-primary">50%</text>
              <text textAnchor="middle" x="725" y="580" className="font-medium">75%</text>
              <text textAnchor="middle" x="950" y="580" className="font-medium">100%</text>
              <text className="text-sm font-semibold text-text-primary" textAnchor="middle" x="500" y="595">Mastery Baseline</text>

              {/* Y Axis Labels */}
              <text textAnchor="end" x="45" y="565" className="font-medium">0%</text>
              <text textAnchor="end" x="45" y="425" className="font-medium">25%</text>
              <text textAnchor="end" x="45" y="305" className="font-semibold text-text-primary">50%</text>
              <text textAnchor="end" x="45" y="165" className="font-medium">75%</text>
              <text textAnchor="end" x="45" y="45" className="font-medium">100%</text>
              <text className="text-sm font-semibold text-text-primary" textAnchor="middle" transform="rotate(-90)" x="-300" y="10">Transfer Application</text>

              {/* Quadrant Labels */}
              <text className="text-sm font-medium text-text-tertiary" fill="currentColor" textAnchor="middle" x="725" y="70">High Mastery / High Transfer</text>
              <text className="text-sm font-medium text-text-tertiary" fill="currentColor" textAnchor="middle" x="275" y="70">Low Mastery / High Transfer</text>
              <text className="text-sm font-medium text-text-tertiary" fill="currentColor" textAnchor="middle" x="275" y="530">Low Mastery / Low Transfer</text>
              <text className="text-sm font-bold text-error" fill="currentColor" textAnchor="middle" x="725" y="530">HIDDEN TRANSFER GAP</text>

              {/* Student Data Points with enhanced interactivity */}
              {students.map((student, index) => {
                const { x, y } = getCoordinates(student.mastery, student.transfer)
                return (
                  <g key={student.name} className="cursor-pointer group">
                    <motion.circle
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.06, type: "spring", stiffness: 180, damping: 12 }}
                      className={`transition-all duration-300 ${student.risk ? 'filter drop-shadow-lg' : ''}`}
                      cx={x}
                      cy={y}
                      fill={student.risk ? '#dc2626' : '#0f172a'}
                      r={student.risk ? 7 : 5.5}
                      filter={student.risk ? "url(#glow)" : ""}
                    />
                    <motion.text
                      className={`opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold fill-current ${student.risk ? 'fill-error' : 'fill-text-primary'}`}
                      textAnchor="middle"
                      x={x}
                      y={y - 18}
                      initial={{ opacity: 0, y: y - 12 }}
                      whileHover={{ opacity: 1, y: y - 18 }}
                    >
                      {student.name}
                    </motion.text>
                    {student.risk && student.gap && (
                      <motion.line 
                        className="opacity-60"
                        stroke="#dc2626" 
                        strokeDasharray="3,3" 
                        strokeWidth="1.5"
                        x1={x} 
                        x2={x} 
                        y1={y - 7} 
                        y2={y - student.gap * 3.5}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 0.8 + index * 0.06 }}
                      />
                    )}
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Side Panel for Insights with refined design */}
          <div className="w-full lg:w-[360px] bg-surface-alt border-l border-border p-4 md:p-8 flex flex-col gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="w-8 h-8 md:w-10 md:h-10 bg-error/10 rounded-lg flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="material-symbols-outlined text-error text-lg md:text-xl">assignment_late</span>
                </motion.div>
                <h4 className="text-base md:text-lg font-bold text-text-primary">Students Needing Attention</h4>
              </div>
              <p className="text-xs md:text-sm text-text-secondary mb-4 md:mb-6 leading-relaxed">
                <span className="font-semibold text-error">{atRiskStudents.length} students</span> show high mastery but low transfer performance, indicating potential hidden gaps.
              </p>

              {/* List of at-risk students */}
              <div className="flex flex-col gap-2 md:gap-3">
                {atRiskStudents.map((student, index) => (
                  <motion.div
                    key={student.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="group flex justify-between items-center p-3 md:p-4 rounded-xl bg-surface border border-border hover:border-error/50 hover:shadow-subtle transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-error/10 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-error text-xs md:text-sm">person</span>
                      </div>
                      <span className="text-xs md:text-sm font-semibold text-text-primary group-hover:text-error transition-colors">{student.name}</span>
                    </div>
                    <span className="text-xs md:text-sm font-bold text-error">-{student.gap} pt</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="border-t border-border pt-4 md:pt-8"
            >
              <motion.button 
                className="btn-primary w-full flex items-center justify-center gap-2 shadow-elevated text-sm md:text-base py-2 md:py-3"
                whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(15, 23, 42, 0.15)' }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span 
                  className="material-symbols-outlined text-base md:text-lg"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.5 }}
                >
                  auto_awesome
                </motion.span>
                Generate Intervention Plan
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default TeacherDashboard
