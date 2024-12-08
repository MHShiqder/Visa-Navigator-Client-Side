import 'animate.css';
import { useEffect, useState } from 'react';
const Newsletter = () => {
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
  
      const element = document.getElementById('animateMe4');  // The element we want to animate
      observer.observe(element);  // Start observing the element
  
      return () => observer.disconnect();  // Cleanup the observer when the component unmounts
    }, []);
    return (
        <div id="animateMe4" className={`text-center w-11/12 mx-auto space-y-5 my-10 py-10 bg-sky-300 animate__animated ${isVisible ? 'animate__fadeInLeft' : ''}`}>
            <h3 className="text-5xl font-bold">Subscribe to Newsletter</h3>
            <p className="text-xl ">Stay updated with our latest news and offers</p>

            <div className="md:join">
                <input className="input input-bordered join-item rounded-lg" placeholder="Email" />
                <button className="btn bg-[#eab64f] join-item rounded-lg text-lg mt-3 ml-3">Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;