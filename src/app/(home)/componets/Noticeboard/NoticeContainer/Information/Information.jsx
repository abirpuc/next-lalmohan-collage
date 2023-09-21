import Image from 'next/image'
import React from 'react'
import logoApa from '../../../../../../../public/icon/apa.png'
import logocitizen from '../../../../../../../public/icon/citizen_charter.png'
import logoNis from '../../../../../../../public/icon/nis.png'
import Link from 'next/link'

export default function Information() {
    return (
        <div className='h-full'>
            <div className='h-[33%] bg-gray-200 shadow-lg shadow-gray-400 border-b-4 border-gray-400 rounded-md'>
                <h1 className='text-md font-bold text-center mx-auto py-2'>বার্ষিক কর্মসম্পাদন চুক্তি</h1>
                <div className='flex justify-start items-center px-2 my-2'>
                    <Image
                        src={logoApa}
                        alt='logo'
                        width={100}
                        height={100}
                    />
                    <div className='flex flex-col text-blue-400 pl-4 py-4'>
                        <Link href="/">নোটিশ/অফিস আদেশ</Link>
                        <Link href="/">প্রজ্ঞাপন/নীতিমালা/পরিপত্র/কাঠামো</Link>
                        <Link href="/">School/College APA 2020-2021</Link>
                        <Link href="/">School/College APA 2021-2022</Link>
                        <Link href="/">আঞ্চলিক কার্যালয়ের চুক্তিসমূহ</Link>
                    </div>
                </div>
            </div>
            <div className='h-[33%] bg-gray-200 shadow-lg shadow-gray-400 border-b-4 border-gray-400 rounded-md my-4'>
                <h1 className='text-md font-bold text-center mx-auto py-2'>তথ্য অধিকার ও সিটিজেন চার্টার</h1>
                <div className='flex justify-start items-center px-2 my-2'>
                    <Image
                        src={logocitizen}
                        alt='logo'
                        width={100}
                        height={100}
                    />
                    <div className='flex flex-col text-blue-400 pl-4 py-4'>
                        <Link href="/">সিটিজেন চার্টার (শিক্ষা মন্ত্রণালয়)</Link>
                        <Link href="/">সিটিজেন চার্টার (মাউশি)</Link>
                        <Link href="/">আবেদন ও আপিল ফরম (মাউশি)</Link>
                    </div>
                </div>
            </div>
            <div className='h-[33%] bg-gray-200 shadow-lg shadow-gray-400 border-b-4 border-gray-400 rounded-md'>
                <h1 className='text-md font-bold text-center mx-auto py-2'>জাতীয় শুদ্ধাচার কৌশল</h1>
                <div className='flex justify-start items-center px-2 my-2'>
                    <Image
                        src={logoNis}
                        alt='logo'
                        width={100}
                        height={100}
                    />
                    <div className='flex flex-col text-blue-400 pl-4 py-4'>
                        <Link href="/">শুদ্ধাচার কৌশল কর্ম পরিকল্পনা / আদেশ / বিজ্ঞপ্তি</Link>
                        <Link href="/">শুদ্ধাচার কৌশল কর্ম পরিকল্পনার প্রতিবেদন( NIS DC 2021-22)</Link>
                        <Link href="/">NIS DC 2021-22 1st quarterly report</Link>
                        <Link href="/">শুদ্ধাচার পুরস্কার ২০১৯-২০২০</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
