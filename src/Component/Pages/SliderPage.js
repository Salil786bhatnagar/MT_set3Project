import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function SlickSlider() {
    var settings = {
        // --------1-------------
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000

        // --------- 2 ----------
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        
        // --------- 3 -----------
        // dots: true,

        // infinite: true,
        // speed: 500,
        // fade: true,
        // cssEase: 'linear',
        // autoplay: true,
        // autoplaySpeed: 2000
      };

  return (
    <div>
        <Slider {...settings}>
      <div>
       <img src='./img2.jpg' alt='img9' width='150px' height='150'/>
      </div>
      <div>
      <img src='./img11.webp' alt='img2' width='150px' height='150'/>
      </div>
      <div>
      <img src='./img3.jpg' alt='img3' width='150px' height='150'/>
      </div>
      <div>
      <img src='./img11.webp' alt='img4' width='150px' height='150'/>
      </div>
      <div>
      <img src='./img5.jpg' alt='img5' width='150px' height='150'/>
      </div>
      <div>
      <img src='./img6.jpg' alt='img6' width='150px' height='150'/>
      </div>
      <div>
      <img src='./img7.jpg' alt='img7' width='150px' height='150'/>
      </div>
      <div>
      <img src='./img8.jpg' alt='img8' width='150px' height='150'/>
      </div>
      <div>
      <img src='./img9.jpg' alt='img9' width='150px' height='150'/>
      </div>
      <div>
      <img src='./img10.jpg' alt='img10' width='150px' height='150' />
      </div>
      <div>
      <img src='./img12.jpg' alt='img10' width='150px' height='150' />
      </div>
      <div>
      <img src='./img13.jpg' alt='img10' width='150px' height='150' />
      </div>
      <div>
      <img src='./img14.jpg' alt='img10' width='150px' height='150' />
      </div>
      <div>
      <img src='./img15.jpg' alt='img10' width='150px' height='150' />
      </div>
    </Slider>
    </div>
  )
}
