import React from "react";

// import { Container } from './styles';

function Input({ value, onChange }) {
  const inputStyle = {
    width: "100%",
    padding: "12px 20px",
    marginBottom: "20px",
  };

  return <input value={value} onChange={onChange} style={inputStyle} />;
}

export default Input;
