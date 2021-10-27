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
  }

  // on déclare une méthode toggle
  // pour inverser la propriété open
  // on récupère la valeur courante
  // et on prend l'inverse
  toggle = () => {
    // équivalent à :
    // const open =  this.state.open;
    const {open} = this.state; 

    // on met à jour le state 
    // setState permet de mettre à jour le state
    // et de rendre à nouveau le composant qui contient le state
    // et aussi tous ces enfants
    this.setState({open: !open});
  }

  // == Composant
  render() {
    const { open } = this.state;
    return (
      <div className="converter">
        <Amount amount={1} />
        <Toggler open={open} toggle={this.toggle}/>
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
        {open && <Currencies currencies={currenciesList} />}    
        <ConvertedAmount amount={1.08} currency="Blabla" />
      </div>
    );
  }
}

// == Export
export default Converter;
