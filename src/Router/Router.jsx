import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import Root from "../Layout/Root";

import ErrorPage from "../Component/ErrorPage";
import Login from "../Component/Login";
import Register from "../Component/Register";
import AddVisa from "../Component/AddVisa";
import PrivateProfile from "../Component/PrivateProfile";
import AllVisas from "../Component/AllVisas";


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
        {
            path:"/register",
            element:<Register></Register>,
        },
        {
            path:"/add-visa",
            element:<PrivateProfile><AddVisa></AddVisa></PrivateProfile>,
        },
        {
            path:"/all-visa",
            element:<AllVisas></AllVisas>,
        },
        


      ]
    },
  ]);

export default Router;