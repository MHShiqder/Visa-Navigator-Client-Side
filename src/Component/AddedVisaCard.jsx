
import { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AddedVisaCard = ({ visa, setVisas, Visas }) => {
    const { _id, CName, CImage, selectedType, PTime, Validity, Fee, Method, Age, Description, selectedOptions } = visa;

    const [selectedType2, setSelectedType2] = useState(selectedType);
    const handleTypes = (e) => {
        setSelectedType2(e.target.value);
    };

    // modal update section 
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const CImage = form.CImage.value
        const CName = form.CName.value
        const PTime = form.PTime.value
        const Age = parseInt(form.Age.value)
        const Fee = parseInt(form.Fee.value)
        const Validity = form.Validity.value
        const Method = form.Method.value

        const formDocument = { CImage, CName, selectedType2, PTime,  Age, Fee, Validity, Method, }
        fetch(`http://localhost:5000/all-visa/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDocument),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Updated the visa successfully")
            })
            document.getElementById(`my_modal_${_id}`).close()
    }


    const handleDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/all-visa/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        const newData = Visas.filter(data => _id != data._id)
                        setVisas(newData)
                        if (data.deleted > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
                <figure className="px-5 pt-5">
                    <img
                        src={CImage}
                        alt="Flag"
                        className="rounded-xl object-cover h-40 w-full" />
                </figure>
                <div className="card-body  items-start  p-4">
                    <h2 className="card-title text-3xl font-bold mx-auto mb-5 ">{CName}</h2>
                    <h3><span className="font-bold ">Visa type: </span>{selectedType}</h3>
                    <h3><span className="font-bold ">Processing time: </span>{PTime}</h3>
                    <h3><span className="font-bold ">Fee:</span> {Fee}</h3>
                    <h3><span className="font-bold ">Validity: </span>{Validity}</h3>
                    <h3><span className="font-bold ">Application method: </span>{Method}</h3>
                    <h3><span className="font-bold ">Age Restriction: </span>{Age}</h3>
                    <h3><span className="font-bold flex-1">Description: </span>{Description}</h3>
                    <div className="flex-1">
                        <h3 className="font-bold">Required Document:</h3>
                        {
                            selectedOptions.map((option, idx) => (
                                <p key={idx}>{idx + 1} : {option}</p>
                            ))
                        }
                    </div>
                    <div className="card-actions">

                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn  bg-red-300">Delete</button>
                        <button
                            onClick={() => document.getElementById(`my_modal_${_id}`).showModal()}
                            className="btn  bg-sky-300">Update</button>

                    </div>



                    {/* modal starting from here */}

                    <dialog id={`my_modal_${_id}`} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <form onSubmit={handleSubmit}>


                                {/* form row 1 */}
                                <div className="flex gap-5">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Country Image</span>
                                        </label>
                                        <input type="text" name="CImage" defaultValue={CImage} placeholder="Image link" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Country Name</span>
                                        </label>
                                        <input type="text" name="CName" defaultValue={CName} placeholder="Name of The Country" className="input input-bordered" required />
                                    </div>
                                </div>

                                {/* form row 2*/}
                                <div className="flex gap-5">
                                    <div className="form-control w-full relative">
                                        <label className="label">
                                            <span className="label-text">Visa Type</span>
                                        </label>
                                        <img className="w-5 h-5 absolute right-3 bottom-4" src="https://cdn-icons-png.flaticon.com/128/9297/9297089.png" alt="" />
                                        <select onChange={handleTypes} defaultValue={selectedType2} name="Types" id=""
                                            className="input input-bordered">
                                            <option value="">-- Select an option --</option>
                                            <option value="Tourist Visa">Tourist Visa</option>
                                            <option value="Official Visa">Official Visa</option>
                                            <option value="Student Visa">Student Visa</option>
                                        </select>
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Processing Time</span>
                                        </label>
                                        <input type="text" name="PTime" defaultValue={PTime} placeholder="Processing Time" className="input input-bordered" required />
                                    </div>
                                </div>

                                
                                {/* form row 4 */}
                                <div className="flex gap-5">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Age Restriction</span>
                                        </label>
                                        <input type="number" defaultValue={Age} name="Age" placeholder="Restriction Age" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Fee</span>
                                        </label>
                                        <input type="number" defaultValue={Fee} name="Fee" placeholder="Fee amount" className="input input-bordered" required />
                                    </div>
                                </div>

                                {/* form row 5 */}
                                <div className="flex gap-5">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Validity</span>
                                        </label>
                                        <input type="text" defaultValue={Validity} name="Validity" placeholder="Validity" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Application Method</span>
                                        </label>
                                        <input type="text" defaultValue={Method} name="Method" placeholder="Application Method" className="input input-bordered" required />
                                    </div>
                                </div>

                                <div className="flex gap-5 mt-5">
                                    <button className="btn" type="submit">Submit</button>
                                    <button onClick={() => document.getElementById(`my_modal_${_id}`).close()} className="btn" type="button">Close</button>
                                </div>
                            </form >
                        </div>
                    </dialog>




                </div>
            </div>

        </div>
    );
};

export default AddedVisaCard;