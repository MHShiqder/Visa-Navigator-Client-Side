import { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
    const navigate = useNavigate()
    const location=useLocation()
    const { userLogin,emailGetter,createGoogleUser } = useContext(AuthContext)
    const emailRef = useRef()
    // login button clicked 
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        // login 
        userLogin(email, password)
            .then(result => {
                toast.success("Logged in Successfully")
                e.target.reset()
                navigate(location.state?.from || "/")
            })
            .catch(() => {
                toast.error("Wrong email or password")
            })

    }
    const handleForgetClick=()=>{
        emailGetter(emailRef.current.value)
        navigate("/forget")
    }
    const handleGoogle = (e) => {
        e.preventDefault()
        createGoogleUser()
            .then(result => {
                
                toast.success("Logged in successfully")
                navigate(location.state?.from || "/")
            })
            .catch(error => toast(error))
    }

    return (
        <div className="w-11/12 mx-auto text-center my-10">
            <h1 className="text-5xl font-bold  mb-5">Login Now</h1>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label onClick={handleForgetClick} className="label">
                            <a className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-sky-500 text-white hover:bg-sky-700">Login</button>
                    </div>
                    <button onClick={handleGoogle} className="btn bg-[#edb647] text-white ">Login with Google</button>
                </form>
                <p className="mb-5">If you are new here, please <Link to="/register" className="font-bold text-blue-600 underline">REGISTER</Link></p>
            </div>
        </div>
    );
};

export default Login;