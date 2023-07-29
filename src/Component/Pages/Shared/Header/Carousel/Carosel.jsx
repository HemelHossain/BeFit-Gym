import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carosel.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { image1, image2, image3 } from '../../../../Assets/ImageJsx/Image';



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
          <div className='relative w-full text-left'>
            <img src={image1} alt="" />
            <div className='absolute text-white md:top-[23%] sm:top-[19%] left-[4rem]'>
              <h4 className='text-red-600 md:text-2xl sm:text-xl'>Be strong, Be Fit</h4>
              <h1 className='md:text-5xl sm:text-4xl mt-1'>Make Yourself Stronger</h1>
              <h4 className='md:text-5xl sm:text-4xl mt-3'>Than Your Excuses</h4>
              <button className='bg-red-700  px-5 py-2 mt-5'>Get Started</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full text-left'>
            <img src={image2} alt="" />
            <div className='absolute text-white md:top-[23%] sm:top-[19%] left-[4rem]'>
              <h4 className='text-red-600 md:text-2xl sm:text-xl'>No Pain, No Gain</h4>
              <h1 className='md:text-5xl sm:text-4xl mt-3'>Use The Pain As Fuel</h1>
              <h4 className='md:text-5xl sm:text-4xl mt-4'>And Keep Going</h4>
              <button className='bg-red-700  px-5 py-2 mt-8'>Get Started</button>


            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full text-left'>
            <img src={image3} alt="" />
            <div className='absolute text-white md:top-[23%] sm:top-[19%] left-[4rem]'>
            <h4 className='text-red-600 md:text-2xl sm:text-xl'>Be Your Own Competetion</h4>
              <h1 className='md:text-5xl sm:text-4xl mt-3'>The Pain You Feel Today</h1>
              <h4 className='md;text-5xl sm:text-4xl mt-4'>Will Be The Strength You</h4>
              <h4 className='md:text-5xl sm:text-4xl mt-4'>Feel Tomorrow</h4>
              <button className='bg-red-700  px-5 py-2 mt-8'>Get Started</button>
            </div>
          </div>

        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carosel;