import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button/Button";
import FairyCard from "../components/FairyCard/FairyCard";
import LinearProgress from "../components/LinearProgress/LinearProgress";
import api from "../services/api";

const ListFairies = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  const location = useLocation()
  const [filter, setFilter] = useState('')

  // console.log(location)
  // console.log(window.location)


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
      .get(`/fairies?query=${filter}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Nao foi possível comunicar com o servidor");
      });
  }, [filter]);


  useEffect(() => {
    console.log('executou o useeffect')
  }, [filter])

  return (
    <>
      <br />
      <LinearProgress loading={loading} />

      <Button onClick={() => navigate('/fairies/new')}>Nova Fada</Button>

      <Input value={filter} onChange={(event) => setFilter(event.target.value)} placeholder="Digite o nome da Fada" />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((fairy) => (
          <FairyCard key={fairy.id} fairy={fairy} onDelete={onDeleteFairy} />
        ))}
      </div>
    </>
  );
};

export default ListFairies;
