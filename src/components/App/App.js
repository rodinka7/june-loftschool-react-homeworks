import React, {Component} from 'react';
import PersonalForm from '../PersonalForm/PersonalForm';
import CardForm from '../CardForm/CardForm';
import Step from '../Step/Step';
import './App.css';

const stepTitles = ['Personal information', 'Card information', 'Finish'];
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: '',
        isTimeOver: false
    };
    this.handleTabClick = this.handleTabClick.bind(this);
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleClickNextForm = this.handleClickNextForm.bind(this);
    this.handleChangeTimeOver = this.handleChangeTimeOver.bind(this);
    this.isFormCommitable = this.isFormCommitable.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  renderForm = () =>{
    let {firstName, lastName, email, step, cardNumber} = this.state;

    switch (step){
      case 1:
        return <PersonalForm 
          firstName={firstName} 
          lastName={lastName} 
          email={email} 
          onChangeForm={this.handleChangeForm}
        />;
      case 2:
        return <CardForm 
          cardNumber={cardNumber} 
          onChangeForm={this.handleChangeForm} 
          onChangeTimeOver={this.handleChangeTimeOver}
        />;
      case 3:
        return <p data-test="congratulations">Поздравляем!</p>;
      default:
        return false;
    }
  }

  isFormCommitable = () => {
    switch (this.state.step){
      case 1:
        return this.state.firstName !== '' 
        && this.state.lastName !== '' 
        && this.state.email !== '' 
        && this.state.email.includes('@');
      case 2:
        return this.state.cardNumber.length === 16;
      default:
        return false;
    }
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
    if (this.state.step === 3) return;
    this.setState(state => ({
      step: state.step + 1
    }))
  }

  handleChangeTimeOver(bool) {
    let timeOverStatus = this.state.isTimeOver;
    if (bool) this.setState({ isTimeOver: !timeOverStatus });
  }

  render(){
    return <div className="container">
      <div className="tab-panel">
        {stepTitles.map((title, index) => (
          <Step
              key={title}
              number={index + 1}
              onClick={this.handleTabClick}
              isSelected={this.state.step - 1 === index}
              isClickable={
                index !== this.state.step - 1 &&
                index < this.state.step
              }
            >
              {title}
            </Step>
        ))}
      </div>
      <div className="form-content">
        {this.renderForm()}
      </div>
      <div className="button-panel">
        <button
            disabled={
                !this.isFormCommitable() ||
                this.state.isTimeOver
            }
            className="button-next"
            onClick={this.handleClickNextForm}
        >
            Next
        </button>
      </div>
    </div>;
  }
}

export default App;