import Image from 'next/image'
import React from 'react'

export default function SingleSlider({ item }) {
    const imageName =  item.slider_img
    const setUrl = `/carousel/${imageName}`;
    console.log(setUrl)

    return (
        <div>
            <Image
                src={setUrl}
                alt='slide image'
                width={764}
                height={764}
                className='w-[100%] h-[100%]'
            />
            {/* <img src={setUrl} alt="slide image" className='w-full h-full'/> */}
        </div>
    )
}
