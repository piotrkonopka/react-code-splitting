import React from "react";
import "./index.css";

export default class B extends React.PureComponent {
  render() {
    return (
      <div className="B">
        <img src={require("./assets/B.jpg")} className="imgB" alt="image B" />
      </div>
    );
  }
}
