import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const JoinClass = () => {
  const navigate = useNavigate()
  const [classCode, setClassCode] = useState('')
  const [joinedClass, setJoinedClass] = useState(null)
  const [error, setError] = useState('')

  const mockClasses = {
    'M3MATH26': {
      name: 'M3/2 Mathematics',
      subject: 'Mathematics',
      grade: 'M3',
      section: 'Section 2',
      teacher: 'Ms. Smith'
    },
    'M3MATH24': {
      name: 'M3/4 Mathematics',
      subject: 'Mathematics',
      grade: 'M3',
      section: 'Section 4',
      teacher: 'Mr. Johnson'
    }
  }

  const handleJoinClass = () => {
    const classInfo = mockClasses[classCode.toUpperCase()]
    if (classInfo) {
      setJoinedClass(classInfo)
      setError('')
    } else {
      setError('Invalid class code. Please check and try again.')
      setJoinedClass(null)
    }
  }

  return (
    <div className="max-w-[600px] mx-auto">
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
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Classroom</span>
        </motion.div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-3 tracking-tight">
          Join a Class
        </h1>
        <p className="text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed">
          Enter your class code to join your teacher's classroom and start assessments.
        </p>
      </motion.div>

      {/* Join Class Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="card card-elevated p-6 md:p-8"
      >
        {!joinedClass ? (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Class Code</label>
              <input
                type="text"
                value={classCode}
                onChange={(e) => setClassCode(e.target.value.toUpperCase())}
                placeholder="e.g., M3MATH26"
                className="w-full px-4 py-3 border border-border rounded-xl focus:border-primary focus:outline-none transition-colors text-lg font-mono tracking-wider"
                maxLength={10}
              />
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-error"
                >
                  {error}
                </motion.div>
              )}
            </div>

            <div className="bg-surface-alt border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-sm">info</span>
                <span className="text-sm font-semibold text-text-primary">Where to find your class code?</span>
              </div>
              <p className="text-sm text-text-secondary">
                Your teacher will provide you with a unique class code. It typically looks like: M3MATH26
              </p>
            </div>

            <motion.button
              onClick={handleJoinClass}
              disabled={!classCode}
              whileHover={{ scale: classCode ? 1.02 : 1 }}
              whileTap={{ scale: classCode ? 0.98 : 1 }}
              className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                classCode ? 'btn-primary' : 'bg-surface-alt text-text-tertiary cursor-not-allowed'
              }`}
            >
              Join Class
            </motion.button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span className="material-symbols-outlined text-secondary text-3xl">check_circle</span>
              </motion.div>
              <h2 className="text-2xl font-bold text-text-primary mb-2">Successfully Joined!</h2>
              <p className="text-text-secondary">You have been added to the class</p>
            </div>

            <div className="bg-surface-alt border border-border rounded-xl p-6">
              <div className="text-center">
                <div className="text-xl font-bold text-text-primary mb-1">{joinedClass.name}</div>
                <div className="text-sm text-text-tertiary mb-4">{joinedClass.subject}</div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-surface rounded-lg p-3">
                    <div className="text-text-tertiary">Grade</div>
                    <div className="font-semibold text-text-primary">{joinedClass.grade}</div>
                  </div>
                  <div className="bg-surface rounded-lg p-3">
                    <div className="text-text-tertiary">Section</div>
                    <div className="font-semibold text-text-primary">{joinedClass.section}</div>
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              onClick={() => navigate('/dashboard/student-dashboard')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary py-3 rounded-xl font-semibold"
            >
              Go to Dashboard
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default JoinClass
