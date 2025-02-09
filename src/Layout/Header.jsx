import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
    const navigate=useNavigate()
    const {user,userSignOut}=useContext(AuthContext)
    const links = <>
        <NavLink className="btn btn-ghost font-semibold mr-2" to="/">Home</NavLink>
        <NavLink className="btn btn-ghost font-semibold mr-2" to="/all-visa">All visas</NavLink>
        <NavLink className="btn btn-ghost font-semibold mr-2" to="/add-visa">Add Visa</NavLink>

        {user?<NavLink className="btn btn-ghost font-semibold mr-2" to={`/added-visa/${user?.email}`}>My added visas</NavLink>:<NavLink className="btn btn-ghost font-semibold mr-2" to={`/login`}>My added visas</NavLink>}

        {user?<NavLink className="btn btn-ghost font-semibold mr-2" to={`/visa-application/${user?.email}`}>My Visa applications</NavLink>:<NavLink className="btn btn-ghost font-semibold mr-2" to={`/login`}>My Visa applications</NavLink>}
        
    </>
    const handleSignOut=()=>{
        userSignOut()
        .then(result=>{
            toast.success("Logged out Successfully")
            navigate("/")
        })

    }
    
    return (
        <div className=" text-white sticky top-0 z-50">
            

            <div className="main-header bg-[#eab64f] ">
                <div className="navbar w-11/12 mx-auto p-0">
                    <div className="navbar-start md:w-1/2 w-2/3">
                        <div className="dropdown text-black">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                                {
                                    links
                                }
                            </ul>
                        </div>
                        <Link to="/">
                        <h1 className="text-4xl font-bold border-2 border-white px-2 py-1">VN</h1>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="navbar-end w-1/3 md:w-1/2">
                        {
                            user
                            ?<div className="flex group hover:bg-sky-300 absolute flex-col p-3 pt-1 rounded-lg top-1  gap-2 items-end my-2 ">
                                <img className="w-12 h-12 rounded-full object-cover " src={`${user.photoURL}`} alt="" />
                                <h2 className="text-black hidden group-hover:block">{user.displayName}</h2>
                                <button onClick={handleSignOut} className="hidden group-hover:block btn bg-white   top-14 hover:bg-slate-100 ">Logout</button>
                            </div>
                            :<div className="sm:space-x-2">
                                <Link to="/login" className="btn btn-ghost">Login</Link>
                                <Link to="/register" className="btn btn-ghost">Register</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default Header;