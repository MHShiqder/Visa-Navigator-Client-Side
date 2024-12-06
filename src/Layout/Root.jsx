import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "./Header";


const Root = () => {
    return (
        <div>
            <Toaster></Toaster>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;