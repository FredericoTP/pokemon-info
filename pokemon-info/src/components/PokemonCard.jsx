import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

function PokemonCard(props) {
  const {data, fetchAllPokemon} = useFetch();
  const { response } = props;
  console.log(response.url);

  // useEffect(() => {

  // }, []);

  return (
    <div>
      <p>asd</p>
    </div>
  );
}

export default PokemonCard;