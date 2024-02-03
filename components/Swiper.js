import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const SwiperComponent = ({ children }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        // Swiper options here
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        
        // Add more options as needed
      });
    }
  }, []);

  return <div ref={swiperRef} className="swiper-container">{children}</div>;
};

export default SwiperComponent;
