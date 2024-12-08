import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ApplicationCard from "./ApplicationCard";
import toast from "react-hot-toast";


const MyVisaApplications = () => {
    const data = useLoaderData()
    const [applications, setApplications] = useState(data)
    const handleSubmit = (e) => {
        e.preventDefault()
        const countryName=e.target.country.value;
        const newData=data.filter(D=>D.CName==countryName)
        if(newData.length<1)
        {
            toast.error("No match found")
        }
        setApplications(newData);
    }
    const handleReset=(e)=>{
        e.preventDefault()
        setApplications(data);
    }

    return (
        <div className="w-11/12 mx-auto my-10 ">
            <h2 className="font-bold text-5xl mx-auto mb-5 text-center">Applied Visas</h2>

            <div className="text-center">
            <form onSubmit={handleSubmit} className="my-5 join">
                <input type="text" name="country" className="input input-bordered join-item" />
                <button type="submit" className="btn join-item bg-sky-300">Search</button>
            </form>
                <button onClick={handleReset} className="btn btn-outline sm:ml-10">Reset</button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    applications.map((app, idx) => <ApplicationCard key={idx} applications={applications} setApplications={setApplications} app={app}></ApplicationCard>)
                }
            </div>
        </div>
    );
};

export default MyVisaApplications;