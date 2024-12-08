import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import Root from "../Layout/Root";

import ErrorPage from "../Component/ErrorPage";
import Login from "../Component/Login";
import Register from "../Component/Register";
import AddVisa from "../Component/AddVisa";
import PrivateProfile from "../Component/PrivateProfile";
import AllVisas from "../Component/AllVisas";
import Details from "../Component/Details";
import AddedVisa from "../Component/AddedVisa";
import PrivateAddedVisa from "../Component/PrivateAddedVisa";
import MyVisaApplications from "../Component/MyVisaApplications";
import Forget from "../Component/Forget";


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
            loader:()=>fetch("https://assignment-10-server-side-azure.vercel.app/all-visa")
        },
        {
            path:"/details/:id",
            element:<PrivateProfile><Details></Details></PrivateProfile>,
            loader:({params})=>fetch(`https://assignment-10-server-side-azure.vercel.app/details/${params.id}`),
        },
        {
            path:"/added-visa/:email",
            element:<PrivateAddedVisa><AddedVisa></AddedVisa></PrivateAddedVisa>,
            loader:({params})=>fetch(`https://assignment-10-server-side-azure.vercel.app/added-visa/${params.email}`),
        },
        {
            path:"/visa-application/:email",
            element:<PrivateAddedVisa><MyVisaApplications></MyVisaApplications></PrivateAddedVisa>,
            loader:({params})=>fetch(`https://assignment-10-server-side-azure.vercel.app/visa-application/${params.email}`),
        },
        {
            path:"/forget",
            element:<Forget></Forget>,
        },
        


      ]
    },
  ]);

export default Router;