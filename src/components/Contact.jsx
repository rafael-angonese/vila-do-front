import React, { useState } from "react";
import Input from "./Input/Input";
import Label from "./Label";

// import { Container } from './styles';

const Contact = () => {
  const inputStyle = {
    width: "100%",
    padding: "12px 20px",
    marginBottom: "20px",
  };
  const buttonStyle = {
    width: "80px",
    padding: "5px 20px",
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "#ddd255",
    border: "1px solid #cccccc",
  };

  const [name, setName] = useState("");

  const submitForm = () => {
    alert(name)
    //
  }

  return (
    <>
      <div style={{ display: "flex-column" }}>
        <h1 style={{ textAlign: "center" }}>Olá, mundo!</h1>
        <form onSubmit={submitForm} style={{ width: "400px", margin: "0 auto" }}>
          <Label>Nome</Label>
          <Input
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            
          />
          {name}
          <Label>Email</Label>
          <input style={inputStyle} />
          <Label>Telefone</Label>
          <input style={inputStyle} />
          <button style={buttonStyle}>Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
