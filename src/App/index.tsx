import React from "react";
import LazyLoad from "react-lazyload";
import loadable from "@loadable/component";

const ReactApp = loadable(() =>
  import(/* webpackChunkName: "react-app" */ "./Components/React")
);
const A = loadable(() =>
  import(/* webpackChunkName: "component-a" */ "./Components/A")
);
const B = loadable(() =>
  import(/* webpackChunkName: "component-b" */ "./Components/B")
);
const C = loadable(() =>
  import(/* webpackChunkName: "component-c" */ "./Components/C")
);

export default class App extends React.PureComponent {
  render() {
    return (
      <>
        <LazyLoad height={1000} offset={100} once>
          <ReactApp />
        </LazyLoad>
        <LazyLoad height={1000} offset={100} once>
          <A />
        </LazyLoad>
        <LazyLoad height={1000} offset={100} once>
          <B />
        </LazyLoad>
        <LazyLoad height={1000} offset={100} once>
          <C />
        </LazyLoad>
      </>
    );
  }
}
