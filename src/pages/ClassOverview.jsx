import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useCounterAnimation } from '../hooks/useAnimation'
import { useNavigate } from 'react-router-dom'
import ComingSoonModal from '../components/ComingSoonModal'

const ClassOverview = () => {
  const navigate = useNavigate()
  const studentsRef = useRef(null)
  const masteryRef = useRef(null)
  const transferRef = useRef(null)
  const gapRef = useRef(null)
  const [showCreateTopic, setShowCreateTopic] = useState(false)
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [comingSoonFeature, setComingSoonFeature] = useState('')
  const [showCreateSuccess, setShowCreateSuccess] = useState(false)

  useCounterAnimation(studentsRef, 32, { duration: 1.5 })
  useCounterAnimation(masteryRef, 86, { duration: 1.5 })
  useCounterAnimation(transferRef, 51, { duration: 1.5 })
  useCounterAnimation(gapRef, 35, { duration: 1.5 })

  const activeTopics = [
    { 
      id: 1, 
      name: 'Ratio & Proportion', 
      assessed: 28, 
      total: 32, 
      mastery: 86, 
      transfer: 51 
    },
    { 
      id: 2, 
      name: 'Linear Relationships', 
      assessed: 25, 
      total: 32, 
      mastery: 81, 
      transfer: 64 
    },
    { 
      id: 3, 
      name: 'Percentages', 
      assessed: 20, 
      total: 32, 
      mastery: 89, 
      transfer: 57 
    },
  ]

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Page Header */}
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
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Class Overview</span>
          </motion.div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-3 tracking-tight">M3/2 Mathematics</h1>
          <div className="flex items-center gap-4 md:gap-6 text-text-secondary text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg md:text-xl">group</span>
              <span ref={studentsRef}>32</span>
              <span>Students</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg md:text-xl">topic</span>
              <span>4</span>
              <span>Topics</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg md:text-xl">assignment</span>
              <span>12</span>
              <span>Assessments</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <motion.button 
            onClick={() => {
              setComingSoonFeature('Manage Students')
              setShowComingSoon(true)
            }}
            className="btn-outline flex items-center gap-2 text-sm md:text-base px-3 md:px-4 py-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="material-symbols-outlined text-base md:text-lg">manage_accounts</span>
            Manage Students
          </motion.button>
          <motion.button 
            onClick={() => navigate('/dashboard/teacher-analytics')}
            className="btn-primary flex items-center gap-2 text-sm md:text-base px-3 md:px-4 py-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="material-symbols-outlined text-base md:text-lg">analytics</span>
            View Analytics
          </motion.button>
        </div>
      </motion.div>

      {/* Class Performance Metrics */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8"
      >
        <div className="card p-4 md:p-6 border-l-4 border-l-secondary">
          <div className="text-xs md:text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Average Mastery</div>
          <div ref={masteryRef} className="text-3xl md:text-4xl font-bold text-text-primary mb-3">86%</div>
          <div className="w-full bg-surface-alt h-2 rounded-full overflow-hidden">
            <motion.div 
              className="bg-secondary h-full rounded-full" 
              initial={{ width: 0 }}
              animate={{ width: '86%' }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
        <div className="card p-4 md:p-6 border-l-4 border-l-primary">
          <div className="text-xs md:text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Average Transfer</div>
          <div ref={transferRef} className="text-3xl md:text-4xl font-bold text-text-primary mb-3">51%</div>
          <div className="w-full bg-surface-alt h-2 rounded-full overflow-hidden">
            <motion.div 
              className="bg-primary h-full rounded-full" 
              initial={{ width: 0 }}
              animate={{ width: '51%' }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
        <div className="card p-4 md:p-6 border-l-4 border-l-error bg-error-light/30">
          <div className="text-xs md:text-sm font-semibold text-error uppercase tracking-wider mb-2">Average Transfer Gap</div>
          <div ref={gapRef} className="text-3xl md:text-4xl font-bold text-error mb-1">35 pts</div>
          <div className="text-xs md:text-sm text-text-tertiary">86% mastery vs 51% transfer</div>
        </div>
      </motion.div>

      {/* Active Topics Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-text-primary">Active Topics</h2>
          <motion.button
            onClick={() => setShowCreateTopic(true)}
            className="btn-primary flex items-center gap-2 text-sm md:text-base px-3 md:px-4 py-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="material-symbols-outlined text-base md:text-lg">add</span>
            Create Topic
          </motion.button>
        </div>
        <div className="space-y-4">
          {activeTopics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="card p-4 md:p-6 hover:shadow-elevated transition-shadow cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-text-primary mb-2">{topic.name}</h3>
                  <div className="flex items-center gap-4 text-xs md:text-sm text-text-secondary">
                    <span>{topic.assessed}/{topic.total} assessed</span>
                    <span className="text-text-tertiary">•</span>
                    <span className="text-secondary font-semibold">Mastery {topic.mastery}%</span>
                    <span className="text-primary font-semibold">Transfer {topic.transfer}%</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <motion.button
                    onClick={() => navigate('/dashboard/topic-analytics')}
                    className="btn-outline text-xs md:text-sm px-3 py-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                  <motion.button
                    onClick={() => navigate('/dashboard/bridge-assessment-builder')}
                    className="btn-primary text-xs md:text-sm px-3 py-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Create Assessment
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <motion.div
          className="card p-4 md:p-6 hover:shadow-elevated transition-shadow cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">add_circle</span>
            </div>
            <h3 className="font-semibold text-text-primary">Create Topic</h3>
          </div>
          <p className="text-xs md:text-sm text-text-secondary">Add a new learning topic for your class</p>
        </motion.div>
        <motion.div
          className="card p-4 md:p-6 hover:shadow-elevated transition-shadow cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary">quiz</span>
            </div>
            <h3 className="font-semibold text-text-primary">Bridge Assessment</h3>
          </div>
          <p className="text-xs md:text-sm text-text-secondary">Create transfer-focused assessments</p>
        </motion.div>
        <motion.div
          className="card p-4 md:p-6 hover:shadow-elevated transition-shadow cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-tertiary/10 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary">insights</span>
            </div>
            <h3 className="font-semibold text-text-primary">View Analytics</h3>
          </div>
          <p className="text-xs md:text-sm text-text-secondary">See detailed class performance data</p>
        </motion.div>
      </motion.div>

      {/* Create Topic Modal */}
      {showCreateTopic && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowCreateTopic(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="card p-6 md:p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-6">Create New Topic</h3>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Topic Name</label>
                <input
                  type="text"
                  placeholder="e.g., Ratio & Proportion"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="e.g., Mathematics"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Grade</label>
                <input
                  type="text"
                  placeholder="M3"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Learning Objective</label>
                <textarea
                  placeholder="e.g., Apply proportional reasoning across familiar and unfamiliar contexts."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-primary focus:outline-none transition-colors text-sm md:text-base resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Description (Optional)</label>
                <textarea
                  placeholder="Topic description..."
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:border-primary focus:outline-none transition-colors text-sm md:text-base resize-none"
                />
              </div>
              <div className="bg-surface-alt p-4 rounded-xl">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-secondary">Estimated Questions:</span>
                  <span className="font-semibold text-text-primary">6</span>
                </div>
                <div className="flex justify-between items-center text-sm mt-2">
                  <span className="text-text-secondary">Estimated Time:</span>
                  <span className="font-semibold text-text-primary">4–5 minutes</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <motion.button
                onClick={() => setShowCreateTopic(false)}
                className="btn-outline flex-1 text-sm md:text-base px-4 py-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Cancel
              </motion.button>
              <motion.button
                onClick={() => {
                  setShowCreateTopic(false)
                  setShowCreateSuccess(true)
                }}
                className="btn-primary flex-1 text-sm md:text-base px-4 py-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Create Topic
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <ComingSoonModal 
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        featureName={comingSoonFeature}
      />

      {/* Create Success Modal */}
      {showCreateSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowCreateSuccess(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="card p-6 md:p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-2xl">check_circle</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-text-primary">Topic Created</h3>
            </div>

            <p className="text-sm md:text-base text-text-secondary mb-6 leading-relaxed">
              Topic created successfully! Note: This is a prototype/demo. Changes will not be saved.
            </p>

            <motion.button
              onClick={() => setShowCreateSuccess(false)}
              className="btn-primary w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Got it
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default ClassOverview
