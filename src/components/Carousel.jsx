import { useState } from 'react';
import './carousel.css';

const Carousel = () => {

  // Rotation du carousel
const [carousel_rotate, setCarousel_rotate] = useState('carousel');
console.log(carousel_rotate);

// Position des cartes
const [carouselFace1, setCarouselFace1]= useState('carousel__face carousel__face1');
const [carouselFace2, setCarouselFace2]= useState('carousel__face carousel__face2');
const [carouselFace3, setCarouselFace3]= useState('carousel__face carousel__face3');
const [carouselFace4, setCarouselFace4]= useState('carousel__face carousel__face4');
const [carouselFace5, setCarouselFace5]= useState('carousel__face carousel__face5');

const mouseEnter1 = () => {
  setCarousel_rotate('carousel_fixed');
  positionCarousel1();
};

const mouseEnter2 = () => {
  setCarousel_rotate('carousel_fixed');
  positionCarousel2();
};


const mouseEnter3 = () => {
  setCarousel_rotate('carousel_fixed');
  positionCarousel3();
};

const mouseEnter4 = () => {
  setCarousel_rotate('carousel_fixed');
  positionCarousel4();
};


const mouseEnter5 = () => {
  setCarousel_rotate('carousel_fixed');
  positionCarousel5();
};

const mouseLeave = () => {
  setCarousel_rotate('carousel');
}

const positionCarousel1 = () => {
  setCarouselFace1('carousel__face carousel__face1');
  setCarouselFace2('carousel__face carousel__face2');
  setCarouselFace3('carousel__face carousel__face3');
  setCarouselFace4('carousel__face carousel__face4');
  setCarouselFace5('carousel__face carousel__face5');
}

const positionCarousel2 = () => {
  setCarouselFace1('carousel__face carousel__face5');
  setCarouselFace2('carousel__face carousel__face1');
  setCarouselFace3('carousel__face carousel__face2');
  setCarouselFace4('carousel__face carousel__face3');
  setCarouselFace5('carousel__face carousel__face4');
}

const positionCarousel3 = () => {
  setCarouselFace1('carousel__face carousel__face4');
  setCarouselFace2('carousel__face carousel__face5');
  setCarouselFace3('carousel__face carousel__face1');
  setCarouselFace4('carousel__face carousel__face2');
  setCarouselFace5('carousel__face carousel__face3');
}

const positionCarousel4 = () => {
  setCarouselFace1('carousel__face carousel__face3');
  setCarouselFace2('carousel__face carousel__face4');
  setCarouselFace3('carousel__face carousel__face5');
  setCarouselFace4('carousel__face carousel__face1');
  setCarouselFace5('carousel__face carousel__face2');
}

const positionCarousel5 = () => {
  setCarouselFace1('carousel__face carousel__face2');
  setCarouselFace2('carousel__face carousel__face3');
  setCarouselFace3('carousel__face carousel__face4');
  setCarouselFace4('carousel__face carousel__face5');
  setCarouselFace5('carousel__face carousel__face1');
}


 return(
  <div className="container">
    <div className={carousel_rotate}>
      <div  onMouseLeave={()=>mouseLeave()} onMouseEnter={()=>mouseEnter1()} className={carouselFace1}><span>1111</span></div>
      <div  onMouseLeave={()=>mouseLeave()} onMouseEnter={()=>mouseEnter2()} className={carouselFace2}><span>2222</span></div>
      <div  onMouseLeave={()=>mouseLeave()} onMouseEnter={()=>mouseEnter3()} className={carouselFace3}><span>3333</span></div>
      <div  onMouseLeave={()=>mouseLeave()} onMouseEnter={()=>mouseEnter4()} className={carouselFace4}><span>4444</span></div>
      <div  onMouseLeave={()=>mouseLeave()} onMouseEnter={()=>mouseEnter5()} className={carouselFace5}><span>5555</span></div>
    </div>
</div>
  )
}

export default Carousel;
