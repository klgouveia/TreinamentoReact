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

function ConsultasTable({ consultas }) {
  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>Data</th>
            <th>Hora</th>
            <th>Médico</th>
            <th>Especialidade</th>
            <th>Local</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {consultas.map((consulta) => (
            <tr key={consulta.id}>
              <td className="td-primary">{consulta.data}</td>
              <td>{consulta.hora}</td>
              <td>{consulta.medico}</td>
              <td>{consulta.especialidade}</td>
              <td>{consulta.local}</td>
              <td>
                <span className={`status-badge status-badge--${statusClass(consulta.status)}`}>
                  {consulta.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ConsultasTable;