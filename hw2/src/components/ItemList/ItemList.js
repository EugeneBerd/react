import React, { PureComponent } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ItemList.scss";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";

class ItemList extends PureComponent {
  state = {
    fav: JSON.parse(localStorage.getItem("favourites")) || [],
  };
  render() {
    const { items, addToCart, toggleModal, cart } = this.props;
    const { fav, modal } = this.state;
    const itemsList = items.map((x) => (
      <ItemCard
        fav={fav}
        item={x}
        key={x.id}
        addToFavs={() => this.addToFavs(x.id)}
        addToCart={() => addToCart(x.id)}
      />
    ));
    return (
      <div className="galleryItems">
        {itemsList}
        {modal && (
          <Modal
            header="Cart"
            text="Product succesfully added to cart"
            closeButton={true}
            handleClick={() => toggleModal()}
            actions={<button onClick={() => toggleModal()}>Okay</button>}
            cart={cart.length}
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

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ItemList;
