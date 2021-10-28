import PropTypes from 'prop-types'; 

import Currency from './Currency'; 

import './styles.scss';

// on récupère la liste des données > tableau d'objet 
const Currencies = ({currencies, changeCurrency, filter, setFilter}) => (
  <main className="currencies">
    
    <input 
    // on force la valeur de l'input 
    // ici on donne le controle à REact >> on ne peut plus modifier le champs 
    // obligé de faire boucle car valeur du champs stocké dans le DOM, il faut qu'elle soit enregistrée dans le state
      value={filter} 
      type="text" 
      className="currencies__filter" 
      placeholder="Rechercher votre devise" 
      onChange={
        (event) => {
          console.log(`champs modifié, nouvelle valeur: ${event.target.value}`);
          setFilter(event.target.value); 
        }
      }
    />
    <ul className="currencies__list">

      {
        currencies.map(
          // ici, on déverse l'ensemble des propriétés de l'objet currency
          // dans des props du composant Cirrency qui portent le même nom
          // i.e. :
          // - currency.id dans une prop id de Currency
          // - currency.name dans une prop name de Currency
          (currency) => <Currency key={currencies.name} changeCurrency={changeCurrency} {...currency}  />
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
  // on valide la prop SetCurrency, c'est une fonction qui est obligatoire
  changeCurrency: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Currencies;
