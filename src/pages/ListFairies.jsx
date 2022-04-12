import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import FairyCard from "../components/FairyCard/FairyCard";
import LinearProgress from "../components/LinearProgress/LinearProgress";
import api from "../services/api";

const ListFairies = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("/fairies")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Nao foi possivel comunicar com o servidor");
      });
      
  }, []);

  return (
    <>
      <br />
      <LinearProgress loading={loading} />

      <div style={{ display: "flex" }}>
        {data.map((fairy) => (
          <FairyCard
            key={fairy.id}
            name={fairy.name}
            element={fairy.element}
            healthPoint={fairy.health_point}
          />
        ))}
      </div>
    </>
  );
};

export default ListFairies;
