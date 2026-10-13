import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sklep from './components/sklep.jsx'
import Temperatura from './components/temperatura.jsx'
import Zamowienia from "./components/zamowienie.jsx";
import Licznikliter from './components/licznikliter.jsx'
import Function from "./components/zamowienia2.tsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <h1>Rozdział 1</h1>
    <Sklep />
      <h1>Rozdział 2</h1>
      <Temperatura />
      <h1>Rozdział 3</h1>
      <Zamowienia />
      <h1>Rozdział 4</h1>
      <Licznikliter />
      <h1>Rozdział 5</h1>
      <Function />
  </StrictMode>,
)
