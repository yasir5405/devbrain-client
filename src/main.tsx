import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        richColors
        toastOptions={{
          classNames: {
            toast:
              "bg-background text-foreground border border-border shadow-lg",
            success: "border-ring/40 bg-muted text-foreground",
            error: "border-destructive/40 bg-destructive/10 text-destructive",
            warning: "border-yellow-400/40 bg-yellow-50 text-yellow-800",
            info: "border-ring/40 bg-secondary text-secondary-foreground",
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>,
);
