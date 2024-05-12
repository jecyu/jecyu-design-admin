import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./route";

createRoot(document.getElementById("app")).render(
  <RouterProvider router={router} />
);
