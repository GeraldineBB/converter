// Import des composants
import Header from '../Header';
import Currencies from '../Currencies';
import Results from '../Results';

// == Import
import './styles.scss';

// Import des données
import currenciesData from '../../data/currencies';

// == Composant
const Converter = () => (

  <div className="converter">

    <div className="converter__container">
      <Header />
      <Currencies currencies={currenciesData} />
      <Results />

    </div>

  </div>

);

// == Export
export default Converter;
