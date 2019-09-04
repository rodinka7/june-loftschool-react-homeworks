import React, { Component } from 'react';
import './Step.css';

class Step extends Component{
  constructor(props) {
    super(props);
    this.state = {
        noState: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    if (!this.props.isClickable) return;
    const { number, onClick } = this.props;
    onClick(number);
  } 

  render(){
    return (
      <div>
          <div
            className={
                'step ' +
                (this.props.isSelected ? 'step-selected ' : '') +
                (this.props.isClickable ? 'step-clickable ' : '')
            }
            onClick={this.handleClick}
          >
            <div className="step__number">{this.props.number}</div>
          </div>
          <div className="step__title">{this.props.children}</div>
      </div>
  );
  }
}

export default Step;