import React from "react";
import "./index.css";

export default class A extends React.PureComponent {
  render() {
    return (
      <div className="A">
        <img src={require("./assets/A.png")} className="imgA" alt="image A" />
      </div>
    );
  }
}
