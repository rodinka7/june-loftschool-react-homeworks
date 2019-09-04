import React, { Component } from 'react';
import Title from '../Title/Title';
import './CardForm.css';

class CardForm extends Component{
  constructor(props) {
    super(props);

    this.state = { leftTime: 120 };
    props.onChangeTimeOver(false);

    this.handleChangeForm = this.handleChangeForm.bind(this);
}

  componentDidMount() {
    this.timer = setInterval(() => {
        const leftTime = Math.max(this.state.leftTime - 1, 0);
        this.setState({ leftTime });
        if (leftTime === 0 && this.state.leftTime === 1) {
            this.props.onChangeTimeOver(true);
        }
    }, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleChangeForm = evt => {
    let name = evt.target.name;
    let value = evt.target.value;
    
    this.props.onChangeForm(name, value);
  }
  
  render(){
    return (<div data-test="card-form" className="card-form">
      <Title>Номер карты</Title>
      <input 
        type="text"
        name="cardNumber" 
        onChange={this.handleChangeForm} />
      <p className="left-time">Осталось {this.state.leftTime} секунд</p>
    </div>);
  }
}

export default CardForm;