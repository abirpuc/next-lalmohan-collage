"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SingleSlider from './SingleSlider';
import { Autoplay, Navigation } from 'swiper/modules';

const slider = [
    {
        id: 1,
        img: '/vercel.svg'
    },
    {
        id: 3,
        img: '/vercel.svg'
    },
    {
        id: 4,
        img: '/vercel.svg'
    },
    {
        id: 5,
        img: '/vercel.svg'
    },
]
export default function SliderContent({ slider }) {
    return (
        <div >
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="swiper"
            >
                {
                    slider.map(item => <SwiperSlide  key={item.id}> <SingleSlider item={item} /></SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}
