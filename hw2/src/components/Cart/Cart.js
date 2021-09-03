import React, { PureComponent } from "react";
import "./Cart.scss";

class Cart extends PureComponent {
  render() {
    return (
      <div className={this.props.className}>
        Товаров в Корзине: {this.props.cart}
        {this.props.icon && (
          <div class="cart-container">
            <i class="gg-shopping-cart"></i>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
