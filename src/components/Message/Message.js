import React, { Component } from 'react';

class Message extends Component{
  render(){
    console.log(this.props);
    return <div><span className="message">{this.props.text}</span></div>;
  } 
}

export default Message;