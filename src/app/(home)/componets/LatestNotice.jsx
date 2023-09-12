import { getData } from '@/app/api/getData';
import Link from 'next/link';
import React from 'react';
import Marquee from "react-fast-marquee";
import { FaCircleDot } from 'react-icons/fa6'
import { AiOutlineCopyright } from 'react-icons/ai'
const LatestNotice = async() => {
    const data = await getData()
    const notices = data.notices;
    return (
       <div className=' w-full flex flex-col sm:flex-row'>
        <div className='bg-[#19686d] px-4 text-center h-8 flex items-center justify-center sm:w-40 md:w-40 text-white'>
            <p>Latest Notice</p>
        </div>
        <Marquee pauseOnHover  className='h-8 bg-gray-200 flex justify-between items-center gap-x-4'>
            {
                notices.map((notice)=><Link href="/" key={notice.id} className='latest-notice text-md'><span className='text-red-700 '><AiOutlineCopyright/></span>{notice.name}</Link>)
            }
        </Marquee>
       </div>
    );
};

export default LatestNotice;