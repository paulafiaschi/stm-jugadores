import { useField, ErrorMessage } from "formik";

export default function TextField({ label, ...props }) {
  const [field, meta] = useField(props);

  // console.log(props);
  // console.log(field, meta);
  return (
    <div className="m-2 mb-2">
      <label htmlFor={field.name} className="form-label">
        {label}
      </label>
      {label === "Observaciones de la salud" ? (
        <textarea {...field} {...props} className="form-control" />
      ) : (
        <input className={`form-control ${meta.touched && meta.error && `is-invalid`}`} autoComplete="off" {...field} {...props} placeholder={props.placeholder} />
      )}

      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
}
