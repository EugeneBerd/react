import React from "react";
import "./Modal.css";
import Cart from "../Cart/Cart";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const Modal = ({ header, closeButton, text, actions, handleClick, cart }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="modal"
      onClick={() => dispatch({ type: "SET_MODAL", payload: false })}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{header}</h3>
        {closeButton && (
          <span
            className="close"
            onClick={() => dispatch({ type: "SET_MODAL", payload: false })}
          >
            &times;
          </span>
        )}
        <div className="check"></div>
        <p>{text}</p>
        {cart && <Cart cart={cart} />}
        {actions}
      </div>
    </div>
  );
};

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
