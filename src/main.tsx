import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css"; // Import your main styles
import "./styles/variables.css"; // Import Tailwind CSS styles
import App from "./container/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
