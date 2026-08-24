import { createContext, useContext, useState, useEffect } from 'react'

const UserRoleContext = createContext()

export const useUserRole = () => {
  const context = useContext(UserRoleContext)
  if (!context) {
    throw new Error('useUserRole must be used within a UserRoleProvider')
  }
  return context
}

export const UserRoleProvider = ({ children }) => {
  const [role, setRole] = useState(() => {
    const savedRole = localStorage.getItem('transferlens_role')
    return savedRole || 'student'
  })

  useEffect(() => {
    if (role) {
      localStorage.setItem('transferlens_role', role)
    } else {
      localStorage.removeItem('transferlens_role')
    }
  }, [role])

  const toggleRole = () => {
    setRole(prevRole => prevRole === 'student' ? 'teacher' : 'student')
  }

  const setRoleSpecific = (newRole) => {
    setRole(newRole)
  }

  return (
    <UserRoleContext.Provider value={{ role, toggleRole, setRole: setRoleSpecific }}>
      {children}
    </UserRoleContext.Provider>
  )
}
