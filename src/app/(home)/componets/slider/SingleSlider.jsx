import Image from 'next/image'
import React from 'react'

export default function SingleSlider({ slider }) {
    const imageName =  slider.slider_img
    const setUrl = `/carousel/${imageName}`;
    return (
        <div>
        <Image
          src={setUrl}
          alt=""
          objectFit='cover'
          layout='fill'
        />
      </div>
    )
}
