import { useState } from "react";
import ExamesTable from "./ExamesTable";

import { usePaciente } from "../../contexts/PacienteContext";

function ExamesPage() {
  const { dados, atualizarExames } = usePaciente();
  const { exames } = dados;
  const [carregando, setCarregando] = useState(false);

  const handleAtualizar = async () => {
    setCarregando(true);

    try {
      await atualizarExames();
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="page-container">
      <div className="page-title">
        <h1>Exames</h1>
        <button className="btn-refresh" onClick={handleAtualizar} disabled={carregando}>
          {carregando ? '⟳ Atualizando...' : '⟳ Atualizar'}
        </button>
      </div>
      {
        exames && exames.length > 0 ? (
          <ExamesTable exames={exames} />
        ) : (
          <div className="empty-state">Nenhum exame disponível.</div>
        )
      }
    </div>
  );
}

export default ExamesPage;
