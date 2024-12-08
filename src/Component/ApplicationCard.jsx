import Swal from "sweetalert2";

const ApplicationCard = ({ app, setApplications, applications }) => {
    const { _id, FName, LName, email, Date, Fee, CName, CImage, selectedType, PTime, Validity, Method } = app

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

                fetch(`http://localhost:5000/visa-application/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        const newData = applications.filter(data => _id != data._id)
                        setApplications(newData)
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
        <div >
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
                    <h3><span className="font-bold ">Application date: </span>{Date}</h3>
                    <h3><span className="font-bold ">Applicant's name: </span>{FName + " " + LName}</h3>
                    <h3><span className="font-bold ">Applicant's email: </span>{email}</h3>



                    <div className="card-actions">

                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn  bg-red-300">Cancel</button>


                    </div>




                </div>
            </div>
        </div>
    );
};

export default ApplicationCard;