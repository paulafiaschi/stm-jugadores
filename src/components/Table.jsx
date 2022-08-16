import createUID from "create-unique-id";
import { useState } from "react";

import TRow from "./TRow";

export default function Table(props) {
  // console.log(props.jugadoras);

  const [jugadora, setJugadora] = useState([]);
  const [openPopUp, setOpenPopUp] = useState(false);

  return (
    <div className="jugadorass">
      <div className="thead">Nombre</div>
      <div className="thead">Apellido</div>
      <div className="thead">Fecha Nac</div>
      <div className="thead">Documento</div>
      <div className="thead">Categoria</div>
      <div className="thead">Socio</div>
      {props.jugadoras.length > 0 &&
        props.jugadoras.map((jug) => {
          return <TRow jugadora={jugadora} jug={jug} setOpenPopUp={setOpenPopUp} setJugadora={setJugadora} openPopUp={openPopUp} key={createUID(4)} />;
        })}
    </div>
  );
}
