import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import "todomvc-app-css/index.css";
import { ModalProvider } from "./components/Provider/Modal";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ModalProvider>
    <App />
  </ModalProvider>
);
