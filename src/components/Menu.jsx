import { Link, Routes, Route } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <nav className="navbar bg-light fixed-top">
        <div className="container-fluid">
          <Link className="nav-link" to="/">
            <img className="logo" src="/images/logo.png" alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/jugadoras">
                    Jugadoras
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/agregar-jugadora">
                    Agregar jugadora
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
