import React from "react";
import storeObserver from "../hoc/StoreObserver";

const COMPONENT_NAME = ({ stores }) => {
  // const { yourStoreHere } = stores;

  return (
    <div>
      <div>fancy component here</div>
    </div>
  );
};

export default storeObserver("stores");
