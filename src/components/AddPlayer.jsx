import { Formik, Form } from "formik";
import createUID from "create-unique-id";
import TextField from "./TextField";
import * as Yup from "yup";

export default function AddPlayer() {
  function handleSubmit(values) {
    console.log(values);

    const postData = JSON.stringify(values);
    fetch(`https://cocktails-240e.restdb.io/rest/jugadoras`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
        "x-apikey": "613731bc43cedb6d1f97edad",
      },
      body: postData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log("values,", values);
  }

  const initial_form_state = {
    Nombre: "",
    Apellido: "",
    Documento: "",
    Nac: "",
    Activo: true,
    Nacionalidad: "",
    Domicilio: "",
    Comuna: "",
    Ciudad: "",
    Tel: "",
    Email: "",
    Colegio: "",
    Seguro: "",
    Traslado: "",
    Obs: "",
    Mad_nom: "",
    Mad_apell: "",
    Mad_tel: "",
    Mad_email: "",
    Pad_nom: "",
    Pad_apell: "",
    Pad_tel: "",
    Pad_email: "",
  };

  const validation = Yup.object().shape({
    Nombre: Yup.string().required("Required"),
    Apellido: Yup.string().required("Required"),
    Documento: Yup.number().required("Required"),
    Email: Yup.string().email("Invalid email"),
    Tel: Yup.number().integer().typeError("Invalid phone"),
  });
  return (
    <Formik
      initialValues={{ ...initial_form_state }}
      validationSchema={validation}
      onSubmit={(values) => {
        handleSubmit(values);
        // console.log(values);
      }}
    >
      {(formik) => (
        <div>
          <h1>Cargar jugadora</h1>
          {/* {console.log(formik.values)} */}

          <Form>
            <fieldset>
              <legend>Información personal</legend>
              <div className="form-group">
                <TextField label="Nombre" name="Nombre" type="text" />
                <TextField label="Apellido" name="Apellido" type="text" />
              </div>

              <div className="form-group">
                <TextField label="Documento" name="Documento" type="number" />
                <TextField label="Nacionalidad" name="Nacionalidad" type="text" />
              </div>

              <TextField label="Fecha de Nacimiento" name="Nac" type="date" />

              <div className="form-group">
                <TextField label="Telefono" name="Tel" type="number" />
                <TextField label="Email" name="Email" type="email" />
              </div>
            </fieldset>

            <fieldset>
              <legend>Direcciones</legend>
              <TextField label="Domicilio" name="Domicilio" type="text" />
              <div className="form-group">
                <TextField label="Comuna" name="Comuna" type="text" />
                <TextField label="Ciudad" name="Ciudad" type="text" />
              </div>
              <TextField label="Colegio" name="Colegio" type="text" />
              <div className="form-group">
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
                <TextField label="Telefono" name="Mad_tel" type="number" />
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
                <TextField label="Telefono" name="Pad_tel" type="number" />
                <TextField label="Email" name="Pad_email" type="email" />
              </div>
            </fieldset>
            <button type="submit" className="btn btn-dark">
              Agregar
            </button>
            <button type="reset" className="btn btn-danger">
              Cancelar
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}