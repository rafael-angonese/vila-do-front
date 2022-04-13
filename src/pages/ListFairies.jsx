import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import FairyCard from "../components/FairyCard/FairyCard";
import LinearProgress from "../components/LinearProgress/LinearProgress";
import api from "../services/api";

const ListFairies = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const onDeleteFairy = async (id) => {
    try {
      const response = await api.delete(`/fairies/${id}`);

      const newData = data.filter((fairy) => fairy.id !== id);
      setData(newData);

      toast.success("Fada deletada com sucesso!");
    } catch (error) {
      toast.error("Nao foi possível remover essa fada");
    }
  };

  useEffect(() => {
    api
      .get("/fairies")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Nao foi possível comunicar com o servidor");
      });
  }, []);

  return (
    <>
      <br />
      <LinearProgress loading={loading} />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((fairy) => (
          <FairyCard key={fairy.id} fairy={fairy} onDelete={onDeleteFairy} />
        ))}
      </div>
    </>
  );
};

export default ListFairies;
