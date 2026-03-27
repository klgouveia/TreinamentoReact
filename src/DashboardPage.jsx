import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

function DashboardPage({ paciente }) {

  const API_URL = "https://portal-unimed-fake-api.onrender.com";

  const [exames, setExames] = useState([]);
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const examesResponse = await axios.get(`${API_URL}/exames?pacienteId=${paciente.id}`);
        setExames(examesResponse.data);
        const consultasResponse = await axios.get(`${API_URL}/consultas?pacienteId=${paciente.id}`);
        setConsultas(consultasResponse.data);
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