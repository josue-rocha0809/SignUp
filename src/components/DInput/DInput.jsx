import React from "react";
import "./styles.css";

const DInput = ({ label, type, placeholder }) => {
  return (
    <div className="DinputForm">
      <label className="label_Input" for={label}>
        {label}
      </label>
      <input
        className="form-control box_input"
        id={label}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default DInput;
