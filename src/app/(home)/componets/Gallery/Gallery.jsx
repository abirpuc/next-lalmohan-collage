import React from 'react'
import VideoGallery from './VideoGallery/VideoGallery'
import ImageGallery from './ImageGallery/ImageGallery'
import { RiGalleryFill } from 'react-icons/ri'

export default function Gallery() {
    return (
        <section className='bg-[#f2f9fb]' id="gallery">
            <div className='w-[80%] mx-auto py-4'>
                <div className='text-center flex justify-center items-start'>
                    <h1 className='flex justify-center items-center gap-x-2 text-4xl font-bold text-[#19686d]'><RiGalleryFill /><span>Recent Gallery</span></h1>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className='w-[100%] md:w-[30%]'>
                        <VideoGallery />
                    </div>
                    <div className='w-[100%] md:w-[70%]'>
                        <ImageGallery />
                    </div>
                </div>
            </div>
        </section>
    )
}
