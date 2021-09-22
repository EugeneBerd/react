import React from "react";
import "./Cart.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Cart = ({ cart, className, emptyButton, icon }) => {
  return (
    <div>
      {cart === 0 && (
        <div className={className}>
          Корзина Пуста
          <div className="cart-container">
            <i className="gg-shopping-cart"></i>
          </div>
        </div>
      )}
      {cart !== 0 && (
        <div className={className}>
          Товаров в Корзине: {cart}
          {icon && (
            <div className="cart-container">
              <Link to="/cart">
                <i className="gg-shopping-cart"></i>
              </Link>
            </div>
          )}
          {emptyButton && cart !== 0 && (
            <Button
              buttonText="Empty Cart"
              handleClick={() => emptyButton()}
              className="empty-button"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
