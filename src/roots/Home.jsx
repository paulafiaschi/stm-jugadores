import Menu from "../components/Menu";
import { Link, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <>
      <img src="/images/logo.png" alt="" className="logo-grande" />
      <h1>STM Sports Club</h1>

      <div className="container d-flex justify-content-center">
        <Link to="/jugadoras" className="a-home">
          Jugadoras
        </Link>

        <Link to="/fixture" className="a-home">
          Fixture
        </Link>
      </div>
    </>
  );
}
