import LoadingSpinner from "./LoadingSpinner";
import { usePaciente } from "../../contexts/PacienteContext.jsx";

const STATUS_CLASS = {
  agendada: 'agendada',
  confirmada: 'confirmada',
  realizada: 'realizada',
  cancelada: 'cancelada',
  pendente: 'pendente',
};

function statusClass(status) {
  return STATUS_CLASS[(status || '').toLowerCase()] ?? 'agendada';
}

function DashboardPage() {
  const { dados } = usePaciente();
  const { paciente, exames, consultas } = dados;

  if (!paciente || !exames.length || !consultas.length) {
    return <LoadingSpinner />
  }

  return (
    <div className="page-container">
      <div className="dashboard-welcome">
        <h1>Olá, {paciente.nome.split(' ')[0]}! 👋</h1>
        <p>Acompanhe seu histórico de consultas e exames.</p>
      </div>

      <section className="dashboard-section">
        <div className="dashboard-section__header">
          <h2>Consultas Recentes</h2>
        </div>
        <div className="consultas-list">
          {consultas.slice(0, 3).map((consulta) => (
            <div key={consulta.id} className="consulta-card">
              <div className="consulta-card__header">
                <span className="consulta-card__especialidade">{consulta.especialidade}</span>
                <span className={`status-badge status-badge--${statusClass(consulta.status)}`}>
                  {consulta.status}
                </span>
              </div>
              <p className="consulta-card__medico">{consulta.medico}</p>
              <div className="consulta-card__details">
                <span>📅 {consulta.data}</span>
                {consulta.hora && <span>🕒 {consulta.hora}</span>}
                {consulta.local && <span>📍 {consulta.local}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default DashboardPage;