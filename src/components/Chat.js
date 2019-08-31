import React, { Component } from 'react';
import Message from './Message/Message';

class Chat extends Component{
  state = {
    messages: [],
    messageInput: ''
  };

  changeInputMessage = evt => {
    let value = evt.target.value;
    this.setState(state => ({
      messages: state.messages,
      messageInput: value
    }));
    
  }

  sendMessageOnEnter = evt => {
    if (evt.key !== 'Enter') return;
    
    this.setState(state => ({
        messages: [
          ...state.messages,
          {text: state.messageInput}
        ],
        messageInput: ""
    }))
  }

  render(){
    return <div className="chat">
      <input className="input-message" onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter} value={this.state.messageInput} />
      <ul>
        {this.state.messages.map((item, ind) => {
          return <Message key={ind} text={ item.text }/>;
        })}
      </ul>
    </div>
  }
}

export default Chat;