import React from 'react';

class DemoControlledComponent extends React.Component {

  // le state qui contient la valeur à afficher dans l'input
  state = {
    // la propriété
    inputValue: 'valeur initiale',
  }

  // la méthode qui permet la mise à jour de la valeur dans le state
  setInputValue = (newInputValue) => {
    this.setState(
      {
        inputValue: newInputValue,
      },
    );
  }

  render() {
    const { inputValue } = this.state;

    // sur l'input : 
    // on force la valeur avec value
    // on réagit au modification sur le champ
    // en écoutant les changements (onChange)
    // et en demandant la mise de la vvaleur dans le state en appellant setInputValue
    return (
      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          this.setInputValue(event.target.value);
        }}
      />
    );
  }
}

export default DemoControlledComponent;
