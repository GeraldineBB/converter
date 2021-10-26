import PropTypes from 'prop-types';
import './styles.scss';

const Currency = ({ name }) => (
  <li className="content__item">{name}</li>
);

Currency.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Currency;
