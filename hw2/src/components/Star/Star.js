import React, { PureComponent } from "react";
import "./Star.scss";

class Star extends PureComponent {
  // state = {
  //   id: this.props.id,
  //   fav: this.props.fav,
  //   color: "black",
  // };

  // componentDidUpdate() {
  //   if (this.state.fav.includes(this.state.id)) {
  //     this.setState({ color: "green" });
  //   }
  // }

  render() {
    const { handler, color } = this.props;

    return (
      <div className="star-fav">
        <svg
          // className={this.state.color}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          onClick={handler}
          fill={color}
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
      </div>
    );
  }
}

export default Star;
