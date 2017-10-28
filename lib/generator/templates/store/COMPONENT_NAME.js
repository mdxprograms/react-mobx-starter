/* eslint no-return-assign: 0 */
import { extendObservable } from "mobx";
import {
  initialState,
  COMPONENT_NAMEModel as model
} from "../models/COMPONENT_NAMEModel";
import { COMPONENT_NAMEActions as actions } from "../actions/COMPONENT_NAMEActions";

class COMPONENT_NAMEStore {
  constructor() {
    extendObservable(this, {
      ...model(),
      ...actions(this, initialState)
    });
  }
}

// @IMPORTANT: Make sure to import your store in stores/index.js and add to the stores object
export default COMPONENT_NAMEStore;
