// Import des composants
import Amount from '../Amount'; 
import Currencies from '../Currencies';

// == Import
import './styles.scss';

// Import des données
// import currenciesData from '../../data/currencies';

// == Composant
const Converter = () => (

  <div className="converter">
    <Amount/>
    <Currencies/>
    <div>ConvertedAmount</div>
  </div>


);

// == Export
export default Converter;
