import { useState } from 'react';
import './carousel.css';

const Carousel = () => {

const [carousel_rotate, setCarousel_rotate] = useState('carousel');

 return(
  <div class="container">
    <div class={carousel_rotate}>
      <div onMouseLeave={() => setCarousel_rotate('carousel')} onMouseEnter={()=> setCarousel_rotate('carousel_fixed')} class="carousel__face"><span>1111</span></div>
      <div onMouseLeave={() => setCarousel_rotate('carousel')} onMouseEnter={()=> setCarousel_rotate('carousel_fixed')} class="carousel__face"><span>2222</span></div>
      <div onMouseLeave={() => setCarousel_rotate('carousel')} onMouseEnter={()=> setCarousel_rotate('carousel_fixed')} class="carousel__face"><span>3333</span></div>
      <div onMouseLeave={() => setCarousel_rotate('carousel')} onMouseEnter={()=> setCarousel_rotate('carousel_fixed')} class="carousel__face"><span>4444</span></div>
      <div onMouseLeave={() => setCarousel_rotate('carousel')} onMouseEnter={()=> setCarousel_rotate('carousel_fixed')} class="carousel__face"><span>5555</span></div>
    </div>
  </div>
  )
}

export default Carousel;
