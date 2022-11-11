import createUID from "create-unique-id";
import { useState } from "react";

import TRow from "./TRow";
import THead from "./THead";
import SearchBar from "./SearchBar";

export default function Table(props) {
  const [jugadora, setJugadora] = useState([]);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [list, setList] = useState([]);
  const [searched, setSearched] = useState("");

  // console.log(props.mayores);
  console.log(props.jugadoras);

  function filterList(filteredList) {
    setList(filteredList);
    console.log(filteredList);
  }
  console.log(list);
  console.log("searched,", searched);

  return (
    <>
      <div className="filters">
        <div className="filter-buttons">
          <button onClick={() => filterList(props.jugadoras)}>Todas</button>
          <button onClick={() => filterList(props.mayores)}>Mayores</button>
          <button onClick={() => filterList(props.sub19)}>Sub19</button>
          <button onClick={() => filterList(props.sub16)}>Sub16</button>
          <button onClick={() => filterList(props.sub14)}>Sub14</button>
          <button onClick={() => filterList(props.sub12)}>Sub12</button>
          <button onClick={() => filterList(props.sub10)}>Sub10</button>
          <button onClick={() => filterList(props.sub8)}>Sub8</button>
        </div>
        <SearchBar searched={searched} setSearched={setSearched} jugadoras={list} />
      </div>
      <div className="jugadorass">
        <THead />

        {searched !== ""
          ? searched.map((jug) => {
              console.log("searched");
              return <TRow jugadora={jugadora} jug={jug} setOpenPopUp={setOpenPopUp} setJugadora={setJugadora} openPopUp={openPopUp} {...props} key={createUID(4)} />;
            })
          : list.length !== 0
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
