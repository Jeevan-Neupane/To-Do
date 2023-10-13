import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalContextProvider from "./utils/GlobalState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalContextProvider>
);
