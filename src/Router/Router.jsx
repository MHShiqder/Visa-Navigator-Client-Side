import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import Root from "../Layout/Root";

import ErrorPage from "../Component/ErrorPage";
import Login from "../Component/Login";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        
        {
            path:"/login",
            element:<Login></Login>,
        },
        // {
        //     path:"/register",
        //     element:<Register></Register>,
        // },
        


      ]
    },
  ]);

export default Router;