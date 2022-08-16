import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import PlayerDetails from "./PlayerDetails";

export default function TRow(props) {
  return (
    <div className="trow">
      <div
        className="expand"
        type="button"
        onClick={() => {
          props.jugadora === props.jug ? props.setOpenPopUp((old) => !old) : props.setOpenPopUp(true);
          props.setJugadora(props.jug);
          console.log("click");
        }}
      >
        <div className="tcel">{props.jug.Nombre}</div>
        <div className="tcel">{props.jug.Apellido}</div>
        <div className="tcel">{`${props.jug.Nac.substring(8, 10)}/${props.jug.Nac.substring(5, 7)}/${props.jug.Nac.substring(0, 4)}`}</div>
        <div className="tcel"></div>
        <div className="tcel"></div>
        <div className="tcel"></div>
        {props.openPopUp === false ? (
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

      {props.jugadora === props.jug && props.openPopUp === true && <PlayerDetails jug={props.jug} />}
    </div>
  );
}
