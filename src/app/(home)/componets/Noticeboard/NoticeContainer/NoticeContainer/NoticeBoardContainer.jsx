import Link from 'next/link'
import React from 'react'

export default function NoticeBoardContainer() {
  return (
    // md:h-[620px]
    <div className='bg-gray-200 pt-4 px-2  rounded-md border-b-4 border-gray-400 shadow-md shadow-gray-400'>
      <h3 className='text-3xl'>Recent Notice</h3>
      {/* h-40 md:h-[600px] */}
      <div className='pt-2 mb-8 flex flex-col gap-y-4 h-40 md:h-[550px]  border bg-white border-gray-400 rounded-md overflow-hidden'>
        <marquee direction="up" scrollamount="3">
          <Link href="/" className='flex pb-2 justify-start items-center py-2 border-b border-gray-400 px-2'>
            <div className='w-[50px]  bg-gray-200/75 p-[5px] rounded-lg'>
              <p className='text-[#19686d]'>June</p>
              <p className="text-pink-500">2023</p>
            </div>
            <p className='pl-2 text-md font-bold text-blue-500 underline'>
              this is notice title
            </p>
          </Link>
          <Link href="/" className='flex pb-2 justify-start items-center py-2 border-b border-gray-400 px-2'>
            <div className='w-[50px]  bg-gray-200/75 p-[5px] rounded-lg'>
              <p className='text-[#19686d]'>June</p>
              <p className="text-pink-500">2023</p>
            </div>
            <p className='pl-2 text-md font-bold text-blue-500 underline'>
              this is notice title
            </p>
          </Link>
          <Link href="/" className='flex pb-2 justify-start items-center py-2 border-b border-gray-400 px-2'>
            <div className='w-[50px]  bg-gray-200/75 p-[5px] rounded-lg'>
              <p className='text-[#19686d]'>June</p>
              <p className="text-pink-500">2023</p>
            </div>
            <p className='pl-2 text-md font-bold text-blue-500 underline'>
              this is notice title
            </p>
          </Link>
          <Link href="/" className='flex pb-2 justify-start items-center py-2 border-b border-gray-400 px-2'>
            <div className='w-[50px]  bg-gray-200/75 p-[5px] rounded-lg'>
              <p className='text-[#19686d]'>June</p>
              <p className="text-pink-500">2023</p>
            </div>
            <p className='pl-2 text-md font-bold text-blue-500 underline'>
              this is notice title
            </p>
          </Link>
          <Link href="/" className='flex pb-2 justify-start items-center py-2 border-b border-gray-400 px-2'>
            <div className='w-[50px]  bg-gray-200/75 p-[5px] rounded-lg'>
              <p className='text-[#19686d]'>June</p>
              <p className="text-pink-500">2023</p>
            </div>
            <p className='pl-2 text-md font-bold text-blue-500 underline underline'>
              this is notice title
            </p>
          </Link>
          <Link href="/" className='flex pb-2 justify-start items-center py-2 border-b border-gray-400 px-2'>
            <div className='w-[50px]  bg-gray-200/75 p-[5px] rounded-lg'>
              <p className='text-[#19686d]'>June</p>
              <p className="text-pink-500">2023</p>
            </div>
            <p className='pl-2 text-md font-bold text-blue-500 underline'>
              this is notice title
            </p>
          </Link>
          <Link href="/" className='flex pb-2 justify-start items-center py-2 border-b border-gray-400 px-2'>
            <div className='w-[50px]  bg-gray-200/75 p-[5px] rounded-lg'>
              <p className='text-[#19686d]'>June</p>
              <p className="text-pink-500">2023</p>
            </div>
            <p className='pl-2 text-md font-bold text-blue-500 underline'>
              this is notice title
            </p>
          </Link>
          <Link href="/" className='flex pb-2 justify-start items-center py-2 border-b border-gray-400 px-2'>
            <div className='w-[50px]  bg-gray-200/75 p-[5px] rounded-lg'>
              <p className='text-[#19686d]'>June</p>
              <p className="text-pink-500">2023</p>
            </div>
            <p className='pl-2 text-md font-bold text-blue-500 underline'>
              this is notice title
            </p>
          </Link>
          <Link href="/" className='flex pb-2 justify-start items-center py-2 border-b border-gray-400 px-2'>
            <div className='w-[50px]  bg-gray-200/75 p-[5px] rounded-lg'>
              <p className='text-[#19686d]'>June</p>
              <p className="text-pink-500">2023</p>
            </div>
            <p className='pl-2 text-md font-bold text-blue-500 underline'>
              this is notice title
            </p>
          </Link>

        </marquee>


      </div>
    </div>
  )
}
