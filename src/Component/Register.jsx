import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("")
    const { createUser, createGoogleUser, updateNamePhoto } = useContext(AuthContext)

    const handleGoogle = (e) => {
        e.preventDefault()
        createGoogleUser()
            .then(result => {
                toast.success("Registered successfully")
                navigate("/")
            })
            .catch(error => toast(error))
    }

    const handleRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const photo = e.target.photo.value
        setErrorMessage("")
        if (password.length < 6) {
            setErrorMessage("The password is less than 6 characters")
            toast.error("The password is less than 6 characters")
            return
        }
        if (!(/^(?=.*[A-Z]).*$/.test(password))) {
            setErrorMessage("Password must contain at least one Uppercase")
            toast.error("Password must contain at least one Uppercase")
            return
        }
        if (!(/^(?=.*[a-z]).*$/.test(password))) {
            setErrorMessage("Password must contain at least one Lowercase")
            toast.error("Password must contain at least one Lowercase")
            return
        }
        createUser(email, password)
            .then(result => {
                updateNamePhoto(name, photo)
                toast.success("Registered successfully")
                e.target.reset()
                navigate("/")
            })
            .catch(error => {
                setErrorMessage(error.message)
                toast.error(error.message)
            })
    }
    return (
        <div className="w-11/12 mx-auto text-center my-10">
            <h1 className="text-5xl font-bold  mb-5">Register Now</h1>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo-url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                            <span></span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-sky-500 text-white hover:bg-sky-700">Register</button>
                    </div>
                    <button onClick={handleGoogle} className="btn bg-[#edb647] text-white ">Register with Google</button>
                </form>
                <p className="mb-5">Already registered? Please <Link to="/login" className="font-bold text-blue-600 underline">LOGIN</Link></p>
                {errorMessage && <p className="text-red-500 mb-5 font-bold">{errorMessage}</p>}
            </div>
        </div>
    );
};

export default Register;