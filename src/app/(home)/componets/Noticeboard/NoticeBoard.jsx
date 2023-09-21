import React from 'react'
import { FaThumbtack } from 'react-icons/fa6'
import NoticeContainer from './NoticeContainer/NoticeContainer'

export default function NoticeBoard() {
    return (
        <section className=' bg-[#f2f9fb] py-4' id="noticeboard">
            <div className="container mx-auto">
                <div className='text-center flex justify-center items-start'>
                    <h1 className='flex justify-center items-center gap-x-2 text-4xl font-bold text-[#19686d]'><FaThumbtack /><span>Notice Board</span></h1>
                </div>
                <div className='py-8 w-[90%] md:w-[80%] mx-auto'>
                    <NoticeContainer/>
                </div>
            </div>
        </section>
    )
}
