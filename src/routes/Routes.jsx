import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../layouts/Home";
import Login from "../layouts/Login";
import Register from "../layouts/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
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