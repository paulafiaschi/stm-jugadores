import Menu from "../components/Menu";

import { Link, Routes, Route } from "react-router-dom";

export default function Mayores(props) {
  const firstPractice = new Date("August 18, 2022");

  const day = firstPractice.getDate();
  const month = firstPractice.getMonth() + 1;
  console.log(day, month);
  return (
    <>
      <Menu></Menu>

      <h1>Mayores</h1>
      <h2>Agosto</h2>

      <table>
        <thead>
          <tr>
            <th>Jugadora</th>
            <th>{day}</th>
            <th>{day + 3}</th>
            <th>{day + 6}</th>
            <th>{day + 9}</th>
          </tr>
        </thead>
        <tbody>
          {props.mayores.map((jug) => {
            return (
              <tr>
                <td>
                  {jug.Apellido} {jug.Nombre}
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
