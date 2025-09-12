import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import React from "react";
import { store } from "./store/store";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
