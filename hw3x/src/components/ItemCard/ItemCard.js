import React, { PureComponent, useState, useEffect } from "react";
import "./ItemCard.scss";
import Star from "../Star/Star";
import Button from "../Button/Button";
import PropTypes from "prop-types";

const ItemCard = ({ fav, item, addToFavs, addToCart }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (fav.includes(item.id)) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [fav, item.id]);

  const color = isFav ? "green" : "black";

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
        <Button
          buttonText="Add to cart"
          handleClick={() => addToCart(item.id)}
          className="button"
        />

        <Star id={item.id} color={color} handler={() => addToFavs(item.id)} />
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  item: PropTypes.object.isRequired,
  addToFavs: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ItemCard;
