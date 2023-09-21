import Image from 'next/image'
import React from 'react'
import Marquee from "react-fast-marquee";
import imageO from '../../../../../../public/gallery/1675672142.jpg'
import Link from 'next/link';

export default function ImageGallery() {
  return (
    <div className='py-4'>
      <h1 className='bg-[#19686d] text-xl font-bold text-center text-white py-2'>Image Gallery</h1>
      <div className='flex justify-center items-center gap-x-2'>
        <Marquee
          pauseOnHover
        >
          <div className='group w-[300px] h-[200px] pt-4 relative'>
            <Link href="/" className='hidden group-hover:block absolute text-center bottom-[10px] w-[80%] ml-[10%] bg-[#19686d] text-white py-2 px-4 transition-all duration-200'>See Full Gallery</Link>
            <Image
              src={imageO}
              alt="gallery image"
              width={0}
              height={0}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className='group w-[300px] h-[200px] pt-4 relative'>
            <Link href="/" className='hidden group-hover:block absolute text-center bottom-[10px] w-[80%] ml-[10%] bg-[#19686d] text-white py-2 px-4 transition-all duration-200'>See Full Gallery</Link>
            <Image
              src={imageO}
              alt="gallery image"
              width={0}
              height={0}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className='group w-[300px] h-[200px] pt-4 relative'>
            <Link href="/" className='hidden group-hover:block absolute text-center bottom-[10px] w-[80%] ml-[10%] bg-[#19686d] text-white py-2 px-4 transition-all duration-200'>See Full Gallery</Link>
            <Image
              src={imageO}
              alt="gallery image"
              width={0}
              height={0}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          
        </Marquee>
      </div>
    </div>
  )
}
