import React from "react";
import styles from "../App.module.scss";

export default class Modal extends React.Component {
  render() {
    return (
      <div onClick={this.props.isOpen} className={styles.modal}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={styles.modal__content}
        >
          <div className={styles.modal__header}>
            <h5 className={styles.modal__title}>{this.props.header}</h5>
            {this.props.closeButton && (
              <span onClick={this.props.isOpen}>X</span>
            )}
          </div>
          <div className={styles.modal__body}>
            <p className={styles.body__text}>{this.props.textmodal}</p>
          </div>
          {this.props.actions}
        </div>
      </div>
    );
  }
}
