import React, { PureComponent } from "react";
import "./Cart.scss";
import Button from "../Button/Button";

class Cart extends PureComponent {
  render() {
    console.log(this.props.cart);
    return (
      <div>
        {this.props.cart === 0 && (
          <div className={this.props.className}>
            Корзина Пуста
            <div class="cart-container">
              <i class="gg-shopping-cart"></i>
            </div>
          </div>
        )}
        {this.props.cart !== 0 && (
          <div className={this.props.className}>
            Товаров в Корзине: {this.props.cart}
            {this.props.icon && (
              <div class="cart-container">
                <i class="gg-shopping-cart"></i>
              </div>
            )}
            {this.props.emptyButton && this.props.cart !== 0 && (
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

export default Cart;
