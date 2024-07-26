import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../views/Login";
import Navbar from "../components/Navbar";
import ChartPage from "../views/Chart";
import TablePage from "../views/Table";
import Footer from "../components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Footer />
      </>
    ),
    children: [
      {
        element: <ChartPage />,
        path: "/",
        loader: async () => {
          return !localStorage.getItem("access_token") ? redirect("/login") : null;
        },
      },
      {
        element: <Login />,
        path: "/login",
        loader: async () => {
          return localStorage.getItem("access_token") ? redirect("/") : null;
        },
      },
      {
        element: <TablePage />,
        path: "/table",
        loader: async () => {
          return !localStorage.getItem("access_token") ? redirect("/login") : null;
        },
      },
    ],
  },
]);

export default router;
