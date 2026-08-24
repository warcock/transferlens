import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserRoleProvider } from './contexts/UserRoleContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserRoleProvider>
      <App />
    </UserRoleProvider>
  </React.StrictMode>,
)
