import { useContext, useRef } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
const Forget = () => {

    const { passwordReset, forgetEmail } = useContext(AuthContext)
    const emailRef = useRef()

    const handleForgetPass = (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        if (!email) {
            toast.error("Please provide an email")
        }
        else {
            passwordReset(email)
                .then(() => {
                    toast.success("Password reset email is sent")
                    // window.open("https://mail.google.com", "_blank")
                    window.location.href = "https://mail.google.com"
                }
                )
                .catch(error => {
                    toast.error(error.message)
                })
        }
    }
    return (
        <div className="text-center">
            <h1 className="text-5xl font-bold mt-10 mb-5">Forgot Password?</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mb-5">
            <form action="" className="card-body ">
                <div className="form-control" >
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input defaultValue={forgetEmail} ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button onClick={handleForgetPass} className="btn bg-sky-500 text-white hover:bg-sky-700">Reset Password</button>
                </div>
            </form>

        </div>
        </div>
    );
};

export default Forget;