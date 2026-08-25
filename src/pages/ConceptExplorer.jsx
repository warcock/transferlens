import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const ConceptExplorer = () => {
  const [dimensions, setDimensions] = useState({})
  const containerRef = useRef(null)
  const cardRefs = useRef({})

  // Update dimensions when cards render
  useEffect(() => {
    const updateDimensions = () => {
      const newDimensions = {}
      Object.keys(cardRefs.current).forEach(id => {
        const card = cardRefs.current[id]
        if (card) {
          const rect = card.getBoundingClientRect()
          const containerRect = containerRef.current?.getBoundingClientRect()
          if (containerRect) {
            newDimensions[id] = {
              x: rect.left - containerRect.left + rect.width / 2,
              y: rect.top - containerRect.top + rect.height / 2,
              width: rect.width,
              height: rect.height
            }
          }
        }
      })
      setDimensions(newDimensions)
    }

    // Initial measurement
    setTimeout(updateDimensions, 100)
    
    // Update on resize
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const concepts = [
    { 
      id: 1, 
      name: 'Ratio & Proportion', 
      mastery: 68, 
      transfer: 43, 
      prerequisites: ['Basic Fractions', 'Division'],
      relatedTo: ['Linear Relationships', 'Scaling'],
      status: 'current',
      connections: [4, 5, 2] // IDs of connected concepts
    },
    { 
      id: 2, 
      name: 'Linear Relationships', 
      mastery: 72, 
      transfer: 58, 
      prerequisites: ['Ratio & Proportion', 'Variables'],
      relatedTo: ['Functions', 'Graphing'],
      status: 'ready',
      connections: [1, 5, 3]
    },
    { 
      id: 3, 
      name: 'Functions', 
      mastery: 45, 
      transfer: 32, 
      prerequisites: ['Linear Relationships', 'Input-Output'],
      relatedTo: ['Quadratic Equations', 'Calculus'],
      status: 'locked',
      connections: [2]
    },
    { 
      id: 4, 
      name: 'Basic Fractions', 
      mastery: 92, 
      transfer: 85, 
      prerequisites: [],
      relatedTo: ['Ratio & Proportion', 'Decimals'],
      status: 'mastered',
      connections: [1]
    },
    { 
      id: 5, 
      name: 'Variables', 
      mastery: 78, 
      transfer: 65, 
      prerequisites: ['Basic Arithmetic'],
      relatedTo: ['Linear Relationships', 'Equations'],
      status: 'mastered',
      connections: [1, 2]
    },
  ]

  const getStatusConfig = (status) => {
    switch (status) {
      case 'mastered': return { 
        bg: 'bg-secondary-light', 
        border: 'border-secondary', 
        text: 'text-secondary',
        icon: 'check_circle',
        label: 'Mastered'
      }
      case 'current': return { 
        bg: 'bg-primary-light', 
        border: 'border-primary', 
        text: 'text-primary',
        icon: 'pending',
        label: 'In Progress'
      }
      case 'ready': return { 
        bg: 'bg-surface-alt', 
        border: 'border-border-strong', 
        text: 'text-text-primary',
        icon: 'lock_open',
        label: 'Ready to Learn'
      }
      case 'locked': return { 
        bg: 'bg-surface-alt', 
        border: 'border-border', 
        text: 'text-text-tertiary',
        icon: 'lock',
        label: 'Locked'
      }
      default: return { 
        bg: 'bg-surface', 
        border: 'border-border', 
        text: 'text-text-primary',
        icon: 'help',
        label: status
      }
    }
  }

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
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Knowledge Graph</span>
        </motion.div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-text-primary mb-3 tracking-tight">Concept Explorer</h1>
        <p className="text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed">
          Interactive visualization showing relationships between mathematical concepts and your learning progress across the curriculum.
        </p>
      </motion.div>

      {/* Knowledge Graph Visualization with unique layout */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="card card-elevated p-4 md:p-8"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6 md:mb-8">
          <h3 className="text-lg md:text-2xl font-bold text-text-primary">Concept Knowledge Graph</h3>
          <div className="flex flex-wrap gap-3 md:gap-6">
            {['mastered', 'current', 'ready', 'locked'].map((status) => {
              const config = getStatusConfig(status)
              return (
                <div key={status} className="flex items-center gap-2">
                  <div className={`w-3 h-3 md:w-4 md:h-4 rounded-lg ${config.bg} ${config.border} border-2`}></div>
                  <span className="text-xs md:text-sm text-text-tertiary font-medium">{config.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Interactive Graph Layout */}
        <div 
          ref={containerRef}
          className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-surface-alt to-surface rounded-2xl border border-border p-4 md:p-8 overflow-hidden"
        >
          {/* Background decoration */}
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Dynamic connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#0f172a', stopOpacity: 0.15 }} />
                <stop offset="100%" style={{ stopColor: '#0f172a', stopOpacity: 0.35 }} />
              </linearGradient>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#0f172a" opacity="0.3" />
              </marker>
            </defs>
            
            {/* Draw connection lines based on actual card positions */}
            {Object.keys(dimensions).length > 0 && concepts.map((concept) => {
              const startPos = dimensions[concept.id]
              if (!startPos) return null
              
              return concept.connections.map((targetId) => {
                const endPos = dimensions[targetId]
                if (!endPos) return null
                
                // Calculate line start and end points (card edges)
                const dx = endPos.x - startPos.x
                const dy = endPos.y - startPos.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                
                // Shorten line to not overlap with cards
                const offset = 60
                const startX = startPos.x + (dx / distance) * offset
                const startY = startPos.y + (dy / distance) * offset
                const endX = endPos.x - (dx / distance) * offset
                const endY = endPos.y - (dy / distance) * offset
                
                return (
                  <g key={`${concept.id}-${targetId}`}>
                    <motion.line
                      x1={startX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                  </g>
                )
              })
            })}
          </svg>

          {/* Concept nodes positioned for visual hierarchy */}
          <div className="relative h-full">
            {concepts.map((concept, index) => {
              const config = getStatusConfig(concept.status)
              const positions = [
                { top: '20%', left: '20%' },   // Ratio & Proportion (current)
                { top: '20%', left: '50%' },   // Linear Relationships (ready)
                { top: '20%', left: '80%' },   // Functions (locked)
                { top: '70%', left: '35%' },   // Basic Fractions (mastered)
                { top: '70%', left: '65%' },   // Variables (mastered)
              ]
              const pos = positions[index] || { top: '50%', left: '50%' }
              
              return (
                <motion.div
                  key={concept.id}
                  ref={(el) => cardRefs.current[concept.id] = el}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={concept.status !== 'locked' ? { scale: 1.05, y: -8 } : {}}
                  whileTap={concept.status !== 'locked' ? { scale: 0.95 } : {}}
                  className={`absolute ${config.bg} ${config.border} border-2 rounded-2xl p-3 md:p-6 w-36 md:w-48 cursor-pointer transition-all shadow-subtle hover:shadow-elevated ${concept.status === 'locked' ? 'opacity-60 cursor-not-allowed' : ''}`}
                  style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}
                >
                  <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3">
                    <span className={`material-symbols-outlined text-sm md:text-base ${config.text}`}>{config.icon}</span>
                    <span className={`text-[10px] md:text-xs font-semibold uppercase tracking-wider ${config.text}`}>{config.label}</span>
                  </div>
                  <div className="text-xs md:text-sm font-bold text-text-primary mb-2 md:mb-3 leading-tight">{concept.name}</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-text-tertiary">Mastery</span>
                      <span className="font-semibold text-text-primary">{concept.mastery}%</span>
                    </div>
                    <div className="w-full bg-surface h-1.5 rounded-full overflow-hidden">
                      <motion.div 
                        className="bg-secondary h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${concept.mastery}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                      />
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-text-tertiary">Transfer</span>
                      <span className="font-semibold text-text-primary">{concept.transfer}%</span>
                    </div>
                    <div className="w-full bg-surface h-1.5 rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full rounded-full ${concept.transfer < 50 ? 'bg-error' : 'bg-primary'}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${concept.transfer}%` }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* Concept Details with asymmetric layout */}
      <div className="grid grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="col-span-7 card p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-xl">target</span>
            </div>
            <h3 className="text-2xl font-bold text-text-primary">Current Focus: Ratio & Proportion</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-3">Prerequisites Mastered</div>
              <div className="flex flex-wrap gap-3">
                {concepts.find(c => c.id === 1).prerequisites.map((prereq, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="badge badge-secondary"
                  >
                    {prereq}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-3">Related Concepts</div>
              <div className="flex flex-wrap gap-3">
                {concepts.find(c => c.id === 1).relatedTo.map((related, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="badge badge-primary"
                  >
                    {related}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="p-6 bg-gradient-to-r from-primary-light to-surface-alt rounded-xl border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-primary">route</span>
                <div className="text-sm font-bold text-primary uppercase tracking-wider">Learning Path</div>
              </div>
              <p className="text-base text-text-secondary leading-relaxed">
                Master Ratio & Proportion → Unlock Linear Relationships → Progress to Functions
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="col-span-5 card p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-tertiary/10 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary text-xl">recommend</span>
            </div>
            <h3 className="text-2xl font-bold text-text-primary">Recommended Next Steps</h3>
          </div>
          
          <div className="space-y-4">
            {[
              { priority: 'Immediate', color: 'error', icon: 'arrow_forward', text: 'Complete Ratio & Proportion bridge assessment to improve transfer score from 43% to target 70%.' },
              { priority: 'Practice', color: 'secondary', icon: 'school', text: 'Work on cross-domain problems to strengthen structural mapping skills.' },
              { priority: 'Review', color: 'primary', icon: 'auto_stories', text: 'Strengthen Basic Fractions foundation to support more complex ratio problems.' }
            ].map((step, index) => (
              <motion.div
                key={step.priority}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="group p-5 bg-surface-alt rounded-xl border-l-4 hover:shadow-subtle transition-all cursor-pointer"
                style={{ borderColor: step.color === 'error' ? '#dc2626' : step.color === 'secondary' ? '#059669' : '#0f172a' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <motion.span 
                    className={`material-symbols-outlined text-${step.color}`}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.icon}
                  </motion.span>
                  <span className={`text-sm font-bold uppercase tracking-wider ${step.color === 'error' ? 'text-error' : step.color === 'secondary' ? 'text-secondary' : 'text-primary'}`}>
                    {step.priority}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ConceptExplorer
