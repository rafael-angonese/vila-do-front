import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import FairyCard from "../components/FairyCard/FairyCard";
import LinearProgress from "../components/LinearProgress/LinearProgress";
import api from "../services/api";

const ShowFairy = () => {
  const { id } = useParams();
  const [fairy, setFairy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getFairy() {
      try {
        const response = await api.get(`/fairies/${id}`);

        setFairy(response.data);
      } catch (error) {
        toast.error("Nao foi possível comunicar com o servidor");
      } finally {
        setLoading(false);
      }
    }

    getFairy();
  }, [id]);

  return (
    <>
      <br />
      <LinearProgress loading={loading} />

      <FairyCard fairy={fairy} />
    </>
  );
};

export default ShowFairy;
