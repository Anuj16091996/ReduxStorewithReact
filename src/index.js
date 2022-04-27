import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WebBody from "./component/WebBody";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import dataStore from "./redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={dataStore}>
      <WebBody />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "./reducers";
// import functionDataSore from "./App";
// const dataStore = configureStore({
//   reducer: counterSlice,
// });

//For Functional compoenets data store
// import { useSelector, useDispatch } from "react-redux";
// import { actions } from "./reducers/index";
