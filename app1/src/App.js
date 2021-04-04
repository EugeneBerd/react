import React from "react";
import style from "./App.module.scss";
import Button from "./components/Button";
import Modal from "./components/Modal";

export default class App extends React.Component {
  state = {
    firstModalActive: false,
    secondModalActive: false,
  };

  firstModal = () => {
    this.setState({
      firstModalActive: !this.state.firstModalActive,
    });
  };

  secondModal = () => {
    this.setState({
      secondModalActive: !this.state.secondModalActive,
    });
  };

  render() {
    return (
      <div className={style.container}>
        <div>
          <Button
            onClick={this.firstModal}
            backgroundColor={"lightblue"}
            text={"First modal"}
          />

          <Button
            onClick={this.secondModal}
            backgroundColor={"lightgreen"}
            text={"Second modal"}
          />
        </div>
        {this.state.firstModalActive && (
          <Modal
            header={"First modal"}
            closeButton={true}
            isOpen={this.firstModal}
            textmodal={"Lorem ipsum dolor sit amet"}
            actions={
              <div className={style.modalActions}>
                <Button text={"Ok"} backgroundColor={"#b4382c"} />
                <Button
                  text={"Cancel"}
                  backgroundColor={"#b4382c"}
                  onClick={this.firstModal}
                />
              </div>
            }
          />
        )}
        {this.state.secondModalActive && (
          <Modal
            header={"Second modal"}
            closeButton={true}
            isOpen={this.secondModal}
            textmodal={"В этом модальном окне совершенно другой текст"}
            actions={
              <div className={style.modalActions}>
                <Button text={"Ого"} backgroundColor={"#b0d8b1"} />
                <Button text={"Вау"} backgroundColor={"#f4bde1"} />
                <Button
                  text={"Нет"}
                  backgroundColor={"#f4eebd"}
                  onClick={this.secondModal}
                />
              </div>
            }
          />
        )}
      </div>
    );
  }
}
