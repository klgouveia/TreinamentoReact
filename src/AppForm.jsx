import { useState } from 'react'
import { post } from "./services/api";
import InputField from "./InputField";
import { usePaciente } from "./contexts/PacienteContext.jsx";

function AppForm() {
  const { login, error } = usePaciente();
  const [carteirinha, setCarteirinha] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(carteirinha, senha);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="login-form" id="login-form">
        <InputField
        id="carteirinha"
        type="text"
        placeholder="Digite sua carteirinha"
        label="Carteirinha"
        value={carteirinha}
        onChange={(e) => setCarteirinha(e.target.value)}
        />

        <InputField
        id="senha"
        type="password"
        placeholder="Digite sua senha"
        label="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        />

        {error && <div className="error-message" id="login-error">{error}</div>}

        <button type="submit" className="btn-primary">Entrar</button>
      </form>
    </>
  )
}

export default AppForm
