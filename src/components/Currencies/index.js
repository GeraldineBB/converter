import PropTypes from 'prop-types'; 
import './styles.scss';

// on récupère la liste des données > tableau d'objet 
const Currencies = ({currencies}) => (
  <main className="currencies">
    
    <h2 className="currencies__title">Currencies</h2>
    <ul className="currencies__list">

      {
        currencies.map(
          (currency) => <li key={currency.name}className="currencies__item"> {currency.name}</li>
        )

      }

    </ul>

  </main>
);

Currencies.propTypes = {

  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
}; 

export default Currencies;
