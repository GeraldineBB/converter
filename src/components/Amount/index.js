import PropTypes from 'prop-types';

import './styles.scss'; 

const Amount = ({ amount, setAmount }) => (
  <header className="amount">
    <h1 className="amount__title">Converter</h1>
    <p className="amount__amount">
      <input
        className="amount__value"
        type="number"
        value={amount > 0 ? amount : ''}
        onChange={
          (event) => {
            console.log(`champs modifié, nouvelle valeur: ${event.target.value}`);
            setAmount (Number(event.target.value)); 
          }
        }
      />
      {amount >= 2 ? 'euros' : 'euro'}
    </p>
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
  setAmount: PropTypes.func.isRequired, 
}

export default Amount; 
