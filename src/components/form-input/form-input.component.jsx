import "../form-input/form-input.style.scss";

const FormInput = ({ label, labelFor, ...otherProps }) => {
  return (
    <div className="input-group">
      <input {...otherProps} className="form-input" />
      {
        // if label exist then render, if not then not
        label && (
          <label
            htmlFor={labelFor}
            className={`${
              otherProps.value.length ? "shrink" : ""
            } form-input-label`} //shrink when value is not 0
          >
            {label}
          </label>
        )
      }
    </div>
  );
};

export default FormInput;
