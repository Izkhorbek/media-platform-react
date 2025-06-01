import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./router/router";
import "./index.css"; // Import your main styles
import "./styles/variables.css"; // Import Tailwind CSS styles
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <Router />
  </StrictMode>,
);
