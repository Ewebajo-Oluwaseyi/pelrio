import React from "react";
import reducers from "../../data/reducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

export const StoreWrapper = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
