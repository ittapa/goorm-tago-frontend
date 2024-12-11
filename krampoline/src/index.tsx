import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const renderApp = () => {
  const rootElement = document.getElementById("root");
  if (!rootElement) return;

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

renderApp();
