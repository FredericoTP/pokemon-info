import PropTypes from 'prop-types';
import HomeContext from "./HomeContext";
import useFetch from '../hooks/useFetch';

function HomeProvider({ children }) {
  const allPokemons = useFetch();

  return (
    <HomeContext.Provider value={ { allPokemons } }>
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