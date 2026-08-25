import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BridgeAssessmentBuilder = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [showPreview, setShowPreview] = useState(false)

  const assessmentStages = [
    {
      type: 'FAMILIAR',
      description: 'Anchor question in familiar context',
      question: 'A recipe calls for 3 cups of flour to make 12 cookies. How many cups of flour are needed to make 24 cookies?',
      underlyingConcept: 'Proportional reasoning',
      context: 'Recipe',
      transferDistance: 'Familiar',
      answers: ['4 cups', '5 cups', '6 cups', '8 cups'],
      correctAnswer: '6 cups'
    },
    {
      type: 'NEAR TRANSFER',
      description: 'Same concept, changed context',
      question: 'A startup has 2 engineers for every 3 sales representatives. If the company scales to 18 engineers, how many sales representatives should they hire to maintain the same ratio?',
      underlyingConcept: 'Proportional reasoning',
      context: 'Business / staffing',
      transferDistance: 'Near Transfer',
      answers: ['18', '24', '27', '30'],
      correctAnswer: '27'
    },
    {
      type: 'FAR TRANSFER',
      description: 'Same concept, unfamiliar context',
      question: 'A bus company operates on a schedule where 2 maintenance crews are assigned for every 3 buses in service. If the fleet expands to 15 buses, how many maintenance crews are needed to maintain the same operational ratio?',
      underlyingConcept: 'Proportional reasoning',
      context: 'Transportation / operations',
      transferDistance: 'Far Transfer',
      answers: ['6', '8', '10', '12'],
      correctAnswer: '10'
    },
    {
      type: 'REASONING',
      description: 'Explain the reasoning',
      question: 'Explain how you recognized the relationship in this problem and why your chosen method applies.',
      underlyingConcept: 'Proportional reasoning',
      context: 'Metacognitive',
      transferDistance: 'Reasoning',
      responseType: 'text'
    }
  ]

  const handleNext = () => {
    if (currentStep < assessmentStages.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handlePublish = () => {
    setShowPreview(true)
  }

  if (showPreview) {
    return (
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.button
              onClick={() => setShowPreview(false)}
              className="btn-outline flex items-center gap-2 text-sm px-3 py-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back
            </motion.button>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Assessment Preview</span>
          </div>

          <div className="card p-6 md:p-8 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">Ratio & Proportion</h1>
            <p className="text-text-secondary mb-6">6 Questions • 4–5 minutes estimated</p>

            <div className="space-y-3 mb-6">
              {assessmentStages.map((stage, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-surface-alt rounded-xl">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    stage.type === 'FAMILIAR' ? 'bg-secondary text-white' :
                    stage.type === 'NEAR TRANSFER' ? 'bg-primary text-white' :
                    stage.type === 'FAR TRANSFER' ? 'bg-tertiary text-white' :
                    'bg-error text-white'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-text-primary">{stage.type}</div>
                    <div className="text-xs text-text-tertiary">{stage.transferDistance}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <motion.button
                onClick={() => setShowPreview(false)}
                className="btn-outline flex-1 text-sm md:text-base px-4 py-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Edit
              </motion.button>
              <motion.button
                onClick={() => {
                  alert('Assessment published!')
                  navigate('/dashboard/class-overview')
                }}
                className="btn-primary flex-1 text-sm md:text-base px-4 py-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Publish Assessment
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  const currentStage = assessmentStages[currentStep]

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
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
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Bridge Assessment Builder</span>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-3">Create Bridge Assessment</h1>
        <p className="text-text-secondary max-w-2xl">
          Create questions that test the same underlying concept across increasingly unfamiliar contexts.
        </p>
      </motion.div>

      {/* Progress Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          {assessmentStages.map((stage, index) => (
            <div key={index} className="flex-1 flex items-center">
              <div className="flex flex-col items-center flex-1">
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                    index <= currentStep
                      ? index === currentStep
                        ? 'bg-primary text-white'
                        : 'bg-secondary text-white'
                      : 'bg-surface-alt text-text-tertiary'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {index + 1}
                </motion.div>
                <div className="text-xs mt-2 text-center font-medium text-text-secondary">
                  {stage.type}
                </div>
              </div>
              {index < assessmentStages.length - 1 && (
                <div className={`flex-1 h-1 mx-2 rounded ${
                  index < currentStep ? 'bg-secondary' : 'bg-surface-alt'
                }`} />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Concept Explanation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="card p-6 mb-8 bg-gradient-to-r from-primary-light to-surface-alt border border-primary/20"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-primary text-2xl">lightbulb</span>
          </div>
          <div>
            <h3 className="font-bold text-text-primary mb-2">SAME UNDERLYING CONCEPT</h3>
            <div className="text-lg font-semibold text-primary mb-3">Proportional Reasoning</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-semibold text-text-primary mb-1">WHAT CHANGES:</div>
                <div className="text-text-secondary">Context, Wording, Surface features, Application domain</div>
              </div>
              <div>
                <div className="font-semibold text-text-primary mb-1">WHAT STAYS CONSTANT:</div>
                <div className="text-text-secondary">Underlying proportional relationship</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Question Editor */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="card p-6 md:p-8 mb-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className={`px-3 py-1 rounded-lg text-sm font-bold ${
            currentStage.type === 'FAMILIAR' ? 'bg-secondary-light text-secondary' :
            currentStage.type === 'NEAR TRANSFER' ? 'bg-primary-light text-primary' :
            currentStage.type === 'FAR TRANSFER' ? 'bg-tertiary-light text-tertiary' :
            'bg-error-light text-error'
          }`}>
            {currentStage.type}
          </div>
          <span className="text-text-tertiary">•</span>
          <span className="text-sm text-text-secondary">{currentStage.description}</span>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">Question</label>
            <textarea
              defaultValue={currentStage.question}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-primary focus:outline-none transition-colors text-sm md:text-base resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Underlying Concept</label>
              <input
                type="text"
                defaultValue={currentStage.underlyingConcept}
                className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Context</label>
              <input
                type="text"
                defaultValue={currentStage.context}
                className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
              />
            </div>
          </div>

          {currentStage.responseType !== 'text' && (
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Answer Options</label>
              <div className="space-y-2">
                {currentStage.answers.map((answer, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="correct-answer"
                      defaultChecked={answer === currentStage.correctAnswer}
                      className="w-5 h-5 text-primary focus:ring-primary"
                    />
                    <input
                      type="text"
                      defaultValue={answer}
                      className="flex-1 px-4 py-2 rounded-lg border border-border bg-surface focus:border-primary focus:outline-none transition-colors text-sm"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStage.responseType === 'text' && (
            <div className="bg-surface-alt p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-tertiary">info</span>
                <span className="text-sm font-semibold text-text-primary">Response Type</span>
              </div>
              <p className="text-sm text-text-secondary">Students will provide a text explanation of their reasoning.</p>
              <div className="mt-3 flex gap-2">
                <span className="px-2 py-1 bg-tertiary-light text-tertiary rounded text-xs">Text Response</span>
                <span className="px-2 py-1 bg-surface text-text-tertiary rounded text-xs">Voice Response (Coming Soon)</span>
                <span className="px-2 py-1 bg-surface text-text-tertiary rounded text-xs">Upload Work (Coming Soon)</span>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex justify-between items-center"
      >
        <motion.button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className={`btn-outline flex items-center gap-2 text-sm md:text-base px-4 py-3 ${
            currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          whileHover={currentStep > 0 ? { scale: 1.02 } : {}}
          whileTap={currentStep > 0 ? { scale: 0.98 } : {}}
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Previous
        </motion.button>

        {currentStep === assessmentStages.length - 1 ? (
          <motion.button
            onClick={handlePublish}
            className="btn-primary flex items-center gap-2 text-sm md:text-base px-6 py-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="material-symbols-outlined">preview</span>
            Preview Assessment
          </motion.button>
        ) : (
          <motion.button
            onClick={handleNext}
            className="btn-primary flex items-center gap-2 text-sm md:text-base px-6 py-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Next
            <span className="material-symbols-outlined">arrow_forward</span>
          </motion.button>
        )}
      </motion.div>
    </div>
  )
}

export default BridgeAssessmentBuilder
