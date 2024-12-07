import { useState } from "react";
import toast from "react-hot-toast";

const AddVisa = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedType, setSelectedType] = useState("");
    const handleTypes = (e) => {
        setSelectedType(e.target.value);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            setSelectedOptions([...selectedOptions, value]);
        } else {
            setSelectedOptions(selectedOptions.filter((item) => item !== value));
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const CImage = form.CImage.value
        const CName = form.CName.value
        const PTime = form.PTime.value
        const Description = form.Description.value
        const Age = parseInt(form.Age.value)
        const Fee = parseInt(form.Fee.value)
        const Validity = form.Validity.value
        const Method = form.Method.value

        const formDocument = { CImage, CName, selectedType, PTime, selectedOptions, Description, Age, Fee, Validity, Method }
        fetch("http://localhost:5000/form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDocument),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Added the visa successfully")
            })
    }
    return (
        <div className="w-11/12 mx-auto my-10 text-center">
            <h2 className="font-bold text-5xl mb-5">Add Visa</h2>
            <form onSubmit={handleSubmit}>


                {/* form row 1 */}
                <div className="flex gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Country Image</span>
                        </label>
                        <input type="text" name="CImage" placeholder="Image link" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <input type="text" name="CName" placeholder="Name of The Country" className="input input-bordered" required />
                    </div>
                </div>

                {/* form row 2*/}
                <div className="flex gap-5">
                    <div className="form-control w-full relative">
                        <label className="label">
                            <span className="label-text">Visa Type</span>
                        </label>
                        <img className="w-5 h-5 absolute right-3 bottom-4" src="https://cdn-icons-png.flaticon.com/128/9297/9297089.png" alt="" />
                        <select onChange={handleTypes} value={selectedType} name="Types" id=""
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
                        <input type="text" name="PTime" placeholder="Processing Time" className="input input-bordered" required />
                    </div>
                </div>

                {/* form row 3*/}
                <div className="flex gap-5">
                    <div className=" bg-white form-control w-full">
                        <h3 className="label text-sm px-1 py-2">Required Documents</h3>
                        <div className="space-y-2 p-3 border rounded-lg">
                            <label className="flex items-center space-x-3 text-gray-700">
                                <input
                                    onChange={handleChange}
                                    type="checkbox"
                                    name="documents"
                                    value="Valid Passport"
                                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span>Valid Passport</span>
                            </label>

                            <label className="flex items-center space-x-3 text-gray-700">
                                <input
                                    onChange={handleChange}
                                    type="checkbox"
                                    name="documents"
                                    value="Visa Application Form"
                                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span>Visa Application Form</span>
                            </label>

                            <label className="flex items-center space-x-3 text-gray-700">
                                <input
                                    onChange={handleChange}
                                    type="checkbox"
                                    name="documents"
                                    value="Recent Photograph"
                                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span>Recent Passport-Sized Photograph</span>
                            </label>
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea type="text" name="Description" placeholder="Put the description" className="input input-bordered h-28" required />
                    </div>
                </div>

                {/* form row 4 */}
                <div className="flex gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Age Restriction</span>
                        </label>
                        <input type="number" name="Age" placeholder="Restriction Age" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Fee</span>
                        </label>
                        <input type="number" name="Fee" placeholder="Fee amount" className="input input-bordered" required />
                    </div>
                </div>

                {/* form row 5 */}
                <div className="flex gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Validity</span>
                        </label>
                        <input type="text" name="Validity" placeholder="Validity" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Application Method</span>
                        </label>
                        <input type="text" name="Method" placeholder="Application Method" className="input input-bordered" required />
                    </div>
                </div>

                <div>
                    <button className="btn btn-block mt-5 bg-sky-500 text-white hover:bg-sky-700">Add Visa</button>

                </div>

            </form >
        </div >
    );
};

export default AddVisa;