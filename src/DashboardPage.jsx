import LoadingSpinner from "./LoadingSpinner";
import { usePaciente } from "./contexts/PacienteContext.jsx";



function DashboardPage() {
  const { dados } = usePaciente();
  const { paciente, exames, consultas } = dados;

  if (!paciente || !exames.length || !consultas.length) {
    return <LoadingSpinner />
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem-vindo, {paciente.nome}!</p>
      
      {exames.length > 0 ? console.log("Exames:", exames) : <p>Carregando exames...</p>}
      {consultas.length > 0 ? console.log("Consultas:", consultas) : <p>Carregando consultas...</p>}

      {consultas && consultas.length > 0 && (
        <div>
          <h3>Consultas Recentes</h3>
          <div>
            {consultas.slice(0, 3).map((consulta) => (
              <div key={consulta.id}>
                <strong>{consulta.especialidade}</strong>
                <span> — {consulta.medico}</span>
                <span> | {consulta.data}</span>
                <span> | {consulta.status}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardPage;