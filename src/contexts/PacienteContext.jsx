import { createContext, useContext, useState } from 'react';

import { post, get } from '../services/api';

const PacienteContext = createContext(null);

const dadosIniciais = {
  paciente: null,
  exames: [],
  consultas: [],
};

export const PacienteProvider = ({ children }) => {
  const [dados, setDados] = useState(dadosIniciais);
  const [error, setError] = useState(null);

  const login = async (carteirinha, senha) => {
    setError(null);
    try {
      const paciente = await post('/login', { carteirinha, senha });
      const exames = await get(`/exames?pacienteId=${paciente.id}`);
      const consultas = await get(`/consultas?pacienteId=${paciente.id}`);
      setDados({ paciente, exames, consultas });
    } catch (err) {
      setError('Falha no login. Verifique suas credenciais e tente novamente.');
    }
  };

  const logout = () => {
    setDados(dadosIniciais);
  };

  const atualizarExames = async () => {
    if (!dados.paciente?.id) return;

    const exames = await get(`/exames?pacienteId=${dados.paciente.id}`);
    setDados((prev) => ({ ...prev, exames }));
  };

  const atualizarConsultas = async () => {
    if (!dados.paciente?.id) return;

    const consultas = await get(`/consultas?pacienteId=${dados.paciente.id}`);
    setDados((prev) => ({ ...prev, consultas }));
  };

  return (
    <PacienteContext.Provider
      value={{
        dados,
        login,
        logout,
        error,
        atualizarExames,
        atualizarConsultas,
      }}
    >
      {children}
    </PacienteContext.Provider>
  );
};

export const usePaciente = () => {
  const context = useContext(PacienteContext);
  if (!context) {
    throw new Error('usePaciente deve ser usado dentro de um PacienteProvider');
  }
  return context;
};

export default PacienteProvider;
