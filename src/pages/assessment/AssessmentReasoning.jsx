import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const AssessmentReasoning = () => {
  const navigate = useNavigate()
  const [reasoning, setReasoning] = useState('')

  const handleSubmit = () => {
    navigate('/transfer-analysis')
  }

  return (
    <div className="w-full flex justify-center items-center bg-background min-h-[calc(100vh-64px)]">
      <div className="max-w-[900px] w-full card p-12">
        {/* Progress Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">looks_4</span>
              <span className="text-sm font-medium text-secondary">Stage 4: Reasoning Capture</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <span className="text-sm text-text-tertiary">Question 6 of 6</span>
          </div>
          <div className="flex items-center gap-2 text-text-tertiary">
            <span className="material-symbols-outlined">timer</span>
            <span className="text-sm">0:45</span>
          </div>
        </div>

        {/* Explanation */}
        <div className="bg-surface-alt rounded-lg p-6 mb-8 border border-border">
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-secondary mt-1 filled">psychology</span>
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Explain Your Thinking</h3>
              <p className="text-base text-text-secondary">
                We're interested in how you approached these problems, not just the answers. What patterns or methods did you notice across the different scenarios?
              </p>
            </div>
          </div>
        </div>

        {/* Text Area */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-text-primary mb-2">
            Your reasoning
          </label>
          <textarea
            value={reasoning}
            onChange={(e) => setReasoning(e.target.value)}
            placeholder="Describe your approach to solving these problems. Did you notice any similarities between the recipe, business scaling, and bus logistics scenarios?"
            className="w-full h-48 p-4 rounded-lg border border-border bg-surface text-text-primary text-base resize-none focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
          />
          <p className="text-sm text-text-tertiary mt-2">
            {reasoning.length} / 500 characters
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center border-t border-border pt-8">
          <button 
            onClick={() => navigate('/assessment/far-transfer')}
            className="text-text-tertiary hover:text-secondary text-sm font-medium flex items-center gap-2"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back
          </button>
          <button 
            onClick={handleSubmit}
            disabled={!reasoning.trim()}
            className={`px-8 py-3 rounded-lg text-sm font-medium flex items-center gap-2 transition-all ${
              reasoning.trim()
                ? 'btn-primary shadow-subtle'
                : 'bg-surface-alt text-text-tertiary cursor-not-allowed'
            }`}
          >
            Complete Assessment
            <span className="material-symbols-outlined">check</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AssessmentReasoning
