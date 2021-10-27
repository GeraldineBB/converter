// Import des composants
import Amount from '../Amount'; 
import Currencies from '../Currencies';
import ConvertedAmount from '../ConvertedAmount';

// == Import
import './styles.scss';

// Import des données
// import currenciesData from '../../data/currencies';

// == Composant
const Converter = () => (

  <div className="converter">
    <Amount amount={1}/>
    <Currencies/>
    <ConvertedAmount/>
  </div>


);

// == Export
export default Converter;
