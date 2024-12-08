import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const Root = () => {
    return (
        <div>
            <Toaster></Toaster>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;