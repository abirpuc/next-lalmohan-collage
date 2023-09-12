import { getData } from '@/app/api/getData'
import React from 'react'
import SliderContent from './SliderContent'
import './style.css'
import RouteContainer from '../Routecon/RouteContainer'


export default async function Slider() {
    const sliderData = await getData()
    const slider = sliderData.sliders;
    return (
        <div className='px-2 py-8 bg-white'>
            <div className='flex flex-col md:flex-row justify-start items-center gap-x-2'>
                <div className='w-[70%]'> <SliderContent slider={slider} /></div>
                <div>
                    <RouteContainer/>
                </div>
            </div>
        </div>
    )
}
