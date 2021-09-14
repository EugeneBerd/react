import React, { PureComponent } from "react";
import "./Cart.scss";
import Button from "../Button/Button";
import PropTypes from "prop-types";

class Cart extends PureComponent {
  render() {
    const { cart, className, emptyButton, icon } = this.props;
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
                <i className="gg-shopping-cart"></i>
              </div>
            )}
            {emptyButton && cart !== 0 && (
              <Button
                buttonText="Empty Cart"
                handleClick={() => this.props.emptyButton()}
                className="empty-button"
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.number.isRequired,
  className: PropTypes.string,
  emptyButton: PropTypes.func,
  icon: PropTypes.bool,
};

Cart.defaultProps = {
  className: "",
  icon: false,
  emptyButton: () => {},
};

export default Cart;
