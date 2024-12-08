import LatestVisa from "../Component/LatestVisa";
import Newsletter from "../Component/Newsletter";
import Slideshow from "../Component/Slideshow";
import Success from "../Component/Success";
import { useEffect } from 'react'
import { themeChange } from 'theme-change'


const Home = () => {
    useEffect(() => {
        themeChange(false)
      }, [])
    return (
        <div className="text-center">
            <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" className="btn btn-outline mt-5 ">Dark \ Light</button>
            <Slideshow></Slideshow>
            <LatestVisa></LatestVisa>
            <Newsletter></Newsletter>
            <Success></Success>
        </div>
    );
};

export default Home;