import React from 'react'
import NoticeBoardContainer from './NoticeContainer/NoticeBoardContainer'
import Information from './Information/Information'

export default function NoticeContainer() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='h-full'>
                <NoticeBoardContainer />
            </div>
            <div className='h-full'>
                <Information />
            </div>
        </div>
    )
}
