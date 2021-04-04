import React from "react";
import styles from "../App.module.scss";

export default class Button extends React.Component {
  render() {
    return (
      <button
        className={styles.button}
        onClick={this.props.onClick}
        style={{ backgroundColor: this.props.backgroundColor }}
      >
        {this.props.text}
      </button>
    );
  }
}
