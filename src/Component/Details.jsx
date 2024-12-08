import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Details = () => {
    const { user } = useContext(AuthContext)
    const {  CName, CImage, selectedType, PTime, Validity, Fee, Method, Age, Description, selectedOptions } = useLoaderData();
    const handleApply = (e) => {
        e.preventDefault()
        const form = e.target;
        const FName = form.FName.value;
        const LName = form.LName.value;
        const email = form.email.value;
        const Fee = form.Fee.value;
        const Date = form.Date.value;
        const formData = { FName, LName, email, Date, Fee,CName, CImage, selectedType, PTime, Validity,  Method }
        fetch("https://assignment-10-server-side-azure.vercel.app/apply",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Added the Application successfully")
                console.log(data);
            })
        console.log(formData)
        e.target.reset()
        document.getElementById("my_modal_5").close()
    }
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
                <figure className="px-5 pt-5">
                    <img
                        src={CImage}
                        alt="Flag"
                        className="rounded-xl object-cover h-48 w-80" />
                </figure>
                <div className="card-body items-start mx-auto sm:text-xl p-4">
                    <h2 className="card-title text-3xl font-bold mx-auto mb-5 ">{CName}</h2>
                    <h3><span className="font-bold ">Visa type: </span>{selectedType}</h3>
                    <h3><span className="font-bold ">Processing time: </span>{PTime}</h3>
                    <h3><span className="font-bold ">Fee:</span> {Fee}</h3>
                    <h3><span className="font-bold ">Validity: </span>{Validity}</h3>
                    <h3><span className="font-bold ">Application method: </span>{Method}</h3>
                    <h3><span className="font-bold ">Age Restriction: </span>{Age}</h3>
                    <h3><span className="font-bold ">Description: </span>{Description}</h3>
                    <h3><span className="font-bold ">Required Document:</span>
                        {

                            selectedOptions.map((option, idx) => <p key={idx}>{idx + 1} : {option}</p>)
                        }
                    </h3>
                    <div className="card-actions">

                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn mt-5 bg-sky-300">Apply For Visa</button>

                    </div>

                    {/* modal  */}

                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <form onSubmit={handleApply}>

                                {/* row 1 */}
                                <div className="flex flex-col sm:flex-row sm:gap-5">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">First Name</span>
                                        </label>
                                        <input type="text" name="FName" placeholder="Enter your first name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Last Name</span>
                                        </label>
                                        <input type="text" name="LName" placeholder="Enter your first name" className="input input-bordered" required />
                                    </div>
                                </div>


                                {/* email row */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">E-mail</span>
                                    </label>
                                    <input type="text" name="email"
                                        value={user.email} className="input input-bordered" readOnly />
                                </div>

                                {/* row 2 */}
                                <div className="flex flex-col sm:flex-row sm:gap-5">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Applied Date</span>
                                        </label>
                                        <input type="text" name="Date" value={new Date().toDateString()} className="input input-bordered" readOnly />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Fees </span>
                                        </label>
                                        <input type="text" name="Fee"
                                            value={Fee} className="input input-bordered" readOnly />
                                    </div>
                                </div>




                                <div className="modal-action justify-center">

                                    <button className="btn" type="submit">Submit</button>
                                    <button onClick={() => document.getElementById("my_modal_5").close()} className="btn" type="button">Close</button>

                                </div>
                            </form>
                        </div>
                    </dialog>

                </div>
            </div>
        </div>
    );
};

export default Details;