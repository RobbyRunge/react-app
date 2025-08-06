import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Product from "./components/product";
import ShoppingCard from "./components/shopping-card";

class App extends Component {
  state = {}
  render() {
    return <React.Fragment>
      <Navbar />
      <div className="main-container">
        <div className="product-container">
          <Product img="carrots.jpg" title="Tomaten" description="Füge Tomaten zu deinen Warenkorb hinzu" />
          <Product img="gurke.jpg" title="Gurken" description="Füge Gurken zu deinen Warenkorb hinzu" />
          <Product img="äpfel.jpg" title="Äpfel" description="Füge Äpfel zu deinen Warenkorb hinzu" />
          <Product img="birne.jpg" title="Birnen" description="Füge Birnen zu deinen Warenkorb hinzu" />
        </div>
        <ShoppingCard />
      </div>
    </React.Fragment>;
  }
}

export default App;