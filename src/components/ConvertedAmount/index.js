import PropTypes from 'prop-types';
import './styles.scss'; 

const ConvertedAmount = ({amount, currency}) => (

  <footer className="converted-amount">
    <h2 className="converted-amount__amount">{amount}</h2>
    <p className="converted-amount__currency">{currency}</p>
  </footer>
  
);

ConvertedAmount.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default ConvertedAmount; 
