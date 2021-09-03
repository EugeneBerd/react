import React, { PureComponent } from "react";
import "./Modal.css";
import Cart from "../Cart/Cart";
class Modal extends PureComponent {
  render() {
    const { header, closeButton, text, actions, handleClick } = this.props;

    return (
      <div class="modal" onClick={() => handleClick()}>
        <div class="modal-content" onClick={(e) => e.stopPropagation()}>
          <h3>{header}</h3>
          {closeButton && (
            <span class="close" onClick={() => handleClick()}>
              &times;
            </span>
          )}
          <div class="check"></div>
          <p>{text}</p>
          <Cart cart={this.props.cart} />
          {actions}
        </div>
      </div>
    );
  }
}

export default Modal;
