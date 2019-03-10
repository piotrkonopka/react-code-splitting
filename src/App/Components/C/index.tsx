import React from "react";
import "./index.css";

export default class C extends React.PureComponent {
  render() {
    return (
      <div className="C">
        <img src={require("./assets/C.png")} className="imgC" alt="image C" />
      </div>
    );
  }
}
