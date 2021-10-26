// Import des composants
import Header from '../Header';
import Currencies from '../Currencies';
import Results from '../Results';

// == Import
import './styles.scss';

// Import des données
// import currenciesData from '../../data/currencies';

// == Composant
const App = () => (

  <div className="app">
    <Header />
    <Currencies />
    <Results />

  </div>

);

// == Export
export default App;
