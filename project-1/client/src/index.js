import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./context/auth";
import { ConfigProvider } from "antd";
import FloatBtn from "./App/components/FloatBtn";

const meriTheme = {
  components: {
    Button: {
      colorPrimary: "#000",
      algorithm: true, // Enable algorithm
    },
    FloatButton: {
      colorPrimary: "#000",
      algorithm: true, // Enable algorithm
    },
  },
};

const dark = {
  components: {
    Button: {
      colorPrimary: "#red",
      algorithm: true, // Enable algorithm
    },
    FloatButton: {
      colorPrimary: "#000",
      algorithm: true, // Enable algorithm
    },
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <ConfigProvider theme={meriTheme}>
        <Toaster position="bottom-right" />
        <FloatBtn />
        <App />
      </ConfigProvider>
    </AuthProvider>
  </BrowserRouter>
);
