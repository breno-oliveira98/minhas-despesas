import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Importando o Router
import App from './App.jsx'
import 'flowbite';
import 'flowbite/dist/flowbite.min.css';  // Importa os estilos do Flowbite


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
