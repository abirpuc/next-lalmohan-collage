"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SingleSlider from './SingleSlider';
import { Autoplay, Navigation } from 'swiper/modules';

export default function SliderContent({ slider }) {
    return (
        <div className='mt-12 w-[100%] md:w-[100%] h-[400px] relative flex justify-evenly items-center overflow-hidden'>
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation
                loop={true}
                modules={[Autoplay, Navigation]}
                className="w-full h-full mx-0"
            >
                {
                    slider.map(slider => <SwiperSlide key={slider.id}><SingleSlider slider={slider}/></SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}


// <div >
//             <Swiper
//                 centeredSlides={true}
//                 autoplay={{
//                     delay: 4000,
//                     disableOnInteraction: false,
//                 }}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 navigation={true}
//                 modules={[Autoplay, Navigation]}
//                 className="swiper"
//             >
//                 {
//                     slider.map(item => <SwiperSlide  key={item.id}> <SingleSlider item={item} /></SwiperSlide>)
//                 }
//             </Swiper>
//         </div>
