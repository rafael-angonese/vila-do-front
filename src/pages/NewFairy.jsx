import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

function NewFairy() {
  const [name, setName] = useState("");
  const [element, setElement] = useState("");
  const [healthPoint, setHealthPoint] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://vila-api.herokuapp.com/fairies",
        {
          name: name,
          element: element,
          health_point: Number(healthPoint),
        }
      );

      setName("")
      setElement("")
      setHealthPoint("")

      toast.success("Formulário envaido com sucesso!");
    } catch (error) {
      toast.error("Nao foi possível comunicar com o servidor");
    }
  };

  return (
    <>
      <div style={{ display: "flex-column" }}>
        <h1 style={{ textAlign: "center" }}>Nova Fada!</h1>
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
            value={element}
            label="Elemento"
            onChange={(event) => setElement(event.target.value)}
          />

          <Input
            value={healthPoint}
            label="HP"
            onChange={(event) => setHealthPoint(event.target.value)}
          />

          <Button>Enviar</Button>
        </form>
      </div>
    </>
  );
}

export default NewFairy;
