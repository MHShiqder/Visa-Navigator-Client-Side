import { useLoaderData } from "react-router-dom";
import LatestVisaCard from "./LatestVisaCard";

const AllVisas = () => {
    const formData = useLoaderData();
    return (
        <div className="w-11/12 mx-auto text-center"> 
        <div>
            <h2 className="text-5xl font-bold m-5">All Visas</h2>
        </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5">
                {
                    formData.map(form => <LatestVisaCard key={form._id} form={form}></LatestVisaCard>)
                }
            </div>
        </div>
    );
};

export default AllVisas;