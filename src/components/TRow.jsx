import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import PlayerDetails from "./PlayerDetails";
import Categoria from "./Categoria";

export default function TRow(props) {
  return (
    <div className="trow">
      <div
        className="expand"
        onClick={() => {
          props.jugadora === props.jug ? props.setOpenPopUp((old) => !old) : props.setOpenPopUp(true);
          props.setJugadora(props.jug);
        }}
      >
        <div className="tcel">{props.jug.Nombre}</div>
        <div className="tcel">{props.jug.Apellido}</div>
        <div className="tcel">{props.jug.Nac}</div>
        <div className="tcel">{props.jug.Documento}</div>

        <div className="tcell">{props.jug.Categoria}</div>
        <div className="tcel">
          {props.jug.Socio}
          {props.jug.Activo ? <span className="active">&#10687;</span> : <span className="inactive"> &#10687;</span>}
        </div>

        {!props.openPopUp ? (
          <div className="tcel d-flex align-items-center more justify-content-center">
            <MdKeyboardArrowDown />
          </div>
        ) : props.jugadora === props.jug ? (
          <div className="tcel d-flex align-items-center more justify-content-center">
            <MdKeyboardArrowUp />
          </div>
        ) : (
          <div className="tcel d-flex align-items-center more justify-content-center">
            <MdKeyboardArrowDown />
          </div>
        )}
      </div>

      {props.jugadora === props.jug && props.openPopUp && <PlayerDetails jug={props.jug} />}
    </div>
  );
}
