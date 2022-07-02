import React from "react";
import ReactDOM from "react-dom/client";
import NavRouter from "./routes/navRouter";
import "./globalStyles.css";
import { UserContextProvider } from "./contexts/userContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="App">
      <UserContextProvider>
        <NavRouter />
      </UserContextProvider>
    </div>
  </React.StrictMode>
);
