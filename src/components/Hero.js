import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../home.css';

const slideImages = [
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    alt: 'Ocean Waves'
  },
  {
    src: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1',
    alt: 'Children Studying'
  },
  {
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c',
    alt: 'Helping Hands'
  }
];

const Hero = () => {
  return (
    <div className="slideshow-container mt-20">
      <Slide autoplay={true} arrows={true} indicators={true} duration={5000}>
        {slideImages.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Hero;
