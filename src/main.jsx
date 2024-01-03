import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import "./todoapp.css";
import { App } from "./App.jsx";
import { UserProvider } from "context/User";
import { TaskProvider } from "context/Tasks";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </UserProvider>
  </StrictMode>
);
