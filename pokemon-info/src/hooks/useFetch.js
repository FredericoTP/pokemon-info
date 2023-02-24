import { useState } from "react";

function useFetch() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchApi = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
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
    fetchApi,
  };
}

export default useFetch;