import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css'
import MainLayout from './MainLayout.jsx';
import LoginPage from './LoginPage.jsx'
import DashboardPage from './DashboardPage.jsx' 
import ConsultasPage from './ConsultasPage.jsx';
import ExamesPage from './ExamesPage.jsx';
import AgendamentoPage from './AgendamentoPage.jsx';


import PacienteContext from './contexts/PacienteContext.jsx';


function Main() {
  const [paciente, setPaciente] = useState(null);

  return (
    <PacienteContext.Provider value={{ paciente, setPaciente }}>
    <BrowserRouter>
      <Routes>
          <Route
          path="/login"
          element={paciente != null ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route
            element={paciente != null ? <MainLayout /> : <Navigate to="/login" />}
          >
          <Route path="/" element={<DashboardPage />} />
          <Route path="/consultas" element={<ConsultasPage />} />
          <Route path="/exames" element={<ExamesPage />} />
          <Route path="/agendamento" element={<AgendamentoPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
    </PacienteContext.Provider>
  );
}

createRoot(document.getElementById('root')).render(
    <Main />
)