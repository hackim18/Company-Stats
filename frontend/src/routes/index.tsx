import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../views/Login";
import Navbar from "../components/Navbar";
import Home from "../views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          return localStorage.getItem("access_token") ? redirect("/dashboard") : null;
        },
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Home />,
        loader: async () => {
          return !localStorage.getItem("access_token") ? redirect("/login") : null;
        },
      },
    ],
  },
]);

export default router;
