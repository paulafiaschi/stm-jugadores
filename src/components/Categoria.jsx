export default function Categoria(props) {
  const date = new Date();
  const currentYear = date.getFullYear();

  const birthYear = parseFloat(props.fecha.substring(0, 4));

  if (currentYear - birthYear === 7 || currentYear - birthYear === 8) {
    props.setCategoria("Sub 8");
  } else if (currentYear - birthYear === 9 || currentYear - birthYear === 10) {
    props.setCategoria("Sub 10");
  } else if (currentYear - birthYear === 11 || currentYear - birthYear === 12) {
    props.setCategoria("Sub 12");
  } else if (currentYear - birthYear === 13 || currentYear - birthYear === 14) {
    props.setCategoria("Sub 14");
  } else if (currentYear - birthYear === 15 || currentYear - birthYear === 16) {
    props.setCategoria("Sub 16");
  } else if (currentYear - birthYear === 17 || currentYear - birthYear === 18 || currentYear - birthYear === 19) {
    props.setCategoria("Sub 19");
  } else {
    props.setCategoria("Mayores");
  }

  return <div className="tcell">{props.categoria}</div>;
}
