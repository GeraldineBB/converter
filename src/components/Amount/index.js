import PropTypes from 'prop-types';

import './styles.scss'; 

const Amount = ({amount}) => (
  <header className="amount">
    <h1 className="amount__title">Converter</h1>
    <p className="amount__amount">{amount} {amount >= 2 ? "euros" : "euro"}</p>
  </header>
);

// on indique que si aucune valeur n'est transmise 
// pour amont, c'est la valeur 1 qui sera utilisée
Amount.defaultProps = {
  amount: 1, 
}

// si une props n'est pas requise, il faut préciser sa valeur par défault 
Amount.propTypes = {
  amount: PropTypes.number, 
}

export default Amount; 
