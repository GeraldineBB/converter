import PropTypes from 'prop-types';
import './styles.scss';

const Currency = ({ name }) => (
  <li className="content__item"><span className="content__text">{name}</span></li>
);

Currency.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Currency;
