import { useContext, useEffect } from "react";
import HomeContext from "../context/HomeContext";
import PokemonCard from "../components/PokemonCard";

function Home() {
  const { allPokemons } = useContext(HomeContext);
  const {data, fetchAllPokemon} = allPokemons;
  useEffect(() => {
    const callApi = async () => {
      await fetchAllPokemon('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    };

    callApi();
  }, [])

  return (
    <div>
      <div>
        {
          data.length > 0 && (
            data.map((item, index) => <PokemonCard key={ index } response={ item } />)
          )
        }
      </div>
    </div>
  );
}

export default Home;