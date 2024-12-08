import LatestVisa from "../Component/LatestVisa";
import Newsletter from "../Component/Newsletter";
import Slideshow from "../Component/Slideshow";


const Home = () => {
    return (
        <div>
            <Slideshow></Slideshow>
            <LatestVisa></LatestVisa>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;