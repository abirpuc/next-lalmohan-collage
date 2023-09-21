"use client"
import React from 'react'
import { FaBullhorn, FaLandmark } from 'react-icons/fa'
import {FaSquarePollHorizontal, FaTableCellsLarge,FaPersonChalkboard} from 'react-icons/fa6'
import { HiUserGroup } from 'react-icons/hi2'
import { BsFillPersonVcardFill } from 'react-icons/bs'
import Link from 'next/link'

export default function RouteContainer() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 sm:py-4'>
            <Link href="/" className='route-container group w-full'>
                <span className='text-2xl group-hover:scale-120'><FaBullhorn /></span>
                <p className='text-sm md:text-sm lg:text-md font-bold uppercase'>Notice</p>
            </Link>
            <Link href="/" className='route-container group w-full'>
                <span className='text-2xl group-hover:scale-120'><FaSquarePollHorizontal/></span>
                <p className='text-sm md:text-sm lg:text-md font-bold uppercase'>Results</p>
            </Link>
            <Link href="/" className='route-container group w-full'>
                <span className='text-2xl group-hover:scale-120'><FaTableCellsLarge /></span>
                <p className='text-sm md:text-sm lg:text-md font-bold uppercase'>Routine</p>
            </Link>
            <Link href="/" className='route-container group w-full'>
                <span className='text-2xl group-hover:scale-120'><FaLandmark /></span>
                <p className='text-sm md:text-sm lg:text-md font-bold uppercase'>departments</p>
            </Link>
            <Link href="/" className='route-container group w-full'>
                <span className='text-2xl group-hover:scale-120'><FaPersonChalkboard /></span>
                <p className='text-sm md:text-sm lg:text-md font-bold uppercase'>Teachers</p>
            </Link>
            <Link href="/" className='route-container group w-full'>
                <span className='text-2xl group-hover:scale-120'><HiUserGroup /></span>
                <p className='text-sm md:text-sm lg:text-md font-bold uppercase'>students</p>
            </Link>
            <Link href="/" className='route-container group w-full'>
                <span className='text-2xl group-hover:scale-120'><BsFillPersonVcardFill /></span>
                <p className='text-sm md:text-sm lg:text-md font-bold uppercase'>payment</p>
            </Link>
        </div>
    )
}
