/* eslint-disable react/sort-comp */
// import npm
import React from 'react';

// Import des composants
import Amount from '../Amount';
import Currencies from '../Currencies';
import ConvertedAmount from '../ConvertedAmount';
import Toggler from '../Toggler';

// == Import
import './styles.scss';

// Import des données
import currenciesList from '../../data/currencies';

class Converter extends React.Component {
  // grâce à Babel on peut utiliser les propriétés d'instance
  // ici c'est comme si on disait this.state = ...
  state = {
    open: true,
    amount: 1,
    currency: 'Bulgarian Lev',
    // on prévoit dans le state une valeur initiale pour le champs de recherche
    filter: '',
  }

  // on déclare une méthode toggle
  // pour inverser la propriété open
  // on récupère la valeur courante
  // et on prend l'inverse
  toggle = () => {
    // équivalent à :
    // const open =  this.state.open;
    const { open } = this.state;

    // on met à jour le state
    // setState permet de mettre à jour le state
    // et de rendre à nouveau le composant qui contient le state
    // et aussi tous ces enfants
    this.setState({ open: !open });
  }

  // une fonction pour changer le state de currency
  // eslint-disable-next-line max-len
  // ensuite quand on va cliquer sur un li, on va changer le currency et ça aura directement des répercussions sur le getConvertedAmount sans qu'on ait à changer la fonction
  // cette methode permet de mettre à jour la devise
  // Il va falloir la faire descendre la référence à cette méthode
  // au composant qui en a besoin : Currency
  // pour se faire, on va faire en sorte de la transmettre au composant intermédiaire Currencies
  changeCurrency = (currencyName) => {
    // eslint-disable-next-line no-console
    // console.log("changeCurrency",currencyName);

    this.setState({ currency: currencyName });
  }

  setFilter = (filter) => {
    this.setState({ filter });

    // équivalent à : (shorthand property)
    // this.setState({ filter: filter });
  }

  getConvertedAmount = () => {
    // on réalise la conversion
    // plan d'attaque:
    // - on récupère le state : currency et amount
    const { amount, currency } = this.state;
    //    - on va chercher la currency dans la liste des devises
    const foundCurrency = currenciesList.find(
      (currencyItem) => currencyItem.name === currency,
    );
    // - on multiplie par le rate de la devise trouvée
    return Number((amount * foundCurrency.rate).toFixed(2));
  }

  // eslint-disable-next-line class-methods-use-this
  getFilteredCurrencies() {
    // Ici, on va déduire la liste des devise à afficher
    // en se basant sur :
    // - la liste complète des devises (currenciesList),
    // - ce qui a été saisi par l'utilisateur dans le champ de recherche (this.state.state)
    const { filter } = this.state;
    const loweredFilter = filter.toLowerCase();
    // Plan d'attaque
    // on filtre la liste des devises en utilisant la valeur de filter
    const filteredCurrencies = currenciesList.filter(
      // eslint-disable-next-line arrow-body-style
      (currencyItem) => {
        const loweredCurrencyName = currencyItem.name.toLowerCase();
        return loweredCurrencyName.includes(loweredFilter);
      },
    );

    return filteredCurrencies;
  }

  // == Composant
  render() {
    // on extrait la valeur courante de filter depuis le state
    // on pourrait utilser le spread operator pour passer 
    // tout le contenu du state

    const {
      open, amount, currency, filter,
    } = this.state;
    const convertedAmount = this.getConvertedAmount();

    // on utilse la méthode getFilteredCurrencies pour récupérer la liste des devises à afficher
    const filteredCurrencies = this.getFilteredCurrencies();

    return (
      <div className="converter">
        <Amount amount={amount} />
        <Toggler open={open} toggle={this.toggle} />
        {
      /* les vues conditionnelles :
      Pour afficher une partie de l'interface de manière conditionnelle
      On s'appuie sur la manière dont JS évalue une expression
      En effet:
      - true && une autre expression sera évaluée (et donc aura la valeur de une autre expression)
      - false && autre expression sera toujours évalué comme false
      De plus rendre un booléen dans notre JSX ne 'rend' rien du tout
      */
    }
        {open && <Currencies currencies={filteredCurrencies} changeCurrency={this.changeCurrency} filter={filter} setFilter={this.setFilter} />}
        <ConvertedAmount amount={convertedAmount} currency={currency} />
      </div>
    );
  }
}

// == Export
export default Converter;
