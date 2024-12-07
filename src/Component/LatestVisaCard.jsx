import React from 'react';
import { Link } from 'react-router-dom';

const LatestVisaCard = ({ form }) => {
    const { CName, CImage, selectedType, PTime, Validity, Fee, Method } = form
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
                <figure className="px-5 pt-5">
                    <img
                        src={CImage}
                        alt="Flag"
                        className="rounded-xl object-cover h-40 w-full" />
                </figure>
                <div className="card-body items-center border p-4">
                    <h2 className="card-title mx-auto ">{CName}</h2>
                    <h3>Visa type: {selectedType}</h3>
                    <h3>Processing time: {PTime}</h3>
                    <h3>Fee: {Fee}</h3>
                    <h3>Validity: {Validity}</h3>
                    <h3>Application method: {Method}</h3>
                    <div className="card-actions">
                        <Link to="/details">
                        <button className="btn  bg-sky-300">See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestVisaCard;