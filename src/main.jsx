import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sklep from './components/sklep.jsx'
import Temperatura from './components/temperatura.jsx'
import Zamowienia from "./components/zamowienie.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <h2>Rozdział 1</h2>
    <Sklep />
      <h2>Rozdział 2</h2>
      <Temperatura />
      <h2>Rozdział 3</h2>
      <Zamowienia />
  </StrictMode>,
)
