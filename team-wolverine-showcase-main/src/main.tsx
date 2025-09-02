import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// ===========================
// FORCE FAVICON TO WOLVERINE
// ===========================
const setFavicon = () => {
  const link: HTMLLinkElement | null = document.querySelector(
    "link[rel~='icon']"
  );
  if (link) {
    link.href = "/favicon.ico?v=2"; // your Wolverine icon in public/
  } else {
    const newLink = document.createElement("link");
    newLink.rel = "icon";
    newLink.href = "/favicon.ico?v=2";
    document.head.appendChild(newLink);
  }
};
setFavicon();
// ===========================

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
