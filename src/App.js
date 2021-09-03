import "./App.css";
import React from "react";
import axios from "axios";
import ItemList from "./components/ItemList/ItemList";
import Cart from "./components/Cart/Cart";

class App extends React.Component {
  state = {
    pricelist: JSON.parse(localStorage.getItem("store")) || [],
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    fav: JSON.parse(localStorage.getItem("favourites")) || [],
    modal: false,
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ItemList
            addToCart={this.addToCart}
            addToFavs={this.addToFavs}
            items={this.state.pricelist}
            modal={this.state.modal}
          />
          <Cart cart={this.state.cart.length} />
        </header>
      </div>
    );
  }
  componentDidMount() {
    axios.get("/price.json").then((res) => {
      this.setState({ pricelist: res.data });
      localStorage.setItem("store", JSON.stringify(res.data));
    });
  }
}

export default App;
