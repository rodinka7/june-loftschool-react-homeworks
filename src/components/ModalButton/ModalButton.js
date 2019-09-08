import React, { Component } from 'react';
import Modal from './Modal';
import './ModalButton.css';

class ModalButton extends Component {
  state = {
    isModalShow: false
  }

  static displayName = 'ModalButton';
  
  hideModal = () =>{
    this.setState(state => ({
      isModalShow: false
    }));
  }

  showModal = () => {
    this.setState(state => ({
      isModalShow: true
    }))
  }

  render() {
    return <div>
      <button onClick={this.showModal}>Show modal!</button>
      {this.state.isModalShow && <Modal>
        <div className="modal">
          <div className="modal__fog">
            <div className="modal__body">
              <button onClick={this.hideModal}>Close</button>
            </div>
          </div>
        </div>
      </Modal>}
    </div>;
  }
}

export default ModalButton;
