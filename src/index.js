import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Weather />
  </StrictMode>
);
