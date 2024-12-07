import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
    const { _id, CName, CImage, selectedType, PTime, Validity, Fee, Method, Age, Description, selectedOptions } = useLoaderData();

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

selectedOptions.map((option,idx)=><p key={idx}>{idx+1 } : {option}</p>)
                        }
                    </h3>
                    <div className="card-actions">
                        <Link to={`/details/${_id}`}>
                            <button className="btn mt-5 bg-sky-300">Apply For Visa</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;