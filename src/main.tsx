import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChatProvider } from './components/context/chatb.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <ChatProvider>
      <Router>
        <App />
      </Router>
    </ChatProvider>
    
    
  </StrictMode>
)
