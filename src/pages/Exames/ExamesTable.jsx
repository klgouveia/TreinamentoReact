const STATUS_CLASS = {
  agendado: 'agendada',
  confirmado: 'confirmada',
  realizado: 'realizada',
  cancelado: 'cancelada',
  pendente: 'pendente',
};

function statusClass(status) {
  return STATUS_CLASS[(status || '').toLowerCase()] ?? 'agendada';
}

function ExamesTable({ exames }) {
  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Data</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {exames.map((exame) => (
            <tr key={exame.id}>
              <td className="td-primary">{exame.tipo}</td>
              <td>{exame.data}</td>
              <td>
                <span className={`status-badge status-badge--${statusClass(exame.status)}`}>
                  {exame.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExamesTable;