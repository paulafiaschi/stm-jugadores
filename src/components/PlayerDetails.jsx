import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function PlayerDetails(props) {
  console.log(props);
  return (
    <div className="tdetail">
      <div className="details">
        <div className="my-row">
          <p className="d-flex align-items-center">
            <BsFillPhoneFill /> 81997564
          </p>
          <p className="d-flex align-items-center">
            <MdEmail /> patucampos@gmail.com
          </p>
        </div>

        <div className="group">
          <div className="my-row">
            <p>
              Nacionalidad: <span className="data">{props.jug.Nombre}</span>
            </p>
            <p>
              Domicilio: <span className="data">{props.jug.Nombre}</span>
            </p>
            <p>Comuna:</p>
            <p>Ciudad:</p>
          </div>
          <div className="my-row">
            <p>Colegio:</p>
            <p>Seguro Médico:</p>
            <p>Trasladar a:</p>
            <p>Observaciones de Salud:</p>
          </div>
        </div>
        <div className="group">
          <div className="my-row">
            <h4>Datos de la madre</h4>
            <p>Nombre y Apellido</p>
            <p>Teléfono:</p>
            <p>Email:</p>
          </div>
          <div className="my-row">
            <h4>Datos del padre</h4>
            <p>Nombre y Apellido</p>
            <p>Teléfono:</p>
            <p>Email:</p>
          </div>
        </div>
        <div className="group">
          <details className="my-row">
            <summary>Historial deportivo</summary>
            <p>Asistencia:</p>
            <p>Tarjetas:</p>
            <p>Goles:</p>
          </details>
        </div>
      </div>
    </div>
  );
}
