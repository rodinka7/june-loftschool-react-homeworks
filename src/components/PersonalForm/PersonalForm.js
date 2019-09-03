import React, {Component} from 'react';

class PersonalForm extends Component{

  handleInputChange = evt => {
    let name = evt.target.name;
    let value = evt.target.value;
    this.props.onChangeForm(name, value);
  }

  handleChangeForm = evt => {
    let target = evt.target;
    this.props.onChangeForm(target.name, target.value);
  }

  render(){
    return <form className="personal-form">
      <input name="firstName" type="text" onChange={this.handleInputChange} />
      <input name="lastName" type="text" onChange={this.handleInputChange} />
      <input name="email" type="email" onChange={this.handleInputChange}  />
    </form>;
  }
}

export default PersonalForm;