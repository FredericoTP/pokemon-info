import { useState } from "react";

function useFetch() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAllPokemon = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.results);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    fetchAllPokemon,
  };
}

export default useFetch;