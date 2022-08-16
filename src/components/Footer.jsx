import { Link, Routes, Route } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/jugadoras">
        Jugadoras
      </Link>
      <Link className="nav-link" to="/fixture">
        Fixture
      </Link>
    </footer>
  );
}
