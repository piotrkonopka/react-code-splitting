import React from "react";
import LazyLoad from "react-lazyload";
import loadable from "@loadable/component";

const ReactApp = loadable(() =>
  import(/* webpackChunkName: "react-app" */ "./Components/React")
);

export default class App extends React.PureComponent {
  render() {
    return (
      <>
        <LazyLoad height={500} offset={100} once>
          <ReactApp />
        </LazyLoad>
      </>
    );
  }
}
