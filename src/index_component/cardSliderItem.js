import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"




// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);


export default function CardSliderItem(props) {
  
  
  
  return (
    <div className="bg-white">
    <Swiper slidesPerView={4} centeredSlides={true} spaceBetween={30} grabCursor={true} pagination={{
  "clickable": true
}} className="mySwiper">
  <SwiperSlide><span className="flex flex-col"><span><img src={props.img1} alt="" className="h-32 ml-5 mr-5"/></span><span className="mb-8cursor-pointer font-sans font-bold">₹500</span></span></SwiperSlide>
  <SwiperSlide><span className="flex flex-col"><span><img src={props.img2} alt="" className="h-32 ml-5 mr-5"/></span><span  className="mb-8 cursor-pointer font-sans font-bold">₹500</span></span></SwiperSlide>
  <SwiperSlide><span className="flex flex-col"><span><img src={props.img3} alt="" className="h-32 ml-5 mr-5"/></span><span  className="mb-8 cursor-pointer font-sans font-bold">₹500</span></span></SwiperSlide>
  <SwiperSlide><span className="flex flex-col"><span><img src={props.img4} alt="" className="h-32 ml-5 mr-5"/></span><span  className="mb-8 cursor-pointer font-sans font-bold">₹500</span></span></SwiperSlide>
  <SwiperSlide><span className="flex flex-col"><span><img src={props.img5} alt="" className="h-32 ml-5 mr-5"/></span><span  className="mb-8 cursor-pointer font-sans font-bold">₹500</span></span></SwiperSlide>
  <SwiperSlide><span className="flex flex-col"><span><img src={props.img6} alt="" className="h-32 ml-5 mr-5"/></span><span  className="mb-8 cursor-pointer font-sans font-bold">₹500</span></span></SwiperSlide>
  <SwiperSlide><span className="flex flex-col"><span><img src={props.img7} alt="" className="h-32 ml-5 mr-5"/></span><span  className="mb-8 cursor-pointer font-sans font-bold">₹500</span></span></SwiperSlide>
  <SwiperSlide><span className="flex flex-col"><span><img src={props.img8} alt="" className="h-32 ml-5 mr-5"/></span><span  className="mb-8 cursor-pointer font-sans font-bold">₹500</span></span></SwiperSlide>

  </Swiper>
    </div>
  )
}