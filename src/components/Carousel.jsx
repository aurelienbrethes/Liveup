import { useState } from 'react';
import './carousel.css';
import img1 from '../components/medias/img1.jpg';
import img2 from '../components/medias/img2.jpg';
import img3 from '../components/medias/img3.jpg';
import img4 from '../components/medias/img4.jpg';
import img5 from '../components/medias/img5.jpg';

const Carousel = () => {

// Rotation du carousel
const [carousel_rotate, setCarousel_rotate] = useState('carousel');

// Position des cartes

let carouselBase = 'carousel__face'; 
const [carouselFace1, setCarouselFace1]= useState(`${carouselBase} carousel__face1`);
const [carouselFace2, setCarouselFace2]= useState(`${carouselBase} carousel__face2`);
const [carouselFace3, setCarouselFace3]= useState(`${carouselBase} carousel__face3`);
const [carouselFace4, setCarouselFace4]= useState(`${carouselBase} carousel__face4`);
const [carouselFace5, setCarouselFace5]= useState(`${carouselBase} carousel__face5`);

const onClick1 = () => {
  setCarousel_rotate('carousel_fixed');
  positionCarousel1();
};

const onClick2 = () => {
  setCarousel_rotate('carousel_fixed');
  positionCarousel2();
};


const onClick3 = () => {
  setCarousel_rotate('carousel_fixed');
  positionCarousel3();
};

const onClick4 = () => {
  setCarousel_rotate('carousel_fixed');
  positionCarousel4();
};


const onClick5 = () => {
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
      <div  onMouseLeave={()=>mouseLeave()} onClick={()=>onClick1()} className={carouselFace1}>
        <img className="img_carousel" alt="concert1" src={img1}/>
        <h3>Concert</h3>
      </div>
      <div  onMouseLeave={()=>mouseLeave()} onClick={()=>onClick2()} className={carouselFace2}>
        <img className="img_carousel" alt="concert2" src={img2}/>
        <h3>Concert</h3>
      </div>
      <div  onMouseLeave={()=>mouseLeave()} onClick={()=>onClick3()} className={carouselFace3}>
        <img className="img_carousel" alt="concert3" src={img3}/>
        <h3>Concert</h3>
      </div>
      <div  onMouseLeave={()=>mouseLeave()} onClick={()=>onClick4()} className={carouselFace4}>
        <img className="img_carousel" alt="concert4" src={img4}/>
        <h3>Concert</h3>
      </div>
      <div  onMouseLeave={()=>mouseLeave()} onClick={()=>onClick5()} className={carouselFace5}>
        <img className="img_carousel" alt="concert5" src={img5}/>
        <h3>Concert</h3>
      </div>
    </div>
  </div>
  )
}

export default Carousel;