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

  const options = {
    headers: {
      "x-apikey": "613731bc43cedb6d1f97edad",
    },
  };

  useEffect(() => {
    fetch(`https://cocktails-240e.restdb.io/rest/jugadoras`, options)
      .then((res) => res.json())
      .then((data) => {
        setJugadoras(data);
        // console.log(data);
      });
  }, []);

  // console.log(jugadoras);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agregar-jugadora" element={<Cargar />} />
      <Route path="/jugadoras" element={<Jugadoras jugadoras={jugadoras} />} />
    </Routes>
  );
}

export default App;
