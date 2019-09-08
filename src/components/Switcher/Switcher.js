import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  }
  
  handleChangeChild = evt => {
    let {target} = evt;    
    
    this.setState(state => ({
      selectedChild: Number(target.dataset.id)
    }))
  }

  renderChildren = () => {   
    return this.props.children[this.state.selectedChild];
  } 

  render() {
    let children = React.Children.toArray(this.props.children);
    
    return <div className="switcher">
      <ul className="component-list">
          {
            children.map((child,index) => (
              <li 
                key={child.key} 
                className="component-list__name" 
                onClick={this.handleChangeChild}
                data-id={index}
              >{child.type.displayName || child.type.name}</li>
            ))
          }
      </ul>
      <hr />
      <div className="component-wrapper">{this.renderChildren()}</div>

    </div>
  }
}

export default Switcher;
