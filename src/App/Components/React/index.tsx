import React from "react";
import "./index.css";

export default class ReactApp extends React.PureComponent {
  render() {
    return (
      <div className="ReactApp">
        <header className="ReactApp-header">
          <img
            src={require("./assets/logo.svg")}
            className="ReactApp-logo"
            alt="logo"
          />
          <a
            className="ReactApp-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
