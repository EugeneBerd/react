import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ItemList.scss";
import Modal from "../Modal/Modal";
import { useDispatch } from "react-redux";

const ItemList = ({ items, modal, fav, addToCart, setModal, cart, setFav }) => {
  const dispatch = useDispatch();
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
      dispatch({ type: "ADD_FAV", payload: favId });
      localStorage.setItem("favourites", JSON.stringify(fav));
    } else {
      dispatch({ type: "DEL_FAV", payload: favId });
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
          handleClick={() => dispatch({ type: "SET_MODAL", payload: false })}
          actions={
            <button
              onClick={() => dispatch({ type: "SET_MODAL", payload: false })}
            >
              Okay
            </button>
          }
          cart={cart.length}
        />
      )}
    </div>
  );
};

export default ItemList;
