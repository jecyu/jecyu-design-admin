import { createBrowserRouter } from "react-router-dom";
import Welcome from "../pages/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Welcome,
  },
]);

export default router;
