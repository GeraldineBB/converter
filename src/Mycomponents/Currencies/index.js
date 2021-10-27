import PropTypes from 'prop-types';
import Currency from './Currency';
import './styles.scss';

// je passe à Currencies mon tableau d'objet
/**ATTENTION il faut penser à donner currenciesData au moment où on "appelle" le composant dans index.js **/
const Currencies = ({ currencies }) => (

  <div className="content">

    <h4 className="content__title">Currencies</h4>

    <ul className="content__list">

  {/* pour chaque objet, je prends directment la propriété name, et j'appelle mon sous composant Currency en lui donnant les info nécessaires comme pour les autres composants */}
      {
        currencies.map(({name}) => (
          <Currency name={name} key={name} />
        ))
      }

    </ul>

  </div>

);

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired })).isRequired,
};

export default Currencies;
