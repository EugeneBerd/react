import React, { PureComponent } from "react";
import "./Modal.css";
import Cart from "../Cart/Cart";
import PropTypes from "prop-types";

class Modal extends PureComponent {
  render() {
    const { header, closeButton, text, actions, handleClick, cart } =
      this.props;

    return (
      <div className="modal" onClick={() => handleClick()}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h3>{header}</h3>
          {closeButton && (
            <span className="close" onClick={() => handleClick()}>
              &times;
            </span>
          )}
          <div className="check"></div>
          <p>{text}</p>
          <Cart cart={cart} />
          {actions}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  closeButton: PropTypes.bool,
  text: PropTypes.string.isRequired,
  actions: PropTypes.object,
};

Cart.defaultProps = {
  closeButton: false,
  actions: {},
};
export default Modal;
