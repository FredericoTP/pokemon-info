import PropTypes from 'prop-types';
import HomeContext from "./HomeContext";
import useFetch from '../hooks/useFetch';

function HomeProvider({ children }) {
  const {data, error, loading, fetchAllPokemon} = useFetch();

  return (
    <HomeContext.Provider value={ { data, error, loading, fetchAllPokemon } }>
      {children}
    </HomeContext.Provider>
  );
}

HomeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default HomeProvider;