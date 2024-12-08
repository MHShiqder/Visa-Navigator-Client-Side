import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import 'animate.css';
import { useEffect, useState } from 'react';

const Success = () => {
    const [isVisible, setIsVisible] = useState(false);  // State to track visibility

    useEffect(() => {
        // Create an Intersection Observer to watch for when the element is visible on screen
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {  // If the element is visible on the screen
                    setIsVisible(true);        // Trigger the animation
                }
            });
        });

        const element = document.getElementById('animateMe2');  // The element we want to animate
        observer.observe(element);  // Start observing the element

        return () => observer.disconnect();  // Cleanup the observer when the component unmounts
    }, []);
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })
    return (
        <div id="animateMe2" className={`bg-[#eab64f] w-11/12 mx-auto pb-10 bg-cover bg-right text-white px-5 mb-10 animate__animated ${isVisible ? 'animate__fadeInRight' : ''}`}>
            <h1 className="text-5xl font-bold py-10 text-center">Success</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
                <div className="flex flex-col items-center bg-[#ffffff3b] border py-10 space-y-3 ">
                    <img className="w-14 " src="https://cdn-icons-png.flaticon.com/128/511/511587.png" alt="" />
                    <h3 ref={ref} className="text-5xl">{inView && (<CountUp end={389}></CountUp>)}</h3>
                    <h5 className="text-xl ">Team Members </h5>
                </div>

                <div className="flex flex-col items-center bg-[#ffffff3b] border py-10 space-y-3 ">
                    <img className="w-14" src="https://cdn-icons-png.flaticon.com/128/3018/3018864.png" alt="" />
                    <h3 ref={ref} className="text-5xl">{inView && (<CountUp end={30}></CountUp>)}</h3>
                    <h5 className="text-xl ">Visa Categories</h5>
                </div>

                <div className="flex flex-col items-center bg-[#ffffff3b] border py-10 space-y-3 ">
                    <img className="w-14" src="https://cdn-icons-png.flaticon.com/128/10558/10558485.png" alt="" />
                    <h3 ref={ref} className="text-5xl">{inView && (<CountUp end={4900}></CountUp>)}</h3>
                    <h5 className="text-xl ">Visa Process</h5>
                </div>

                <div className="flex flex-col items-center bg-[#ffffff3b] border py-10 space-y-3 ">
                    <img className="w-14" src="https://cdn-icons-png.flaticon.com/128/7341/7341885.png" alt="" />
                    <h3 ref={ref} className="text-5xl">{inView && (<CountUp end={98}></CountUp>)}</h3>
                    <h5 className="text-xl ">Success Rate</h5>
                </div>

            </div>
        </div>
    );
};

export default Success;