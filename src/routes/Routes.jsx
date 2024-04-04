import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../layouts/Home";
import Login from "../layouts/Login";
import Register from "../layouts/Register";
import NewsDetails from "../layouts/NewsDetails";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch('/news.json')
        },
        {
            path: "/news/:id",
            element: <PrivetRoute>
                <NewsDetails></NewsDetails>
            </PrivetRoute>,
            loader: () => fetch('/news.json')
        },
        {
            path: "/login",
            element: <Login></Login>
        }, 
        {
            path: "/register",
            element: <Register></Register>
        }
      ]
    },
  ]);

export default router;