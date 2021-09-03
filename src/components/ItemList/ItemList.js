import React, { PureComponent } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ItemList.scss";
import Modal from "../Modal/Modal";

class ItemList extends PureComponent {
  state = {
    fav: JSON.parse(localStorage.getItem("favourites")) || [],
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    modal: this.props.modal,
  };
  render() {
    const { items, addToFavs, addToCart, modal } = this.props;
    console.log("sss", this.state.modal);
    const itemsList = items.map((x) => (
      <ItemCard
        fav={this.state.fav}
        item={x}
        key={x.id}
        addToFavs={() => this.addToFavs(x.id)}
        addToCart={() => this.addToCart(x.id)}
      />
    ));
    return (
      <div className="galleryItems">
        {itemsList}
        {this.state.modal && (
          <Modal
            header="Cart"
            text="Product succesfully added to cart"
            closeButton={true}
            handleClick={() => this.toggleModal()}
            actions={<button onClick={() => this.toggleModal()}>Okay</button>}
            cart={this.state.cart.length}
          />
        )}
      </div>
    );
  }
  toggleModal = () =>
    this.setState({ modal: this.props.modal }, console.log("sss222"));

  addToCart = (itemId) => {
    this.setState(
      { cart: [...this.state.cart, itemId], modal: !this.state.modal },
      () => localStorage.setItem("cart", JSON.stringify(this.state.cart))
    );
  };

  addToFavs = (favId) => {
    if (!this.state.fav.includes(favId)) {
      this.setState({ fav: [...this.state.fav, favId] }, () =>
        localStorage.setItem("favourites", JSON.stringify(this.state.fav))
      );
    }
  };
}

export default ItemList;
