import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'


const link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
if (link) {
  link.href = "/favicon.ico?v=2"; // points to your Wolverine favicon
} else {
  const newLink = document.createElement("link");
  newLink.rel = "icon";
  newLink.href = "/favicon.ico?v=2";
  document.head.appendChild(newLink);
}

createRoot(document.getElementById("root")!).render(<App />);
