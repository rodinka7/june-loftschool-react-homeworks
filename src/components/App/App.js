import React, {Component} from 'react';
import PersonalForm from '../PersonalForm/PersonalForm';
import CardForm from '../CardForm/CardForm';
import Step from '../Step/Step';
import Title from '../Title/Title';

class App extends Component{
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };

  renderForm = () =>{
    let {firstName, lastName, email, step, cardNumber} = this.state;
    let templ;

    switch (step){
      case 1:
        templ = <PersonalForm firstName={firstName} lastName={lastName} email={email} onChangeForm={this.handleChangeForm}/>;
        break;
      case 2:
        templ = <CardForm cardNumber={cardNumber} onChangeForm={this.handleChangeForm} onChangeTimeOver={this.handleChangeTimeOver}/>;
        break;
      case 3:
        templ = <p data-test="congratulations">Поздравляем!</p>;
        break;
      default:
    }
    
    return templ;
  }

  isFormCommitable = () => {
    if (this.state.step === 1){
      if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.email !== '' 
        && this.state.email.includes('@'))
        return true;
    } else if (this.state.step === 2){
      if (this.state.cardNumber.length === 16)
        return true;
    }

    return false;
  }

  handleChangeForm = (arg1, arg2) => {
    this.setState(state => ({
      ...state,
      [arg1]: arg2
    }))
  }

  handleTabClick = param => {
    this.setState(state => ({
      ...state,
      step: param
    }))
  }

  handleClickNextForm = evt => {
    this.setState(state => ({
      step: state.step + 1
    }))
  }

  render(){
    return <div className="container">
      <Title />
      <div className="tab-panel"></div>
      <div className="form-content">
        <Step isSelected isClickable number={this.state.step} onClick={this.renderForm} />
      </div>
      <div className="button-panel">
        <button className="button button-next" onClick={this.handleClickNextForm}></button>
      </div>
    </div>;
  }
}

export default App;