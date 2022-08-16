export default function Categoria(props) {
  const date = new Date();
  const currentYear = date.getFullYear();

  let cat;

  if (currentYear - props.birthYear === 7 || currentYear - props.birthYear === 8) {
    cat = "Sub 8";
  } else if (currentYear - props.birthYear === 9 || currentYear - props.birthYear === 10) {
    cat = "Sub 10";
  } else if (currentYear - props.birthYear === 11 || currentYear - props.birthYear === 12) {
    cat = "Sub 12";
  } else if (currentYear - props.birthYear === 13 || currentYear - props.birthYear === 14) {
    cat = "Sub 14";
  } else if (currentYear - props.birthYear === 15 || currentYear - props.birthYear === 16) {
    cat = "Sub 16";
  } else if (currentYear - props.birthYear === 17 || currentYear - props.birthYear === 18 || currentYear - props.birthYear === 19) {
    cat = "Sub 19";
  } else {
    cat = "Mayores";
  }

  return <td>{cat}</td>;
}
