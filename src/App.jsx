import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AppForm from './AppForm'

function App() {
  return (
    <>
      <main className="login-page" id="login-page">
      <div className="login-card">
      <header className="login-header">
        <span className="login-header__icon">🏥</span>
        <h1>Portal do Paciente</h1>
        <p>Unimed</p>
      </header>

      <AppForm/>

      <p className="login-hint">
        Carteirinha: <strong>0089234000012</strong> | Senha:
        <strong>123456</strong>
      </p>
      </div>
      </main>
    </>
  )
}

export default App
