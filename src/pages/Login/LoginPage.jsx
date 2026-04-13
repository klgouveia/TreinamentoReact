import './App.css'
import AppForm from './AppForm'
import { useContext } from "react";
import { usePaciente } from "../../contexts/PacienteContext.jsx";

function LoginPage() {
  const { setPaciente } = usePaciente();

  return (
    <>
      <main className="login-page" id="login-page">
      <div className="login-card">
      <header className="login-header">
        <span className="login-header__icon">🏥</span>
        <h1>Portal do Paciente</h1>
        <p>Unimed</p>
      </header>

      <AppForm setPaciente={setPaciente}/>

      <p className="login-hint">
        Carteirinha: <strong>0089234000012</strong> | Senha:
        <strong>123456</strong>
      </p>
      </div>
      </main>
    </>
  )
}

export default LoginPage
