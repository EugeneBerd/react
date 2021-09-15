import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ItemList.scss";
import Modal from "../Modal/Modal";

const ItemList = ({ items, modal, fav, addToCart, setModal, cart, setFav }) => {
  const itemsList = items.map((x) => (
    <ItemCard
      fav={fav}
      item={x}
      key={x.id}
      cartButton
      favAction={() => addToFavs(x.id)}
      addToCart={() => addToCart(x.id)}
    />
  ));

  const addToFavs = (favId) => {
    if (!fav.includes(favId)) {
      setFav([...fav, favId]);
      localStorage.setItem("favourites", JSON.stringify(fav));
    } else {
      setFav(
        JSON.parse(localStorage.getItem("favourites")).filter(
          (e) => e !== favId
        )
      );
      localStorage.setItem("favourites", JSON.stringify(fav));
    }
  };

  return (
    <div className="galleryItems">
      {itemsList}
      {modal && (
        <Modal
          header="Cart"
          text="Product succesfully added to cart"
          closeButton={true}
          handleClick={() => setModal(!modal)}
          actions={<button onClick={() => setModal(!modal)}>Okay</button>}
          cart={cart.length}
        />
      )}
    </div>
  );
};

export default ItemList;
