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




import { PacienteProvider, usePaciente } from './contexts/PacienteContext';

function AppRoutes() {
  const { dados } = usePaciente();
  const { paciente } = dados;

  return (
    <Routes>
      <Route
        path="/login"
        element={!paciente ? <LoginPage /> : <Navigate to="/" />}
      />

      <Route
        element={paciente ? <MainLayout /> : <Navigate to="/login" />}
      >
        <Route path="/" element={<DashboardPage />} />
        <Route path="/consultas" element={<ConsultasPage />} />
        <Route path="/exames" element={<ExamesPage />} />
        <Route path="/agendamento" element={<AgendamentoPage />} />
      </Route>
    </Routes>
  );
}

function Main() {
  return (
    <PacienteProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </PacienteProvider>
  );
}

createRoot(document.getElementById('root')).render(
    <Main />
)