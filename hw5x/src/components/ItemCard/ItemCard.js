import React, { useState, useEffect } from "react";
import "./ItemCard.scss";
import Star from "../Star/Star";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";

const ItemCard = ({
  fav = [],
  item,
  favAction,
  addToCart,
  cartButton,
  delFavs,
  counts = 0,
  delItem,
}) => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    if (fav.includes(item.id)) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [fav, item.id]);

  const color = isFav ? "green" : "black";
  const itemAmount = counts[item.id];
  return (
    <div className="gallery">
      <div className="cardTitle">
        Наборы для вышивания {item.vendor} {item.name}{" "}
      </div>
      <a href={item.img}>
        <img
          src={item.img}
          alt={item.name}
          className="galleryImg"
          height="120"
        ></img>
      </a>
      <div>Артикул: {item.name}</div>
      <div>Производитель: {item.vendor}</div>
      <div>Цена: {item.price}грн</div>
      <div>Количество цветов: {item.colors} </div>
      <div className="star">
        {cartButton && (
          <Button
            buttonText="Add to cart"
            handleClick={() => addToCart(item.id)}
            className="button"
          />
        )}
        {favAction && (
          <Star id={item.id} color={color} handler={() => favAction(item.id)} />
        )}
        {delFavs && (
          <Button
            buttonText="Remove"
            handleClick={() => delFavs(item.id)}
            className="button"
          ></Button>
        )}
        {itemAmount > 0 && (
          <div className="cartAmount">Количество в корзине: {itemAmount} </div>
        )}
        {delItem && (
          <Button
            buttonText="Remove item"
            handleClick={() => delItem(item.id)}
            className="button"
          ></Button>
        )}
        {modal && (
          <Modal
            header="Cart"
            text="You sure you want to delete this product from cart?"
            closeButton={true}
            handleClick={() => dispatch({ type: "SET_MODAL", payload: false })}
            actions={
              <button
                onClick={() => {
                  delItem(item.id);
                  dispatch({ type: "SET_MODAL", payload: false });
                }}
              >
                Delete item
              </button>
            }
          />
        )}
      </div>
    </div>
  );
};

export default ItemCard;
