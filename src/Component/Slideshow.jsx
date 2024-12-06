import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}








const slideImages = [
  {
    url: 'https://i.ibb.co.com/J2xKjjZ/benoit-beaumatin-FKcvr-ldke-Q-unsplash.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://i.ibb.co.com/fCwfR8M/krupali-patel-o-Jh-IQSt6-SIo-unsplash-1.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://i.ibb.co.com/Jp0x5LW/tanuj-adhikary-7-UJ5rrg4-Ml-Q-unsplash.jpg',
    caption: 'Slide 3'
  },
  {
    url: 'https://i.ibb.co.com/tQkZ6dK/christine-roy-ir5-MHI6r-Pg0-unsplash.jpg',
    caption: 'Slide 4'
  },
  {
    url: 'https://i.ibb.co.com/hHc67sc/kyle-glenn-n-Xt5-Ht-Lmlg-E-unsplash.jpg',
    caption: 'Slide 5'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container w-11/12 mx-auto mt-10">
        <Slide duration={3000}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;