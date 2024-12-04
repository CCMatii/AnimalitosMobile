import { useEffect, useState } from "react";
import { fetchAnimales } from "../services/api";

export default function useFetchAnimales() {
  const [animales, setAnimales] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAnimales = async () => {
      try {
        const { data } = await fetchAnimales();
        setAnimales(data);
      } catch (error) {
        setError("Error al cargar los animales");
      }
    };
    getAnimales();
  }, []);

  return { animales, error };
}
