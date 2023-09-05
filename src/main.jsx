import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ProductReducer from "./components/ProductReducer.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
const store = configureStore({
  reducer: {
    Products: ProductReducer,
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
