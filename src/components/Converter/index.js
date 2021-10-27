// Import des composants
import Amount from '../Amount'; 
import Currencies from '../Currencies';
import ConvertedAmount from '../ConvertedAmount';

// == Import
import './styles.scss';

// Import des données
import currenciesList from '../../data/currencies';

// == Composant
const Converter = () => (

  <div className="converter">
    <Amount amount={1}/>
    <Currencies currencies={currenciesList}/>
    <ConvertedAmount amount={1.08} currency="Blabla"/>
  </div>


);

// == Export
export default Converter;
