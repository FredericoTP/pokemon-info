import { useContext, useEffect } from "react";
import HomeContext from "../context/HomeContext";

function Home() {
  const { data, fetchAllPokemon } = useContext(HomeContext);

  useEffect(() => {
    const callApi = async () => {
      await fetchAllPokemon('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    };

    callApi();
  }, [])

  console.log(data);

  return (
    <div>
      <p>asd</p>
    </div>
  );
}

export default Home;