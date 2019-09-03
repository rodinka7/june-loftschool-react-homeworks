import React, { Component } from 'react';

class Step extends Component{
  handleClick = evt => {
    if (this.props.isClickable)
      this.props.onClick(this.props.number);
  }

  render(){
    let {isSelected, isClickable, number, children} = this.props;
    let newClass = `step ${isSelected ? 'step-selected' : ''} ${isClickable ? 'step-clickable' : ''}`;
    return <div className={newClass} onClick={this.handleClick}>
      <div className="step__number">{number}</div>
      <div className="step__title">{children}</div>
    </div>;
  }
}

export default Step;