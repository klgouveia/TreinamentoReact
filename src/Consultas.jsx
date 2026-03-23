import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './Consultas.css'

function Consultas() {
  return (
    <>
      <div className="app-container" id="app-container">
        <header className="header">
          <div className="header__logo">
            <span>🏥</span>
            <h1>Portal do Paciente</h1>
          </div>
          <div className="header__user">
            <span id="user-name">Paciente</span>
            <button className="btn-logout" id="btn-logout">Sair</button>
          </div>
        </header>

        <main className="main-content">
          <div className="page-header">
            <h2>Minhas Consultas</h2>
            <p id="consultas-count"></p>
          </div>

          <div className="consultas-list" id="consultas-list">
          </div>
        </main>
      </div>
    </>
  )
}

export default Consultas
