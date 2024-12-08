import { useLoaderData } from "react-router-dom";
import AddedVisaCard from "./AddedVisaCard";
import { useState } from "react";

const AddedVisa = () => {
    const data=useLoaderData()
    const [Visas,setVisas]=useState(data)
    return (
        <div className="w-11/12 mx-auto my-10 ">
            <h2 className="font-bold text-5xl mx-auto mb-5 text-center">Added Visas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Visas.map((visa,idx)=><AddedVisaCard key={idx} Visas={Visas} setVisas={setVisas} visa={visa}></AddedVisaCard>)}
        </div>
        </div>
    );
};

export default AddedVisa;
