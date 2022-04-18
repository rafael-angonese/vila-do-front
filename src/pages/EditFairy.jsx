import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import LinearProgress from "../components/LinearProgress/LinearProgress";
import api from "../services/api";

function EditFairy() {
  const [name, setName] = useState("");
  const [element, setElement] = useState("");
  const [healthPoint, setHealthPoint] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getFairy() {
      try {
        const response = await api.get(`/fairies/${id}`);

        setName(response.data.name)
        setElement(response.data.element)
        setHealthPoint(response.data.health_point)

      } catch (error) {
        toast.error("Nao foi possível comunicar com o servidor");
      } finally {
        setLoading(false);
      }
    }

    getFairy();
  }, [id]);

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await api.put(`/fairies/${id}`, {
        name: name,
        element: element,
        health_point: Number(healthPoint),
      });

      toast.success("Formulário envaido com sucesso!");
      navigate("/fairies");
    } catch (error) {
      toast.error("Nao foi possível comunicar com o servidor");
    }
  };

  return (
    <>
      <br />
      <LinearProgress loading={loading} />

      <div style={{ display: "flex-column" }}>
        <h1 style={{ textAlign: "center" }}>Editar Fada!</h1>
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

export default EditFairy;
