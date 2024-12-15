import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app";

import "./styles/main.css";
import { BoardContextProvider } from "./contexts/useBoardContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BoardContextProvider>
      <App />
    </BoardContextProvider>
  </StrictMode>
);
