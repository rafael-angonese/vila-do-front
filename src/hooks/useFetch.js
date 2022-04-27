import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        toast.error("Nao foi possível comunicar com o servidor");
      });
  }, []);

  return [data]
};

export default useFetch;
