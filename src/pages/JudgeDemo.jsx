import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const JudgeDemo = () => {
  const navigate = useNavigate()

  const demoSections = [
    {
      title: 'Teacher Dashboard',
      description: 'View class overview, manage students, and see mastery vs transfer visualization',
      route: '/dashboard/teacher-dashboard',
      icon: 'school'
    },
    {
      title: 'Class Overview',
      description: 'Detailed class performance metrics, active topics, and quick actions',
      route: '/dashboard/class-overview',
      icon: 'class'
    },
    {
      title: 'Bridge Assessment Builder',
      description: 'Create transfer-focused assessments with familiar, near, and far transfer questions',
      route: '/dashboard/bridge-assessment-builder',
      icon: 'quiz'
    },
    {
      title: 'Student Dashboard',
      description: 'Student view with assigned topics and transfer analysis',
      route: '/dashboard/student-dashboard',
      icon: 'person'
    },
    {
      title: 'Transfer Analysis',
      description: 'Detailed breakdown of transfer performance across contexts',
      route: '/dashboard/transfer-analysis',
      icon: 'analytics'
    },
    {
      title: 'Teacher Analytics',
      description: 'Class-wide analytics with AI-assisted diagnostic insights',
      route: '/dashboard/teacher-analytics',
      icon: 'insights'
    },
  ]

  const handleDemoStart = (role) => {
    if (role === 'teacher') {
      navigate('/dashboard/teacher-dashboard')
    } else {
      navigate('/dashboard/student-dashboard')
    }
  }

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
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Demo Mode</span>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-3 tracking-tight">Judge Demo</h1>
        <p className="text-base md:text-lg text-text-secondary max-w-2xl">
          Explore the TransferLens prototype without authentication. Select a role to begin.
        </p>
      </motion.div>

      {/* Role Selection */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
      >
        <motion.div
          className="card p-6 md:p-8 hover:shadow-elevated transition-shadow cursor-pointer border-2 border-transparent hover:border-primary"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleDemoStart('teacher')}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">school</span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-text-primary">Teacher View</h3>
              <p className="text-sm text-text-tertiary">Class management and analytics</p>
            </div>
          </div>
          <p className="text-sm text-text-secondary mb-4">
            Create classes, build bridge assessments, and view AI-assisted diagnostic insights for your students.
          </p>
          <div className="flex items-center gap-2 text-primary font-semibold text-sm">
            <span>Start Demo</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
        </motion.div>

        <motion.div
          className="card p-6 md:p-8 hover:shadow-elevated transition-shadow cursor-pointer border-2 border-transparent hover:border-secondary"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleDemoStart('student')}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-3xl">person</span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-text-primary">Student View</h3>
              <p className="text-sm text-text-tertiary">Assessments and transfer analysis</p>
            </div>
          </div>
          <p className="text-sm text-text-secondary mb-4">
            Complete bridge assessments and view your personal transfer profile with detailed breakdowns.
          </p>
          <div className="flex items-center gap-2 text-secondary font-semibold text-sm">
            <span>Start Demo</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Feature Overview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="card p-6 md:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-tertiary/10 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-tertiary text-xl">explore</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-text-primary">Explore Features</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {demoSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-4 bg-surface-alt rounded-xl border border-border hover:border-primary transition-colors cursor-pointer"
              onClick={() => navigate(section.route)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary">{section.icon}</span>
                <div className="font-semibold text-text-primary">{section.title}</div>
              </div>
              <div className="text-sm text-text-secondary">{section.description}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Demo Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8 p-4 md:p-6 bg-surface border border-border rounded-xl"
      >
        <div className="flex items-center gap-2 text-xs md:text-sm text-text-tertiary">
          <span className="material-symbols-outlined text-sm">info</span>
          <span>Demo Mode uses prototype data. All features are simulated for demonstration purposes.</span>
        </div>
      </motion.div>
    </div>
  )
}

export default JudgeDemo
