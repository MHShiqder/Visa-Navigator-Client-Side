import LatestVisa from "../Component/LatestVisa";
import Newsletter from "../Component/Newsletter";
import Slideshow from "../Component/Slideshow";
import Success from "../Component/Success";


const Home = () => {
    return (
        <div>
            <Slideshow></Slideshow>
            <LatestVisa></LatestVisa>
            <Newsletter></Newsletter>
            <Success></Success>
        </div>
    );
};

export default Home;