import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carosel.css";
import { Autoplay, Pagination, Navigation } from "swiper";


const Carosel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='relative '>
            <img src="../../../../../../public/Images/Banner-Images/image-2.jpg" alt="" />
            <div className='absolute top-[10%] left-[3rem]'>
            <h1>Be strong, Be Fit</h1>
            <h4>Make Yourself Stronger</h4>
            <h4>Than Your Excuses</h4>
          </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../../../../public/Images/Banner-Images/image-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carosel;