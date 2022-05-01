import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebBody from "./component/WebBody";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import dataStore from "./redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={dataStore}>
      <WebBody />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//For Functional compoenets data store
// import { useSelector, useDispatch } from "react-redux";
// import { actions } from "./reducers/index";
