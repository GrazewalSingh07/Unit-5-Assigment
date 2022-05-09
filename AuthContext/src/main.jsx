import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthcontextsProvidor } from './context/AuthContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthcontextsProvidor>
    <App />
  </AuthcontextsProvidor>
    
  </React.StrictMode>
)
