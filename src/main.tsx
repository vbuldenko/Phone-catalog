import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Root } from "./Root";
import { ContextProvider } from "./store/store";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextProvider>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </ContextProvider>
  </StrictMode>
);
