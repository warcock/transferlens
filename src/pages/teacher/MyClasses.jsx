import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const MyClasses = () => {
  const navigate = useNavigate()
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newClass, setNewClass] = useState({
    name: '',
    subject: '',
    grade: '',
    section: '',
    description: ''
  })

  const classes = [
    {
      id: 1,
      name: 'M3/2 Mathematics',
      subject: 'Mathematics',
      grade: 'M3',
      section: 'Section 2',
      code: 'M3MATH26',
      students: 32,
      topics: 4,
      assessments: 12,
      avgMastery: 86,
      avgTransfer: 51,
      avgGap: 35
    },
    {
      id: 2,
      name: 'M3/4 Mathematics',
      subject: 'Mathematics',
      grade: 'M3',
      section: 'Section 4',
      code: 'M3MATH24',
      students: 28,
      topics: 3,
      assessments: 8,
      avgMastery: 82,
      avgTransfer: 48,
      avgGap: 34
    }
  ]

  const handleCreateClass = () => {
    // In production, this would save to backend
    console.log('Creating class:', newClass)
    setShowCreateModal(false)
    setNewClass({ name: '', subject: '', grade: '', section: '', description: '' })
  }

  const generateClassCode = (name, subject, grade) => {
    const gradeCode = grade.replace(/\s/g, '')
    const subjectCode = subject.substring(0, 4).toUpperCase()
    const year = new Date().getFullYear().toString().slice(-2)
    return `${gradeCode}${subjectCode}${year}`
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
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Classroom Management</span>
        </motion.div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-3 tracking-tight">
              My Classes
            </h1>
            <p className="text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed">
              Manage your classes, create topics, and track student transfer performance.
            </p>
          </div>
          <motion.button
            onClick={() => setShowCreateModal(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
          >
            <span className="material-symbols-outlined">add</span>
            Create Class
          </motion.button>
        </div>
      </motion.div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {classes.map((classItem, index) => (
          <motion.div
            key={classItem.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="card card-elevated p-6 hover:shadow-elevated transition-shadow cursor-pointer"
            onClick={() => navigate(`/dashboard/class/${classItem.id}`)}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-1">{classItem.name}</h3>
                <p className="text-sm text-text-tertiary">{classItem.subject}</p>
              </div>
              <div className="px-3 py-1 bg-surface-alt rounded-lg text-xs font-mono text-text-tertiary">
                {classItem.code}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center p-3 bg-surface-alt rounded-xl">
                <div className="text-2xl font-bold text-text-primary">{classItem.students}</div>
                <div className="text-xs text-text-tertiary">Students</div>
              </div>
              <div className="text-center p-3 bg-surface-alt rounded-xl">
                <div className="text-2xl font-bold text-text-primary">{classItem.topics}</div>
                <div className="text-xs text-text-tertiary">Topics</div>
              </div>
              <div className="text-center p-3 bg-surface-alt rounded-xl">
                <div className="text-2xl font-bold text-text-primary">{classItem.assessments}</div>
                <div className="text-xs text-text-tertiary">Assessments</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-text-tertiary">Avg Mastery</span>
                <span className="text-sm font-bold text-secondary">{classItem.avgMastery}%</span>
              </div>
              <div className="w-full bg-surface h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-secondary rounded-full"
                  style={{ width: `${classItem.avgMastery}%` }}
                />
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-text-tertiary">Avg Transfer</span>
                <span className="text-sm font-bold text-primary">{classItem.avgTransfer}%</span>
              </div>
              <div className="w-full bg-surface h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${classItem.avgTransfer}%` }}
                />
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-text-tertiary">Avg Gap</span>
                <span className="text-sm font-bold text-error">{classItem.avgGap} pts</span>
              </div>
              <div className="w-full bg-surface h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-error rounded-full"
                  style={{ width: `${classItem.avgGap}%` }}
                />
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-4 py-2 border border-border rounded-xl text-sm font-semibold text-text-primary hover:bg-surface-alt transition-colors"
              >
                Manage Students
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-4 py-2 border border-border rounded-xl text-sm font-semibold text-text-primary hover:bg-surface-alt transition-colors"
              >
                View Analytics
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Create Class Modal */}
      {showCreateModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowCreateModal(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="card card-elevated p-6 md:p-8 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-text-primary mb-6">Create New Class</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Class Name</label>
                <input
                  type="text"
                  value={newClass.name}
                  onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
                  placeholder="e.g., M3/2 Mathematics"
                  className="w-full px-4 py-3 border border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Subject</label>
                <input
                  type="text"
                  value={newClass.subject}
                  onChange={(e) => setNewClass({ ...newClass, subject: e.target.value })}
                  placeholder="e.g., Mathematics"
                  className="w-full px-4 py-3 border border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">Grade</label>
                  <input
                    type="text"
                    value={newClass.grade}
                    onChange={(e) => setNewClass({ ...newClass, grade: e.target.value })}
                    placeholder="e.g., M3"
                    className="w-full px-4 py-3 border border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">Section</label>
                  <input
                    type="text"
                    value={newClass.section}
                    onChange={(e) => setNewClass({ ...newClass, section: e.target.value })}
                    placeholder="e.g., Section 2"
                    className="w-full px-4 py-3 border border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">Description</label>
                <textarea
                  value={newClass.description}
                  onChange={(e) => setNewClass({ ...newClass, description: e.target.value })}
                  placeholder="Optional description..."
                  rows={3}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>

              {newClass.name && newClass.subject && newClass.grade && (
                <div className="bg-surface-alt border border-border rounded-xl p-4">
                  <div className="text-sm text-text-tertiary mb-2">Generated Class Code:</div>
                  <div className="text-lg font-mono font-bold text-primary">
                    {generateClassCode(newClass.name, newClass.subject, newClass.grade)}
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-3 mt-6">
              <motion.button
                onClick={() => setShowCreateModal(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-6 py-3 border border-border rounded-xl font-semibold text-text-primary hover:bg-surface-alt transition-colors"
              >
                Cancel
              </motion.button>
              <motion.button
                onClick={handleCreateClass}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 btn-primary px-6 py-3 rounded-xl font-semibold"
              >
                Create Class
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default MyClasses
