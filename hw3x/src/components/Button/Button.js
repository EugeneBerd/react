import React, { PureComponent } from "react";
import "./Button.scss";
import PropTypes from "prop-types";

class Button extends PureComponent {
  render() {
    const { buttonText, handleClick, className } = this.props;

    return (
      <div>
        <button className={className} onClick={() => handleClick()}>
          {buttonText}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: "button",
};

export default Button;
