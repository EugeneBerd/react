import React, { PureComponent } from "react";
import "./ItemCard.scss";
import Star from "../Star/Star";
import Button from "../Button/Button";

class ItemCard extends PureComponent {
  state = { fav: false, modal: false };
  render() {
    const { item, addToFavs, addToCart } = this.props;
    const color = this.state.fav ? "green" : "black";
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
  }
  componentDidUpdate() {
    if (this.props.fav.includes(this.props.item.id)) {
      this.setState({ fav: true });
    }
  }
}

export default ItemCard;
