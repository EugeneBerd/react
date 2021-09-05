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
    const { modal, pricelist, cart } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <ItemList
            addToCart={this.addToCart}
            addToFavs={this.addToFavs}
            items={pricelist}
            modal={modal}
            toggleModal={() => this.toggleModal()}
            cart={cart}
          />

          <Cart
            emptyButton={() => this.emptyCart()}
            icon
            className="cart"
            cart={cart.length}
          />
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

  toggleModal = () => {
    this.setState({ modal: false });
  };

  addToCart = (itemId) => {
    this.setState(
      { cart: [...this.state.cart, itemId], modal: !this.state.modal },
      () => localStorage.setItem("cart", JSON.stringify(this.state.cart))
    );
  };

  emptyCart = () => {
    this.setState({ cart: [] }, () =>
      localStorage.setItem("cart", JSON.stringify(this.state.cart))
    );
  };
}

export default App;
