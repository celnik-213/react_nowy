import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sklep from './components/sklep.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sklep />
  </StrictMode>,
)
