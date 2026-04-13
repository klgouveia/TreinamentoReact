import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css'
import MainLayout from './layout/MainLayout.jsx';
import LoginPage from './pages/Login/LoginPage.jsx'
import DashboardPage from './pages/Dashboard/DashboardPage.jsx' 
import ConsultasPage from './pages/Consultas/ConsultasPage.jsx';
import ExamesPage from './pages/Exames/ExamesPage.jsx';
import AgendamentoPage from './pages/Agendamento/AgendamentoPage.jsx';




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