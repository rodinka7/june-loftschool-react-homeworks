import React, {Component} from 'react';
import Title from '../Title/Title'
import './PersonalForm.css'

class PersonalForm extends Component{
  constructor(props) {
    super(props)

    this.handleChangeForm = this.handleChangeForm.bind(this)
  }

  handleChangeForm = evt => {
    let target = evt.target;
    this.props.onChangeForm(target.name, target.value);
  }

  render(){
    return <div className="personal-form"  data-test="personal-form">
      <Title className="title">Personal info</Title>
      <input name="firstName" type="text" onChange={this.handleChangeForm} />
      <input name="lastName" type="text" onChange={this.handleChangeForm} />
      <input name="email" type="email" onChange={this.handleChangeForm}  />
    </div>;
  }
}

export default PersonalForm;