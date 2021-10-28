import PropTypes from 'prop-types';

const Currency = ({ name, changeCurrency }) => (
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

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  changeCurrency: PropTypes.func.isRequired,
};

export default Currency;
