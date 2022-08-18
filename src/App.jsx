import { useState, useEffect } from "react";

import { Link, Routes, Route } from "react-router-dom";
import * as bootstrap from "bootstrap";
import "./App.css";

import { initializeApp } from "firebase/app";
import Home from "./roots/Home";
import Cargar from "./roots/Cargar";
import Jugadoras from "./roots/Jugadoras";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDphmHOK9Tl_Y3JUNaGoltpVWtK4JBPamM",
    authDomain: "stm-hockey.firebaseapp.com",
    projectId: "stm-hockey",
    storageBucket: "stm-hockey.appspot.com",
    messagingSenderId: "885778141543",
    appId: "1:885778141543:web:5d049b97c432cb83869fc2",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const [jugadoras, setJugadoras] = useState([]);
  const [mayores, setMayores] = useState([]);
  const [sub19, setSub19] = useState([]);

  const lists = {
    jugadoras,
    mayores,
    sub19,
  };

  const options = {
    headers: {
      "x-apikey": "613731bc43cedb6d1f97edad",
    },
  };

  useEffect(() => {
    fetch(`https://cocktails-240e.restdb.io/rest/jugadoras`, options)
      .then((res) => res.json())
      .then((data) => {
        getCategories(data);
      });
  }, []);

  function getCategories(data) {
    data.map((jug) => {
      const birthYear = parseFloat(jug.Nac.substring(0, 4));
      const date = new Date();
      const currentYear = date.getFullYear();

      if (currentYear - birthYear === 7 || currentYear - birthYear === 8) {
        jug.Categoria = "Sub 18";
      } else if (currentYear - birthYear === 9 || currentYear - birthYear === 10) {
        jug.Categoria = "Sub 10";
      } else if (currentYear - birthYear === 11 || currentYear - birthYear === 12) {
        jug.Categoria = "Sub 12";
      } else if (currentYear - birthYear === 13 || currentYear - birthYear === 14) {
        jug.Categoria = "Sub 14";
      } else if (currentYear - birthYear === 15 || currentYear - birthYear === 16) {
        jug.Categoria = "Sub 16";
      } else if (currentYear - birthYear === 17 || currentYear - birthYear === 18 || currentYear - birthYear === 19) {
        jug.Categoria = "Sub 19";
        console.log("added to Sub 19");
        setSub19((old) => old.concat(jug));
      } else if (mayores.find((item) => item._id === jug._id)) {
        // console.log("the item is already in the basket");
      } else {
        setMayores((old) => [...old, { ...jug }]);
        jug.Categoria = "Mayores";
        // console.log("added to mayores");
      }
    });
    setJugadoras(data);
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agregar-jugadora" element={<Cargar />} />
      <Route path="/jugadoras" element={<Jugadoras {...lists} />} />
    </Routes>
  );
}

export default App;
