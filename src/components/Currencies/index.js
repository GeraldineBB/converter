import PropTypes from 'prop-types'; 

import Currency from './Currency'; 

import './styles.scss';

// on récupère la liste des données > tableau d'objet 
const Currencies = ({currencies, changeCurrency}) => (
  <main className="currencies">
    
    <h2 className="currencies__title">Currencies</h2>
    <ul className="currencies__list">

      {
        currencies.map(
          // ici, on déverse l'ensemble des propriétés de l'objet currency
          // dans des props du composant Cirrency qui portent le même nom
          // i.e. :
          // - currency.id dans une prop id de Currency
          // - currency.name dans une prop name de Currency
          (currency) => <Currency key={currencies.name} {...currency} changeCurrency={changeCurrency} />
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
