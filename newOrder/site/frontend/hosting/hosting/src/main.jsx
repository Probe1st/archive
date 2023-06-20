// firebase

// react
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/output.css";
import Login from "./Login";
import Admin from "./Admin";

// react ----------------------------------------------------------------
const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Admin />
  },
  {
    path: "/login",
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} pass={false} />
  </React.StrictMode>
);

// firebase -------------------------------------------------------------

