import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const BridgeAssessmentBuilder = () => {
  const navigate = useNavigate()
  const [currentStage, setCurrentStage] = useState(0)
  const [assessmentData, setAssessmentData] = useState({
    topicName: '',
    subject: '',
    grade: '',
    learningObjective: '',
    description: '',
    questions: [
      {
        stage: 'familiar',
        question: '',
        underlyingConcept: '',
        context: '',
        transferDistance: 'Familiar',
        answers: ['', '', '', ''],
        correctAnswer: 0
      },
      {
        stage: 'near',
        question: '',
        underlyingConcept: '',
        context: '',
        transferDistance: 'Near Transfer',
        answers: ['', '', '', ''],
        correctAnswer: 0
      },
      {
        stage: 'far',
        question: '',
        underlyingConcept: '',
        context: '',
        transferDistance: 'Far Transfer',
        answers: ['', '', '', ''],
        correctAnswer: 0
      },
      {
        stage: 'reasoning',
        question: '',
        underlyingConcept: '',
        context: '',
        transferDistance: 'Reasoning',
        answers: [],
        correctAnswer: 0
      }
    ]
  })

  const stages = [
    { id: 0, name: 'Topic Info', icon: 'edit_note' },
    { id: 1, name: 'Familiar', icon: 'looks_one' },
    { id: 2, name: 'Near Transfer', icon: 'looks_two' },
    { id: 3, name: 'Far Transfer', icon: 'looks_3' },
    { id: 4, name: 'Reasoning', icon: 'psychology' },
    { id: 5, name: 'Preview', icon: 'preview' }
  ]

  const handleNext = () => {
    if (currentStage < stages.length - 1) {
      setCurrentStage(currentStage + 1)
    }
  }

  const handleBack = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1)
    }
  }

  const updateQuestion = (index, field, value) => {
    const newQuestions = [...assessmentData.questions]
    newQuestions[index][field] = value
    setAssessmentData({ ...assessmentData, questions: newQuestions })
  }

  const updateAnswer = (questionIndex, answerIndex, value) => {
    const newQuestions = [...assessmentData.questions]
    newQuestions[questionIndex].answers[answerIndex] = value
    setAssessmentData({ ...assessmentData, questions: newQuestions })
  }

  const handlePublish = () => {
    // In production, this would save to backend
    console.log('Publishing assessment:', assessmentData)
    navigate('/dashboard/teacher-dashboard')
  }

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <motion.div 
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Assessment Builder</span>
        </motion.div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-3 tracking-tight">
          Create Bridge Assessment
        </h1>
        <p className="text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed">
          Create questions that test the same underlying concept across increasingly unfamiliar contexts.
        </p>
      </motion.div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8 overflow-x-auto pb-2">
        {stages.map((stage, index) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className={`flex items-center gap-2 cursor-pointer ${
              currentStage === stage.id ? 'text-primary' : currentStage > stage.id ? 'text-secondary' : 'text-text-tertiary'
            }`}
            onClick={() => setCurrentStage(stage.id)}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              currentStage === stage.id ? 'bg-primary text-text-inverse' : 
              currentStage > stage.id ? 'bg-secondary text-text-inverse' : 'bg-surface-alt'
            }`}>
              <span className="material-symbols-outlined text-sm">{stage.icon}</span>
            </div>
            <span className="text-sm font-medium whitespace-nowrap hidden md:inline">{stage.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Stage Content */}
      <motion.div
        key={currentStage}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="card card-elevated p-6 md:p-8"
      >
        {currentStage === 0 && (
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary">Topic Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Topic Name</label>
                <input
                  type="text"
                  value={assessmentData.topicName}
                  onChange={(e) => setAssessmentData({ ...assessmentData, topicName: e.target.value })}
                  placeholder="e.g., Ratio & Proportion"
                  className="w-full px-4 py-3 border border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Subject</label>
                <input
                  type="text"
                  value={assessmentData.subject}
                  onChange={(e) => setAssessmentData({ ...assessmentData, subject: e.target.value })}
                  placeholder="e.g., Mathematics"
                  className="w-full px-4 py-3 border border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Grade</label>
                <input
                  type="text"
                  value={assessmentData.grade}
                  onChange={(e) => setAssessmentData({ ...assessmentData, grade: e.target.value })}
                  placeholder="e.g., M3"
                  className="w-full px-4 py-3 border border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Learning Objective</label>
                <input
                  type="text"
                  value={assessmentData.learningObjective}
                  onChange={(e) => setAssessmentData({ ...assessmentData, learningObjective: e.target.value })}
                  placeholder="e.g., Apply proportional reasoning across contexts"
                  className="w-full px-4 py-3 border border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Description</label>
              <textarea
                value={assessmentData.description}
                onChange={(e) => setAssessmentData({ ...assessmentData, description: e.target.value })}
                placeholder="Describe the topic and its importance..."
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
              />
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h3 className="font-bold text-primary mb-3">Bridge Assessment Concept</h3>
              <div className="space-y-3 text-sm text-text-secondary">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-sm">looks_one</span>
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">ANCHOR - Familiar Context</div>
                    <div>Students recognize the problem type immediately</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm">looks_two</span>
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">NEAR TRANSFER - Changed Context</div>
                    <div>Same concept, different but related domain</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-tertiary/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary text-sm">looks_3</span>
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">FAR TRANSFER - Unfamiliar Context</div>
                    <div>Same concept, unfamiliar application domain</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-error/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-error text-sm">psychology</span>
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">REASONING - Explain Why</div>
                    <div>Student explains their approach and reasoning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStage >= 1 && currentStage <= 3 && (
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary">
              {stages[currentStage].name} Question
            </h2>
            
            <div className="bg-surface-alt border border-border rounded-xl p-4 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary">info</span>
                <span className="text-sm text-text-secondary">
                  The underlying concept must remain consistent across all stages. Only the context changes.
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Question</label>
              <textarea
                value={assessmentData.questions[currentStage - 1].question}
                onChange={(e) => updateQuestion(currentStage - 1, 'question', e.target.value)}
                placeholder="Enter your question..."
                rows={3}
                className="w-full px-4 py-3 border border-border rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Underlying Concept</label>
                <input
                  type="text"
                  value={assessmentData.questions[currentStage - 1].underlyingConcept}
                  onChange={(e) => updateQuestion(currentStage - 1, 'underlyingConcept', e.target.value)}
                  placeholder="e.g., Proportional reasoning"
                  className="w-full px-4 py-3 border border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Context</label>
                <input
                  type="text"
                  value={assessmentData.questions[currentStage - 1].context}
                  onChange={(e) => updateQuestion(currentStage - 1, 'context', e.target.value)}
                  placeholder="e.g., Recipe, Business, Transportation"
                  className="w-full px-4 py-3 border border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            {currentStage !== 4 && (
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Answer Options</label>
                <div className="space-y-3">
                  {assessmentData.questions[currentStage - 1].answers.map((answer, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                        assessmentData.questions[currentStage - 1].correctAnswer === index 
                          ? 'border-primary bg-primary' 
                          : 'border-border hover:border-primary'
                      }`}
                      onClick={() => updateQuestion(currentStage - 1, 'correctAnswer', index)}
                      >
                        {assessmentData.questions[currentStage - 1].correctAnswer === index && (
                          <span className="material-symbols-outlined text-text-inverse text-sm">check</span>
                        )}
                      </div>
                      <input
                        type="text"
                        value={answer}
                        onChange={(e) => updateAnswer(currentStage - 1, index, e.target.value)}
                        placeholder={`Option ${String.fromCharCode(65 + index)}`}
                        className="flex-1 px-4 py-3 border border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStage === 4 && (
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Reasoning Prompt</label>
                <textarea
                  value={assessmentData.questions[currentStage - 1].question}
                  onChange={(e) => updateQuestion(currentStage - 1, 'question', e.target.value)}
                  placeholder="Explain how you recognized the relationship in this problem and why your chosen method applies."
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
                />
                <div className="mt-3 flex items-center gap-2 text-sm text-text-tertiary">
                  <span className="material-symbols-outlined text-sm">info</span>
                  <span>Optional: Voice Response and Upload Written Work (Coming Soon)</span>
                </div>
              </div>
            )}
          </div>
        )}

        {currentStage === 5 && (
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary">Assessment Preview</h2>
            
            <div className="bg-surface-alt border border-border rounded-xl p-4 md:p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">01</div>
                  <div className="text-sm text-text-tertiary">Familiar</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">02</div>
                  <div className="text-sm text-text-tertiary">Near</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-tertiary">03</div>
                  <div className="text-sm text-text-tertiary">Near</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-error">04</div>
                  <div className="text-sm text-text-tertiary">Far</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-l-secondary bg-surface-alt p-4 rounded-r-xl">
                <div className="font-bold text-text-primary mb-1">{assessmentData.topicName}</div>
                <div className="text-sm text-text-secondary">{assessmentData.learningObjective}</div>
              </div>

              {assessmentData.questions.slice(0, 3).map((q, index) => (
                <div key={index} className="border-l-4 border-l-primary bg-surface-alt p-4 rounded-r-xl">
                  <div className="text-sm font-semibold text-primary mb-2">
                    {stages[index + 1].name} - {q.context}
                  </div>
                  <div className="text-sm text-text-primary">{q.question}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border border-border rounded-xl font-semibold text-text-primary hover:bg-surface-alt transition-colors"
              >
                Edit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border border-border rounded-xl font-semibold text-text-primary hover:bg-surface-alt transition-colors"
              >
                Preview as Student
              </motion.button>
              <motion.button
                onClick={handlePublish}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary px-6 py-3 rounded-xl font-semibold"
              >
                Publish Assessment
              </motion.button>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-border">
          <motion.button
            onClick={handleBack}
            disabled={currentStage === 0}
            whileHover={{ scale: currentStage > 0 ? 1.02 : 1 }}
            whileTap={{ scale: currentStage > 0 ? 0.98 : 1 }}
            className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors ${
              currentStage === 0 
                ? 'bg-surface-alt text-text-tertiary cursor-not-allowed' 
                : 'border border-border text-text-primary hover:bg-surface-alt'
            }`}
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back
          </motion.button>
          
          <motion.button
            onClick={handleNext}
            disabled={currentStage === stages.length - 1}
            whileHover={{ scale: currentStage < stages.length - 1 ? 1.02 : 1 }}
            whileTap={{ scale: currentStage < stages.length - 1 ? 0.98 : 1 }}
            className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors ${
              currentStage === stages.length - 1
                ? 'bg-surface-alt text-text-tertiary cursor-not-allowed'
                : 'btn-primary'
            }`}
          >
            {currentStage === stages.length - 1 ? 'Complete' : 'Next'}
            <span className="material-symbols-outlined">arrow_forward</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default BridgeAssessmentBuilder
