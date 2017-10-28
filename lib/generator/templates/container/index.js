import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import stores from "../../stores";

const COMPONENT_NAME = () => (
  <Provider stores={stores}>
    <div>your component here</div>
    {"/* add your top-tier children components here */"}
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <COMPONENT_NAME />,
    document.querySelector("your-selector-here")
  );

  // @NOTE: If you need to fetch initial data on load
  // trigger your fetch function here to populate the model accordingly
  // ie: stores.yourStore.yourFetchFunction();
});
