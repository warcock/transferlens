import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const AssessmentFarTransfer = () => {
  const navigate = useNavigate()
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const handleSubmit = () => {
    navigate('/assessment/reasoning')
  }

  return (
    <div className="w-full flex justify-center items-center bg-background min-h-[calc(100vh-64px)]">
      <div className="max-w-[900px] w-full card p-12">
        {/* Progress Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">looks_3</span>
              <span className="text-sm font-medium text-secondary">Stage 3: Far Transfer</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <span className="text-sm text-text-tertiary">Question 5 of 6</span>
          </div>
          <div className="flex items-center gap-2 text-text-tertiary">
            <span className="material-symbols-outlined">timer</span>
            <span className="text-sm">1:15</span>
          </div>
        </div>

        {/* Context Badge */}
        <div className="inline-block px-3 py-1 bg-surface-alt text-text-primary text-sm font-medium rounded-md mb-4">
          New Context: Bus Logistics
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            A bus company operates on a schedule where 2 maintenance crews are assigned for every 3 buses in service. If the fleet expands to 15 buses, how many maintenance crews are needed to maintain the same operational ratio?
          </h2>
        </div>

        {/* Answer Options */}
        <div className="space-y-4 mb-8">
          {[
            { id: 'a', text: '8 maintenance crews' },
            { id: 'b', text: '10 maintenance crews' },
            { id: 'c', text: '12 maintenance crews' },
            { id: 'd', text: '9 maintenance crews' }
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedAnswer(option.id)}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                selectedAnswer === option.id
                  ? 'border-secondary bg-surface-alt'
                  : 'border-border hover:border-border-strong'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedAnswer === option.id ? 'border-secondary bg-secondary' : 'border-border'
                }`}>
                  {selectedAnswer === option.id && (
                    <span className="material-symbols-outlined text-text-inverse text-base">check</span>
                  )}
                </div>
                <span className="text-base text-text-primary">{option.text}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center border-t border-border pt-8">
          <button 
            onClick={() => navigate('/assessment/near-transfer')}
            className="text-text-tertiary hover:text-secondary text-sm font-medium flex items-center gap-2"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back
          </button>
          <button 
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className={`px-8 py-3 rounded-lg text-sm font-medium flex items-center gap-2 transition-all ${
              selectedAnswer
                ? 'btn-primary shadow-subtle'
                : 'bg-surface-alt text-text-tertiary cursor-not-allowed'
            }`}
          >
            Continue
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AssessmentFarTransfer
