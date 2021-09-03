import React, { PureComponent } from "react";
import "./Button.scss";

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

export default Button;
