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
        path: "/",
        element: <ChartPage />,
        loader: async () => {
          return localStorage.getItem("access_token") ? redirect("/chart") : null;
        },
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/chart",
        element: <ChartPage />,
        loader: async () => {
          return !localStorage.getItem("access_token") ? redirect("/login") : null;
        },
      },
      {
        path: "/table",
        element: <TablePage />,
        loader: async () => {
          return !localStorage.getItem("access_token") ? redirect("/login") : null;
        },
      },
    ],
  },
]);

export default router;
