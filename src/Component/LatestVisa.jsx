import React, { useEffect, useState } from 'react';
import LatestVisaCard from './LatestVisaCard';
import { Link } from 'react-router-dom';

const LatestVisa = () => {
    const [formData, setFormData] = useState([])
    useEffect(() => {
        fetch("https://assignment-10-server-side-azure.vercel.app/form")
            .then(res => res.json())
            .then(data => {
                setFormData(data);
            })
    }, [])
    return (
        <div className='w-11/12 mx-auto text-center my-10'>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5'>
                {
                    formData.map((form, id) => <LatestVisaCard key={id} form={form}></LatestVisaCard>)
                }
            </div>
            <Link to="/all-visa">
                <button className='btn btn-block bg-[#eab64f] mt-5 text-white'>  See All Visas</button>
            </Link>

        </div>
    );
};

export default LatestVisa;