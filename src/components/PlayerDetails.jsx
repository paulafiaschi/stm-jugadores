import { useState } from "react";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiIdentification } from "react-icons/hi";

import EditPlayer from "./EditPlayer";

export default function PlayerDetails(props) {
  const [editarInfo, setEditarInfo] = useState(false);
  // console.log(props);
  return (
    <>
      <div className="tdetail">
        {editarInfo ? (
          <EditPlayer jug={props.jug} setEditarInfo={setEditarInfo} />
        ) : (
          <>
            <div className="details">
              <div className="my-row">
                <h3>
                  {props.jug.Nombre} {props.jug.Apellido}
                </h3>
                <h4>
                  {props.jug.Categoria} - Socio n: {props.jug.Socio}
                </h4>
                <h5>{props.jug.Nac}</h5>
              </div>

              <div className="my-row">
                <h5 className="d-flex align-items-center">
                  <BsFillPhoneFill /> {props.jug.Tel}
                </h5>
                <h5 className="d-flex align-items-center">
                  <MdEmail /> {props.jug.Email}
                </h5>
                <h5 className="d-flex align-items-center">
                  <HiIdentification /> {props.jug.Documento}
                </h5>
              </div>

              <div className="group">
                <div className="my-row">
                  <p>
                    Nacionalidad: <span className="data">{props.jug.Nacionalidad}</span>
                  </p>
                  <p>
                    Domicilio: <span className="data">{props.jug.Domicilio}</span>
                  </p>
                  <p>
                    Comuna: <span className="data">{props.jug.Comuna}</span>
                  </p>
                  <p>
                    Ciudad: <span className="data">{props.jug.Ciudad}</span>
                  </p>
                </div>
                <div className="my-row">
                  <p>
                    Colegio: <span className="data">{props.jug.Colegio}</span>
                  </p>
                  <p>
                    Seguro Médico: <span className="data">{props.jug.Seguro}</span>
                  </p>
                  <p>
                    Trasladar a: <span className="data">{props.jug.Traslado}</span>
                  </p>
                  <p>
                    Observaciones de Salud: <span className="data">{props.jug.Obs}</span>
                  </p>
                </div>
              </div>
              <div className="group">
                <div className="my-row">
                  <h4>Datos de la madre</h4>
                  <p>
                    {props.jug.Mad_nom} {props.jug.Mad_apell}
                  </p>
                  <p>{props.jug.Mad_tel}</p>
                  <p>{props.jug.Mad_email}</p>
                </div>
                <div className="my-row">
                  <h4>Datos del padre</h4>
                  <p>
                    {props.jug.Pad_nom} {props.jug.Pad_apell}
                  </p>
                  <p>{props.jug.Pad_tel}</p>
                  <p>{props.jug.Pad_email}</p>
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
            <button onClick={() => setEditarInfo(true)}>Editar info</button>
          </>
        )}
      </div>
    </>
  );
}
