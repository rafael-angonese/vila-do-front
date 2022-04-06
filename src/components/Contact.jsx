import React, { useState } from "react";
import Button from "./Button/Button";
import Input from "./Input/Input";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submitForm = () => {
    console.log("-------------------");
  };

  return (
    <>

      <div style={{ display: "flex-column" }}>
        <h1 style={{ textAlign: "center" }}>Olá, mundo!</h1>
        <form
          onSubmit={submitForm}
          style={{ width: "400px", margin: "0 auto" }}
        >
          <Input
            value={name}
            label="Nome"
            onChange={(event) => setName(event.target.value)}
          />

          <Input
            value={email}
            label="Email"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />

          <Input
            value={phone}
            label="Telefone"
            onChange={(event) => setPhone(event.target.value)}
          />

          <Button>Enviar</Button>
        </form>
      </div>
    </>
  );
};

export default Contact;
