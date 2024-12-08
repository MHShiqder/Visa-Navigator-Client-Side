import LatestVisa from "../Component/LatestVisa";
import Newsletter from "../Component/Newsletter";
import Slideshow from "../Component/Slideshow";
import Success from "../Component/Success";
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { useTypewriter } from 'react-simple-typewriter'
import Lottie from "lottie-react";
import groovyWalkAnimation from "../Component/groovyWalk.json";


const Home = () => {
    // Typewriter helper
    const [text] = useTypewriter({
        words: ['Well-Come', 'To', 'Visa-Navigator'],
        loop: 0
    })

    // theme control 
    useEffect(() => {
        themeChange(false)
    }, [])
    return (
        <div className="text-center">
            <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" className="btn btn-outline mt-5 ">Dark \ Light</button>

            {/* Typewriter text  */}
            <div className='App text-3xl font-bold mt-5'>
               <h2>Hey! <span className="text-red-500">{text}</span></h2>
            </div>
            <Slideshow></Slideshow>
            <LatestVisa></LatestVisa>
            <Newsletter></Newsletter>
            <Success></Success>
            <div className="w-64 mx-auto">
                <h2 className="text-4xl font-bold">Lets explore the world </h2>
            <Lottie animationData={groovyWalkAnimation} />
            </div>
        </div>
    );
};

export default Home;