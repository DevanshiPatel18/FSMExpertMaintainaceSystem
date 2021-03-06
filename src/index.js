import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/mdbreact/dist/css/mdb.css";
import "../node_modules/bootstrap-css-only/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
// import "./assets/scss/mdb.scss";
// import Counters from "./components/counters";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
