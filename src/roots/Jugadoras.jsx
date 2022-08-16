import Table from "../components/Table";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function Jugadoras(props) {
  return (
    <>
      <Menu></Menu>

      <h1>Jugadoras</h1>
      <button className="btn-prim">+ Agregar Jugadora</button>
      <Table jugadoras={props.jugadoras}></Table>
      <Footer />
    </>
  );
}
