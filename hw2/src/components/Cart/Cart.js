import React, { PureComponent } from "react";

class Cart extends PureComponent {
  render() {
    return <div>Товаров в Корзине: {this.props.cart}</div>;
  }
}

export default Cart;
