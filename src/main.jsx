import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DashboardPage from './DashboardPage.jsx' 

function Main() {
  const [paciente, setPaciente] = useState(null);

  // Se não houver paciente, mostra a tela inicial (App)
  if (!paciente) {
    return <App setPaciente={setPaciente} />
  }

  // Se houver paciente, mostra a tela de Consultas/Dashboard
  return <DashboardPage paciente={paciente} />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
)