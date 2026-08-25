import { motion } from 'framer-motion'

const ProductionWorkflow = () => {
  const workflowSteps = [
    { id: 1, title: 'Teacher creates class', description: 'Set up class and generate join code' },
    { id: 2, title: 'Students join', description: 'Enter class code to enroll' },
    { id: 3, title: 'Teacher creates topic', description: 'Define learning objectives' },
    { id: 4, title: 'Teacher creates Bridge Assessment', description: 'Design cross-context questions' },
    { id: 5, title: 'Students complete assessment', description: 'Answer familiar to far-transfer questions' },
    { id: 6, title: 'TransferLens analyzes performance', description: 'Measure mastery vs transfer gap' },
    { id: 7, title: 'Teacher receives diagnostics', description: 'AI-assisted insights on barriers' },
    { id: 8, title: 'Student receives Transfer Profile', description: 'Personalized learning analysis' },
    { id: 9, title: 'Teacher intervenes', description: 'Targeted instruction based on data' },
    { id: 10, title: 'Student is reassessed', description: 'Measure improvement over time' },
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
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">How It Works</span>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-3 tracking-tight">Production Workflow</h1>
        <p className="text-base md:text-lg text-text-secondary max-w-2xl">
          How TransferLens operates in a real school environment
        </p>
      </motion.div>

      {/* Workflow Timeline */}
      <div className="space-y-4">
        {workflowSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            className="flex gap-4 md:gap-6"
          >
            {/* Step Number */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-base md:text-lg">
                {step.id}
              </div>
              {index < workflowSteps.length - 1 && (
                <div className="w-0.5 h-12 md:h-16 bg-border mx-auto mt-2" />
              )}
            </div>

            {/* Step Content */}
            <div className="flex-1 card p-4 md:p-6">
              <h3 className="text-base md:text-lg font-bold text-text-primary mb-1">{step.title}</h3>
              <p className="text-sm md:text-base text-text-secondary">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Key Insight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-8 card p-6 md:p-8 bg-gradient-to-r from-primary-light to-surface-alt border border-primary/20"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-primary text-2xl">lightbulb</span>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">Key Insight</h3>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              TransferLens creates a continuous feedback loop: teach → assess → measure → diagnose → intervene → reassess. 
              This cycle helps teachers identify hidden transfer gaps and provide targeted interventions before students fall behind.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProductionWorkflow
