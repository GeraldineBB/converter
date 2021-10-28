import PropTypes from 'prop-types';
import React from 'react';

// on passe par une classe pour garder en tête le name et la méthode
class Currency extends React.Component {
  
  constructor(props) {
    super(props);
    this.name = props.name;
    this.changeCurrency = props.changeCurrency;
  }

  handleClick = () => {
    console.log("test", this.name); 
    this.changeCurrency(this.name)
  }

  render() {
    return (
      <li className="currencies__item" onClick={this.handleClick}> {this.name}</li>
    )
  }

}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Currency; 
