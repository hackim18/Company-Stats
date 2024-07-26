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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
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
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]);

export default router;
