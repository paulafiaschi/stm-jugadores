import { Formik, Form } from "formik";
import createUID from "create-unique-id";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { BsCheckCircleFill } from "react-icons/bs";

import TextField from "./TextField";

export default function EditPlayer(props) {
  const [submitted, setSubmitted] = useState(false);
  console.log(props);

  function handleSubmit(values) {
    const postData = JSON.stringify(values);
    fetch(`https://cocktails-240e.restdb.io/rest/jugadoras/${props.jug._id}`, {
      method: "put",
      headers: {
        "Content-type": "application/json",
        "x-apikey": "613731bc43cedb6d1f97edad",
      },
      body: postData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function closeMessage() {
    setSubmitted(false);
    props.setEditarInfo(false);
  }

  const initial_form_state = {
    Nombre: props.jug.Nombre,
    Apellido: props.jug.Apellido,
    Documento: props.jug.Documento,
    Nac: props.jug.Nac,
    Activo: true,
    Nacionalidad: props.jug.Nacionalidad,
    Domicilio: props.jug.Domicilio,
    Comuna: props.jug.Comuna,
    Ciudad: props.jug.Ciudad,
    Tel: props.jug.Tel,
    Email: props.jug.Email,
    Colegio: props.jug.Colegio,
    Seguro: props.jug.Seguro,
    Traslado: props.jug.Traslado,
    Obs: props.jug.Obs,
    Mad_nom: props.jug.Mad_nom,
    Mad_apell: props.jug.Mad_apell,
    Mad_tel: props.jug.Mad_tel,
    Mad_email: props.jug.Mad_email,
    Pad_nom: props.jug.Pad_nom,
    Pad_apell: props.jug.Pad_apell,
    Pad_tel: props.jug.Pad_tel,
    Pad_email: props.jug.Pad_email,
  };
  <div className="edit-details">Editar Informacion</div>;

  const validation = Yup.object().shape({
    Nombre: Yup.string().required("Required"),
    Apellido: Yup.string().required("Required"),
    // Email: Yup.string().email("Invalid email"),
    // Tel: Yup.number().integer().typeError("Invalid phone"),
  });
  return (
    <Formik
      initialValues={{ ...initial_form_state }}
      validationSchema={validation}
      onSubmit={(values, { resetForm }) => {
        console.log("set submitted to true");
        setSubmitted(true);
        setTimeout(closeMessage, 1000);

        handleSubmit(values);

        resetForm({ values: "" });
        console.log("form resetted");
      }}
    >
      {(formik) => (
        <>
          {/* {console.log(formik)} */}

          <form onSubmit={formik.handleSubmit} id="edit">
            <h2>Editar Info</h2>
            <fieldset>
              <legend>Información personal</legend>
              <div className="form-group">
                <TextField label="Nombre" name="Nombre" type="text" />
                <TextField label="Apellido" name="Apellido" type="text" />
                <TextField label="Documento" name="Documento" type="tel" />
              </div>

              <div className="form-group">
                <TextField label="Nacionalidad" name="Nacionalidad" type="text" />
                <TextField label="Fecha de Nacimiento" name="Nac" type="text" placeholder="21/02/1999" />
              </div>

              <div className="form-group">
                <TextField label="Telefono" name="Tel" type="tel" />
                <TextField label="Email" name="Email" type="email" />
              </div>
            </fieldset>

            <fieldset>
              <legend>Direcciones</legend>
              <div className="form-group">
                <TextField label="Domicilio" name="Domicilio" type="text" />
                <TextField label="Comuna" name="Comuna" type="text" />
                <TextField label="Ciudad" name="Ciudad" type="text" />
              </div>
              <div className="form-group">
                <TextField label="Colegio" name="Colegio" type="text" />
                <TextField label="Seguro Médico" name="Seguro" type="text" />
                <TextField label="Trasladar a" name="Traslado" type="text" />
              </div>
              <TextField label="Observaciones de la salud" name="Obs" type="text" />
            </fieldset>

            <fieldset>
              <legend>Datos de la Madre</legend>
              <div className="form-group">
                <TextField label="Nombre" name="Mad_nom" type="text" />
                <TextField label="Apellido" name="Mad_apell" type="text" />
              </div>
              <div className="form-group">
                <TextField label="Telefono" name="Mad_tel" type="tel" />
                <TextField label="Email" name="Mad_email" type="email" />
              </div>
            </fieldset>
            <fieldset>
              <legend>Datos del Padre</legend>
              <div className="form-group">
                <TextField label="Nombre" name="Pad_nom" type="text" />
                <TextField label="Apellido" name="Pad_apell" type="text" />
              </div>
              <div className="form-group">
                <TextField label="Telefono" name="Pad_tel" type="tel" />
                <TextField label="Email" name="Pad_email" type="email" />
              </div>
            </fieldset>
            <div className="buttons">
              <button type="submit" className="btn btn-dark">
                Guardar
              </button>
              <button type="reset" className="btn btn-reset" onClick={() => props.setEditarInfo(false)}>
                Cancelar
              </button>
            </div>
          </form>

          <div className={`${submitted ? "success" : "d-none"}`}>
            <BsCheckCircleFill />
            <p>Información actualizada</p>
          </div>
          {/* <div className="success">
            <BsCheckCircleFill />
            <p>Player successfully added</p>
          </div> */}
        </>
      )}
    </Formik>
  );
}
