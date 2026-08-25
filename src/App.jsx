import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useUserRole } from './contexts/UserRoleContext'
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage'
import StudentDashboard from './pages/StudentDashboard'
import TeacherDashboard from './pages/TeacherDashboard'
import ClassOverview from './pages/ClassOverview'
import StudentAnalytics from './pages/StudentAnalytics'
import TopicAnalytics from './pages/TopicAnalytics'
import ProductionWorkflow from './pages/ProductionWorkflow'
import TechnologyArchitecture from './pages/TechnologyArchitecture'
import JudgeDemo from './pages/JudgeDemo'
import BridgeAssessmentBuilder from './pages/BridgeAssessmentBuilder'
import AssessmentIntro from './pages/assessment/AssessmentIntro'
import AssessmentFamiliar from './pages/assessment/AssessmentFamiliar'
import AssessmentNearTransfer from './pages/assessment/AssessmentNearTransfer'
import AssessmentFarTransfer from './pages/assessment/AssessmentFarTransfer'
import AssessmentReasoning from './pages/assessment/AssessmentReasoning'
import TransferAnalysis from './pages/TransferAnalysis'
import ConceptExplorer from './pages/ConceptExplorer'
import TeacherAnalytics from './pages/TeacherAnalytics'

// Protected Route Component
const ProtectedRoute = ({ children, allowedRole }) => {
  const { role } = useUserRole()
  
  if (!role) {
    return <Navigate to="/" replace />
  }
  
  if (role !== allowedRole) {
    const redirectPath = allowedRole === 'student' ? '/teacher-dashboard' : '/student-dashboard'
    return <Navigate to={redirectPath} replace />
  }
  
  return <>{children}</>
}

// Role-based Redirect for Root
const RoleRedirect = () => {
  const { role } = useUserRole()
  if (!role) {
    return <Navigate to="/" replace />
  }
  return <Navigate to={role === 'student' ? '/dashboard/student-dashboard' : '/dashboard/teacher-dashboard'} replace />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/judge-demo" element={<JudgeDemo />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<RoleRedirect />} />
          
          {/* Student Routes */}
          <Route 
            path="student-dashboard" 
            element={
              <ProtectedRoute allowedRole="student">
                <StudentDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="assessment/intro" 
            element={
              <ProtectedRoute allowedRole="student">
                <AssessmentIntro />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="assessment/familiar" 
            element={
              <ProtectedRoute allowedRole="student">
                <AssessmentFamiliar />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="assessment/near-transfer" 
            element={
              <ProtectedRoute allowedRole="student">
                <AssessmentNearTransfer />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="assessment/far-transfer" 
            element={
              <ProtectedRoute allowedRole="student">
                <AssessmentFarTransfer />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="assessment/reasoning" 
            element={
              <ProtectedRoute allowedRole="student">
                <AssessmentReasoning />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="transfer-analysis" 
            element={
              <ProtectedRoute allowedRole="student">
                <TransferAnalysis />
              </ProtectedRoute>
            } 
          />
          
          {/* Teacher Routes */}
          <Route 
            path="teacher-dashboard" 
            element={
              <ProtectedRoute allowedRole="teacher">
                <TeacherDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="class-overview" 
            element={
              <ProtectedRoute allowedRole="teacher">
                <ClassOverview />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="bridge-assessment-builder" 
            element={
              <ProtectedRoute allowedRole="teacher">
                <BridgeAssessmentBuilder />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="student-analytics" 
            element={
              <ProtectedRoute allowedRole="teacher">
                <StudentAnalytics />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="topic-analytics" 
            element={
              <ProtectedRoute allowedRole="teacher">
                <TopicAnalytics />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="production-workflow" 
            element={
              <ProtectedRoute allowedRole="teacher">
                <ProductionWorkflow />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="technology-architecture" 
            element={
              <ProtectedRoute allowedRole="teacher">
                <TechnologyArchitecture />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="teacher-analytics" 
            element={
              <ProtectedRoute allowedRole="teacher">
                <TeacherAnalytics />
              </ProtectedRoute>
            } 
          />
          
          {/* Shared Routes */}
          <Route path="concept-explorer" element={<ConceptExplorer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
