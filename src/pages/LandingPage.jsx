import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useUserRole } from '../contexts/UserRoleContext'

const LandingPage = () => {
  const navigate = useNavigate()
  const { setRole } = useUserRole()
  const [hoveredRole, setHoveredRole] = useState(null)

  const handleRoleSelect = (role) => {
    setRole(role)
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-border"
      >
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center shadow-elevated">
              <span className="material-symbols-outlined text-text-inverse text-2xl">school</span>
            </div>
            <span className="text-xl font-bold text-text-primary tracking-tight">TransferLens</span>
          </motion.div>
          
          <div className="flex items-center gap-6">
            <motion.button 
              className="text-text-secondary hover:text-text-primary font-medium transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.button>
            <motion.button 
              className="text-text-secondary hover:text-text-primary font-medium transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Research
            </motion.button>
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Asymmetric composition */}
      <section className="min-h-screen flex items-center pt-20 relative">
        {/* Background elements */}
        <motion.div 
          className="absolute top-20 right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />

        <div className="max-w-[1400px] mx-auto px-8 w-full">
          <div className="grid grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="col-span-7"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                EdTech Innovation
              </motion.div>
              
              <h1 className="text-6xl font-bold text-text-primary mb-6 leading-tight tracking-tight">
                Measure What{' '}
                <motion.span 
                  className="text-primary relative inline-block"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  Really
                  <motion.div 
                    className="absolute bottom-1 left-0 w-full h-3 bg-primary/20 rounded"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </motion.span>
                {' '}Matters
              </h1>
              
              <p className="text-xl text-text-secondary mb-8 max-w-2xl leading-relaxed">
                Students can memorize formulas but fail to apply them in new contexts. 
                TransferLens measures the gap between mastery and real-world application.
              </p>

              <div className="flex gap-4 mb-12">
                <motion.button 
                  className="btn-primary text-lg px-8 py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Learning
                </motion.button>
                <motion.button 
                  className="btn-outline text-lg px-8 py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Demo
                </motion.button>
              </div>

              {/* Social proof */}
              <motion.div 
                className="flex items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-hover border-2 border-surface flex items-center justify-center text-text-inverse text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-text-secondary">
                  <span className="font-semibold text-text-primary">2,400+</span> students learning better
                </div>
              </motion.div>
            </motion.div>

            {/* Right Visual - Interactive */}
            <motion.div 
              className="col-span-5 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="relative">
                {/* Main card */}
                <motion.div 
                  className="bg-surface border border-border rounded-2xl p-6 shadow-floating relative z-10"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-text-tertiary uppercase tracking-wider">Performance Gap</span>
                    <span className="text-xs text-error font-bold">Alert</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-text-secondary">Mastery Score</span>
                        <span className="font-bold text-text-primary">92%</span>
                      </div>
                      <div className="h-2 bg-surface-alt rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-secondary rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '92%' }}
                          transition={{ delay: 0.8, duration: 1 }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-text-secondary">Transfer Score</span>
                        <span className="font-bold text-error">38%</span>
                      </div>
                      <div className="h-2 bg-surface-alt rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-error rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '38%' }}
                          transition={{ delay: 0.9, duration: 1 }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-error-light rounded-xl border border-error/20">
                    <div className="flex items-center gap-2 text-error text-sm font-semibold mb-1">
                      <span className="material-symbols-outlined text-base">warning</span>
                      Hidden Gap Detected
                    </div>
                    <p className="text-xs text-text-secondary">
                      Student demonstrates strong memorization but struggles with application
                    </p>
                  </div>
                </motion.div>

                {/* Floating cards */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-surface border border-border rounded-xl p-4 shadow-elevated"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary text-sm">trending_up</span>
                    </div>
                    <div>
                      <div className="text-xs text-text-tertiary">Improvement</div>
                      <div className="text-sm font-bold text-secondary">+24%</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-surface border border-border rounded-xl p-4 shadow-elevated"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-sm">psychology</span>
                    </div>
                    <div>
                      <div className="text-xs text-text-tertiary">Deep Learning</div>
                      <div className="text-sm font-bold text-primary">Active</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section - Unique layout */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1400px] mx-auto px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-text-primary mb-4 tracking-tight">
              The Hidden Problem in Education
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Traditional assessments measure memorization, not understanding. Here's why that matters.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-8">
            {[
              {
                icon: 'quiz',
                title: 'False Mastery',
                description: 'Students score 95% on tests but can\'t apply concepts to real-world problems',
                color: 'error'
              },
              {
                icon: 'psychology_alt',
                title: 'Surface Learning',
                description: 'Focus on formulas and procedures without understanding underlying principles',
                color: 'tertiary'
              },
              {
                icon: 'trending_down',
                title: 'Transfer Gap',
                description: 'Knowledge doesn\'t transfer across contexts, subjects, or time periods',
                color: 'primary'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group"
              >
                <div className={`p-8 bg-gradient-to-br from-${item.color}-light to-surface-alt rounded-2xl border border-${item.color}/20 hover:shadow-elevated transition-all cursor-pointer`}>
                  <motion.div 
                    className={`w-16 h-16 bg-${item.color}/10 rounded-2xl flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className={`material-symbols-outlined text-${item.color} text-3xl`}>{item.icon}</span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section - Asymmetric */}
      <section className="py-24 bg-background">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-16 items-center">
            <motion.div 
              className="col-span-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="bg-surface border border-border rounded-2xl p-8 shadow-floating">
                  <div className="space-y-6">
                    {[
                      { label: 'Assessment Design', value: 'Adaptive', color: 'primary' },
                      { label: 'Context Variety', value: 'Multi-domain', color: 'secondary' },
                      { label: 'Reasoning Analysis', value: 'Deep-dive', color: 'tertiary' }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <div className={`w-12 h-12 bg-${item.color}/10 rounded-xl flex items-center justify-center`}>
                          <span className={`material-symbols-outlined text-${item.color}`}>check_circle</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-text-tertiary uppercase tracking-wider">{item.label}</div>
                          <div className="text-lg font-bold text-text-primary">{item.value}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary to-primary-hover rounded-2xl p-6 text-text-inverse shadow-floating"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="text-3xl font-bold mb-1">94%</div>
                  <div className="text-sm opacity-90">Transfer improvement</div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="col-span-7"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-text-primary mb-6 tracking-tight">
                The TransferLens Solution
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Our platform measures true understanding by assessing how well students can apply knowledge across different contexts, not just how well they can recall information.
              </p>

              <div className="space-y-6">
                {[
                  'Multi-stage assessments that progress from familiar to novel contexts',
                  'Real-time analysis of reasoning patterns and structural mapping',
                  'Personalized learning paths based on individual transfer gaps',
                  'Teacher dashboards with actionable intervention recommendations'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="material-symbols-outlined text-primary text-sm">arrow_right</span>
                    </div>
                    <p className="text-text-secondary leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Role Selection CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1400px] mx-auto px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-text-primary mb-4 tracking-tight">
              Start Measuring Real Learning
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Choose your role to begin transforming how you assess and understand learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              onMouseEnter={() => setHoveredRole('student')}
              onMouseLeave={() => setHoveredRole(null)}
              onClick={() => handleRoleSelect('student')}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
            >
              <div className={`p-8 bg-gradient-to-br ${hoveredRole === 'student' ? 'from-primary to-primary-hover' : 'from-surface to-surface-alt'} border ${hoveredRole === 'student' ? 'border-primary' : 'border-border'} rounded-2xl transition-all duration-300`}>
                <motion.div 
                  className={`w-16 h-16 ${hoveredRole === 'student' ? 'bg-white/20' : 'bg-primary/10'} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={`material-symbols-outlined ${hoveredRole === 'student' ? 'text-white' : 'text-primary'} text-3xl`}>school</span>
                </motion.div>
                <h3 className={`text-2xl font-bold mb-3 ${hoveredRole === 'student' ? 'text-white' : 'text-text-primary'}`}>For Students</h3>
                <p className={`leading-relaxed ${hoveredRole === 'student' ? 'text-white/80' : 'text-text-secondary'}`}>
                  Discover your learning gaps and improve your ability to apply knowledge in new situations
                </p>
              </div>
            </motion.div>

            <motion.div
              onMouseEnter={() => setHoveredRole('teacher')}
              onMouseLeave={() => setHoveredRole(null)}
              onClick={() => handleRoleSelect('teacher')}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
            >
              <div className={`p-8 bg-gradient-to-br ${hoveredRole === 'teacher' ? 'from-secondary to-secondary-hover' : 'from-surface to-surface-alt'} border ${hoveredRole === 'teacher' ? 'border-secondary' : 'border-border'} rounded-2xl transition-all duration-300`}>
                <motion.div 
                  className={`w-16 h-16 ${hoveredRole === 'teacher' ? 'bg-white/20' : 'bg-secondary/10'} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={`material-symbols-outlined ${hoveredRole === 'teacher' ? 'text-white' : 'text-secondary'} text-3xl`}>groups</span>
                </motion.div>
                <h3 className={`text-2xl font-bold mb-3 ${hoveredRole === 'teacher' ? 'text-white' : 'text-text-primary'}`}>For Teachers</h3>
                <p className={`leading-relaxed ${hoveredRole === 'teacher' ? 'text-white/80' : 'text-text-secondary'}`}>
                  Identify hidden learning gaps and provide targeted interventions for your students
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-surface border-t border-border">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-hover rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-text-inverse text-lg">school</span>
              </div>
              <span className="text-lg font-bold text-text-primary">TransferLens</span>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-text-secondary">
              <a href="#" className="hover:text-text-primary transition-colors">About</a>
              <a href="#" className="hover:text-text-primary transition-colors">Research</a>
              <a href="#" className="hover:text-text-primary transition-colors">Contact</a>
              <a href="#" className="hover:text-text-primary transition-colors">Privacy</a>
            </div>

            <div className="text-sm text-text-tertiary">
              © 2024 TransferLens. Measuring real learning.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage