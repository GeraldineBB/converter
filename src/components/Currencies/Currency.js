import PropTypes from 'prop-types';
import React from 'react';

class Currency extends React.Component {

  // méthode automatiquement appelée par React après le
  // premier rendu d'un composant  (après qu'il soit ajouté du DOM)
  componentDidMount() {
    console.log('Currency : monté');
  }

  // méthode automatiquement appelée par React après une
  // mise à jour d'un composant
  componentDidUpdate() {
    console.log('Currency : maj');
  }

  // méthode automatiquement appelée par React
  // juste avant que le composant soit démonté (retiré du DOM)
  componentWillUnmount() {
    console.log('Currency : démonté');
  }

  render() {
    console.log('Currency : render');

    const { name, changeCurrency } = this.props;

    return (
      <li
        onClick={() => {
          console.log('click sur une devise, j\'aiemrais pouvoir appeler setCurrency du Converter');
          // on a déja accès à la devise que dont est en train d'afficher la représentation
          // on sait que si on clique sur cette devise, c'est cette même devise que l'on veut avoir comme devise courante
          changeCurrency(name);
        }}
        className="currencies__item"
      >
        {name}
      </li>
    );
  }
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  changeCurrency: PropTypes.func.isRequired,
};

export default Currency;
