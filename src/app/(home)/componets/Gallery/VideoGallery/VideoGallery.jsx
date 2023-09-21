import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoGallery() {
  return (
    <div className='py-4'>
      <h1 className='bg-[#19686d] text-xl font-bold text-center text-white py-2'>Video Gallery</h1>
      <div className='h-[200px] pt-4'>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ly36kn0ug4k?si=7FuK3GqmwwRAl_1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  )
}
