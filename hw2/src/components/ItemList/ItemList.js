import React, { PureComponent } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ItemList.scss";
import Modal from "../Modal/Modal";

class ItemList extends PureComponent {
  state = {
    fav: JSON.parse(localStorage.getItem("favourites")) || [],

    modal: this.props.modal,
  };
  render() {
    const { items, addToFavs, addToCart, modal, toggleModal } = this.props;
    console.log("sss", this.state.modal);
    const itemsList = items.map((x) => (
      <ItemCard
        fav={this.state.fav}
        item={x}
        key={x.id}
        addToFavs={() => this.addToFavs(x.id)}
        addToCart={() => addToCart(x.id)}
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
            handleClick={() => toggleModal()}
            actions={<button onClick={() => toggleModal()}>Okay</button>}
            cart={this.props.cart.length}
          />
        )}
      </div>
    );
  }

  addToFavs = (favId) => {
    if (!this.state.fav.includes(favId)) {
      this.setState({ fav: [...this.state.fav, favId] }, () =>
        localStorage.setItem("favourites", JSON.stringify(this.state.fav))
      );
    } else {
      this.setState(
        {
          fav: JSON.parse(localStorage.getItem("favourites")).filter(
            (e) => e !== favId
          ),
        },
        () => localStorage.setItem("favourites", JSON.stringify(this.state.fav))
      );
    }
  };
  componentDidUpdate() {
    this.setState({ modal: this.props.modal });
  }
}

export default ItemList;
