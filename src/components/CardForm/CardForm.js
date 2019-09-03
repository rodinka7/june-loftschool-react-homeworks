import React, { Component } from 'react';

class CardForm extends Component{
  handleInputChange = evt =>{
    let name = evt.target.name;
    let value = evt.target.value;
    
    this.props.onChangeForm(name, value);
  }

  handleChangeForm = evt => {
    let name = evt.target.name;
    let value = evt.target.value;
    
    this.props.onChangeForm(name, value);
  }

  componentWillUnmount(){

  }
  
  render(){
    return <form className="card-form">
      <input name="cardNumber" onChange={this.handleInputChange} />
    </form>;
  }
}

export default CardForm;