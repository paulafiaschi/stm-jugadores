import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Table from "../components/Table";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function Jugadoras(props) {
  return (
    <>
      <Menu></Menu>

      <h1>Jugadoras</h1>
      <button className="btn-prim">
        <Link className="nav-link" to="/agregar-jugadora">
          + Agregar jugadora
        </Link>
      </button>

      <Table {...props}></Table>
      <Footer />
    </>
  );
}
