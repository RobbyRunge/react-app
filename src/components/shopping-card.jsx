import React, { Component } from 'react';

class ShoppingCard extends Component {
  state = {
    items: [{
      amount: 1,
      name: 'Tomaten',
      price: 4.9
    },
    {
      amount: 1,
      name: 'Äpfel',
      price: 7.9
    },
    {
      amount: 1,
      name: 'Gurken',
      price: 3.9
    },
    {
      amount: 1,
      name: 'Birnen',
      price: 5.9
    }]
  }
  render() {
    return <div className='shopping-card'>
      <h2>Warenkorb</h2>
      {this.state.items.map(item => <div key={item.name}>{item.amount}x {item.name} {item.price}€</div>)}
    </div>;
  }
}

export default ShoppingCard;