import { Outlet } from 'react-router-dom';
import { useContext } from "react";

import Navbar from './Navbar';
import { usePaciente } from "./contexts/PacienteContext.jsx";


function MainLayout() {
  const { paciente } = usePaciente();
  const { setPaciente } = usePaciente();
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