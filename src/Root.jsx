/* eslint-disable global-require */
import { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import store from "./store";

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Provider store={store}>
          <BrowserRouter basename={"/#"}>
            <App />
          </BrowserRouter>
        </Provider>
    );
  }
}