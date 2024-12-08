import { useLoaderData } from "react-router-dom";
import LatestVisaCard from "./LatestVisaCard";
import { useState } from "react";

const AllVisas = () => {
    const Data = useLoaderData();
    const [formData, setFormData] = useState(Data)
    const handleAllClick =()=>{
        setFormData(Data);
    }
    const handleTouristVisaClick =()=>{
        const newData=Data.filter(D=>"Tourist Visa"==D.selectedType)
        setFormData(newData);
    }
    const handleStudentVisaClick =()=>{
        const newData=Data.filter(D=>"Student Visa"==D.selectedType)
        setFormData(newData);
    }
    const handleOfficialVisaClick =()=>{
        const newData=Data.filter(D=>"Official Visa"==D.selectedType)
        setFormData(newData);
    }
    return (
        <div className="w-11/12 mx-auto my-10 text-center">
            <div>
                <h2 className="text-5xl font-bold m-5">All Visas</h2>
                {/* dropdown menu  */}
                <div className="text-start mb-5 mt-7">
                    <div className="dropdown dropdown-right dropdown-end">
                        <div tabIndex={0} role="button" className="btn bg-sky-300 m-1 text-xl">Filter</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <button onClick={handleAllClick}><li><a>All</a></li></button>
                            <button onClick={handleTouristVisaClick}><li><a>Tourist Visa
                            </a></li></button>
                            <button onClick={handleStudentVisaClick}><li><a>Student Visa
                            </a></li></button>
                            <button onClick={handleOfficialVisaClick}><li><a>Official Visa
                            </a></li></button>
                            
                        </ul>
                    </div>
                </div>
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