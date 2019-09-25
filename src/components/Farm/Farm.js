import React, { Component } from 'react';
import './Farm.css';
import Order from '../Farm';
import { connect } from 'react-redux';
import { moveOrderToCustomer } from '../../actions/farmActions';

const mapStateToProps = state => ({
  orders: state.orders
})

const mapDispatchToProps = state => ({
  moveOrderToCustomer
})

export class Farm extends Component {
  moveOrderToCustomer = () => {
    this.props.moveOrderToCustomer(this.props.orders[0]);
  }

  render() {
    const { orders } = this.props;
    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button onClick={this.moveOrderToCustomer} disabled={!orders.length}>
          Отправить урожай клиенту
        </button>
        <div>
          {orders.map((order, index) => (
            <Order
              name={order.name}
              price={order.price}
              createdAt={order.createdAt}
              key={index}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Farm);
