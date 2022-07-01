import React from "react";
import ReactDOM from "react-dom/client";
import NavRouter from "./routes/navRouter";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="App">
      <NavRouter />
    </div>
  </React.StrictMode>
);
