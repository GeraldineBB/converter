import PropTypes from 'prop-types';

const Currency = ({ name }) => (
    <li className="currencies__item"> {name}</li>
); 

Currency.propTypes = {
  name: PropTypes.string.isRequired, 
}

export default Currency; 
