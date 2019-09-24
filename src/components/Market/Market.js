import React, { Component } from 'react';
import './Market.css';
import Order from '../Order';

let id = 0;

const getId = () => {
  id += 1;
  return id;
};

export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька',
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date(),
  };
};

export class Market extends Component {
  render() {
    const { orders } = this.props;
    
    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          className="new-orders__create-button"
          onClick={this.handleNewOrderClick}
        >
          Создать заказ
        </button>
        <button onClick={this.handleMoveOrderClick} disabled={!orders || !orders.length}>
          Отправить заказ на ферму
        </button>
        <div className="order-list">
          {orders && orders.map((order, index) => (
            <Order
              name={order.name}
              price={order.price}
              createdAt={order.createdAt}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}


export default Market;
