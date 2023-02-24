import PropTypes from 'prop-types';
import HomeContext from "./HomeContext";

function HomeProvider({ children }) {
  return (
    <HomeContext.Provider value={ { asd:'asd' } }>
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