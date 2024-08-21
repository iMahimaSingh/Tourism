import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppLayout from './App.jsx'
import './App.css'; // Make sure the path is correct

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLayout />
  </StrictMode>,
)
