import Menu from "../components/Menu";
import { Link, Routes, Route } from "react-router-dom";

export default function Asistencia() {
  return (
    <>
      <Menu></Menu>

      <h1>Asistencia</h1>

      <Link className="nav-link" to="/asistencia/mayores">
        Mayores
      </Link>
    </>
  );
}
