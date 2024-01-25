import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeContextProvider } from "./contexts/ThemeContext.tsx";
import { GPTModelContextProvider } from "./contexts/GPTModelContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <GPTModelContextProvider>
        <App />
      </GPTModelContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
