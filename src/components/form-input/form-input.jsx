import React from "react";
import "./form-input.scss";

const FormInput = ({ label, onChange, value, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} onChange={onChange} />
      {label ? (
        <label className={`${value.length ? "shrink" : ""} form-input-label`}>
          {value.length === 0 ? label : null}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
