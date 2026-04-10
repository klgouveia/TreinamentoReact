import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { post } from "./services/api";
import { get } from "./services/api";
import { useContext } from "react";

import PacienteContext from "./contexts/PacienteContext.jsx";

function DashboardPage() {
  const API_URL = "https://portal-unimed-fake-api.onrender.com";

  const { paciente } = useContext(PacienteContext);

  const [exames, setExames] = useState([]);
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const examesResponse = await get(`/exames?pacienteId=${paciente.id}`);
        setExames(examesResponse);
        const consultasResponse = await get(`/consultas?pacienteId=${paciente.id}`);
        setConsultas(consultasResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!exames.length || !consultas.length) {
    return <LoadingSpinner />
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem-vindo, {paciente.nome}!</p>
      {exames.length > 0 ? <p>Exames: {exames.length}</p> : <p>Carregando exames...</p>}
      {consultas.length > 0 ? <p>Consultas: {consultas.length}</p> : <p>Carregando consultas...</p>}
    </div>
  );
}

export default DashboardPage;