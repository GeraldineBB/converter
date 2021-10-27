import PropTypes from 'prop-types'; 
import './styles.scss'

const Toggler = ({open, toggle}) => {
  
  const className = open ? 'toggler toggler--open' : 'toggler'; 

  return (
    <button className={className} type="button" onClick={toggle}>
      =
    </button>
  ); 
}; 
// open est bien un booléen !! 
Toggler.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired, 
};

export default Toggler
