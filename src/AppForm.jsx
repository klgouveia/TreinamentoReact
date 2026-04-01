import { useState } from 'react'
import { post } from "./services/api";

import InputField from "./InputField";

function AppForm({ setPaciente }) {
  const [carteirinha, setCarteirinha] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await post("/login", { carteirinha, senha })
      console.log("Login successful:", data);
      setPaciente(data);
    } catch (error) {
      console.error("Login error:", error);
      setError("Falha no login. Verifique suas credenciais e tente novamente.");
    }
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
