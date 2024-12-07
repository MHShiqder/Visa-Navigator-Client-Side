import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateProfile = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation();
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user){
        return children
    }
    
    return (
        <Navigate state={{from:location.pathname}} to="/login"></Navigate>
    );
};

export default PrivateProfile;