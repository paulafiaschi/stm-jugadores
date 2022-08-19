import { AiOutlineSearch } from "react-icons/ai";
import { useRef } from "react";

export default function SearchBar(props) {
  // const [input, setInput] = useState("");
  const search = useRef();

  function searchPlayers(e) {
    const input = e.target.value.toLowerCase();
    console.log("input,", input);

    const searchedPlayers = props.jugadoras.filter((jug) => {
      return jug.Nombre.toLowerCase().includes(input);
    });
    input === "" ? props.setSearched("") : props.setSearched(searchedPlayers);
  }

  return (
    <div className="">
      <label htmlFor="">Search</label>
      <div className="">
        <input type="text" id="searchBar" ref={search} onChange={searchPlayers} />
        <AiOutlineSearch />
      </div>
    </div>
  );
}
