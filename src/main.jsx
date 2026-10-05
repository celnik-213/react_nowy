import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sklep from './components/sklep.jsx'
import Temperatura from './components/temperatura.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <h2>Rozdział 1</h2>
    <Sklep />
      <h2>Rozdział 2</h2>
      <Temperatura />
  </StrictMode>,
)
