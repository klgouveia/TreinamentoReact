import { Outlet } from 'react-router-dom';
import { useContext } from "react";

import Navbar from './Navbar';
import PacienteContext from "./contexts/PacienteContext.jsx";


function MainLayout() {
  const { paciente } = useContext(PacienteContext);
  const { setPaciente } = useContext(PacienteContext);
  return (
    <>
      <Navbar paciente={paciente} setPaciente={setPaciente} />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;