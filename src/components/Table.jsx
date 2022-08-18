import createUID from "create-unique-id";
import { useState } from "react";

import TRow from "./TRow";

import THead from "./THead";

export default function Table(props) {
  const [jugadora, setJugadora] = useState([]);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [list, setList] = useState([]);
  console.log(props.mayores);

  function filterList(filteredList) {
    setList(filteredList);
    console.log(filteredList);
  }
  console.log(list);

  return (
    <>
      <div className="filters">
        <button onClick={() => filterList(props.jugadoras)}>Todas</button>
        <button onClick={() => filterList(props.mayores)}>Mayores</button>
        <button onClick={() => filterList(props.sub19)}>Sub19</button>
      </div>
      <div className="jugadorass">
        <THead />

        {list.length !== 0
          ? list.map((jug) => {
              console.log("a");
              return <TRow jugadora={jugadora} jug={jug} setOpenPopUp={setOpenPopUp} setJugadora={setJugadora} openPopUp={openPopUp} {...props} key={createUID(4)} />;
            })
          : props.jugadoras.length > 0 &&
            props.jugadoras.map((jug) => {
              console.log("b");

              return (
                <>
                  <TRow jugadora={jugadora} jug={jug} setOpenPopUp={setOpenPopUp} setJugadora={setJugadora} openPopUp={openPopUp} {...props} key={createUID(4)} />
                </>
              );
            })}
      </div>
    </>
  );
}
