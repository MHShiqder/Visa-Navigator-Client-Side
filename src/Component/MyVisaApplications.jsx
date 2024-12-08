import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ApplicationCard from "./ApplicationCard";


const MyVisaApplications = () => {
    const data = useLoaderData()
    const [applications, setApplications] = useState(data)

    return (
        <div className="w-11/12 mx-auto my-10 ">

            <h2 className="font-bold text-5xl mx-auto mb-5 text-center">Applied Visas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    applications.map((app, idx) => <ApplicationCard key={idx} applications={applications} setApplications={setApplications} app={app}></ApplicationCard>)
                }
            </div>
        </div>
    );
};

export default MyVisaApplications;