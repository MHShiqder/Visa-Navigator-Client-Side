
import Swal from "sweetalert2";

const AddedVisaCard = ({ visa,setVisas,Visas }) => {
    const { _id, CName, CImage, selectedType, PTime, Validity, Fee, Method, Age, Description, selectedOptions } = visa;
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
                        const newData=Visas.filter(data=>_id!=data._id)
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
                            className="btn  bg-sky-300">Update</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddedVisaCard;