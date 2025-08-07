import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Product from "./components/product";
import ShoppingCard from "./components/shopping-card";

class App extends Component {
  state = {
    items: []
  }

  addItem = (amount, name, price) => {
    let currentItems = this.state.items;

    let existingItem = this.state.items.find(item => item.name === name);
    if (existingItem) {
      existingItem.amount++;
    } else {
      currentItems.push({
        amount,
        name,
        price
      })
    }

    this.setState({ items: currentItems })
    console.log(this.state);

  }

  render() {
    return <React.Fragment>
      <Navbar />
      <div className="main-container">
        <div className="product-container">
          <Product onAdd={() => this.addItem(1, 'Tomaten', 4.99)} img="carrots.jpg" title="Tomaten" description="Füge Tomaten zu deinen Warenkorb hinzu" />
          <Product onAdd={() => this.addItem(1, 'Gurken', 3.99)} img="gurke.jpg" title="Gurken" description="Füge Gurken zu deinen Warenkorb hinzu" />
          <Product onAdd={() => this.addItem(1, 'Äpfel', 7.99)} img="äpfel.jpg" title="Äpfel" description="Füge Äpfel zu deinen Warenkorb hinzu" />
          <Product onAdd={() => this.addItem(1, 'Birnen', 5.99)} img="birne.jpg" title="Birnen" description="Füge Birnen zu deinen Warenkorb hinzu" />
        </div>
        <ShoppingCard items={this.state.items} />
      </div>
    </React.Fragment>;
  }
}

export default App;