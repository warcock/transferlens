import { motion } from 'framer-motion'

const TechnologyArchitecture = () => {
  const architectureFlow = [
    { id: 1, title: 'CONCEPT', description: 'Learning objectives defined' },
    { id: 2, title: 'BRIDGE ASSESSMENT', description: 'Cross-context questions created' },
    { id: 3, title: 'FAMILIAR → NEAR → FAR', description: 'Progressive transfer stages' },
    { id: 4, title: 'STUDENT RESPONSES + REASONING', description: 'Multi-modal data collection' },
    { id: 5, title: 'ANALYSIS', description: 'Pattern recognition engine' },
    { id: 6, title: 'TRANSFER PROFILE', description: 'Individual learner model' },
    { id: 7, title: 'TEACHER INSIGHTS', description: 'AI-assisted diagnostics' },
    { id: 8, title: 'INTERVENTION', description: 'Targeted instruction' },
    { id: 9, title: 'REASSESSMENT', description: 'Longitudinal tracking' },
  ]

  const components = [
    { name: 'Cross-Context Assessment', description: 'Questions spanning familiar to far transfer' },
    { name: 'Knowledge Graph', description: 'Concept relationship mapping' },
    { name: 'Semantic Analysis', description: 'Understanding student reasoning' },
    { name: 'LLM-assisted Reasoning Analysis', description: 'Interpreting written explanations' },
    { name: 'Learner Model', description: 'Individual transfer profiles' },
    { name: 'Longitudinal Analytics', description: 'Tracking progress over time' },
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
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Technology</span>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-3 tracking-tight">Technology Architecture</h1>
        <p className="text-base md:text-lg text-text-secondary max-w-2xl">
          The technical components powering TransferLens
        </p>
      </motion.div>

      {/* Architecture Flow */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="card p-6 md:p-8 mb-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-xl">account_tree</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-text-primary">Data Flow</h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          {architectureFlow.map((item, index) => (
            <div key={item.id} className="flex items-center gap-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="px-3 py-2 md:px-4 md:py-3 bg-surface-alt border border-border rounded-lg text-center"
              >
                <div className="text-xs md:text-sm font-bold text-primary mb-1">{item.title}</div>
                <div className="text-[10px] md:text-xs text-text-tertiary">{item.description}</div>
              </motion.div>
              {index < architectureFlow.length - 1 && (
                <span className="text-primary text-lg md:text-xl">→</span>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Technology Components */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="card p-6 md:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary text-xl">extension</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-text-primary">Technology Components</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {components.map((component, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-4 bg-surface-alt rounded-xl border border-border"
            >
              <div className="font-semibold text-text-primary mb-2">{component.name}</div>
              <div className="text-sm text-text-secondary">{component.description}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default TechnologyArchitecture
