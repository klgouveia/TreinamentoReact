import { useState } from 'react'

function AppForm({login, senha}) {
  const [count, setCount] = useState(0)

  return (
    <>
      <form className="login-form" id="login-form">
        <div className="form-group">
          <label forHtml="carteirinha">Carteirinha</label>
          <input type="text" id="carteirinha" placeholder="Digite sua carteirinha" value={login} />
          <span className="error-message" id="carteirinha-error"></span>
        </div>

        <div className="form-group">
          <label forHtml="senha">Senha</label>
          <input type="password" id="senha" placeholder="Digite sua senha" value={senha} />
          <span className="error-message" id="senha-error"></span>
        </div>

        <div className="error-message" id="login-error"></div>

        <button type="submit" className="btn-primary">Entrar</button>
      </form>
    </>
  )
}

export default AppForm
