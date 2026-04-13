import { useState } from "react";
import ConsultasTable from "./ConsultasTable";

import { usePaciente } from "../../contexts/PacienteContext";

function ConsultasPage() {
  const { dados, atualizarConsultas } = usePaciente();
  const { consultas } = dados;
  const [carregando, setCarregando] = useState(false);

  const handleAtualizar = async () => {
    setCarregando(true);

    try {
      await atualizarConsultas();
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="page-container">
      <div className="page-title">
        <h1>Consultas</h1>
        <button className="btn-refresh" onClick={handleAtualizar} disabled={carregando}>
          {carregando ? '⟳ Atualizando...' : '⟳ Atualizar'}
        </button>
      </div>
      {
        consultas && consultas.length > 0 ? (
          <ConsultasTable consultas={consultas} />
        ) : (
          <div className="empty-state">Nenhuma consulta disponível.</div>
        )
      }
    </div>
  );
}

export default ConsultasPage;
